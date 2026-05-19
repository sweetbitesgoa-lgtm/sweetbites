import { homeSeo } from "@/lib/seo-content";
import { SeoContentSection } from "@/components/seo/SeoContentSection";

export function HomeSeoIntro() {
  return <SeoContentSection {...homeSeo} className="bg-cream" />;
}
