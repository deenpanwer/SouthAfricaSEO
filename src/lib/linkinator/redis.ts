// src/lib/linkinator/redis.ts
import { Redis } from "@upstash/redis";

export const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

// Function for rate limiting
export async function checkRateLimit(ip: string, limit: number, window: number) {
  const key = `rate_limit:${ip}`;
  const requests = await redis.incr(key);
  if (requests === 1) {
    await redis.expire(key, window); // Set expiry for the window
  }
  return requests <= limit;
}
