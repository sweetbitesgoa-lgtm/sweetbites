import type { Metadata } from "next";
import Link from "next/link";
import { getAllLocations, locationPath } from "@/lib/locations";
import { site } from "@/lib/content";
import { PageHero } from "@/components/ui/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildPageMetadata, getBreadcrumbJsonLd } from "@/lib/seo";
import { Button } from "@/components/ui/Button";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = buildPageMetadata({
  title: "Custom cake delivery areas in Goa",
  description:
    `Sweet Bites delivers custom cakes across Goa — Panaji, Margao, Calangute, Mapusa, Vasco, Velim and more. Pickup from ${site.studioCity}. Order on WhatsApp.`,
  path: "/locations",
  keywords: [
    "cake delivery Goa areas",
    "custom cake locations Goa",
    "Sweet Bites delivery",
  ],
});

export default function LocationsIndexPage() {
  const locations = getAllLocations();
  const north = locations.filter((l) => l.region === "North Goa");
  const south = locations.filter((l) => l.region === "South Goa");

  return (
    <>
      <JsonLd
        data={[
          getBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Locations", path: "/locations" },
          ]),
        ]}
      />
      <PageHero
        title="Custom cakes across Goa"
        description={`We bake in ${site.studioCity} and deliver to major towns and beaches. Choose your area for local details and WhatsApp ordering.`}
      >
        <Button href={getWhatsAppUrl()} variant="whatsapp" external>
          Order on WhatsApp
        </Button>
      </PageHero>

      <section className="bg-cream py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <LocationGroup title="North Goa" locations={north} />
          <LocationGroup title="South Goa" locations={south} className="mt-14" />
        </div>
      </section>
    </>
  );
}

function LocationGroup({
  title,
  locations,
  className = "",
}: {
  title: string;
  locations: ReturnType<typeof getAllLocations>;
  className?: string;
}) {
  return (
    <div className={className}>
      <h2 className="font-display text-2xl font-semibold text-cocoa">{title}</h2>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {locations.map((loc) => (
          <li key={loc.slug}>
            <Link
              href={locationPath(loc.slug)}
              className="flex h-full flex-col rounded-2xl border border-cocoa/8 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-terracotta/25 hover:shadow-md"
            >
              <span className="text-xs font-bold uppercase tracking-wider text-terracotta">
                {loc.region}
                {loc.isStudio ? " · Kitchen" : ""}
              </span>
              <span className="mt-2 font-display text-xl font-semibold text-cocoa">
                {loc.name}
              </span>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-cocoa/65">
                {loc.metaDescription.slice(0, 120)}…
              </p>
              <span className="mt-4 text-sm font-semibold text-terracotta">
                View {loc.name} →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
