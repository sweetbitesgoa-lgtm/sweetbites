import type { Metadata } from "next";
import { getAllLocations } from "@/lib/locations";
import { site, goaReach } from "@/lib/content";
import { LocationsIndexView } from "@/components/locations/LocationsIndexView";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildPageMetadata, getBreadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Custom cake delivery areas in Goa",
  description:
    `Sweet Bites delivers custom cakes across Goa — Panaji, Margao, Calangute, Mapusa, Vasco, Velim and more. Pickup from ${site.studioCity}. Order on WhatsApp.`,
  path: "/locations",
  keywords: [
    "cake delivery Goa areas",
    "custom cake locations Goa",
    "Sweet Bites delivery",
    "cake delivery North Goa",
    "cake delivery South Goa",
    "Velim bakery pickup",
    "birthday cake delivery Goa",
  ],
});

export default function LocationsIndexPage() {
  const locations = getAllLocations();
  const north = locations.filter((l) => l.region === "North Goa");
  const south = locations.filter((l) => l.region === "South Goa");
  const studio = locations.find((l) => l.isStudio);

  return (
    <>
      <JsonLd
        data={[
          getBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Locations", path: "/locations" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: `${site.name} — Cake delivery areas in Goa`,
            description: goaReach.heroLead,
            url: `${site.url.replace(/\/$/, "")}/locations`,
            mainEntity: {
              "@type": "ItemList",
              itemListElement: locations.map((loc, i) => ({
                "@type": "ListItem",
                position: i + 1,
                name: `Custom cakes in ${loc.name}, Goa`,
                url: `${site.url.replace(/\/$/, "")}/locations/${loc.slug}`,
              })),
            },
          },
        ]}
      />
      <LocationsIndexView north={north} south={south} studio={studio} />
    </>
  );
}
