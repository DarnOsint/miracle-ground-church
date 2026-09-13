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

export function About() {
  return (
    <section id="about" className="relative scroll-mt-24 bg-cream-50 py-24 sm:py-32">
      <Container className="grid items-center gap-16 lg:grid-cols-2">
        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-night-800 via-night-900 to-night-950 p-10 shadow-2xl shadow-night-900/20 sm:p-14">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(212,175,55,0.18),transparent_60%)]" />
            <CrossIcon className="relative mx-auto h-24 w-24 text-gold-500/90" />
            <DoveIcon className="relative mx-auto mt-6 h-14 w-14 text-cream-50/70" />
            <p className="relative mt-8 text-center font-serif text-lg italic leading-relaxed text-cream-50/85">
              “I was glad when they said unto me, Let us go into the house of
              the Lord.”
            </p>
            <p className="relative mt-3 text-center text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">
              Psalm 122:1
            </p>
          </div>
          <div className="absolute -bottom-6 -right-6 -z-10 h-40 w-40 rounded-3xl border-2 border-gold-500/40" />
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
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-2xl border border-night-900/10 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <p className="font-serif text-lg font-semibold text-night-900">
                  {pillar.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-night-900/70">
                  {pillar.text}
                </p>
              </div>
            ))}
          </div>

          <p className="font-serif text-lg font-medium text-gold-600">
            {siteConfig.founded}
          </p>
        </div>
      </Container>
    </section>
  );
}