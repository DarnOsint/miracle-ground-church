import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-5 sm:px-8", className)}>
      {children}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  dark = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  dark?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
      )}
    >
      <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold-600">
        <span className="h-px w-6 bg-gold-500" />
        {eyebrow}
        {align === "center" && <span className="h-px w-6 bg-gold-500" />}
      </span>
      <h2
        className={cn(
          "font-serif text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl",
          dark ? "text-cream-50" : "text-night-900",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "max-w-2xl text-base leading-relaxed sm:text-lg",
            dark ? "text-cream-50/70" : "text-night-900/70",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}