import { Container, SectionHeading } from "@/components/ui";
import { siteConfig } from "@/lib/site";
import {
  HeartIcon,
  MusicIcon,
  UserGroupIcon,
} from "@/components/icons";

const ministryIcons = [
  MusicIcon,
  HeartIcon,
  UserGroupIcon,
  HeartIcon,
  HeartIcon,
  UserGroupIcon,
] as const;

const ministryChips = [
  { bg: "bg-amber-500/15 text-amber-600", bar: "from-amber-400 to-orange-500" },
  { bg: "bg-rose-500/15 text-rose-600", bar: "from-rose-400 to-pink-500" },
  { bg: "bg-teal-500/15 text-teal-600", bar: "from-teal-400 to-emerald-500" },
  { bg: "bg-violet-500/15 text-violet-600", bar: "from-violet-400 to-purple-500" },
] as const;

export function Ministries() {
  return (
    <section id="ministries" className="relative scroll-mt-24 bg-cream-50 py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-amber-400 via-rose-400 to-violet-400" />
      <Container className="space-y-16">
        <SectionHeading
          eyebrow="Get Involved"
          title="Our Ministries"
          description="Every ministry is a doorway to purpose. Find where God is calling you to serve and grow."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.ministries.map((ministry, i) => {
            const Icon = ministryIcons[i] ?? HeartIcon;
            const chip = ministryChips[i % ministryChips.length];
            return (
              <div
                key={ministry.name}
                className="group relative overflow-hidden rounded-3xl border border-night-900/10 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r transition-all duration-300 group-hover:h-2 ${chip.bar}`}
                />
                <span
                  className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full ${chip.bg} transition-transform group-hover:scale-110`}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-serif text-xl font-semibold text-night-900">
                  {ministry.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-night-900/70">
                  {ministry.description}
                </p>
                <div
                  className={`mt-5 h-0.5 w-10 rounded-full bg-gradient-to-r ${chip.bar} transition-all group-hover:w-16`}
                />
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}