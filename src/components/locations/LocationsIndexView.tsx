"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  deliveryAreas,
  goaReach,
  orderSteps,
  site,
  trustPillars,
} from "@/lib/content";
import type { LocationPage } from "@/lib/locations";
import { locationPath } from "@/lib/locations";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { ReviewsNote } from "@/components/home/ReviewsNote";
import { Button } from "@/components/ui/Button";
import { WhatsAppIconInline } from "@/components/ui/WhatsAppButton";
import { fadeUp, staggerContainer, defaultTransition } from "@/lib/motion";

const LOCATION_FAQS = [
  {
    question: "Do you deliver across Goa?",
    answer: `Yes — we bake in ${site.studioCity} and deliver to North and South Goa towns listed on this page. Delivery fee depends on distance and is confirmed on WhatsApp before you pay.`,
  },
  {
    question: "Where is the Sweet Bites kitchen?",
    answer: `Our studio is in ${site.studioCity}, South Goa (${site.address}). Pickup is by appointment Tue–Sun; we also deliver to your town.`,
  },
  {
    question: "How far in advance should I book?",
    answer: `Most custom cakes need ${site.bookAheadDays} lead time. Rush dates may be possible — message ${site.phone} with your celebration date and area.`,
  },
  {
    question: "Can I order a ready-made flavour?",
    answer:
      "Yes — browse our printed cakes menu online. Tap a flavour to open WhatsApp with the name filled in; Muskan confirms today's availability and price.",
  },
  {
    question: "Do you make eggless cakes?",
    answer:
      "Eggless sponges are available on request. Mention it on your first WhatsApp message along with your town and date.",
  },
];

const CELEBRATION_LINKS = [
  {
    title: "Birthday cakes",
    description: "Milestones, buttercream, and themed toppers across Goa.",
    href: "/birthday-cakes-goa",
    label: "Birthday guide",
  },
  {
    title: "Kids & characters",
    description: "Spiderman, unicorn, Barbie — with real case studies.",
    href: "/kids-birthday-cakes-goa",
    label: "Kids guide",
  },
  {
    title: "Wedding & haldi",
    description: "Reception tiers and yellow ceremony cakes.",
    href: "/wedding-cakes-goa",
    label: "Wedding guide",
  },
  {
    title: "Ready-made menu",
    description: "Black Forest, rasmalai, rainbow & more when available.",
    href: "/cakes-menu",
    label: "Cakes menu",
  },
] as const;

const RESOURCE_LINKS = [
  {
    href: "/blog",
    label: "Journal",
    description: "Wedding checklists, kids themes, bento & haldi guides",
  },
  {
    href: "/case-studies",
    label: "Case studies",
    description: "Barbie castle, Spiderman, wedding & rasmalai builds",
  },
  {
    href: "/blog/book-custom-cake-goa-whatsapp",
    label: "WhatsApp booking",
    description: "Message templates for your first quote",
  },
  {
    href: "/contact",
    label: "Contact & hours",
    description: "Studio map, reviews & appointment pickup",
  },
] as const;

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[13px] font-medium tracking-wide text-muted">{children}</p>
  );
}

