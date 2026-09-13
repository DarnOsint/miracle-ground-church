import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/cn";

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link
      href="#home"
      className="group flex items-center gap-3"
      aria-label={`${siteConfig.name} — home`}
    >
      <span
        className={cn(
          "relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border shadow-sm transition-transform duration-300 group-hover:scale-105",
          dark ? "border-gold-400/50" : "border-gold-600/40",
        )}
      >
        <Image
          src="/images/logo.jpg"
          alt={`${siteConfig.name} logo`}
          width={44}
          height={44}
          className="h-full w-full object-cover"
        />
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
        <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-gold-600">
          International Church
        </span>
      </span>
    </Link>
  );
}