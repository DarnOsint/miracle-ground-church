import { siteConfig } from "@/lib/site";
import { Container, SectionHeading } from "@/components/ui";

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

const leadershipChips = [
  { bg: "bg-gradient-to-br from-amber-400 to-orange-500" },
  { bg: "bg-gradient-to-br from-rose-400 to-pink-600" },
  { bg: "bg-gradient-to-br from-teal-400 to-emerald-600" },
  { bg: "bg-gradient-to-br from-violet-400 to-purple-600" },
] as const;

export function Leadership() {
  const leaders = siteConfig.leaders;

  if (leaders.length === 0) return null;

  return (
    <section id="leadership" className="scroll-mt-24 bg-cream-100 py-24 sm:py-32">
      <Container className="space-y-16">
        <SectionHeading
          eyebrow="Shepherding the Flock"
          title="Our Leadership"
          description="Women and men of faith leading Miracle Ground with wisdom and love."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {leaders.map((leader, i) => {
            const chip = leadershipChips[i % leadershipChips.length];
            return (
            <div
              key={`${leader.name}-${i}`}
              className="group rounded-3xl border border-night-900/10 bg-white p-7 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div
                className={`mx-auto mb-5 flex h-24 w-24 items-center justify-center overflow-hidden rounded-full ${chip.bg} ring-4 ring-white shadow-md`}
              >
                {leader.photo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={leader.photo}
                    alt={leader.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span className="font-serif text-2xl font-bold text-white">
                    {initials(leader.name || "MG")}
                  </span>
                )}
              </div>
              <h3 className="font-serif text-xl font-semibold text-night-900">
                {leader.name || "—"}
              </h3>
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.2em] text-gold-600">
                {leader.role || "Leader"}
              </p>
              {leader.bio ? (
                <p className="mt-4 text-sm leading-relaxed text-night-900/70">
                  {leader.bio}
                </p>
              ) : null}
            </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}