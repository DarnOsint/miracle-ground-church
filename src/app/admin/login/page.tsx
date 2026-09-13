"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Logo } from "@/components/logo";

export default function AdminLogin() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (!res.ok) {
        const data = await res.json();
        setError(data.error || "Login failed");
        setLoading(false);
        return;
      }
      router.push("/admin");
      router.refresh();
    } catch {
      setError("Network error. Please try again.");
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-svh items-center justify-center bg-night-950 px-5 py-16 text-cream-50">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.12)_0%,transparent_55%)]" />
      <form
        onSubmit={handleSubmit}
        className="relative w-full max-w-sm rounded-3xl border border-cream-50/10 bg-night-900/60 p-8 shadow-2xl backdrop-blur-sm"
      >
        <div className="mb-8 flex flex-col items-center text-center">
          <Logo dark />
          <h1 className="mt-6 font-serif text-2xl font-semibold">Admin Login</h1>
          <p className="mt-2 text-sm text-cream-50/60">
            Enter your admin password to manage the website.
          </p>
        </div>

        <label className="flex flex-col gap-2 text-sm font-medium">
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoFocus
            required
            className="rounded-xl border border-cream-50/15 bg-night-950/60 px-4 py-3 text-sm outline-none transition-colors focus:border-gold-500"
          />
        </label>

        {error ? (
          <p className="mt-3 text-sm text-red-400">{error}</p>
        ) : null}

        <button
          type="submit"
          disabled={loading}
          className="mt-6 w-full rounded-full bg-gold-500 px-6 py-3.5 text-sm font-semibold text-night-950 transition-all hover:bg-gold-400 disabled:opacity-60"
        >
          {loading ? "Signing in…" : "Sign In"}
        </button>

        <Link
          href="/"
          className="mt-6 block text-center text-xs text-cream-50/50 transition-colors hover:text-gold-300"
        >
          ← Back to website
        </Link>
      </form>
    </main>
  );
}