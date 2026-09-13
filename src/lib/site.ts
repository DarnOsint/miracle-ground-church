import content from "@/data/site-content.json";
import type { SiteContent } from "@/lib/types";

const c = content as unknown as SiteContent;

function telFromPhone(phone: string) {
  return `tel:${phone.replace(/[^+\d]/g, "")}`;
}

export function phoneToWhatsApp(phone: string) {
  const digits = phone.replace(/\D/g, "");
  return `https://wa.me/${digits.startsWith("211") ? digits : `211${digits}`}`;
}

export const siteConfig = {
  name: c.name,
  shortName: c.shortName,
  monogram: c.monogram,
  tagline: c.tagline,
  scripture: c.scripture,
  scriptures: c.scriptures,
  address: c.address,
  phone: c.phone,
  phoneHref: telFromPhone(c.phone),
  email: c.email,
  url: c.url,
  founded: c.founded,
  services: c.services,
  ministries: c.ministries,
  beliefs: c.beliefs,
  events: c.events,
  giving: c.giving,
  gallery: c.gallery,
  sermons: c.sermons,
  leaders: c.leaders,
  branches: c.branches,
};

export const navigation = c.navigation;
export const socialLinks = c.socialLinks;
export { phoneToWhatsApp as whatsappHref };

export function mapsUrl(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    query,
  )}`;
}