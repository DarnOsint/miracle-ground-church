import { Container } from "@/components/ui";
import { siteConfig } from "@/lib/site";
import { ArrowIcon, HeartIcon, PhoneIcon } from "@/components/icons";

export function Connect() {
  return (
    <section
      id="connect"
      className="relative scroll-mt-24 overflow-hidden bg-gradient-to-br from-night-900 via-night-950 to-night-900 py-24 text-center text-cream-50 sm:py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(212,175,55,0.12)_0%,transparent_55%)]" />
      <div className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-500/5 blur-2xl" />

      <Container className="relative mx-auto max-w-3xl">
        <span className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full border border-gold-500/40 bg-gold-500/10">
          <HeartIcon className="h-7 w-7 text-gold-400" />
        </span>
        <h2 className="font-serif text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
          We Can&rsquo;t Wait to Meet You
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-cream-50/80">
          Whatever you are facing, there is hope and a family waiting for you
          at Miracle Ground. Reach out today — we would love to pray with you
          and walk with you on your journey.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={siteConfig.phoneHref}
            className="group inline-flex items-center gap-2 rounded-full bg-gold-500 px-8 py-4 text-sm font-semibold text-night-950 shadow-lg shadow-gold-500/25 transition-all hover:-translate-y-0.5 hover:bg-gold-400"
          >
            <PhoneIcon className="h-4 w-4" />
            {siteConfig.phone}
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="group inline-flex items-center gap-2 rounded-full border border-cream-50/25 px-8 py-4 text-sm font-semibold text-cream-50 transition-all hover:-translate-y-0.5 hover:border-gold-400/60 hover:text-gold-300"
          >
            Email Us
            <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <p className="mt-10 text-sm text-cream-50/60">
          New here? Let us know you&rsquo;re coming and we&rsquo;ll make sure
          someone welcomes you personally.
        </p>
      </Container>
    </section>
  );
}