import type { NextApiRequest, NextApiResponse } from 'next'

type Data = any;

export default async function handler(
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
        // Get and validate IP
        const ip = req.query.ip as string;
        if (!ip) {
            return res.status(400).json({ error: 'IP address is required' });
        }

        // Validate IP format (simple regex for IPv4)
        const ipv4Regex = /^(\d{1,3}\.){3}\d{1,3}$/;
        if (!ipv4Regex.test(ip)) {
            return res.status(400).json({ error: 'Invalid IP format' });
        }

        // Check if API key is configured
        if (!process.env.FINDIP_API_KEY) {
            console.error('FINDIP_API_KEY is not configured');
            return res.status(500).json({ error: 'Server configuration error' });
        }

        const url = `https://api.findip.net/${ip}/?token=${process.env.FINDIP_API_KEY}`;

        try {
            const fetchRes = await fetch(url);
            const contentType = fetchRes.headers.get('content-type');

            // Ensure we're getting JSON back
            if (!contentType || !contentType.includes('application/json')) {
                console.error('API returned non-JSON response:', contentType);
                return res.status(500).json({
                    error: 'External API error',
                    details: 'Received non-JSON response'
                });
            }

            const data = await fetchRes.json();

            if (!fetchRes.ok) {
                console.error('External API error:', data);
                return res.status(fetchRes.status).json({
                    error: 'External API error',
                    statusCode: fetchRes.status,
                    message: data.message || 'Unknown error'
                });
            }

            console.log('Data fetched successfully');
            res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate');
            return res.status(200).json(data);

        } catch (fetchError) {
            console.error('Fetch error:', fetchError);
            return res.status(500).json({
                error: 'Error communicating with external API',
                message: fetchError instanceof Error ? fetchError.message : 'Unknown error'
            });
        }
    } catch (error) {
        console.error('Unexpected error:', error);
        return res.status(500).json({
            error: 'Server error',
            message: error instanceof Error ? error.message : 'Unknown error'
        });
    }
}