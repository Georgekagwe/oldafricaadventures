/**
 * Very small in-memory rate limiter: max N requests/minute/IP.
 * On Vercel serverless this is best-effort only (each cold-started function
 * instance starts with an empty map) — good enough to blunt casual abuse,
 * not a substitute for a real rate-limiting service.
 */

const hits = new Map();
const WINDOW_MS = 60_000;
const MAX_REQUESTS = 10;

function isRateLimited(ip) {
  const now = Date.now();
  const record = hits.get(ip) || { count: 0, start: now };
  if (now - record.start > WINDOW_MS) {
    record.count = 0;
    record.start = now;
  }
  record.count += 1;
  hits.set(ip, record);
  return record.count > MAX_REQUESTS;
}

module.exports = { isRateLimited };
