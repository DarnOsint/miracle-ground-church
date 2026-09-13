import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site";

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
    default: `${siteConfig.name} | Juba, South Sudan`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Miracle Ground International Church is a place of miracles, prayer and purpose in Juba, South Sudan. Join us for Sunday worship, midweek Bible study and life-changing community.",
  keywords: [
    "Miracle Ground International Church",
    "church",
    "Juba",
    "South Sudan",
    "worship",
    "prayer",
  ],
  openGraph: {
    title: siteConfig.name,
    description:
      "A place of miracles, prayer and purpose in Juba, South Sudan.",
    type: "website",
    locale: "en_US",
    images: [{ url: "/images/logo.jpg" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}