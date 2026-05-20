import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloating } from "@/components/ui/WhatsAppButton";
import { JsonLd } from "@/components/seo/JsonLd";
import { DEFAULT_OG_IMAGE, getLocalBusinessJsonLd, SITE_URL } from "@/lib/seo";
import { site } from "@/lib/content";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `Sweet Bites by Muskan — custom cakes in Goa`,
    template: "%s | Sweet Bites",
  },
  description:
    "Muskan bakes birthday, wedding and bento cakes to order across Goa. See past work on sweetbites.me, then message on WhatsApp to book.",
  keywords: [
    "Sweet Bites Goa",
    "custom cakes Goa",
    "Muskan baker Goa",
    "sweetbites.me",
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "Sweet Bites by Muskan — custom cakes in Goa",
    description:
      "Handmade cakes for birthdays, weddings and small celebrations. Browse the gallery, then book on WhatsApp.",
    locale: "en_IN",
    type: "website",
    siteName: `${site.name} ${site.tagline}`,
    url: SITE_URL,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Sweet Bites by Muskan — custom cakes in Goa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sweet Bites by Muskan — custom cakes in Goa",
    description:
      "Handmade cakes for birthdays, weddings and small celebrations. Browse the gallery, then book on WhatsApp.",
    images: [DEFAULT_OG_IMAGE],
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      className={`${fraunces.variable} ${dmSans.variable} h-full scroll-smooth`}
    >
      <head>
        <JsonLd data={getLocalBusinessJsonLd()} />
      </head>
      <body className="min-h-full flex flex-col font-sans antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloating />
      </body>
    </html>
  );
}
