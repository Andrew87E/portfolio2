import type { NextApiRequest, NextApiResponse } from 'next';
import { corsMiddleware } from './middleware/cors';
import { getClientIp } from './utils/ip';

type IpResponse = {
    name: string;
    ipAdd: string | null;
    error?: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<IpResponse>
) {
    // Apply CORS middleware
    await corsMiddleware(req, res);
    if (req.method === 'OPTIONS') return;

    try {
        // Get client IP address with fallback strategy
        const ipAdd = getClientIp(req);

        // Set standard headers
        res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate');
        res.setHeader('Content-Type', 'application/json');

        // Return the IP address
        return res.status(200).json({
            name: 'John Doe',
            ipAdd
        });
    } catch (error) {
        // Log the error with context
        console.error('Error in IP handler:', {
            error: error instanceof Error ? error.message : 'Unknown error',
            path: req.url,
            method: req.method,
            headers: req.headers,
        });

        // Return a consistent error response
        return res.status(500).json({
            name: 'Error',
            ipAdd: null,
            error: 'Failed to process IP address'
        });
    }
}