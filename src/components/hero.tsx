import Image from "next/image";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/ui";
import { ArrowIcon, ClockIcon, PinIcon, SparkleIcon } from "@/components/icons";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-night-950 text-cream-50"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.14)_0%,transparent_55%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:72px_72px]" />
      <div className="absolute -top-32 right-[-10%] h-[480px] w-[480px] rounded-full bg-gold-500/10 blur-3xl" />
      <div className="absolute bottom-[-20%] left-[-10%] h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-3xl" />
      <SparkleIcon className="absolute left-[12%] top-[22%] h-5 w-5 animate-pulse text-gold-500/40" />
      <SparkleIcon className="absolute right-[16%] top-[30%] h-3 w-3 animate-pulse text-gold-500/30 [animation-delay:1.2s]" />
      <SparkleIcon className="absolute bottom-[24%] left-[22%] h-4 w-4 animate-pulse text-gold-500/30 [animation-delay:2s]" />

      <Container className="relative flex min-h-svh flex-col justify-center pb-16 pt-28">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="animate-fade-up mb-8 flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border border-gold-500/40 bg-night-900/60 p-1.5 shadow-glow sm:h-28 sm:w-28">
            <Image
              src="/images/logo.jpg"
              alt={`${siteConfig.name} logo`}
              width={96}
              height={96}
              priority
              className="h-full w-full rounded-full object-cover"
            />
          </span>

          <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.3em] text-gold-300">
            <PinIcon className="h-3.5 w-3.5" />
            Juba &middot; South Sudan
          </span>

          <h1 className="animate-fade-up animation-delay-100 mt-8 font-serif text-4xl font-bold leading-[1.08] tracking-tight sm:text-6xl md:text-7xl">
            Welcome to{" "}
            <span className="text-gold-400">Miracle Ground</span>{" "}
            International Church
          </h1>

          <p className="animate-fade-up animation-delay-200 mt-6 max-w-2xl text-lg leading-relaxed text-cream-50/80 sm:text-xl">
            {siteConfig.tagline} — a family of faith where heaven meets earth,
            lives are transformed and the impossible becomes possible.
          </p>

          <figure className="animate-fade-up animation-delay-300 mt-8 border-l-2 border-gold-500 pl-5 text-left">
            <blockquote className="font-serif text-xl italic text-cream-50/90 sm:text-2xl">
              {siteConfig.scripture.verse}
            </blockquote>
            <figcaption className="mt-2 text-sm font-medium uppercase tracking-[0.2em] text-gold-400">
              {siteConfig.scripture.reference}
            </figcaption>
          </figure>

          <div className="animate-fade-up animation-delay-400 mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#visit"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-8 py-4 text-sm font-semibold text-night-950 shadow-lg shadow-gold-500/25 transition-all hover:-translate-y-0.5 hover:bg-gold-400"
            >
              Plan Your Visit
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#connect"
              className="inline-flex items-center justify-center rounded-full border border-cream-50/25 px-8 py-4 text-sm font-semibold text-cream-50 transition-all hover:-translate-y-0.5 hover:border-gold-400/60 hover:text-gold-300"
            >
              Connect With Us
            </a>
          </div>
        </div>

        <div className="mt-16 grid gap-4 rounded-3xl border border-cream-50/10 bg-night-900/50 p-4 backdrop-blur-sm sm:p-5 md:grid-cols-3">
          {siteConfig.services.slice(0, 3).map((service) => (
            <div
              key={`${service.day}-${service.time}`}
              className="flex items-center gap-4 rounded-2xl bg-night-950/60 px-5 py-4"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold-500/15 text-gold-400">
                <ClockIcon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-400">
                  {service.day}
                </p>
                <p className="text-sm font-medium text-cream-50/90">
                  {service.time} &middot; {service.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}