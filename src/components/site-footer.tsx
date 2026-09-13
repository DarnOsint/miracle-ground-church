import { Container } from "@/components/ui";
import { navigation, siteConfig, socialLinks } from "@/lib/site";
import { Logo } from "@/components/logo";
import { ClockIcon, MailIcon, PhoneIcon, PinIcon } from "@/components/icons";

export function SiteFooter() {
  return (
    <footer className="border-t border-night-900/10 bg-cream-100 pt-16">
      <Container>
        <div className="grid gap-12 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Logo />
            <p className="max-w-xs text-sm leading-relaxed text-night-900/70">
              A place of miracles, prayer and purpose in the heart of Juba,
              South Sudan.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-600">
              Navigate
            </p>
            <ul className="mt-4 space-y-2.5">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-night-900/70 transition-colors hover:text-gold-600"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-600">
              Visit Us
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-night-900/70">
              <li className="flex gap-2.5">
                <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
                <span>
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.landmark}
                  <br />
                  {siteConfig.address.city}
                </span>
              </li>
              <li>
                <a
                  href={siteConfig.phoneHref}
                  className="flex items-center gap-2.5 transition-colors hover:text-gold-600"
                >
                  <PhoneIcon className="h-4 w-4 text-gold-600" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2.5 transition-colors hover:text-gold-600"
                >
                  <MailIcon className="h-4 w-4 text-gold-600" />
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-600">
              Service Hours
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-night-900/70">
              {siteConfig.services.map((service) => (
                <li key={`${service.day}-${service.time}`} className="flex gap-2.5">
                  <ClockIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
                  <span>
                    {service.day}s — {service.time}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-night-900/10 py-8 sm:flex-row">
          <p className="text-xs text-night-900/60">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-xs font-medium uppercase tracking-wider text-night-900/60 transition-colors hover:text-gold-600"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}