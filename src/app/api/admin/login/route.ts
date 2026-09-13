import { NextRequest, NextResponse } from "next/server";
import { createSession, expectedPassword } from "@/lib/auth";

export async function POST(req: NextRequest) {
  const { password } = (await req.json()) as { password?: string };
  if (!password) {
    return NextResponse.json({ error: "Password required" }, { status: 400 });
  }
  if (password !== expectedPassword()) {
    return NextResponse.json({ error: "Incorrect password" }, { status: 401 });
  }
  await createSession();
  return NextResponse.json({ ok: true });
}