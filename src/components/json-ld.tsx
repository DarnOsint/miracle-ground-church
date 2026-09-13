import { siteConfig } from "@/lib/site";

const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  siteConfig.address.googleMapsQuery,
)}`;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Church",
      "@id": `${siteConfig.url}#church`,
      name: siteConfig.name,
      alternateName: "Miracle Ground Church Juba",
      description:
        "A place of miracles, prayer and purpose in Juba, South Sudan. Sunday English worship at 8:30 AM and Arabic worship at 10:30 AM.",
      url: siteConfig.url,
      telephone: siteConfig.phone,
      email: siteConfig.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: `${siteConfig.address.street}, ${siteConfig.address.landmark}`,
        addressLocality: "Juba",
        addressRegion: "Central Equatoria",
        addressCountry: "SS",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 4.85,
        longitude: 31.58,
      },
      map: mapsUrl,
      image: `${siteConfig.url}/images/og-image.png`,
      logo: `${siteConfig.url}/images/logo.jpg`,
      sameAs: ["https://wa.me/21192599955"],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Sunday"],
          opens: "08:30",
          closes: "13:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Wednesday"],
          opens: "18:00",
          closes: "20:00",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}#website`,
      name: siteConfig.name,
      url: siteConfig.url,
      publisher: { "@id": `${siteConfig.url}#church` },
      inLanguage: ["en", "ar"],
    },
  ],
};

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}