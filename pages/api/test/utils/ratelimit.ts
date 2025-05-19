// Rate limiting configuration
type RateLimitInfo = {
    count: number;
    resetTime: number;
};

const rateLimits = new Map<string, RateLimitInfo>();
const MAX_REQUESTS = 30; // Max requests per window
const RATE_LIMIT_WINDOW = 60000; // 1 minute in milliseconds

/**
 * Checks if a client is rate limited
 */
export function isRateLimited(clientIp: string): boolean {
    const now = Date.now();
    const rateInfo = rateLimits.get(clientIp);

    if (!rateInfo) {
        // First request, initialize counter
        rateLimits.set(clientIp, {
            count: 1,
            resetTime: now + RATE_LIMIT_WINDOW
        });
        return false;
    }

    if (now > rateInfo.resetTime) {
        // Window expired, reset counter
        rateLimits.set(clientIp, {
            count: 1,
            resetTime: now + RATE_LIMIT_WINDOW
        });
        return false;
    }

    if (rateInfo.count >= MAX_REQUESTS) {
        // Rate limit exceeded
        return true;
    }

    // Increment counter
    rateInfo.count += 1;
    rateLimits.set(clientIp, rateInfo);
    return false;
}