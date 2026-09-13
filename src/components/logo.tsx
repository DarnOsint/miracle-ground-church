import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/cn";

/**
 * Logo — shows a monogram badge until the real logo file is provided.
 * To use the actual logo: drop it at /public/images/logo.png and swap the
 * <div> below for an <Image src="/images/logo.png" ... />.
 */
export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link
      href="#home"
      className="group flex items-center gap-3"
      aria-label={`${siteConfig.name} — home`}
    >
      <span
        className={cn(
          "flex h-11 w-11 items-center justify-center rounded-full border font-serif text-base font-bold tracking-wider transition-transform duration-300 group-hover:scale-105",
          dark
            ? "border-gold-400/60 bg-night-900 text-gold-400"
            : "border-gold-600/50 bg-night-900 text-gold-400",
        )}
      >
        {siteConfig.monogram}
      </span>
      <span className="flex flex-col leading-tight">
        <span
          className={cn(
            "font-serif text-lg font-semibold tracking-tight",
            dark ? "text-cream-50" : "text-night-900",
          )}
        >
          {siteConfig.shortName}
        </span>
        <span
          className={cn(
            "text-[10px] font-medium uppercase tracking-[0.28em]",
            "text-gold-600",
          )}
        >
          International Church
        </span>
      </span>
    </Link>
  );
}