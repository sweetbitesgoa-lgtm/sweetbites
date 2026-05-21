import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  getAllOccasionLandings,
  occasionLandingPath,
} from "@/lib/occasion-landings";
import { site } from "@/lib/content";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { PageHero } from "@/components/ui/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildPageMetadata, getBreadcrumbJsonLd } from "@/lib/seo";
import { Button } from "@/components/ui/Button";
import { WhatsAppIconInline } from "@/components/ui/WhatsAppButton";

export const metadata: Metadata = buildPageMetadata({
  title: "Cakes by occasion in Goa",
  description: `Wedding, birthday, haldi, kids, anniversary & bento cakes in Goa — ${site.name} custom designs from ${site.studioCity}. Browse occasion guides and order on WhatsApp.`,
  path: "/occasions",
  keywords: [
    "cake by occasion Goa",
    "wedding cake Goa",
    "birthday cake Goa",
    "bento cake Goa",
    "Sweet Bites occasions",
  ],
});

export default function OccasionsIndexPage() {
  const landings = getAllOccasionLandings();

  return (
    <>
      <JsonLd
        data={[
          getBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Occasions", path: "/occasions" },
          ]),
        ]}
      />
      <PageHero
        title="Cakes for every occasion in Goa"
        description={`Choose your celebration — each guide links to real gallery photos, FAQs, and WhatsApp ordering from Muskan's kitchen in ${site.studioCity}.`}
      >
        <Button href={getWhatsAppUrl()} variant="whatsapp" external>
          <WhatsAppIconInline className="h-5 w-5" />
          Order on WhatsApp
        </Button>
        <Button href="/creations" variant="outline" className="rounded-md px-5">
          Full gallery
        </Button>
      </PageHero>

      <section className="bg-cream py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {landings.map((landing) => (
              <li key={landing.slug}>
                <Link
                  href={occasionLandingPath(landing.slug)}
                  className="location-card group flex h-full flex-col overflow-hidden rounded-2xl"
                >
                  <div className="relative aspect-[16/10] bg-cocoa/5">
                    <Image
                      src={landing.hero.image}
                      alt={landing.hero.imageAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-terracotta">
                      {landing.hero.badge}
                    </span>
                    <h2 className="mt-2 font-display text-xl font-semibold text-cocoa group-hover:text-terracotta">
                      {landing.hero.title}
                    </h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                      {landing.metaDescription.slice(0, 140)}…
                    </p>
                    <span className="mt-4 text-sm font-semibold text-terracotta">
                      Read guide →
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-12 text-center text-sm text-muted">
            Also browse{" "}
            <Link href="/locations" className="font-semibold text-terracotta hover:underline">
              delivery areas
            </Link>
            , the{" "}
            <Link href="/cakes-menu" className="font-semibold text-terracotta hover:underline">
              ready-made menu
            </Link>
            , and our{" "}
            <Link href="/blog" className="font-semibold text-terracotta hover:underline">
              journal
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
