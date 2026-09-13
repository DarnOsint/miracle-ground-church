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
            <span className="inline-flex items-center gap-2 font-script text-2xl leading-none text-gold-600">
              <span className="h-0.5 w-6 rounded-full bg-gradient-to-r from-transparent to-gold-500" />
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
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-500/15 text-amber-600">
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
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-rose-500/15 text-rose-600">
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
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-teal-500/15 text-teal-600">
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
                className="mt-2 inline-flex items-center rounded-full bg-night-950 px-7 py-3.5 text-sm font-bold text-cream-50 shadow-xl shadow-night-950/20 transition-all hover:-translate-y-0.5 hover:bg-night-800"
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