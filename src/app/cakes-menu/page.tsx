import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { CakesMenuView } from "@/components/menu/CakesMenuView";
import {
  CakesMenuEnrichedAbove,
  CakesMenuPageHeader,
} from "@/components/menu/CakesMenuEnrichedSections";
import {
  CAKES_MENU_DESCRIPTION,
  CAKES_MENU_HERO_ALT,
  CAKES_MENU_HERO_IMAGE,
  CAKES_MENU_KEYWORDS,
  cakesMenuFaqs,
  getCakesMenuJsonLd,
} from "@/lib/cakes-menu";
import { buildPageMetadata, getBreadcrumbJsonLd, getFaqPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: "Cakes menu — ready-made flavours in Goa",
    description: CAKES_MENU_DESCRIPTION,
    path: "/cakes-menu",
    keywords: [...CAKES_MENU_KEYWORDS],
    ogImage: CAKES_MENU_HERO_IMAGE,
    ogImageAlt: CAKES_MENU_HERO_ALT,
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
          getFaqPageJsonLd([...cakesMenuFaqs]),
        ]}
      />
      <div className="cakes-menu-page min-h-screen bg-[#fff9f4] text-cocoa">
        <CakesMenuPageHeader />
        <CakesMenuEnrichedAbove />
        <CakesMenuView />
      </div>
    </>
  );
}
