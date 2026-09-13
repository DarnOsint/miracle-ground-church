import { Container } from "@/components/ui";
import { siteConfig } from "@/lib/site";
import { ArrowIcon, HeartIcon, PhoneIcon } from "@/components/icons";

export function Connect() {
  return (
    <section
      id="connect"
      className="relative scroll-mt-24 overflow-hidden bg-gradient-to-br from-fuchsia-600 via-purple-600 to-violet-700 py-24 text-center text-cream-50 sm:py-32"
    >
      <div className="absolute inset-0 bg-dots-white" />
      <div className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-500/20 blur-3xl" />

      <Container className="relative space-y-8">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-white/50 bg-white/15 backdrop-blur-sm">
          <HeartIcon className="h-7 w-7 text-cream-50" />
        </span>
        <h2 className="font-serif text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
          We Can&rsquo;t Wait to Meet You
        </h2>
        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-cream-50/90">
          Whether you&rsquo;re just searching, new in faith or a seasoned
          believer — there&rsquo;s a seat with your name on it.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={siteConfig.phoneHref}
            className="group inline-flex items-center gap-2 rounded-full bg-night-950 px-8 py-4 text-sm font-bold text-cream-50 shadow-xl shadow-night-950/25 transition-all hover:-translate-y-0.5 hover:bg-night-800"
          >
            <PhoneIcon className="h-4 w-4 text-gold-400" />
            {siteConfig.phone}
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 bg-white/15 px-8 py-4 text-sm font-bold text-cream-50 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-white"
          >
            Email Us
            <ArrowIcon className="h-4 w-4" />
          </a>
        </div>
      </Container>
    </section>
  );
}
