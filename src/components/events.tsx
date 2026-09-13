import { Container, SectionHeading } from "@/components/ui";
import { siteConfig } from "@/lib/site";
import { CalendarIcon, ClockIcon } from "@/components/icons";

export function Events() {
  return (
    <section
      id="events"
      className="relative scroll-mt-24 bg-cream-100 py-24 sm:py-32"
    >
      <Container className="space-y-16">
        <SectionHeading
          eyebrow="Mark Your Calendar"
          title="Upcoming Events"
          description="From weekly worship to special gatherings — there is always a place for you with us."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {siteConfig.events.map((event) => (
            <div
              key={`${event.title}`}
              className="group flex flex-col gap-5 rounded-3xl border border-night-900/10 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl sm:flex-row sm:items-center"
            >
              <div className="flex h-24 w-24 shrink-0 flex-col items-center justify-center rounded-2xl bg-night-900 text-center">
                <CalendarIcon className="h-6 w-6 text-gold-400" />
                <span className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-cream-50/70">
                  Weekly
                </span>
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-xl font-semibold text-night-900">
                  {event.title}
                </h3>
                <p className="mt-1 text-sm font-semibold text-gold-600">
                  {event.date} · {event.time}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-night-900/70">
                  {event.description}
                </p>
              </div>
              <span className="hidden shrink-0 items-center gap-2 text-xs font-medium text-night-900/50 sm:flex">
                <ClockIcon className="h-4 w-4" />
                {event.time}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}