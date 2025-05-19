import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    name: string,
    ipAdd: string | null
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    // Set CORS headers for all responses
    const setCorsHeaders = (response: NextApiResponse) => {
        response.setHeader('Access-Control-Allow-Origin', '*');
        response.setHeader('Access-Control-Allow-Methods', 'GET, POST');
        response.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        response.setHeader('Access-Control-Max-Age', '86400');
    };

    // Handle preflight OPTIONS request
    if (req.method === 'OPTIONS') {
        setCorsHeaders(res);
        res.status(200).end();
        return;
    }

    setCorsHeaders(res);
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Vary', 'Origin');

    try {
        // Try to get the IP address
        const forwarded = req.headers["x-forwarded-for"];
        let ipAdd: string | null = null;

        if (typeof forwarded === 'string' && forwarded) {
            ipAdd = forwarded.split(/, /)[0];
        } else if (Array.isArray(forwarded) && forwarded.length > 0) {
            ipAdd = forwarded[0];
        } else if (req.socket && req.socket.remoteAddress) {
            ipAdd = req.socket.remoteAddress;
        }

        if (!ipAdd) {
            console.warn('No IP address found in request, using fallback');
            const ips = [
                "170.171.1.8", // ny
                "23.79.30.88", // ga
                "35.155.173.7", // or
                "17.103.166.82", // tx
            ];
            ipAdd = ips[Math.floor(Math.random() * ips.length)];
        }

        console.info(`Using IP address: ${ipAdd}`);
        res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate');
        return res.status(200).json({ name: 'John Doe', ipAdd });

    } catch (error) {
        console.error('Unexpected error:', error);
        return res.status(500).json({
            name: 'Error',
            ipAdd: null
        });
    }
}