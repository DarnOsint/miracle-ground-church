import Image from "next/image";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/ui";
import { ArrowIcon, ClockIcon, PinIcon, SparkleIcon } from "@/components/icons";

const serviceChips = [
  { bg: "bg-amber-500/15 text-amber-600", dot: "bg-amber-500" },
  { bg: "bg-rose-500/15 text-rose-600", dot: "bg-rose-500" },
  { bg: "bg-teal-500/15 text-teal-600", dot: "bg-teal-500" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-amber-100 via-orange-50 to-cream-50 text-night-900"
    >
      <div className="absolute inset-0 bg-grid-faint" />
      <div className="absolute -top-40 right-[-8%] h-[520px] w-[520px] rounded-full bg-gold-400/30 blur-3xl" />
      <div className="absolute bottom-[-15%] left-[-10%] h-[460px] w-[460px] rounded-full bg-rose-400/20 blur-3xl" />
      <div className="absolute left-[30%] top-[8%] h-72 w-72 rounded-full bg-violet-400/20 blur-3xl" />

      <div className="pointer-events-none absolute left-[6%] top-[18%] animate-float">
        <span className="block h-3 w-3 rounded-full bg-rose-500" />
      </div>
      <div className="pointer-events-none absolute right-[8%] top-[14%] animate-float-slow">
        <SparkleIcon className="h-6 w-6 text-gold-500/70" />
      </div>
      <div className="pointer-events-none absolute bottom-[22%] left-[12%] animate-float-slow">
        <SparkleIcon className="h-4 w-4 text-violet-500/60" />
      </div>
      <div className="pointer-events-none absolute right-[14%] top-[58%] animate-float">
        <span className="block h-3 w-3 rounded-full bg-teal-500" />
      </div>

      <Container className="relative flex min-h-svh flex-col justify-center pb-16 pt-28">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="animate-fade-up mb-8 flex h-28 w-28 items-center justify-center overflow-hidden rounded-full border-4 border-white/80 bg-white/60 p-1.5 shadow-xl shadow-gold-500/20 backdrop-blur-sm sm:h-32 sm:w-32">
            <Image
              src="/images/logo.jpg"
              alt={`${siteConfig.name} logo`}
              width={112}
              height={112}
              priority
              className="h-full w-full rounded-full object-cover"
            />
          </span>

          <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/70 px-5 py-2 text-[11px] font-bold uppercase tracking-[0.25em] text-night-700 shadow-sm backdrop-blur-sm">
            <PinIcon className="h-3.5 w-3.5 text-gold-600" />
            Juba &middot; South Sudan
          </span>

          <h1 className="animate-fade-up animation-delay-100 mt-8 font-serif text-4xl font-extrabold leading-[1.06] tracking-tight sm:text-6xl md:text-7xl">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-orange-500 via-rose-500 to-violet-500 bg-clip-text text-transparent">
              Miracle Ground
            </span>{" "}
            International Church
          </h1>

          <p className="animate-fade-up animation-delay-200 mt-6 max-w-2xl text-lg leading-relaxed text-night-900/70 sm:text-xl">
            {siteConfig.tagline} — a family of faith where heaven meets earth,
            lives are transformed and the impossible becomes possible.
          </p>

          <figure className="animate-fade-up animation-delay-300 mt-8 rounded-2xl border-l-4 border-gold-500 bg-white/70 px-6 py-5 text-left shadow-sm backdrop-blur-sm">
            <blockquote className="font-serif text-xl font-medium italic text-night-900/90 sm:text-2xl">
              {siteConfig.scripture.verse}
            </blockquote>
            <figcaption className="mt-2 font-script text-lg font-semibold text-gold-600">
              {siteConfig.scripture.reference}
            </figcaption>
          </figure>

          <div className="animate-fade-up animation-delay-400 mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#visit"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-night-950 px-8 py-4 text-sm font-bold text-cream-50 shadow-xl shadow-night-950/25 transition-all hover:-translate-y-0.5 hover:bg-night-800"
            >
              Plan Your Visit
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#connect"
              className="inline-flex items-center justify-center rounded-full border-2 border-night-900/15 bg-white/80 px-8 py-4 text-sm font-bold text-night-900 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-gold-500 hover:text-gold-600"
            >
              Connect With Us
            </a>
          </div>
        </div>

        <div className="mt-16 grid gap-4 rounded-3xl border border-white/70 bg-white/70 p-4 shadow-xl shadow-night-950/5 backdrop-blur-md sm:p-5 md:grid-cols-3">
          {siteConfig.services.slice(0, 3).map((service, i) => {
            const chip = serviceChips[i % serviceChips.length];
            return (
              <div
                key={`${service.day}-${service.time}`}
                className="flex items-center gap-4 rounded-2xl bg-white px-5 py-4 shadow-sm"
              >
                <span
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${chip.bg}`}
                >
                  <ClockIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-night-700">
                    {service.day}
                  </p>
                  <p className="text-sm font-semibold text-night-900">
                    {service.time} &middot; {service.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}