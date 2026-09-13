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
            : "bg-transparent",
        )}
      >
        <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
          <Logo dark={!scrolled} />

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  scrolled
                    ? "text-night-900/80 hover:text-gold-600"
                    : "text-cream-50/90 hover:text-gold-300",
                )}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#visit"
              className={cn(
                "rounded-full px-5 py-2.5 text-sm font-semibold shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md",
                scrolled
                  ? "bg-night-900 text-cream-50 hover:bg-night-800"
                  : "bg-cream-50 text-night-900 hover:bg-cream-100",
              )}
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
                : "border-cream-50/25 bg-night-900/40 text-cream-50",
            )}
            aria-label="Open menu"
          >
            <MenuIcon className="h-5 w-5" />
          </button>
        </div>
      </header>

      {open
        ? createPortal(
            <div className="fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-night-950 lg:hidden">
              <div className="flex h-20 items-center justify-between px-5 sm:px-8">
                <Logo dark />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream-50/20 text-cream-50 transition-colors hover:border-gold-400/60"
                  aria-label="Close menu"
                >
                  <CloseIcon className="h-5 w-5" />
                </button>
              </div>
              <nav
                className="flex flex-1 flex-col justify-center gap-6 px-8"
                aria-label="Mobile"
              >
                {navigation.map((item, i) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="font-serif text-3xl font-semibold text-cream-50 transition-colors hover:text-gold-400"
                    style={{ animationDelay: `${i * 60}ms` }}
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#visit"
                  onClick={() => setOpen(false)}
                  className="mt-6 inline-flex w-max items-center rounded-full bg-gold-500 px-7 py-3.5 text-sm font-semibold text-night-950"
                >
                  Plan a Visit
                </a>
                <p className="mt-10 text-sm text-cream-50/60">
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