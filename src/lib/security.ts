/**
 * Security utilities for StudyBust 12.
 *
 * Provides password hashing, session token management, input sanitization,
 * rate limiting, and encoded localStorage to harden the client-side app.
 *
 * NOTE: True security requires server-side auth (Firebase Auth / Supabase).
 * These utilities raise the bar significantly above "open DevTools and type
 * localStorage.setItem('key', 'true')".
 */

/* ────────────────── Password Hashing (SHA-256) ────────────────── */

const SALT = "sb12_v1_salt_";

/**
 * Hash a password string with SHA-256 + salt.
 * Returns a hex-encoded hash string.
 */
export async function hashPassword(password: string): Promise<string> {
  const data = new TextEncoder().encode(SALT + password);
  const buf = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

/**
 * Pre-computed SHA-256 hash of the admin password.
 * Generated from: hashPassword("admin@123")
 * This replaces storing the plaintext password in the bundle.
 */
export const ADMIN_PASSWORD_HASH =
  "5f95911f50703f5cce4d607cd4d06fecd166a814a1dc2fb97bba60416772816c";

/** Valid admin emails (normalized to lowercase). */
export const ADMIN_EMAILS = ["admin@studybust.in", "admin@gmail.com"];

/* ────────────────── Session Tokens (signed + expiring) ────────────────── */

const SESSION_SECRET = "sb12_sess_";
const SESSION_DURATION_MS = 2 * 60 * 60 * 1000; // 2 hours

interface SessionPayload {
  /** Timestamp when the session was created. */
  ts: number;
  /** Hash signature to prevent forgery. */
  sig: string;
}

/**
 * Create a signed session token with a timestamp.
 * Cannot be forged by setting localStorage to "true".
 */
export async function createSessionToken(): Promise<string> {
  const ts = Date.now();
  const sig = await hashPassword(SESSION_SECRET + ts);
  const payload: SessionPayload = { ts, sig };
  return btoa(JSON.stringify(payload));
}

/**
 * Validate a session token — checks signature + expiration.
 */
export async function validateSessionToken(token: string): Promise<boolean> {
  try {
    if (!token || token === "true" || token === "false") return false;
    const payload: SessionPayload = JSON.parse(atob(token));
    if (!payload.ts || !payload.sig) return false;

    // Check expiration
    if (Date.now() - payload.ts > SESSION_DURATION_MS) return false;

    // Verify signature
    const expectedSig = await hashPassword(SESSION_SECRET + payload.ts);
    return payload.sig === expectedSig;
  } catch {
    return false;
  }
}

/* ────────────────── Input Sanitization ────────────────── */

/**
 * Sanitize a user-provided text input by stripping dangerous patterns.
 * React's JSX auto-escapes, but this adds defense-in-depth for strings
 * that end up in URLs, attributes, or localStorage.
 */
export function sanitizeText(input: string): string {
  return input
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
    .replace(/<\/?[a-z][^>]*>/gi, "")     // Strip HTML tags
    .replace(/javascript\s*:/gi, "")       // Strip javascript: protocol
    .replace(/on\w+\s*=/gi, "")            // Strip inline event handlers
    .replace(/data\s*:/gi, "")             // Strip data: URIs
    .trim();
}

/**
 * Validate that a URL is safe (http/https only, no javascript: or data:).
 */
export function isSafeUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
}

/* ────────────────── Rate Limiter ────────────────── */

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

/**
 * Client-side rate limiter. Returns true if the action is allowed,
 * false if rate-limited. Resets after `windowMs`.
 */
export function rateLimit(
  action: string,
  maxPerWindow: number = 10,
  windowMs: number = 60_000,
): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(action);

  if (!entry || now >= entry.resetAt) {
    rateLimitMap.set(action, { count: 1, resetAt: now + windowMs });
    return true;
  }

  if (entry.count >= maxPerWindow) return false;

  entry.count++;
  return true;
}

/* ────────────────── Encoded localStorage ────────────────── */

const ENCODE_KEY = 0x5b; // Simple XOR key for obfuscation

/**
 * Encode a string for localStorage storage.
 * This is NOT encryption — it's obfuscation to prevent casual inspection.
 * True encryption requires server-side key management.
 */
export function encodeForStorage(data: string): string {
  const encoded = Array.from(data)
    .map((ch) => String.fromCharCode(ch.charCodeAt(0) ^ ENCODE_KEY))
    .join("");
  return btoa(encoded);
}

/**
 * Decode a string from localStorage.
 */
export function decodeFromStorage(encoded: string): string {
  try {
    const decoded = atob(encoded);
    return Array.from(decoded)
      .map((ch) => String.fromCharCode(ch.charCodeAt(0) ^ ENCODE_KEY))
      .join("");
  } catch {
    return "";
  }
}

/* ────────────────── Schema Validation ────────────────── */

/**
 * Validates that a value is a non-null object (not an array).
 */
export function isPlainObject(val: unknown): val is Record<string, unknown> {
  return typeof val === "object" && val !== null && !Array.isArray(val);
}

/**
 * Validate a Resource-shaped object has the minimum required fields.
 */
export function isValidResource(r: unknown): boolean {
  if (!isPlainObject(r)) return false;
  return (
    typeof r.id === "string" &&
    typeof r.title === "string" &&
    typeof r.subjectId === "string" &&
    typeof r.type === "string" &&
    typeof r.source === "string" &&
    typeof r.url === "string"
  );
}

/**
 * Validate a PlannerTask-shaped object.
 */
export function isValidTask(t: unknown): boolean {
  if (!isPlainObject(t)) return false;
  return (
    typeof t.id === "string" &&
    typeof t.title === "string" &&
    typeof t.date === "string" &&
    typeof t.done === "boolean"
  );
}

/**
 * Validate a BrokenReport-shaped object.
 */
export function isValidReport(r: unknown): boolean {
  if (!isPlainObject(r)) return false;
  return (
    typeof r.id === "string" &&
    typeof r.resourceId === "string" &&
    typeof r.reason === "string" &&
    typeof r.resolved === "boolean"
  );
}

/* ────────────────── Email Obfuscation ────────────────── */

/**
 * Reconstruct an email from char-code parts at runtime.
 * Prevents static string scrapers from harvesting the address
 * out of the built JS bundle.
 */
export function getMentorEmail(): string {
  // c v a m m 6 9 @ g m a i l . c o m
  const codes = [99,118,97,109,109,54,57,64,103,109,97,105,108,46,99,111,109];
  return String.fromCharCode(...codes);
}
