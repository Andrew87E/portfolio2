// pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

interface FormData {
    name: string;
    email: string;
    message: string;
    honeypot?: string;
    timestamp: string;
    token: string;
}

const createEmailTemplate = (formData: {
    name: string;
    email: string;
    message: string;
    timestamp: string;
}) => `
New Contact Form Submission

Time: ${new Date(formData.timestamp).toLocaleString()}
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
`;

const validateRequest = (body: any): { isValid: boolean; error?: string } => {
    // Check if body exists and has required fields
    if (!body) {
        return { isValid: false, error: 'No request body provided' };
    }

    const { name, email, message, timestamp, token } = body as FormData;

    // // Log the received data for debugging
    // console.log('Received form data:', {
    //     name: name ? 'present' : 'missing',
    //     email: email ? 'present' : 'missing',
    //     message: message ? 'present' : 'missing',
    //     timestamp: timestamp ? 'present' : 'missing',
    //     token: token ? 'present' : 'missing'
    // });

    if (!name || !email || !message || !timestamp || !token) {
        const missingFields = [];
        if (!name) missingFields.push('name');
        if (!email) missingFields.push('email');
        if (!message) missingFields.push('message');
        if (!timestamp) missingFields.push('timestamp');
        if (!token) missingFields.push('token');
        return { isValid: false, error: `Missing required fields: ${missingFields.join(', ')}` };
    }

    return { isValid: true };
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    // console.log('Request method:', req.method);

    // Method check
    if (req.method !== 'POST') {
        return res.status(405).json({
            message: 'Method not allowed',
            detail: `Expected POST, got ${req.method}`
        });
    }

    try {
        // Log headers for debugging CSRF issues
        // console.log('Request headers:', {
        //     'content-type': req.headers['content-type'],
        //     'x-csrf-token': req.headers['x-csrf-token'] ? 'present' : 'missing'
        // });

        // Validate request body
        const validation = validateRequest(req.body);
        if (!validation.isValid) {
            return res.status(400).json({
                message: 'Validation failed',
                detail: validation.error
            });
        }

        const { name, email, message, honeypot, timestamp, token } = req.body as FormData;

        // Security checks
        if (honeypot) {
            // console.log('Honeypot triggered');
            return res.status(400).json({ message: 'Invalid submission' });
        }

        // Verify CSRF token
        const storedToken = req.headers['x-csrf-token'];
        if (!token || token !== storedToken) {
            // console.log('CSRF token mismatch:', {
            //     providedToken: token ? 'present' : 'missing',
            //     storedToken: storedToken ? 'present' : 'missing'
            // });
            return res.status(403).json({
                message: 'Invalid token',
                detail: 'CSRF token validation failed'
            });
        }

        // Length validation
        if (name.length > 100 || email.length > 100 || message.length > 1000) {
            const lengthErrors = [];
            if (name.length > 100) lengthErrors.push('name too long');
            if (email.length > 100) lengthErrors.push('email too long');
            if (message.length > 1000) lengthErrors.push('message too long');
            return res.status(400).json({
                message: 'Input length exceeds maximum allowed',
                detail: lengthErrors.join(', ')
            });
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                message: 'Invalid email format',
                detail: 'Email address does not match required format'
            });
        }

        // Spam detection with more reasonable timing
        const submissionTime = new Date(timestamp);
        const timeDiff = Math.abs(Date.now() - submissionTime.getTime());
        // Allow submissions within a 30-second window to account for network delay and client-server time differences
        if (timeDiff > 30000) {
            console.error('Spam detection triggered: suspicious timestamp', { timeDiff, submissionTime });
            return res.status(400).json({ message: 'Invalid submission: timestamp out of acceptable range' });
        }

        // Rate limiting check
        const lastSubmission = req.cookies['last_submission'];
        if (lastSubmission) {
            const timeSinceLastSubmission = Date.now() - parseInt(lastSubmission);
            if (timeSinceLastSubmission < 60000) {
                return res.status(429).json({
                    message: 'Please wait before submitting again',
                    detail: 'Rate limit exceeded'
                });
            }
        }

        // Verify environment variables
        if (!process.env.NOTIFICATION_EMAIL) {
            console.error('Missing NOTIFICATION_EMAIL environment variable');
            return res.status(500).json({
                message: 'Server configuration error',
                detail: 'Missing email configuration'
            });
        }

        // Send email using Resend
        const emailResult = await resend.emails.send({
            from: 'Contact Form <andrew87e@edwards.codes>',
            to: process.env.NOTIFICATION_EMAIL,
            subject: `New Contact Form Submission from ${name}`,
            text: createEmailTemplate({ name, email, message, timestamp }),
            replyTo: email
        });

        // Log email sending result
        // console.log('Email sending result:', emailResult);

        // Set cookie for rate limiting
        res.setHeader('Set-Cookie', `last_submission=${Date.now()}; Path=/; HttpOnly`);

        return res.status(200).json({
            message: 'Message sent successfully',
            id: emailResult.data?.id
        });
    } catch (error) {
        console.error('Error in contact form handler:', error);
        // Check if it's a Resend API error
        if (error instanceof Error) {
            return res.status(500).json({
                message: 'Failed to send message',
                detail: error.message
            });
        }
        // Generic error
        return res.status(500).json({
            message: 'An unexpected error occurred',
            detail: 'Internal server error'
        });
    }
}