import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { SeasonalBanner } from "@/components/home/SeasonalBanner";
import { TrustStrip } from "@/components/home/TrustStrip";
import { OccasionQuickBook } from "@/components/home/OccasionQuickBook";
import { OccasionCards } from "@/components/home/OccasionCards";
import { FeaturedCakes } from "@/components/home/FeaturedCakes";
import { MeetMuskan } from "@/components/home/MeetMuskan";
import { HowItWorks } from "@/components/home/HowItWorks";
import { PricingBand } from "@/components/home/PricingBand";
import { LocationSeoBlocks } from "@/components/home/LocationSeoBlocks";
import { ReelStrip } from "@/components/home/ReelStrip";
import { ProcessStrip } from "@/components/home/ProcessStrip";
import { ShowcaseSection } from "@/components/home/ShowcaseSection";
import { CakeScrollGallery } from "@/components/home/CakeScrollGallery";
import { SocialProof } from "@/components/home/SocialProof";
import { Testimonials } from "@/components/home/Testimonials";
import { InstagramSection } from "@/components/home/InstagramSection";
import { OrderGuideTeaser } from "@/components/home/OrderGuideTeaser";
import { FaqSection } from "@/components/home/FaqSection";
import { HomeSeoCollapsible } from "@/components/home/HomeSeoCollapsible";
import { CtaBanner } from "@/components/home/CtaBanner";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqs } from "@/lib/content";
import { homeSeo } from "@/lib/seo-content";
import {
  buildPageMetadata,
  getFaqPageJsonLd,
  getHomeFeaturedItemListJsonLd,
  getHomeVideoObjectJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Sweet Bites by Muskan — custom cakes in Goa",
  description:
    "Birthday, wedding and bento cakes baked to order across Goa. Browse real past work, then message Muskan on WhatsApp to check dates and get a quote.",
  path: "/",
  keywords: [
    "birthday cake Goa",
    "wedding cake Goa delivery",
    "custom cake Margao",
    "custom cake Calangute",
    "sweet bites by muskan instagram",
    "cake delivery North South Goa",
    "WhatsApp cake order",
  ],
});

export default function Home() {
  return (
    <>
      <JsonLd
        data={[
          getFaqPageJsonLd([...faqs, ...(homeSeo.faqs ?? [])]),
          getHomeFeaturedItemListJsonLd(8),
          ...getHomeVideoObjectJsonLd(3),
        ]}
      />
      <Hero />
      <SeasonalBanner />
      <TrustStrip />
      <OccasionQuickBook />
      <OccasionCards />
      <FeaturedCakes />
      <MeetMuskan />
      <HowItWorks />
      <PricingBand />
      <LocationSeoBlocks />
      <ReelStrip />
      <ProcessStrip />
      <ShowcaseSection />
      <SocialProof />
      <Testimonials />
      <InstagramSection />
      <CakeScrollGallery />
      <OrderGuideTeaser />
      <FaqSection />
      <HomeSeoCollapsible />
      <CtaBanner />
    </>
  );
}
