import { NextRequest, NextResponse } from "next/server";
import { existsSync, mkdirSync, writeFileSync } from "fs";
import path from "path";
import { verifySession } from "@/lib/auth";
import { commitFile, hasGitHubToken, isRunningOnVercel } from "@/lib/github-cms";

const ALLOWED = new Set(["image/jpeg", "image/png", "image/webp", "image/gif"]);
const MAX_BYTES = 10 * 1024 * 1024; // 10 MB

function slugify(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9._-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export async function POST(req: NextRequest) {
  const authed = await verifySession();
  if (!authed) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const formData = await req.formData();
  const dir = (formData.get("dir") as string) || "gallery";
  const files = Array.from(formData.entries())
    .map(([, v]) => v)
    .filter((v): v is File => v instanceof File);

  if (files.length === 0) {
    return NextResponse.json({ error: "No files provided" }, { status: 400 });
  }

  const saved: string[] = [];
  const now = Date.now();

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    if (!ALLOWED.has(file.type)) continue;
    if (file.size > MAX_BYTES) continue;

    const ext = file.name.split(".").pop() || "jpg";
    const fileName = `${slugify(file.name.replace(/\.[^/.]+$/, ""))}-${now}-${i}.${ext}`;
    const repoPath = `public/images/${dir}/${fileName}`;
    const publicPath = `/images/${dir}/${fileName}`;

    const buf = Buffer.from(await file.arrayBuffer());
    const b64 = buf.toString("base64");

    try {
      if (isRunningOnVercel()) {
        if (!hasGitHubToken()) {
          return NextResponse.json(
            { error: "GITHUB_TOKEN not configured — image upload unavailable in production." },
            { status: 500 },
          );
        }
        await commitFile(repoPath, b64, `cms: upload ${dir} image ${fileName}`, true);
      } else {
        const absDir = path.join(process.cwd(), "public", "images", dir);
        if (!existsSync(absDir)) mkdirSync(absDir, { recursive: true });
        writeFileSync(path.join(absDir, fileName), buf);
      }
      saved.push(publicPath);
    } catch (err) {
      return NextResponse.json(
        { error: err instanceof Error ? err.message : "Upload failed" },
        { status: 500 },
      );
    }
  }

  return NextResponse.json({ ok: true, urls: saved });
}