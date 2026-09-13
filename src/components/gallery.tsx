"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { siteConfig } from "@/lib/site";
import { Container, SectionHeading } from "@/components/ui";
import { ChevronLeftIcon, ChevronRightIcon, CloseIcon } from "@/components/icons";

export function GallerySlideshow() {
  const photos = siteConfig.gallery;
  const [slide, setSlide] = useState(0);
  const [open, setOpen] = useState(false);
  const [paused, setPaused] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback(
    (i: number) => setSlide(((i % photos.length) + photos.length) % photos.length),
    [photos.length],
  );

  const next = useCallback(() => goTo(slide + 1), [goTo, slide]);
  const prev = useCallback(() => goTo(slide - 1), [goTo, slide]);

  useEffect(() => {
    if (!open || paused) return;
    timer.current = setInterval(next, 4500);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [open, paused, next]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, next, prev]);

  if (photos.length === 0) return null;

  return (
    <section id="gallery" className="scroll-mt-24 bg-cream-50 py-24 sm:py-32">
      <Container className="space-y-16">
        <SectionHeading
          eyebrow="Life Together"
          title="Gallery"
          description="Moments of worship, community and grace."
        />

        {/* Hero preview — click any to open slideshow */}
        <div className="relative overflow-hidden rounded-3xl shadow-xl">
          <button
            type="button"
            onClick={() => {
              setSlide(0);
              setOpen(true);
            }}
            className="group relative block w-full"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photos[0].src}
              alt={photos[0].alt || "Gallery"}
              className="h-[360px] w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-[480px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-night-950/70 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <span className="absolute bottom-6 left-6 rounded-full bg-night-950/80 px-5 py-2 text-sm font-medium text-cream-50 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
              View Slideshow ({photos.length} photos)
            </span>
          </button>
        </div>

        {/* Grid thumbnails */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {photos.map((photo, i) => (
            <button
              key={`${photo.src}-${i}`}
              type="button"
              onClick={() => {
                setSlide(i);
                setOpen(true);
              }}
              className="group relative block aspect-square overflow-hidden rounded-2xl shadow-sm transition-shadow hover:shadow-md"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo.src}
                alt={photo.alt || "Gallery photo"}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-night-950/0 transition-colors group-hover:bg-night-950/40" />
            </button>
          ))}
        </div>
      </Container>

      {/* Fullscreen lightbox */}
      {open ? (
        <div
          className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-night-950/95 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-cream-50/20 text-cream-50 transition-colors hover:border-gold-400/60"
            aria-label="Close slideshow"
          >
            <CloseIcon className="h-5 w-5" />
          </button>

          <div className="relative flex w-full max-w-5xl flex-col items-center px-16">
            <div className="relative min-h-[300px] w-full">
              {photos.map((photo, i) => (
                <figure
                  key={`${photo.src}-slide-${i}`}
                  className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ${
                    i === slide
                      ? "translate-y-0 opacity-100"
                      : "pointer-events-none translate-y-3 opacity-0"
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={photo.src}
                    alt={photo.alt || "Gallery photo"}
                    className="max-h-[70vh] w-full rounded-xl object-contain"
                  />
                  {(photo.alt || photo.caption) ? (
                    <figcaption className="mt-4 max-w-xl text-center text-sm text-cream-50/80">
                      {photo.caption || photo.alt}
                    </figcaption>
                  ) : null}
                </figure>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-6">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous photo"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-cream-50/20 text-cream-50 transition-colors hover:border-gold-400/60 hover:text-gold-300"
              >
                <ChevronLeftIcon className="h-5 w-5" />
              </button>
              <div className="flex gap-2">
                {photos.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Show photo ${i + 1}`}
                    onClick={() => setSlide(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === slide ? "w-8 bg-gold-500" : "w-2 bg-cream-50/25 hover:bg-cream-50/50"
                    }`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={next}
                aria-label="Next photo"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-cream-50/20 text-cream-50 transition-colors hover:border-gold-400/60 hover:text-gold-300"
              >
                <ChevronRightIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}