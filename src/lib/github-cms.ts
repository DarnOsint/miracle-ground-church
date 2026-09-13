export const GITHUB_REPO = process.env.GITHUB_REPO || "DarnOsint/miracle-ground-church";

export function isRunningOnVercel() {
  return process.env.VERCEL === "1";
}

export function hasGitHubToken() {
  return Boolean(process.env.GITHUB_TOKEN);
}

type GithubFile = {
  sha?: string;
  content?: string;
  encoding?: string;
};

export async function commitFile(
  repoPath: string,
  content: string,
  message: string,
  isBase64 = false,
) {
  const token = process.env.GITHUB_TOKEN;
  if (!token) throw new Error("GITHUB_TOKEN is not configured");

  const api = `https://api.github.com/repos/${GITHUB_REPO}/contents/${repoPath}`;
  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    "User-Agent": "miracle-ground-church",
  };

  let sha: string | undefined;
  try {
    const res = await fetch(api, { headers });
    if (res.ok) {
      const file = (await res.json()) as GithubFile;
      sha = file.sha;
    }
  } catch {
    // File may not exist yet — that's fine.
  }

  const body = {
    message,
    content: isBase64 ? content : Buffer.from(content, "utf8").toString("base64"),
    ...(sha ? { sha } : {}),
  };

  const res = await fetch(api, {
    method: "PUT",
    headers,
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const detail = await res.text();
    throw new Error(`GitHub commit failed (${res.status}): ${detail}`);
  }

  return res.json();
}