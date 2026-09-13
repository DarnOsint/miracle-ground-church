import { cookies } from "next/headers";
import { createHmac } from "crypto";

const COOKIE_NAME = "mg_admin_session";
const SESSION_MS = 30 * 24 * 60 * 60 * 1000; // 30 days
const DEFAULT_PASSWORD = "ChangeMe-Admin-2026";

function secret() {
  return process.env.ADMIN_PASSWORD || DEFAULT_PASSWORD;
}

export function expectedPassword() {
  return process.env.ADMIN_PASSWORD || DEFAULT_PASSWORD;
}

function sign(payload: string) {
  return createHmac("sha256", secret()).update(payload).digest("base64url");
}

export async function createSession() {
  const exp = Date.now() + SESSION_MS;
  const payload = Buffer.from(JSON.stringify({ exp })).toString("base64url");
  const token = `${payload}.${sign(payload)}`;
  const store = await cookies();
  store.set(COOKIE_NAME, token, {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: SESSION_MS / 1000,
  });
}

export async function verifySession() {
  const store = await cookies();
  const token = store.get(COOKIE_NAME)?.value;
  if (!token) return false;
  const [payload, sig] = token.split(".");
  if (!payload || !sig) return false;
  const expected = sign(payload);
  if (sig !== expected) return false;
  try {
    const { exp } = JSON.parse(Buffer.from(payload, "base64url").toString("utf8"));
    return Date.now() < exp;
  } catch {
    return false;
  }
}

export async function clearSession() {
  const store = await cookies();
  store.delete(COOKIE_NAME);
}