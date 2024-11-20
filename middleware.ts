import type { NextApiRequest, NextApiResponse } from 'next'

export default function rateLimitMiddleware(handler: (req: NextApiRequest, res: NextApiResponse) => void) {
    interface RateLimitData {
        count: number;
        lastReset: number;
    }

    interface RateLimitMap {
        [key: string]: RateLimitData;
    }

    const rateLimitMap: RateLimitMap = {};

    return (req: NextApiRequest, res: NextApiResponse) => {
        const ip = req.headers["x-forwarded-for"] as string || req.connection.remoteAddress as string;
        const limit = 5; // Limiting requests to 5 per minute per IP
        const windowMs = 60 * 1000; // 1 minute

        if (!rateLimitMap[ip]) {
            rateLimitMap[ip] = {
                count: 0,
                lastReset: Date.now(),
            };
        }

        const ipData = rateLimitMap[ip];

        if (Date.now() - ipData.lastReset > windowMs) {
            ipData.count = 0;
            ipData.lastReset = Date.now();
        }

        if (ipData.count >= limit) {
            return res.status(429).send("Too Many Requests");
        }

        ipData.count += 1;

        return handler(req, res);
    };
}
