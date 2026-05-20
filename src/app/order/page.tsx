import type { Metadata } from "next";
import { OrderBookingPage } from "@/components/order/OrderBookingPage";
import { SeoContentSection } from "@/components/seo/SeoContentSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { orderSeo } from "@/lib/seo-content";
import { buildPageMetadata, getBreadcrumbJsonLd, getFaqPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Book a cake on WhatsApp",
  description:
    "No checkout forms — tell Muskan your date, guest count and theme on WhatsApp. She replies with flavour ideas, size and a clear quote for Goa delivery or pickup.",
  path: "/order",
  keywords: ["book cake WhatsApp", "cake quote Goa"],
});

export default function OrderPage() {
  return (
    <>
      <JsonLd
        data={[
          getBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Book on WhatsApp", path: "/order" },
          ]),
          ...(orderSeo.faqs ? [getFaqPageJsonLd(orderSeo.faqs)] : []),
        ]}
      />
      <OrderBookingPage />
      <SeoContentSection {...orderSeo} />
    </>
  );
}
