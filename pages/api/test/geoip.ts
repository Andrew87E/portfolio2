import type { NextApiRequest, NextApiResponse } from 'next';
import { corsMiddleware } from './middleware/cors';
import { getClientIp, isValidIpAddress } from './utils/ip';
import { isRateLimited } from './utils/ratelimit';
import { getFromCache, addToCache } from './utils/cache';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    // Apply CORS middleware
    await corsMiddleware(req, res);
    if (req.method === 'OPTIONS') return;

    // Set common headers
    res.setHeader('Content-Type', 'application/json');

    try {
        // Get and validate IP parameter
        const ip = req.query.ip as string;
        if (!ip) {
            return res.status(400).json({
                error: 'Bad Request',
                message: 'IP address parameter is required'
            });
        }

        // Validate IP format
        if (!isValidIpAddress(ip)) {
            return res.status(400).json({
                error: 'Bad Request',
                message: 'Invalid IP address format'
            });
        }

        // Check API key
        if (!process.env.FINDIP_API_KEY) {
            console.error('FINDIP_API_KEY environment variable is not configured');
            return res.status(500).json({
                error: 'Server Configuration Error',
                message: 'API key not configured'
            });
        }

        // Apply rate limiting
        const clientIp = getClientIp(req);
        if (isRateLimited(clientIp)) {
            console.warn(`Rate limit exceeded for IP: ${clientIp}`);
            res.setHeader('Retry-After', '60');
            return res.status(429).json({
                error: 'Too Many Requests',
                message: 'Rate limit exceeded. Please try again later.'
            });
        }

        // Check cache first
        const cacheKey = `ip_info_${ip}`;
        const cachedData = getFromCache(cacheKey);
        if (cachedData) {
            console.log(`Cache hit for IP: ${ip}`);
            return res.status(200).json(cachedData);
        }

        // Make external API request
        console.log(`Fetching data for IP: ${ip}`);
        const data = await fetchIpInfo(ip);

        // Cache the successful response
        addToCache(cacheKey, data);

        // Return the data
        res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');
        return res.status(200).json(data);

    } catch (error: any) {
        // Log the error with context
        console.error('Error in IP info handler:', {
            error: error.message || 'Unknown error',
            status: error.status,
            path: req.url,
            query: req.query,
            method: req.method,
        });

        // Return a consistent error response
        return res.status(error.status || 500).json({
            error: error.name || 'Server Error',
            message: error.message || 'An unexpected error occurred'
        });
    }
}

/**
 * Fetches IP information from external API
 */
async function fetchIpInfo(ip: string): Promise<any> {
    const url = `https://api.findip.net/${ip}/?token=${process.env.FINDIP_API_KEY}`;

    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout

        const response = await fetch(url, {
            headers: {
                'Accept': 'application/json',
                'User-Agent': 'IP Info Service/1.0'
            },
            signal: controller.signal
        });

        clearTimeout(timeoutId);

        // Check for non-JSON responses
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
            const text = await response.text();
            const error: any = new Error('External API returned non-JSON response');
            error.status = 502;
            error.name = 'Bad Gateway';
            error.details = text.substring(0, 100); // First 100 chars for debugging
            throw error;
        }

        const data = await response.json();

        // Handle API error responses
        if (!response.ok) {
            const error: any = new Error(data.message || 'External API error');
            error.status = response.status;
            error.name = 'External API Error';
            error.details = data;
            throw error;
        }

        return data;

    } catch (error) {
        // Handle timeout errors
        if (error instanceof Error && error.name === 'AbortError') {
            const timeoutError: any = new Error('External API request timed out');
            timeoutError.status = 504;
            timeoutError.name = 'Gateway Timeout';
            throw timeoutError;
        }

        // Rethrow as a structured error
        if (error instanceof Error) {
            const enhancedError: any = error;
            enhancedError.status = enhancedError.status || 502;
            enhancedError.name = enhancedError.name || 'External API Error';
            throw enhancedError;
        }

        // Generic error
        const genericError: any = new Error('Failed to fetch IP information');
        genericError.status = 502;
        genericError.name = 'External API Error';
        throw genericError;
    }
}