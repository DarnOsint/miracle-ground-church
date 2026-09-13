import { Container, SectionHeading } from "@/components/ui";
import { siteConfig } from "@/lib/site";
import { DoveIcon } from "@/components/icons";

const beliefChips = [
  { bg: "bg-amber-500/15 text-amber-600", ring: "group-hover:ring-amber-400/60" },
  { bg: "bg-rose-500/15 text-rose-600", ring: "group-hover:ring-rose-400/60" },
  { bg: "bg-teal-500/15 text-teal-600", ring: "group-hover:ring-teal-400/60" },
  { bg: "bg-violet-500/15 text-violet-600", ring: "group-hover:ring-violet-400/60" },
] as const;

export function Beliefs() {
  return (
    <section id="beliefs" className="scroll-mt-24 bg-cream-100 py-24 sm:py-32">
      <Container className="space-y-16">
        <SectionHeading
          eyebrow="What We Believe"
          title="Our Faith, Our Foundation"
          description="We stand on the unchanging truth of God's Word and the power of the risen Christ."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.beliefs.map((belief, i) => {
            const chip = beliefChips[i % beliefChips.length];
            return (
              <div
                key={belief.title}
                className="group flex flex-col rounded-3xl border border-night-900/10 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <span
                  className={`mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full ${chip.bg} ring-4 ring-transparent transition-all group-hover:scale-110 ${chip.ring}`}
                >
                  <DoveIcon className="h-5 w-5" />
                </span>
                <h3 className="font-serif text-xl font-semibold text-night-900">
                  {belief.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-night-900/70">
                  {belief.text}
                </p>
                <p className="mt-5 font-script text-lg font-semibold text-gold-600">
                  {belief.verse}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}