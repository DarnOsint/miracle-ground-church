import { mapsUrl, siteConfig } from "@/lib/site";

const churchAddress = `${siteConfig.address.street}, ${siteConfig.address.landmark}, ${siteConfig.address.city}`;

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
        streetAddress: churchAddress,
        addressLocality: "Juba",
        addressRegion: "Central Equatoria",
        addressCountry: "SS",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 4.85,
        longitude: 31.58,
      },
      map: mapsUrl(siteConfig.address.googleMapsQuery),
      image: `${siteConfig.url}/images/og-image.png`,
      logo: `${siteConfig.url}/images/logo.jpg`,
      sameAs: [mapsUrl(siteConfig.address.googleMapsQuery)],
      openingHoursSpecification: siteConfig.services
        .filter((s) => s.day.includes("Sunday"))
        .length
        ? [
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
          ]
        : undefined,
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}#website`,
      name: siteConfig.name,
      url: siteConfig.url,
      publisher: { "@id": `${siteConfig.url}#church` },
      inLanguage: ["en", "ar"],
    },
    ...siteConfig.branches.map((branch, i) => ({
      "@type": "Church" as const,
      "@id": `${siteConfig.url}#branch-${branch.id || i}`,
      name: `${branch.name} — ${siteConfig.name}`,
      url: siteConfig.url,
      telephone: branch.phone || siteConfig.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: branch.address,
        addressCountry: "SS",
      },
      map: branch.mapUrl || mapsUrl(branch.address),
      parentOrganization: { "@id": `${siteConfig.url}#church` },
    })),
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