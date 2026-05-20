import Image from "next/image";
import Link from "next/link";
import { getFeaturedCreations } from "@/lib/catalog";
import { formatCreationImageAlt } from "@/lib/creation-seo";
import { site } from "@/lib/content";
import type { LocationPage } from "@/lib/locations";
import { getLocationBySlug, locationPath } from "@/lib/locations";
import { getLocationWhatsAppUrl } from "@/lib/whatsapp";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { WhatsAppIconInline } from "@/components/ui/WhatsAppButton";

type LocationPageViewProps = {
  location: LocationPage;
};

export function LocationPageView({ location }: LocationPageViewProps) {
  const featured = getFeaturedCreations(4);
  const nearby = location.nearbySlugs
    .map((s) => getLocationBySlug(s))
    .filter((l): l is LocationPage => Boolean(l));

  return (
    <>
      <PageHero title={location.headline} description={location.subheadline}>
        <div className="flex flex-wrap justify-center gap-3">
          <Button
            href={getLocationWhatsAppUrl(location.name)}
            variant="whatsapp"
            external
          >
            <WhatsAppIconInline className="h-5 w-5" />
            Order for {location.name}
          </Button>
          <Button href={location.creationsHref} variant="primary">
            {location.creationsLabel}
          </Button>
        </div>
      </PageHero>

      <section className="bg-cream py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 text-lg leading-relaxed text-cocoa/75">
            {location.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <ul className="mt-10 grid gap-4 sm:grid-cols-3">
            {location.highlights.map((item) => (
              <li
                key={item.title}
                className="rounded-2xl border border-cocoa/8 bg-white p-5 shadow-sm"
              >
                <h2 className="font-display text-base font-semibold text-cocoa">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-cocoa/65">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-semibold text-cocoa sm:text-3xl">
            Cake inspiration for {location.name}
          </h2>
          <p className="mt-2 max-w-2xl text-cocoa/70">
            Real designs from our Goa gallery — each can be customised for your
            celebration in {location.name}.
          </p>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((creation) => (
              <li key={creation.slug}>
                <Link
                  href={`/creations/${creation.slug}`}
                  className="group block overflow-hidden rounded-2xl bg-cream shadow-md transition-shadow hover:shadow-lg"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={creation.cover}
                      alt={formatCreationImageAlt(creation)}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <p className="p-3 font-display text-sm font-semibold text-cocoa group-hover:text-terracotta">
                    {creation.title}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-center">
            <Link
              href={location.creationsHref}
              className="text-sm font-semibold text-terracotta hover:underline"
            >
              View full gallery →
            </Link>
          </p>
        </div>
      </section>

      {nearby.length > 0 && (
        <section className="border-t border-cocoa/8 bg-sage-light py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-xl font-semibold text-cocoa">
              More areas in {location.region}
            </h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {nearby.map((loc) => (
                <li key={loc.slug}>
                  <Link
                    href={locationPath(loc.slug)}
                    className="inline-flex rounded-full border border-sage/25 bg-white px-4 py-2 text-sm font-semibold text-cocoa transition-colors hover:border-terracotta hover:text-terracotta"
                  >
                    Cakes in {loc.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/locations"
                  className="inline-flex rounded-full border border-cocoa/15 bg-cream px-4 py-2 text-sm font-semibold text-cocoa/70 hover:text-terracotta"
                >
                  All Goa areas →
                </Link>
              </li>
            </ul>
          </div>
        </section>
      )}

      <section className="bg-cream py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-semibold text-cocoa">
            FAQs — cakes in {location.name}
          </h2>
          <dl className="mt-6 space-y-6">
            {location.faqs.map((faq) => (
              <div key={faq.question}>
                <dt className="font-semibold text-cocoa">{faq.question}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-cocoa/75">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-terracotta py-14 text-center sm:py-16">
        <div className="mx-auto max-w-xl px-4">
          <h2 className="font-display text-2xl font-semibold text-white">
            Book your {location.name} cake on WhatsApp
          </h2>
          <p className="mt-3 text-white/85">
            {site.name} · {site.domain} · Studio in {site.studioCity}
          </p>
          <Button
            href={getLocationWhatsAppUrl(location.name)}
            variant="whatsapp"
            external
            className="mt-6 !bg-white !text-terracotta hover:!bg-cream"
          >
            Message {site.phone}
          </Button>
        </div>
      </section>
    </>
  );
}
