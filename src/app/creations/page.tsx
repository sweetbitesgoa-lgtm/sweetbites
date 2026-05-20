import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { SecondaryPageHero } from "@/components/layout/SecondaryPageHero";
import { CreationsGrid } from "@/components/creations/CreationsGrid";
import { SeoContentSection } from "@/components/seo/SeoContentSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { creationsSeo } from "@/lib/seo-content";
import { buildPageMetadata, getBreadcrumbJsonLd, getFaqPageJsonLd } from "@/lib/seo";
import { getAllCreations } from "@/lib/catalog";
import { site } from "@/lib/content";
import { siteMedia } from "@/lib/site-media";

export const metadata: Metadata = buildPageMetadata({
  title: "Cake gallery",
  description:
    "Photos from real orders — birthdays, weddings, kids themes, bento tins and more. Tap a cake you like and WhatsApp Muskan to order something similar.",
  path: "/creations",
  keywords: ["cake designs Goa", "birthday cake ideas"],
});

function CreationsFallback() {
  return (
    <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="aspect-[4/3] animate-pulse rounded-lg bg-cream ring-1 ring-line"
        />
      ))}
    </div>
  );
}

export default function CreationsPage() {
  const count = getAllCreations().length;

  return (
    <>
      <JsonLd
        data={[
          getBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Creations", path: "/creations" },
          ]),
          ...(creationsSeo.faqs ? [getFaqPageJsonLd(creationsSeo.faqs)] : []),
        ]}
      />
      <SecondaryPageHero
        label="Gallery"
        title="Cakes we&apos;ve actually made"
        description={`Every photo here is a real order — ${count}+ designs from birthdays, weddings, bentos, and Goa celebrations. Find one that feels like yours, then message on WhatsApp.`}
        image={{
          src: siteMedia.showcaseImage,
          alt: `Custom cake from the Sweet Bites gallery — ${site.name}, Goa`,
          priority: true,
        }}
      >
        <Button href={getWhatsAppUrl()} variant="whatsapp" external>
          WhatsApp Muskan
        </Button>
        <Button href="/order" variant="outline" className="rounded-md px-5">
          How to order
        </Button>
      </SecondaryPageHero>

      <section className="border-b border-line bg-surface py-14 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Suspense fallback={<CreationsFallback />}>
            <CreationsGrid />
          </Suspense>
          <p className="mt-14 max-w-xl border-t border-line pt-8 text-sm leading-relaxed text-muted">
            Don&apos;t see the perfect match?{" "}
            <Link href="/order" className="font-medium text-cocoa underline decoration-terracotta/40 underline-offset-4 hover:decoration-terracotta">
              Send a reference photo on WhatsApp
            </Link>{" "}
            — we&apos;ll sketch something that fits your day and budget.
          </p>
        </div>
      </section>

      <SeoContentSection {...creationsSeo} className="border-t border-line bg-cream/50" />
    </>
  );
}
