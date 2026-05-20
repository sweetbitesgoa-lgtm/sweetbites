import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { CakesMenuView } from "@/components/menu/CakesMenuView";
import { site } from "@/lib/content";
import {
  CAKES_MENU_DESCRIPTION,
  CAKES_MENU_KEYWORDS,
  CAKES_MENU_IMAGE,
  getCakesMenuJsonLd,
} from "@/lib/cakes-menu";
import { buildPageMetadata, getBreadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: "Cakes menu — ready-made flavours in Goa",
    description: CAKES_MENU_DESCRIPTION,
    path: "/cakes-menu",
    keywords: [...CAKES_MENU_KEYWORDS],
    ogImage: CAKES_MENU_IMAGE,
    ogImageAlt: `${site.name} cakes menu — Regular, Fruit, Premium & Special cakes in Goa`,
  }),
};

export default function CakesMenuPage() {
  return (
    <>
      <JsonLd
        data={[
          getBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Cakes menu", path: "/cakes-menu" },
          ]),
          getCakesMenuJsonLd(),
        ]}
      />
      <CakesMenuView />
    </>
  );
}
