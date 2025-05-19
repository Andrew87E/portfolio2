import type { NextApiRequest } from 'next';

/**
 * Gets the client IP address from various headers and with fallbacks
 */
export function getClientIp(req: NextApiRequest): string {
    try {
        // Try x-forwarded-for header (most common for proxied requests)
        const forwarded = req.headers['x-forwarded-for'];
        if (typeof forwarded === 'string' && forwarded) {
            const ips = forwarded.split(/, /);
            if (ips.length && ips[0]) {
                return ips[0];
            }
        } else if (Array.isArray(forwarded) && forwarded.length > 0) {
            return forwarded[0];
        }

        // Try true-client-ip header (Cloudflare and some CDNs)
        const trueClientIp = req.headers['true-client-ip'];
        if (typeof trueClientIp === 'string' && trueClientIp) {
            return trueClientIp;
        }

        // Try cf-connecting-ip header (Cloudflare)
        const cfIp = req.headers['cf-connecting-ip'];
        if (typeof cfIp === 'string' && cfIp) {
            return cfIp;
        }

        // Try x-real-ip header (Nginx)
        const realIp = req.headers['x-real-ip'];
        if (typeof realIp === 'string' && realIp) {
            return realIp;
        }

        // Fall back to socket
        if (req.socket && req.socket.remoteAddress) {
            return req.socket.remoteAddress;
        }

        // If all else fails, use a fallback
        console.warn('No IP address found in request, using fallback');
        const fallbackIps = [
            "170.171.1.8",  // ny
            "23.79.30.88",  // ga
            "35.155.173.7", // or
            "17.103.166.82" // tx
        ];
        return fallbackIps[Math.floor(Math.random() * fallbackIps.length)];
    } catch (error) {
        console.error('Error extracting client IP:', error);
        // Return a fallback in case of any error
        return "0.0.0.0";
    }
}

/**
 * Validates IP address format
 */
export function isValidIpAddress(ip: string): boolean {
    // Simple IPv4 validation
    const ipv4Regex = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;
    if (!ipv4Regex.test(ip)) return false;

    // Check valid ranges
    const octets = ip.split('.').map(Number);
    return octets.every(octet => octet >= 0 && octet <= 255);
}