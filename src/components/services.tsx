import { Container, SectionHeading } from "@/components/ui";
import { siteConfig } from "@/lib/site";
import { CalendarIcon, ClockIcon, GlobeIcon } from "@/components/icons";

export function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-24 bg-cream-100 py-24 sm:py-32"
    >
      <Container className="space-y-16">
        <SectionHeading
          eyebrow="Join Us"
          title="Service Times"
          description="We would love to worship with you. Plan your week around God, family and community."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {siteConfig.services.map((service) => (
            <div
              key={`${service.day}-${service.time}-${service.title}`}
              className="group relative overflow-hidden rounded-3xl border border-night-900/10 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full bg-gold-500/10 text-gold-600">
                {service.title === "Bible Study & Prayer" ? (
                  <CalendarIcon className="h-5 w-5" />
                ) : (
                  <ClockIcon className="h-5 w-5" />
                )}
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-600">
                {service.day}
              </p>
              <p className="mt-3 font-serif text-4xl font-bold text-night-900">
                {service.time}
              </p>
              <h3 className="mt-4 font-serif text-xl font-semibold text-night-900">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-night-900/70">
                {service.description}
              </p>
              <div className="mt-6 h-px w-full bg-night-900/10" />
              <p className="mt-4 flex items-center gap-2 text-xs font-medium text-night-900/60">
                <GlobeIcon className="h-3.5 w-3.5" />
                {siteConfig.address.city}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}