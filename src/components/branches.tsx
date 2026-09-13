import { siteConfig, whatsappHref } from "@/lib/site";
import { Container, SectionHeading } from "@/components/ui";
import { mapsUrl } from "@/lib/site";
import { PhoneIcon, PinIcon } from "@/components/icons";

export function Branches() {
  const branches = siteConfig.branches;

  return (
    <section
      id="branches"
      className="scroll-mt-24 bg-gradient-to-b from-cream-50 to-cream-100 py-24 sm:py-32"
    >
      <Container className="space-y-16">
        <SectionHeading
          eyebrow="One Family, Many Locations"
          title="Our Branches"
          description="Miracle Ground International Church is headquartered in Juba and reaches communities through branches across South Sudan."
        />

        {branches.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-night-900/20 bg-white/60 p-12 text-center">
            <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-night-900 text-gold-400">
              <PinIcon className="h-6 w-6" />
            </span>
            <h3 className="font-serif text-2xl font-semibold text-night-900">
              Branch locations coming soon
            </h3>
            <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-night-900/60">
              This is the headquarters — branches are being updated from the
              admin panel.
            </p>
          </div>
        ) : (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {branches.map((branch) => {
              const isHq = branch.isHeadquarters;
              return (
                <div
                  key={branch.id}
                  className="flex flex-col rounded-3xl border border-night-900/10 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <span
                      className={`inline-flex h-11 w-11 items-center justify-center rounded-full ${
                        isHq ? "bg-gold-500 text-night-950" : "bg-night-900 text-gold-400"
                      }`}
                    >
                      <PinIcon className="h-5 w-5" />
                    </span>
                    {isHq ? (
                      <span className="rounded-full bg-gold-500/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-gold-600">
                        Headquarters
                      </span>
                    ) : null}
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-night-900">
                    {branch.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-night-900/70">
                    {branch.address}
                    {branch.serviceTimes ? (
                      <span className="mt-2 block text-night-900/60">
                        Services: {branch.serviceTimes}
                      </span>
                    ) : null}
                  </p>
                  <div className="mt-5 space-y-2 border-t border-night-900/10 pt-4">
                    {branch.phone ? (
                      <a
                        href={whatsappHref(branch.phone)}
                        className="flex items-center gap-2 text-sm text-night-900/70 transition-colors hover:text-gold-600"
                      >
                        <PhoneIcon className="h-4 w-4 shrink-0 text-gold-600" />
                        {branch.phone}
                      </a>
                    ) : null}
                    <a
                      href={branch.mapUrl || mapsUrl(branch.address)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-gold-600 transition-colors hover:text-gold-700"
                    >
                      Get directions
                      <span aria-hidden>→</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <div className="flex flex-col items-center text-center">
          <p className="max-w-xl text-sm leading-relaxed text-night-900/60">
            Are you part of another branch location? Reach out and we&rsquo;ll
            add it here.
          </p>
        </div>
      </Container>
    </section>
  );
}