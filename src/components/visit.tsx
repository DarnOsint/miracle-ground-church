import { Container } from "@/components/ui";
import { siteConfig } from "@/lib/site";
import { MailIcon, PhoneIcon, PinIcon } from "@/components/icons";

const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  siteConfig.address.googleMapsQuery,
)}&output=embed`;

export function Visit() {
  return (
    <section id="visit" className="scroll-mt-24 bg-cream-50 py-24 sm:py-32">
      <Container className="space-y-16">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold-600">
              <span className="h-px w-6 bg-gold-500" />
              Plan Your Visit
            </span>
            <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-night-900 sm:text-4xl md:text-5xl">
              Come Worship With Us
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-night-900/70">
              We are easy to find and always glad to meet new friends. Park,
              walk in and let our welcome team take it from there.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-night-900 text-gold-400">
                  <PinIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-night-900">
                    Our Location
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-night-900/70">
                    {siteConfig.address.street}
                    <br />
                    {siteConfig.address.landmark}
                    <br />
                    {siteConfig.address.city}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-night-900 text-gold-400">
                  <PhoneIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-night-900">
                    Call Us
                  </p>
                  <a
                    href={siteConfig.phoneHref}
                    className="mt-1 block text-sm text-night-900/70 transition-colors hover:text-gold-600"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-night-900 text-gold-400">
                  <MailIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-night-900">
                    Email Us
                  </p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="mt-1 block text-sm text-night-900/70 transition-colors hover:text-gold-600"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <a
                href="#connect"
                className="mt-2 inline-flex items-center rounded-full bg-gold-500 px-7 py-3.5 text-sm font-semibold text-night-950 shadow-md shadow-gold-500/25 transition-all hover:-translate-y-0.5 hover:bg-gold-400"
              >
                Get Directions Help
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-night-900/10 shadow-xl lg:col-span-3">
            <iframe
              src={mapSrc}
              title="Map to Miracle Ground International Church"
              className="h-[420px] w-full border-0 sm:h-full sm:min-h-[480px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </Container>
    </section>
  );
}