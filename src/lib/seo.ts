import type { Metadata } from "next";
import { site } from "@/lib/content";
import type { Creation } from "@/lib/catalog";
import { getFeaturedCreations } from "@/lib/catalog";
import { formatCreationImageAlt } from "@/lib/creation-seo";
import { siteMedia } from "@/lib/site-media";

export const SITE_URL = site.url;

/** Default share image — public/og.avif */
export const DEFAULT_OG_IMAGE = "/images/og.avif";

const defaultKeywords = [
  "Sweet Bites Goa",
  "custom cakes Goa",
  "Muskan baker Goa",
];

type PageMetaInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  ogImage?: string;
  ogImageAlt?: string;
  noIndex?: boolean;
};

function resolveOgUrl(ogImage: string): string {
  if (ogImage.startsWith("http")) return ogImage;
  const base = SITE_URL.replace(/\/$/, "");
  return `${base}${ogImage.startsWith("/") ? ogImage : `/${ogImage}`}`;
}

function formatTitle(title: string): string {
  const lower = title.toLowerCase();
  if (lower.includes("sweet bites") || lower.includes(site.name.toLowerCase())) {
    return title;
  }
  return `${title} | ${site.name}`;
}

export function buildPageMetadata({
  title,
  description,
  path = "",
  keywords = [],
  ogImage = DEFAULT_OG_IMAGE,
  ogImageAlt,
  noIndex = false,
}: PageMetaInput): Metadata {
  const url = `${SITE_URL.replace(/\/$/, "")}${path}`;
  const pageTitle = formatTitle(title);
  const imageUrl = resolveOgUrl(ogImage);
  const imageAlt = ogImageAlt ?? `${site.name} — ${title}`;

  return {
    title: pageTitle,
    description,
    keywords: [...new Set([...keywords, ...defaultKeywords])],
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title: pageTitle,
      description,
      url,
      siteName: `${site.name} ${site.tagline}`,
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [imageUrl],
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
      `Muskan runs Sweet Bites from ${site.studioCity}, South Goa — custom birthday, wedding and bento cakes, made to order. Browse sweetbites.me and message on WhatsApp to book.`,
    url: SITE_URL,
    telephone: site.phone,
    email: site.email,
    image: resolveOgUrl(DEFAULT_OG_IMAGE),
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address,
      addressLocality: site.studioCity,
      addressRegion: "Goa",
      postalCode: site.postalCode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 15.2394,
      longitude: 73.9452,
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
      { "@type": "City", name: site.studioCity },
      { "@type": "City", name: "Margao" },
      { "@type": "City", name: "Panaji" },
      { "@type": "City", name: "Mapusa" },
      { "@type": "City", name: "Calangute" },
      { "@type": "City", name: "Anjuna" },
      { "@type": "City", name: "Colva" },
      { "@type": "State", name: "Goa" },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.stats.rating,
      reviewCount: site.stats.reviewCount,
      bestRating: 5,
    },
    sameAs: [
      site.instagram,
      site.googleBusinessUrl,
      ...(site.googleReviewUrl ? [site.googleReviewUrl] : []),
    ],
    hasMap: site.mapsUrl,
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

function absoluteUrl(path: string): string {
  const base = SITE_URL.replace(/\/$/, "");
  return path.startsWith("http") ? path : `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Homepage featured creations — rich results gallery */
export function getHomeFeaturedItemListJsonLd(limit = 8) {
  const items = getFeaturedCreations(limit);
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Featured custom cakes in Goa — ${site.name}`,
    description:
      "Real birthday, wedding, and celebration cakes handcrafted by Muskan and available to order on WhatsApp.",
    numberOfItems: items.length,
    itemListElement: items.map((creation, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: absoluteUrl(`/creations/${creation.slug}`),
      item: {
        "@type": "Product",
        name: creation.title,
        description: creation.description,
        image: absoluteUrl(creation.cover),
        url: absoluteUrl(`/creations/${creation.slug}`),
      },
    })),
  };
}

/** Process reel videos surfaced on the homepage */
export function getHomeVideoObjectJsonLd(limit = 3) {
  const withVideo = getFeaturedCreations(12).filter((c) => c.video).slice(0, limit);
  const base = SITE_URL.replace(/\/$/, "");

  const videos =
    withVideo.length > 0
      ? withVideo.map((c) => ({
          "@type": "VideoObject" as const,
          name: `${c.title} — cake decorating reel`,
          description: formatCreationImageAlt(c),
          thumbnailUrl: absoluteUrl(c.cover),
          contentUrl: absoluteUrl(c.video!),
          embedUrl: absoluteUrl(c.video!),
          publisher: {
            "@type": "Organization",
            name: site.name,
            url: base,
          },
        }))
      : [
          {
            "@type": "VideoObject" as const,
            name: `Custom cakes in Goa — ${site.name}`,
            description: `Behind-the-scenes cake decorating by Muskan in ${site.studioCity}, Goa.`,
            thumbnailUrl: absoluteUrl(siteMedia.heroPoster),
            contentUrl: absoluteUrl(siteMedia.heroVideo),
            embedUrl: absoluteUrl(siteMedia.heroVideo),
            publisher: {
              "@type": "Organization",
              name: site.name,
              url: base,
            },
          },
        ];

  return videos;
}

/** Location landing page — WebPage + linked bakery */
export function getLocationWebPageJsonLd(input: {
  placeName: string;
  path: string;
  title: string;
  description: string;
}) {
  const url = absoluteUrl(input.path);
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    name: input.title,
    description: input.description,
    url,
    inLanguage: "en-IN",
    isPartOf: { "@type": "WebSite", name: site.name, url: SITE_URL },
    about: {
      "@type": "Bakery",
      name: `${site.name} — ${input.placeName}`,
      "@id": `${SITE_URL}/#bakery`,
    },
    mainEntity: { "@id": `${SITE_URL}/#bakery` },
  };
}

/** Service offerings named for local search (e.g. birthday cake Velim) */
export function getLocationServicesJsonLd(
  placeName: string,
  services: { title: string; description: string }[],
) {
  return services.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: { "@id": `${SITE_URL}/#bakery` },
    areaServed: {
      "@type": "Place",
      name: `${placeName}, Goa, India`,
    },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `https://wa.me/${site.whatsapp}`,
      servicePhone: site.phone,
    },
  }));
}

/** Featured cakes on a location page */
export function getLocationFeaturedItemListJsonLd(
  placeName: string,
  creations: Creation[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Custom cakes in ${placeName}, Goa — ${site.name}`,
    numberOfItems: creations.length,
    itemListElement: creations.map((creation, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: absoluteUrl(`/creations/${creation.slug}`),
      item: {
        "@type": "Product",
        name: creation.title,
        image: absoluteUrl(creation.cover),
        url: absoluteUrl(`/creations/${creation.slug}`),
      },
    })),
  };
}
