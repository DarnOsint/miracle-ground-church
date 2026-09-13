import { Container, SectionHeading } from "@/components/ui";
import { siteConfig } from "@/lib/site";
import { CrossIcon, DoveIcon } from "@/components/icons";

const pillars = [
  {
    title: "Word",
    text: "Teaching the unshaken truth of Scripture so lives are built on a solid foundation.",
  },
  {
    title: "Worship",
    text: "Creating an atmosphere where hearts draw near to God in spirit and in truth.",
  },
  {
    title: "Prayer",
    text: "Believing in the miracle-working power of God through fervent, united prayer.",
  },
] as const;

const pillarChips = [
  { bg: "bg-amber-500/15 text-amber-600" },
  { bg: "bg-rose-500/15 text-rose-600" },
  { bg: "bg-teal-500/15 text-teal-600" },
] as const;

export function About() {
  return (
    <section id="about" className="relative scroll-mt-24 bg-cream-50 py-24 sm:py-32">
      <Container className="grid items-center gap-16 lg:grid-cols-2">
        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-400 via-rose-500 to-violet-600 p-10 shadow-2xl shadow-rose-500/30 sm:p-14">
            <div className="absolute inset-0 bg-dots-white" />
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/20 blur-2xl" />
            <CrossIcon className="relative mx-auto h-24 w-24 text-cream-50/95 drop-shadow-md" />
            <DoveIcon className="relative mx-auto mt-6 h-14 w-14 text-white/80" />
            <p className="relative mt-8 text-center font-serif text-lg italic leading-relaxed text-white/95">
              “I was glad when they said unto me, Let us go into the house of
              the Lord.”
            </p>
            <p className="relative mt-3 text-center font-script text-xl font-semibold text-gold-300">
              Psalm 122:1
            </p>
          </div>
          <div className="absolute -bottom-6 -right-6 -z-10 h-40 w-40 rounded-3xl border-2 border-gold-500/50" />
          <div className="absolute -left-6 -top-6 -z-10 h-32 w-32 rounded-full bg-teal-400/40 blur-xl" />
        </div>

        <div className="flex flex-col gap-8">
          <SectionHeading
            align="left"
            eyebrow="Our Family"
            title="A Church Called to Be a Miracle Ground"
            description="Miracle Ground International Church is a vibrant, Spirit-filled family planted in the heart of Juba to carry hope to South Sudan and beyond."
          />

          <div className="space-y-6 text-night-900/75">
            <p className="leading-relaxed">
              We believe the ground we stand on is holy, and the God we serve
              still moves. Every service is an invitation to encounter the
              living Christ — through heartfelt praise, the preaching of the
              Word and the transforming power of prayer.
            </p>
            <p className="leading-relaxed">
              As one of Juba&rsquo;s welcoming English-speaking churches, we
              worship in English at 8:30 AM and in Arabic at 10:30 AM every
              Sunday. Whether you are searching, new in your faith or a
              seasoned believer, there is a place for you here. Come as you
              are, and watch God meet you right where you stand.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {pillars.map((pillar, i) => {
              const chip = pillarChips[i % pillarChips.length];
              return (
                <div
                  key={pillar.title}
                  className="group rounded-2xl border border-night-900/10 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
                >
                  <span
                    className={`mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full ${chip.bg}`}
                  >
                    <CrossIcon className="h-4 w-4" />
                  </span>
                  <p className="font-serif text-lg font-semibold text-night-900">
                    {pillar.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-night-900/70">
                    {pillar.text}
                  </p>
                </div>
              );
            })}
          </div>

          <p className="font-serif text-xl font-semibold text-gold-600">
            {siteConfig.founded}
          </p>
        </div>
      </Container>
    </section>
  );
}