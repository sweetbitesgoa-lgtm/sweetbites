import type { Metadata } from "next";
import { site } from "@/lib/content";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { WhatsAppIconInline } from "@/components/ui/WhatsAppButton";
import { WhatsAppOrderCard } from "@/components/order/WhatsAppOrderCard";
import { SeoContentSection } from "@/components/seo/SeoContentSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { contactSeo } from "@/lib/seo-content";
import { buildPageMetadata, getBreadcrumbJsonLd, getFaqPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact & studio hours",
  description:
    `We're in ${site.studioCity}, South Goa, open Tue–Sun. For cake orders, WhatsApp ${site.phone} — it's the fastest way to share photos and get a reply from Muskan.`,
  path: "/contact",
  keywords: ["Sweet Bites Velim", "cake shop Goa WhatsApp"],
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          getBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
          ...(contactSeo.faqs ? [getFaqPageJsonLd(contactSeo.faqs)] : []),
        ]}
      />
      <PageHero
        title={`Contact us — ${site.domain}`}
        description={`Cake orders on WhatsApp ${site.phone} only. Studio in ${site.studioCity}, Goa — ${site.hours}.`}
      >
        <Button href={getWhatsAppUrl()} variant="whatsapp" external>
          <WhatsAppIconInline className="h-5 w-5" />
          {site.phone}
        </Button>
      </PageHero>

      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="space-y-8">
            <div>
              <h2 className="font-display text-2xl font-semibold text-cocoa">
                Visit us
              </h2>
              <p className="mt-2 text-cocoa/75">{site.address}</p>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-sm font-semibold text-terracotta hover:underline"
              >
                Open in Google Maps →
              </a>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-cocoa">
                Hours
              </h2>
              <p className="mt-2 text-cocoa/75">{site.hours}</p>
              <p className="mt-1 text-sm text-cocoa/50">
                Closed Mondays. Cake orders via WhatsApp any day — we reply
                during studio hours.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-cocoa">
                Order & enquiries
              </h2>
              <ul className="mt-3 space-y-2 text-cocoa/75">
                <li>
                  <strong>WhatsApp (orders):</strong>{" "}
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-terracotta hover:underline"
                  >
                    {site.phone}
                  </a>
                </li>
                <li>
                  <strong>Call:</strong>{" "}
                  <a
                    href={`tel:+91${site.phoneRaw}`}
                    className="hover:text-terracotta transition-colors"
                  >
                    {site.phone}
                  </a>
                </li>
                <li>
                  <strong>Website:</strong>{" "}
                  <a
                    href={site.url}
                    className="font-semibold text-terracotta hover:underline"
                  >
                    {site.domain}
                  </a>
                </li>
                <li>
                  <a
                    href={site.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-terracotta transition-colors"
                  >
                    {site.instagramHandle} on Instagram
                  </a>
                </li>
              </ul>
            </div>
            </div>

          <WhatsAppOrderCard />
        </div>
      </section>

      <section className="bg-cocoa/5 py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-4 font-display text-xl font-semibold text-cocoa">
            Find Sweet Bites on the map — {site.studioCity}, Goa
          </h2>
          <div className="aspect-[21/9] w-full overflow-hidden rounded-2xl shadow-lg">
            <iframe
              title={`Sweet Bites custom cakes — ${site.studioCity}, Goa location`}
              src={site.mapsEmbedUrl}
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <SeoContentSection {...contactSeo} />
    </>
  );
}
