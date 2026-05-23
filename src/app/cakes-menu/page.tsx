import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { CakesMenuView } from "@/components/menu/CakesMenuView";
import {
  CakesMenuEnrichedAbove,
  CakesMenuPageHeader,
} from "@/components/menu/CakesMenuEnrichedSections";
import { SeoContentSection } from "@/components/seo/SeoContentSection";
import {
  CAKES_MENU_DESCRIPTION,
  CAKES_MENU_HERO_ALT,
  CAKES_MENU_HERO_IMAGE,
  CAKES_MENU_KEYWORDS,
  CAKES_MENU_PAGE_TITLE,
  cakesMenuFaqs,
  getCakesMenuHowToJsonLd,
  getCakesMenuJsonLd,
  getCakesMenuWebPageJsonLd,
} from "@/lib/cakes-menu";
import { cakesMenuSeo } from "@/lib/seo-content";
import { buildPageMetadata, getBreadcrumbJsonLd, getFaqPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: CAKES_MENU_PAGE_TITLE,
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
          getCakesMenuWebPageJsonLd(),
          getCakesMenuHowToJsonLd(),
          getFaqPageJsonLd([...cakesMenuFaqs]),
        ]}
      />
      <div className="cakes-menu-page min-h-screen text-cocoa">
        <CakesMenuPageHeader />
        <CakesMenuEnrichedAbove />
        <CakesMenuView />
        <SeoContentSection {...cakesMenuSeo} className="bg-cream/40" />
      </div>
    </>
  );
}
