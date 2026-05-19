import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloating } from "@/components/ui/WhatsAppButton";
import { JsonLd } from "@/components/seo/JsonLd";
import { getLocalBusinessJsonLd, SITE_URL } from "@/lib/seo";
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
    default: `Sweet Bites (By Muskan) | Custom Cakes in Goa — ${site.domain}`,
    template: "%s | Sweet Bites Goa",
  },
  description:
    `Order custom birthday, wedding & bento cakes in Goa at ${site.domain}. 160+ creations by Muskan. WhatsApp ${site.phone} — delivery across Panaji, Margao & Goa.`,
  keywords: [
    "custom cakes Goa",
    "sweetbites.me",
    "Sweet Bites Muskan",
    "order cake WhatsApp Goa",
    "birthday cake Panaji",
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: `Sweet Bites | Custom Cakes Goa — ${site.domain}`,
    description:
      "Handcrafted customized cakes in Goa. Order on WhatsApp. Browse 160+ creations at sweetbites.me.",
    locale: "en_IN",
    type: "website",
    siteName: `${site.name} ${site.tagline}`,
    url: SITE_URL,
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
