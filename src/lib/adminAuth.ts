import { createHmac, timingSafeEqual } from "node:crypto";

/**
 * Admin session strategy:
 *   cookie value = HMAC-SHA256(ADMIN_SESSION_PAYLOAD, ADMIN_PASSWORD)
 *
 * To revoke all sessions, rotate ADMIN_PASSWORD.
 */
export const ADMIN_COOKIE_NAME = "kaosmt_admin_session";
const ADMIN_SESSION_PAYLOAD = "kaosmt-admin-authenticated";

/** 7 days in seconds — matches cookie Max-Age. */
export const ADMIN_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;

/**
 * Compute the HMAC-SHA256 session token for the current ADMIN_PASSWORD.
 * Throws if ADMIN_PASSWORD is not configured so we fail fast rather than
 * silently signing with an empty key.
 */
export function signAdminSession(): string {
  const password = process.env.ADMIN_PASSWORD;
  if (!password) {
    throw new Error("ADMIN_PASSWORD is not set");
  }
  return createHmac("sha256", password).update(ADMIN_SESSION_PAYLOAD).digest("hex");
}

/**
 * Constant-time comparison of a candidate cookie value against the expected
 * HMAC for the current ADMIN_PASSWORD. Returns false for any malformed,
 * wrong-length, or mismatched input.
 */
export function verifyAdminSession(candidate: string | undefined): boolean {
  if (!candidate) return false;
  if (!process.env.ADMIN_PASSWORD) return false;

  let expected: string;
  try {
    expected = signAdminSession();
  } catch {
    return false;
  }

  if (candidate.length !== expected.length) return false;

  try {
    return timingSafeEqual(Buffer.from(candidate, "hex"), Buffer.from(expected, "hex"));
  } catch {
    return false;
  }
}

/**
 * Constant-time comparison of a submitted password against ADMIN_PASSWORD.
 * Used by the login route.
 */
export function verifyAdminPassword(submitted: string | undefined): boolean {
  const expected = process.env.ADMIN_PASSWORD;
  if (!submitted || !expected) return false;

  const a = Buffer.from(submitted, "utf8");
  const b = Buffer.from(expected, "utf8");
  if (a.length !== b.length) return false;

  try {
    return timingSafeEqual(a, b);
  } catch {
    return false;
  }
}
