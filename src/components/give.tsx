import { Container, SectionHeading } from "@/components/ui";
import { siteConfig } from "@/lib/site";
import { ArrowIcon, HeartIcon, PhoneIcon } from "@/components/icons";

export function Give() {
  return (
      <section
      id="give"
      className="scroll-mt-24 bg-gradient-to-br from-amber-700 via-orange-600 to-rose-600 py-24 text-cream-50 sm:py-32"
    >
      <Container className="space-y-16">
        <SectionHeading
          dark
          eyebrow="Support the Ministry"
          title="Give & Sow into Souls"
          description="Your giving plants eternal seeds. Every gift helps us serve our community, spread the Gospel and meet real needs."
        />

        <div className="grid gap-5 lg:grid-cols-2">
          {siteConfig.giving.map((item) => (
            <div
              key={item.name}
              className="group rounded-3xl border border-cream-50/10 bg-night-900/60 p-8 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-gold-500/40"
            >
              <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold-500/15 text-gold-400">
                <HeartIcon className="h-5 w-5" />
              </span>
              <h3 className="font-serif text-2xl font-semibold">{item.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-cream-50/70">
                {item.description}
              </p>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
                {item.verse}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-6 rounded-3xl border border-gold-500/25 bg-gold-500/10 p-8 text-center sm:p-10">
          <p className="max-w-2xl font-serif text-xl leading-relaxed text-cream-50 sm:text-2xl">
            We are currently setting up secure digital giving. Until then, you
            can give in person at any service or reach us directly and we will
            gladly help.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href={siteConfig.phoneHref}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-8 py-4 text-sm font-semibold text-night-950 shadow-lg shadow-gold-500/25 transition-all hover:-translate-y-0.5 hover:bg-gold-400"
            >
              <PhoneIcon className="h-4 w-4" />
              {siteConfig.phone}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cream-50/25 px-8 py-4 text-sm font-semibold text-cream-50 transition-all hover:-translate-y-0.5 hover:border-gold-400/60 hover:text-gold-300"
            >
              Ask About Giving
              <ArrowIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}