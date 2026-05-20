import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { CreationsGrid } from "@/components/creations/CreationsGrid";
import { SeoContentSection } from "@/components/seo/SeoContentSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { creationsSeo } from "@/lib/seo-content";
import { buildPageMetadata, getBreadcrumbJsonLd, getFaqPageJsonLd } from "@/lib/seo";
import { getAllCreations } from "@/lib/catalog";
import { site } from "@/lib/content";

export const metadata: Metadata = buildPageMetadata({
  title: "Cake gallery",
  description:
    "Photos from real orders — birthdays, weddings, kids themes, bento tins and more. Tap a cake you like and WhatsApp Muskan to order something similar.",
  path: "/creations",
  keywords: ["cake designs Goa", "birthday cake ideas"],
});

function CreationsFallback() {
  return (
    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="aspect-[4/3] animate-pulse rounded-2xl bg-cocoa/10"
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
      <PageHero
        title="Custom cake creations in Goa"
        description={`Explore ${count}+ real cakes at sweetbites.me — birthday, wedding, bento & kids designs by Muskan. Book on WhatsApp ${site.phone}.`}
      >
        <Button href={getWhatsAppUrl()} variant="whatsapp" external>
          Order on WhatsApp
        </Button>
      </PageHero>
      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Suspense fallback={<CreationsFallback />}>
            <CreationsGrid />
          </Suspense>
          <p className="mt-12 text-center text-sm text-cocoa/60">
            Can&apos;t find the perfect design?{" "}
            <Link href="/order" className="font-semibold text-terracotta hover:underline">
              Order on WhatsApp
            </Link>{" "}
            with your reference photo — we&apos;ll create something unique.
          </p>
        </div>
      </section>
      <SeoContentSection {...creationsSeo} />
    </>
  );
}
