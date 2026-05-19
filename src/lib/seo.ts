import type { Metadata } from "next";
import { site } from "@/lib/content";
import type { Creation } from "@/lib/catalog";

export const SITE_URL = site.url;

const defaultKeywords = [
  "custom cakes Goa",
  "birthday cake Goa",
  "wedding cake Panaji",
  "bento cake Goa",
  "cake delivery North Goa",
  "Sweet Bites Muskan",
  "home baker Goa",
  "designer cakes Margao",
  "eggless cake Goa",
  "anniversary cake Goa",
  "sweetbites.me",
  "order cake WhatsApp Goa",
  "cake shop Panaji",
];

type PageMetaInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  ogImage?: string;
  noIndex?: boolean;
};

export function buildPageMetadata({
  title,
  description,
  path = "",
  keywords = [],
  ogImage = "/images/wedding-cake/659772208_18092845286170730_8159590204106277210_n..webp",
  noIndex = false,
}: PageMetaInput): Metadata {
  const url = `${SITE_URL.replace(/\/$/, "")}${path}`;
  const pageTitle =
    title.includes("Sweet Bites") || title.includes(site.name)
      ? title
      : title;

  return {
    title: pageTitle,
    description,
    keywords: [...new Set([...keywords, ...defaultKeywords])],
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title: pageTitle.includes(site.name)
        ? pageTitle
        : `${pageTitle} | ${site.name} Goa`,
      description,
      url,
      siteName: `${site.name} ${site.tagline}`,
      locale: "en_IN",
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: pageTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle.includes(site.name)
        ? pageTitle
        : `${pageTitle} | ${site.name} Goa`,
      description,
      images: [ogImage],
    },
  };
}

export function getLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Bakery",
    "@id": `${SITE_URL}/#bakery`,
    name: site.name,
    description:
      "Custom birthday, wedding, bento and designer cakes handcrafted in Goa by Muskan. Order via WhatsApp at +91 78880 42837. Visit sweetbites.me for 160+ creations.",
    url: SITE_URL,
    telephone: site.phone,
    email: site.email,
    image: `${SITE_URL}/images/wedding-cake/659772208_18092845286170730_8159590204106277210_n..webp`,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address,
      addressLocality: "Panaji",
      addressRegion: "Goa",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 15.4909,
      longitude: 73.827,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "10:00",
        closes: "19:00",
      },
    ],
    priceRange: "₹₹",
    servesCuisine: "Bakery",
    areaServed: [
      { "@type": "City", name: "Panaji" },
      { "@type": "State", name: "Goa" },
    ],
    sameAs: [site.instagram],
    potentialAction: {
      "@type": "OrderAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `https://wa.me/${site.whatsapp}`,
        actionPlatform: [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform",
        ],
      },
    },
  };
}

export function getBreadcrumbJsonLd(
  items: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL.replace(/\/$/, "")}${item.path}`,
    })),
  };
}

export function getCreationProductJsonLd(creation: Creation) {
  const url = `${SITE_URL.replace(/\/$/, "")}/creations/${creation.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: creation.title,
    description: creation.description,
    image: creation.images.map((img) => `${SITE_URL.replace(/\/$/, "")}${img}`),
    url,
    brand: {
      "@type": "Brand",
      name: site.name,
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      availability: "https://schema.org/PreOrder",
      url: `https://wa.me/${site.whatsapp}`,
      seller: {
        "@type": "Bakery",
        name: site.name,
      },
    },
    category:
      creation.occasion[0]?.replace(/-/g, " ") ?? "Custom cake",
  };
}

export function getFaqPageJsonLd(
  faqs: { question: string; answer: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
