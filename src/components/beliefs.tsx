import { Container, SectionHeading } from "@/components/ui";
import { siteConfig } from "@/lib/site";
import { DoveIcon } from "@/components/icons";

export function Beliefs() {
  return (
    <section id="beliefs" className="scroll-mt-24 bg-cream-50 py-24 sm:py-32">
      <Container className="space-y-16">
        <SectionHeading
          eyebrow="What We Believe"
          title="Our Faith, Our Foundation"
          description="We stand on the unchanging truth of God's Word and the power of the risen Christ."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.beliefs.map((belief) => (
            <div
              key={belief.title}
              className="group flex flex-col rounded-3xl border border-night-900/10 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-gold-500/40 hover:shadow-lg"
            >
              <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-night-900 text-gold-400 transition-transform group-hover:scale-110">
                <DoveIcon className="h-5 w-5" />
              </span>
              <h3 className="font-serif text-xl font-semibold text-night-900">
                {belief.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-night-900/70">
                {belief.text}
              </p>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
                {belief.verse}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}