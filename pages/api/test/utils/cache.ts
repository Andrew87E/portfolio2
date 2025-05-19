// Simple cache implementation
export type CacheEntry = {
    data: any;
    timestamp: number;
};

// Create cache instance
const cache = new Map<string, CacheEntry>();
const CACHE_TTL = 3600000; // 1 hour in milliseconds

/**
 * Gets data from cache
 */
export function getFromCache(key: string): any {
    const now = Date.now();
    const cached = cache.get(key);

    if (!cached) return null;

    if (now - cached.timestamp > CACHE_TTL) {
        // Cache expired
        cache.delete(key);
        return null;
    }

    return cached.data;
}

/**
 * Adds data to cache
 */
export function addToCache(key: string, data: any): void {
    cache.set(key, {
        data,
        timestamp: Date.now()
    });

    // Clean up old cache entries periodically
    if (Math.random() < 0.01) {
        cleanupCache();
    }
}

/**
 * Cleans up expired cache entries
 */
function cleanupCache(): void {
    const now = Date.now();
    cache.forEach((value, key) => {
        if (now - value.timestamp > CACHE_TTL) {
            cache.delete(key);
        }
    });
}