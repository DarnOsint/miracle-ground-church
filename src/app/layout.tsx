import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site";
import { JsonLd } from "@/components/json-ld";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `Miracle Ground International Church | English & Arabic Church in Juba, South Sudan`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Find an English-speaking church in South Sudan. Miracle Ground International Church offers Sunday English worship at 8:30 AM and Arabic worship at 10:30 AM in Juba, South Sudan — Atla Bara, along Juba University Giyada Road. Join us for life-changing worship, prayer and community.",
  keywords: [
    "English church in South Sudan",
    "English churches in South Sudan",
    "English speaking church Juba",
    "church in Juba",
    "churches in Juba South Sudan",
    "Sunday service Juba",
    "Christian church South Sudan",
    "Protestant church Juba",
    "gospel church South Sudan",
    "worship service Juba",
    "Miracle Ground International Church",
    "Arabic church Juba",
    "Bible study Juba",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: `${siteConfig.name} | English & Arabic Church in Juba, South Sudan`,
    description:
      "Find an English-speaking church in South Sudan. Sunday English worship at 8:30 AM and Arabic worship at 10:30 AM in Juba.",
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name,
    url: siteConfig.url,
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Juba, South Sudan`,
    description: "A place of miracles, prayer and purpose in Juba, South Sudan.",
    images: ["/images/og-image.png"],
  },
  category: "Church",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} antialiased`}
    >
      <body>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}