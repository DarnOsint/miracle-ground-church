"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";

const SLIDE_DURATION_MS = 6000;

export function ScriptureSlideshow() {
  const slides = siteConfig.scriptures;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback(
    (i: number) => setIndex(((i % slides.length) + slides.length) % slides.length),
    [slides.length],
  );

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (paused) return;
    timer.current = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, SLIDE_DURATION_MS);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [paused, index, slides.length]);

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-night-950 via-night-900 to-night-950 py-20 text-cream-50 sm:py-24"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.1)_0%,transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <Container className="relative">
        <div className="relative mx-auto flex max-w-3xl flex-col items-center">
          <div className="relative flex min-h-[280px] w-full items-center justify-center sm:min-h-[240px]">
            {slides.map((slide, i) => (
              <figure
                key={`${slide.reference}-${i}`}
                className={cn(
                  "absolute inset-0 flex flex-col items-center justify-center text-center transition-all duration-700",
                  i === index
                    ? "translate-y-0 opacity-100"
                    : "pointer-events-none translate-y-3 opacity-0",
                )}
                aria-hidden={i !== index}
              >
                <span className="mb-4 font-serif text-6xl leading-none text-gold-500/40">
                  &ldquo;
                </span>
                <blockquote className="font-serif text-2xl font-medium italic leading-snug text-cream-50 sm:text-3xl md:text-4xl">
                  {slide.verse}
                </blockquote>
                <figcaption className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">
                  {slide.reference}
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-6">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous verse"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-cream-50/20 text-cream-50/80 transition-all hover:border-gold-400/60 hover:text-gold-300"
            >
              <ChevronLeftIcon className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2.5">
              {slides.map((slide, i) => (
                <button
                  key={`${slide.reference}-dot-${i}`}
                  type="button"
                  aria-label={`Show verse ${i + 1}`}
                  onClick={() => goTo(i)}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    i === index
                      ? "w-8 bg-gold-500"
                      : "w-2 bg-cream-50/25 hover:bg-cream-50/50",
                  )}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              aria-label="Next verse"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-cream-50/20 text-cream-50/80 transition-all hover:border-gold-400/60 hover:text-gold-300"
            >
              <ChevronRightIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}