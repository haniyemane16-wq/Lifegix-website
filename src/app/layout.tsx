import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lifegix — Websites & AI Automatisering voor Lokale Bedrijven",
  description:
    "Lifegix bouwt professionele websites en AI-automatiseringen voor lokale bedrijven in de regio Warnsveld. Slimmer werken, meer klanten, minder gedoe. Binnen 1–2 weken live.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Lifegix — Websites & AI Automatisering voor Lokale Bedrijven",
    description:
      "Professionele websites en AI-agents voor lokale ondernemers. Binnen 1–2 weken live. Gevestigd in Warnsveld.",
    url: "https://lifegix.nl",
    siteName: "Lifegix",
    locale: "nl_NL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lifegix — Websites & AI Automatisering",
    description: "Professionele websites en AI-agents voor lokale ondernemers. Binnen 1–2 weken live.",
  },
  metadataBase: new URL("https://lifegix.nl"),
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Lifegix",
  description: "Websites en AI-automatisering voor lokale bedrijven",
  url: "https://lifegix.nl",
  email: "haniyemane16@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Warnsveld",
    addressRegion: "Gelderland",
    addressCountry: "NL",
  },
  areaServed: "Nederland",
  serviceType: ["Website bouwen", "AI automatisering", "AI agents"],
  priceRange: "€€",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${geistSans.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#0a0a0f] text-white">
        {children}
      </body>
    </html>
  );
}
