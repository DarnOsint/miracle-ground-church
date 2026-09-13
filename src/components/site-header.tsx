"use client";

import { useEffect, useState } from "react";
import { navigation, socialLinks } from "@/lib/site";
import { cn } from "@/lib/cn";
import { Logo } from "@/components/logo";
import { TikTokIcon } from "@/components/icons";

const tiktokHref =
  socialLinks.find((s) => s.label === "TikTok")?.href ??
  "https://www.tiktok.com/@miracleground";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-night-900/10 bg-cream-50/90 shadow-lg shadow-night-950/5 backdrop-blur-md"
          : "border-b border-transparent bg-gradient-to-b from-white/60 to-transparent",
      )}
    >
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <Logo />

        <div className="flex items-center gap-3">
          <a
            href={tiktokHref}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-full border shadow-sm backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:shadow-lg",
              scrolled
                ? "border-night-900/15 bg-white/80 text-night-900 hover:border-gold-600 hover:text-gold-600"
                : "border-night-900/15 bg-white/70 text-night-900 hover:border-gold-600 hover:text-gold-600",
            )}
            aria-label="Miracle Ground on TikTok"
            title="Follow us on TikTok"
          >
            <TikTokIcon className="h-4.5 w-4.5" />
          </a>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-night-900/80 transition-colors hover:text-gold-600"
              >
                {item.label}
              </a>
            ))}
            <a
              href={tiktokHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-night-950 px-5 py-2.5 text-sm font-semibold text-cream-50 shadow-lg shadow-night-950/15 transition-all hover:-translate-y-0.5 hover:bg-night-800 hover:shadow-xl"
            >
              <TikTokIcon className="h-4 w-4" />
              Follow Us
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
