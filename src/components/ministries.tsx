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

export function Ministries() {
  return (
    <section
      id="ministries"
      className="relative scroll-mt-24 bg-night-950 py-24 text-cream-50 sm:py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.06)_0%,transparent_50%)]" />
      <Container className="relative space-y-16">
        <SectionHeading
          dark
          eyebrow="Get Involved"
          title="Our Ministries"
          description="Every ministry is a doorway to purpose. Find where God is calling you to serve and grow."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.ministries.map((ministry, i) => {
            const Icon = ministryIcons[i] ?? HeartIcon;
            return (
              <div
                key={ministry.name}
                className="group relative overflow-hidden rounded-2xl border border-cream-50/10 bg-night-900/50 p-7 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-gold-500/40 hover:bg-night-800/60"
              >
                <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold-500/15 text-gold-400 transition-colors group-hover:bg-gold-500/25">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-serif text-xl font-semibold text-cream-50">
                  {ministry.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-cream-50/70">
                  {ministry.description}
                </p>
                <div className="mt-5 h-0.5 w-10 bg-gold-500/40 transition-all group-hover:w-16" />
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}