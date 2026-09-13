import { NextRequest, NextResponse } from "next/server";
import { writeFileSync } from "fs";
import path from "path";
import { verifySession } from "@/lib/auth";
import { commitFile, hasGitHubToken, isRunningOnVercel } from "@/lib/github-cms";

export async function POST(req: NextRequest) {
  const authed = await verifySession();
  if (!authed) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = (await req.json()) as { content?: string };
  if (!body.content) {
    return NextResponse.json({ error: "Missing content" }, { status: 400 });
  }

  try {
    JSON.parse(body.content); // validate before saving
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const message = "cms: update site content";

  try {
    if (isRunningOnVercel()) {
      if (!hasGitHubToken()) {
        return NextResponse.json(
          { error: "GITHUB_TOKEN is not set. Add it in Vercel project env vars to save from the live site." },
          { status: 500 },
        );
      }
      await commitFile("src/data/site-content.json", body.content, message);
    } else {
      const filePath = path.join(
        process.cwd(),
        "src",
        "data",
        "site-content.json",
      );
      writeFileSync(filePath, body.content, "utf8");
    }
    return NextResponse.json({ ok: true, message });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Save failed" },
      { status: 500 },
    );
  }
}