function LocationGroup({
  title,
  subtitle,
  locations,
  className = "",
}: {
  title: string;
  subtitle: string;
  locations: LocationPage[];
  className?: string;
}) {
  return (
    <div className={className}>
      <h2 className="font-display text-2xl font-semibold text-cocoa sm:text-3xl">{title}</h2>
      <p className="mt-2 max-w-2xl text-muted">{subtitle}</p>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {locations.map((loc) => (
          <li key={loc.slug}>
            <Link href={locationPath(loc.slug)} className="location-card group flex h-full flex-col rounded-2xl p-5 sm:p-6">
              <span className="text-xs font-bold uppercase tracking-wider text-terracotta">
                {loc.region}
                {loc.isStudio ? " · Kitchen" : ""}
              </span>
              <span className="mt-2 font-display text-xl font-semibold text-cocoa group-hover:text-terracotta">
                {loc.name}
              </span>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {loc.metaDescription.slice(0, 130)}…
              </p>
              <span className="mt-4 text-sm font-semibold text-terracotta">
                Cakes in {loc.name} →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

type LocationsIndexViewProps = {
  north: LocationPage[];
  south: LocationPage[];
  studio: LocationPage | undefined;
};

export function LocationsIndexView({ north, south, studio }: LocationsIndexViewProps) {
  const reducedMotion = useReducedMotion();

  return (
    <div className="bg-surface text-cocoa">
      {/* Hero */}
      <section className="location-hero-glow border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 16 }}
            animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="max-w-3xl"
          >
            <p className="inline-flex items-center gap-2 rounded-full border border-line bg-cream/80 px-3.5 py-1.5 text-[13px] font-medium text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-terracotta" aria-hidden />
              {goaReach.eyebrow}
            </p>
            <h1 className="mt-6 font-display text-[clamp(2rem,5vw,3.25rem)] font-semibold leading-[1.08] tracking-tight text-cocoa">
              {goaReach.heroTitle}
            </h1>
            <p className="mt-5 text-[17px] leading-[1.65] text-muted">{goaReach.heroLead}</p>
            <p className="mt-4 text-sm text-muted">
              Baked in <strong className="font-semibold text-cocoa">{site.studioCity}</strong> ·{" "}
              {deliveryAreas.length} delivery areas · WhatsApp {site.phone}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={getWhatsAppUrl()} variant="whatsapp" external>
                <WhatsAppIconInline className="h-5 w-5" />
                Order on WhatsApp
              </Button>
              <Button href={site.mapsUrl} variant="outline" external className="rounded-md px-5">
                Studio on Maps
              </Button>
              <Button href="/creations" variant="primary" className="rounded-md px-5">
                Cake gallery
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Studio */}
      {studio ? (
        <section className="border-b border-line bg-cream/50 py-12 sm:py-16" aria-labelledby="studio-heading">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-14">
              <div className="lg:col-span-7">
                <SectionLabel>Home bakery</SectionLabel>
                <h2 id="studio-heading" className="mt-3 font-display text-2xl font-semibold text-cocoa sm:text-3xl">
                  Pickup at our {studio.name} kitchen
                </h2>
                <p className="mt-4 max-w-xl text-muted">
                  Every cake is baked here — not resold from a third-party kitchen. Collect by appointment or
                  choose delivery to your town. {site.hours}
                </p>
                <ul className="mt-6 space-y-2 text-sm text-cocoa/80">
                  <li className="flex gap-2">
                    <span className="text-terracotta" aria-hidden>
                      →
                    </span>
                    {site.address}
                  </li>
                  <li className="flex gap-2">
                    <span className="text-terracotta" aria-hidden>
                      →
                    </span>
                    {site.stats.celebrations}+ celebrations · {site.stats.rating}★ rating
                  </li>
                </ul>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button href={locationPath(studio.slug)} variant="primary">
                    {studio.name} area guide
                  </Button>
                  <Button href="/contact" variant="outline">
                    Contact & map
                  </Button>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="overflow-hidden rounded-2xl border border-line shadow-[0_24px_48px_-32px_rgba(44,24,16,0.2)]">
                  <div className="aspect-[4/3]">
                    <iframe
                      title={`${site.name} — ${studio.name}, Goa`}
                      src={site.mapsEmbedUrl}
                      className="h-full w-full border-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {/* Trust */}
      <section className="border-b border-line py-12 sm:py-14" aria-label="Why Sweet Bites">
        <motion.ul
          className="mx-auto grid max-w-6xl gap-px overflow-hidden rounded-2xl border border-line bg-line px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8"
          variants={staggerContainer}
          initial={reducedMotion ? false : "hidden"}
          whileInView={reducedMotion ? undefined : "visible"}
          viewport={{ once: true, margin: "-40px" }}
        >
          {trustPillars.map((item) => (
            <motion.li key={item.title} variants={fadeUp} transition={defaultTransition} className="bg-surface p-6">
              <span className="text-lg" aria-hidden>
                {item.icon}
              </span>
              <h2 className="mt-3 font-display text-[15px] font-semibold leading-snug text-cocoa">{item.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
            </motion.li>
          ))}
        </motion.ul>
      </section>

      {/* How delivery works */}
      <section className="border-b border-line py-14 sm:py-16" aria-labelledby="delivery-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionLabel>From our kitchen to your town</SectionLabel>
          <h2 id="delivery-heading" className="mt-3 font-display text-2xl font-semibold text-cocoa sm:text-3xl">
            How cake delivery works in Goa
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            Muskan bakes in {site.studioCity}, then delivers upright in boxed tiers to your home, hotel, or venue —
            or you collect at the studio. Distance and timing are quoted on WhatsApp, not guessed after payment.
          </p>
          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "North Goa",
                text: "Panaji, Mapusa, Calangute, Candolim, Baga, Anjuna, Taleigao — beach parties and resort celebrations.",
              },
              {
                title: "South Goa",
                text: "Margao, Vasco, Colva, Ponda, and our studio town Velim — feasts, weddings, and home birthdays.",
              },
              {
                title: "Your quote",
                text: `Message ${site.phone} with date, guest count, and area. We reply with flavour ideas, lead time, and delivery fee.`,
              },
            ].map((item) => (
              <li key={item.title} className="rounded-2xl border border-line bg-cream/60 p-6">
                <h3 className="font-display text-lg font-semibold text-cocoa">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Area grids */}
      <section className="bg-cream py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <LocationGroup
            title="North Goa"
            subtitle="Beach towns, Mapusa markets, and capital-area celebrations — each page has local delivery notes and WhatsApp tips."
            locations={north}
          />
          <LocationGroup
            title="South Goa"
            subtitle="Commercial hubs, port town events, and village feasts — baked fresh in Velim and delivered to your door."
            locations={south}
            className="mt-16 sm:mt-20"
          />
        </div>
      </section>

      {/* Celebrations */}
      <section className="border-t border-line py-14 sm:py-20" aria-labelledby="celebrations-heading">
        <motion.div
          className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
          initial={reducedMotion ? false : { opacity: 0, y: 12 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={defaultTransition}
        >
          <SectionLabel>What we make</SectionLabel>
          <h2 id="celebrations-heading" className="mt-3 font-display text-2xl font-semibold text-cocoa sm:text-3xl">
            Cakes for every Goa celebration
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            Choose your town above for area-specific FAQs — or jump straight to the service you need.
          </p>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {CELEBRATION_LINKS.map((card) => (
              <li key={card.title}>
                <Link href={card.href} className="location-card group flex h-full flex-col rounded-2xl p-6">
                  <h3 className="font-display text-lg font-semibold text-cocoa">{card.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{card.description}</p>
                  <span className="mt-4 text-sm font-semibold text-terracotta group-hover:underline">
                    {card.label} →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* Order steps */}
      <section className="border-t border-line bg-cream/50 py-14 sm:py-20" aria-labelledby="order-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionLabel>Simple process</SectionLabel>
          <h2 id="order-heading" className="mt-3 font-display text-2xl font-semibold text-cocoa sm:text-3xl">
            How to order from any Goa town
          </h2>
          <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {orderSteps.map((step, i) => (
              <li key={step.title}>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cocoa text-sm font-semibold text-surface">
                  {i + 1}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-cocoa">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
              </li>
            ))}
          </ol>
          <Button href="/order" variant="primary" className="mt-10">
            Full order guide
          </Button>
        </div>
      </section>

      {/* Resources */}
      <section className="border-t border-line py-14 sm:py-20" aria-labelledby="resources-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionLabel>Plan with confidence</SectionLabel>
          <h2 id="resources-heading" className="mt-3 font-display text-2xl font-semibold text-cocoa sm:text-3xl">
            Guides & real cake stories
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {RESOURCE_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-2xl border border-line bg-surface px-5 py-4 transition-colors hover:border-terracotta/30 hover:bg-cream/40"
                >
                  <p className="font-display font-semibold text-cocoa">{link.label}</p>
                  <p className="mt-1 text-sm text-muted">{link.description}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQs */}
      <section className="border-t border-line bg-cream/40 py-14 sm:py-20" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <SectionLabel>Questions</SectionLabel>
          <h2 id="faq-heading" className="mt-3 font-display text-2xl font-semibold text-cocoa sm:text-3xl">
            Delivery & booking FAQs
          </h2>
          <dl className="mt-8 divide-y divide-line">
            {LOCATION_FAQS.map((faq) => (
              <div key={faq.question} className="py-6 first:pt-0">
                <dt className="font-display text-[17px] font-semibold leading-snug text-cocoa">{faq.question}</dt>
                <dd className="mt-2.5 text-[15px] leading-relaxed text-muted">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Reviews */}
      <section className="border-t border-line py-12 sm:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ReviewsNote />
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-line bg-cocoa py-16 sm:py-20">
        <div className="mx-auto max-w-xl px-4 text-center sm:px-6">
          <h2 className="font-display text-[clamp(1.75rem,4vw,2.25rem)] font-semibold leading-tight text-surface">
            Tell us your town & date
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-surface/70">
            Open WhatsApp with your Goa area — Muskan replies with availability, delivery fee, and ideas from our
            gallery.
          </p>
          <Button href={getWhatsAppUrl()} variant="whatsapp" external className="mt-8">
            <WhatsAppIconInline className="h-5 w-5" />
            WhatsApp {site.phone}
          </Button>
        </div>
      </section>
    </div>
  );
}
