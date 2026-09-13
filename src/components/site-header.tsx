"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { navigation, siteConfig } from "@/lib/site";
import { cn } from "@/lib/cn";
import { Logo } from "@/components/logo";
import { CloseIcon, MenuIcon } from "@/components/icons";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
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

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-semibold transition-colors hover:text-gold-600",
                  scrolled ? "text-night-900/80" : "text-night-900/80",
                )}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#visit"
              className="rounded-full bg-night-950 px-5 py-2.5 text-sm font-semibold text-cream-50 shadow-lg shadow-night-950/15 transition-all hover:-translate-y-0.5 hover:bg-night-800 hover:shadow-xl"
            >
              Plan a Visit
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className={cn(
              "inline-flex h-11 w-11 items-center justify-center rounded-full border backdrop-blur-sm transition-colors lg:hidden",
              scrolled
                ? "border-night-900/15 bg-cream-50/80 text-night-900"
                : "border-night-900/15 bg-white/70 text-night-900",
            )}
            aria-label="Open menu"
          >
            <MenuIcon className="h-5 w-5" />
          </button>
        </div>
      </header>

      {open
        ? createPortal(
            <div className="fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-gradient-to-br from-cream-50 via-cream-100 to-gold-200 lg:hidden">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_12%,rgba(247,127,0,0.18)_0%,transparent_45%)]" />
              <div className="pointer-events-none absolute -left-24 top-1/3 h-64 w-64 rounded-full bg-rose-500/10 blur-3xl" />
              <div className="pointer-events-none absolute -right-24 bottom-10 h-64 w-64 rounded-full bg-gold-400/25 blur-3xl" />

              <div className="relative flex h-20 items-center justify-between px-5 sm:px-8">
                <Logo />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-night-900/15 bg-white/60 text-night-900 transition-colors hover:border-gold-600 hover:text-gold-600"
                  aria-label="Close menu"
                >
                  <CloseIcon className="h-5 w-5" />
                </button>
              </div>

              <nav
                className="relative flex flex-1 flex-col justify-center gap-4 px-8"
                aria-label="Mobile"
              >
                {navigation.map((item, i) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-center gap-3 border-b border-night-900/10 pb-5 font-serif text-3xl font-semibold text-night-950 transition-all hover:translate-x-1.5 hover:text-gold-600"
                    style={{ animationDelay: `${i * 60}ms` }}
                  >
                    <span className="h-6 w-1.5 rounded-full bg-gradient-to-b from-gold-500 to-rose-500 opacity-0 transition-opacity group-hover:opacity-100" />
                    {item.label}
                  </a>
                ))}
                <a
                  href="#visit"
                  onClick={() => setOpen(false)}
                  className="mt-8 inline-flex w-max items-center gap-2 rounded-full bg-night-950 px-8 py-4 text-sm font-semibold text-cream-50 shadow-xl shadow-night-950/15 transition-all hover:-translate-y-0.5 hover:bg-night-800"
                >
                  Plan a Visit
                </a>
                <p className="mt-6 text-sm font-semibold text-night-900/60">
                  {siteConfig.phone}
                </p>
              </nav>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}