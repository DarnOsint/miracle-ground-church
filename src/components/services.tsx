import { Container, SectionHeading } from "@/components/ui";
import { siteConfig } from "@/lib/site";
import { CalendarIcon, ClockIcon, GlobeIcon } from "@/components/icons";

const serviceChips = [
  { bg: "bg-amber-500/15 text-amber-600", bar: "from-amber-400 to-orange-500" },
  { bg: "bg-rose-500/15 text-rose-600", bar: "from-rose-400 to-pink-500" },
  { bg: "bg-teal-500/15 text-teal-600", bar: "from-teal-400 to-emerald-500" },
] as const;

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
          {siteConfig.services.map((service, i) => {
            const chip = serviceChips[i % serviceChips.length];
            return (
              <div
                key={`${service.day}-${service.time}-${service.title}`}
                className="group relative overflow-hidden rounded-3xl border border-night-900/10 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r transition-all duration-300 group-hover:h-2 ${chip.bar}`}
                />
                <div
                  className={`absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full ${chip.bg}`}
                >
                  {service.title === "Bible Study & Prayer" ? (
                    <CalendarIcon className="h-5 w-5" />
                  ) : (
                    <ClockIcon className="h-5 w-5" />
                  )}
                </div>
                <p className="font-script text-xl font-semibold text-gold-600">
                  {service.day}
                </p>
                <p className="mt-2 font-serif text-4xl font-extrabold text-night-900">
                  {service.time}
                </p>
                <h3 className="mt-4 font-serif text-xl font-semibold text-night-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-night-900/70">
                  {service.description}
                </p>
                <div className="mt-6 h-px w-full bg-night-900/10" />
                <p className="mt-4 flex items-center gap-2 text-xs font-semibold text-night-900/60">
                  <GlobeIcon className="h-3.5 w-3.5 text-gold-600" />
                  {siteConfig.address.city}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}