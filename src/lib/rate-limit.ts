import "server-only";

/**
 * Rate limiting en memoria (best-effort, por instancia). Suficiente como
 * primera barrera anti-spam. Para producción con múltiples instancias,
 * migrar a un store compartido (Upstash/Redis).
 */
const hits = new Map<string, { count: number; resetAt: number }>();
const WINDOW_MS = 60_000;
const MAX_HITS = 5;

export function checkRateLimit(key: string): boolean {
  const now = Date.now();
  const entry = hits.get(key);
  if (!entry || entry.resetAt < now) {
    hits.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }
  if (entry.count >= MAX_HITS) return false;
  entry.count += 1;
  return true;
}
