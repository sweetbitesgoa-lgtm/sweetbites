import { velimLocationContent } from "@/lib/location-content/velim";
import type { Creation } from "@/lib/catalog";
import { RichLocationPage } from "@/components/locations/RichLocationPage";

type VelimLocationPageProps = {
  featured: Creation[];
  heroImages?: string[];
};

/** @deprecated Use RichLocationPage with velimLocationContent */
export function VelimLocationPage({ featured, heroImages }: VelimLocationPageProps) {
  return (
    <RichLocationPage
      content={velimLocationContent}
      featured={featured}
      heroImages={heroImages}
    />
  );
}
