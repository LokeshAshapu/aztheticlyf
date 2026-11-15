import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Analytics } from "@/components/site/Analytics";
import { site } from "@/content/site";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  fallback: ["Iowan Old Style", "Times New Roman", "serif"],
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
  fallback: ["system-ui", "sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Aztheticlyf — Aesthetic Gift Studio | Hampers & Korean Stationery",
    template: "%s · Aztheticlyf",
  },
  description: site.description,
  keywords: [
    "Aztheticlyf",
    "aesthetic gift studio",
    "Korean stationery India",
    "gift hampers Chennai",
    "anti-tarnish jewellery",
    "return gifts",
    "wholesale stationery India",
    "Tara Luxe",
  ],
  authors: [{ name: "Aztheticlyf" }],
  creator: "Aztheticlyf",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: site.name,
    title: "Aztheticlyf — Gifts worth keeping the ribbon on",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Aztheticlyf — Gifts worth keeping the ribbon on",
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#fbf5ec",
  colorScheme: "light",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Store",
  name: "Aztheticlyf",
  alternateName: "Aztheticlyf — Aesthetic Gift Studio",
  description: site.description,
  url: site.url,
  telephone: site.whatsapp.display,
  image: `${site.url}/opengraph-image`,
  sameAs: [site.instagram.url, site.jewelleryLabel.url],
  address: {
    "@type": "PostalAddress",
    addressLocality: site.location.city,
    addressRegion: site.location.region,
    addressCountry: "IN",
  },
  areaServed: "Worldwide",
  knowsAbout: [
    "Gift hampers",
    "Korean stationery",
    "Accessories",
    "Anti-tarnish jewellery",
    "Return gifts",
    "Wholesale giftware",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <body className="antialiased">
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important;clip-path:none!important}`}</style>
        </noscript>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[80] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:text-cream"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
