import Image from "next/image";
import Link from "next/link";
import {
  CAKES_MENU_HERO_ALT,
  CAKES_MENU_IMAGE,
  cakesMenuAddOns,
  cakesMenuCaseStudySpots,
  cakesMenuMuskanQuote,
  cakesMenuOccasionPicks,
  cakesMenuServingTips,
  cakesMenuStaffPicks,
  getReadyMadeCakeWhatsAppUrl,
} from "@/lib/cakes-menu";
import { seasonalBanner, site, testimonials } from "@/lib/content";
import { SecondaryPageHero } from "@/components/layout/SecondaryPageHero";
import { Button } from "@/components/ui/Button";
import { WhatsAppIconInline } from "@/components/ui/WhatsAppButton";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const JUMP_LINKS = [
  { href: "#menu-picks", label: "Muskan's picks" },
  { href: "#menu-occasions", label: "By celebration" },
  { href: "#menu-flavours", label: "All flavours" },
  { href: "#menu-faq-heading", label: "FAQs" },
] as const;

export function CakesMenuPageHeader() {
  return (
    <>
      <div className="cakes-menu-pattern border-b border-terracotta/10 py-3">
        <p className="text-center text-[11px] font-bold uppercase tracking-[0.2em] text-terracotta/80">
          Ready-made cakes · WhatsApp to order · {site.studioCity}, Goa
        </p>
      </div>

      {seasonalBanner.enabled ? (
        <div className="border-b border-terracotta/15 bg-terracotta/[0.08] px-4 py-3">
          <p className="mx-auto max-w-3xl text-center text-xs leading-relaxed text-cocoa sm:text-sm">
            <span className="font-semibold text-terracotta">{seasonalBanner.title}.</span>{" "}
            {seasonalBanner.message}
          </p>
        </div>
      ) : null}

      <SecondaryPageHero
        label="Ready-made cakes"
        title="Printed menu flavours in Goa"
        description={`Regular, Fruit, Premium & Special — the same board we use in ${site.studioCity}. Tap any flavour below or message Muskan on WhatsApp for today's availability, size, and delivery.`}
        image={{
          src: CAKES_MENU_IMAGE,
          alt: CAKES_MENU_HERO_ALT,
          priority: true,
        }}
      >
        <nav className="flex flex-wrap gap-2" aria-label="On this page">
          {JUMP_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full border border-line bg-cream/80 px-3 py-1.5 text-xs font-semibold text-cocoa transition-colors hover:border-terracotta/40 hover:text-terracotta"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <Button href={getWhatsAppUrl()} variant="whatsapp" external>
          <WhatsAppIconInline className="h-5 w-5" />
          Order on WhatsApp
        </Button>
        <Button href="#menu-flavours" variant="outline" className="rounded-md px-5">
          See all flavours
        </Button>
      </SecondaryPageHero>

      <div className="border-b border-line/60 bg-cream/80">
        <ul className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-6 gap-y-2 px-4 py-4 text-center text-xs font-semibold text-cocoa/70 sm:text-sm">
          <li>
            {site.stats.rating}★ Google · {site.stats.celebrations}+ celebrations
          </li>
          <li>Book {site.bookAheadDays} for custom · menu cakes may be sooner</li>
          <li>Eggless on request</li>
        </ul>
      </div>

      <blockquote className="mx-auto max-w-2xl border-b border-line/60 bg-cream/30 px-4 py-8 text-center sm:px-6">
        <p className="text-sm italic leading-relaxed text-cocoa/80">
          &ldquo;{cakesMenuMuskanQuote.quote}&rdquo;
        </p>
        <footer className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-terracotta/90">
          {cakesMenuMuskanQuote.attribution}
        </footer>
      </blockquote>
    </>
  );
}

export function CakesMenuEnrichedAbove() {
  return (
    <>
      <section
        id="menu-picks"
        className="scroll-mt-24 border-b border-line/60 bg-white py-10 sm:py-12"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-display text-xl font-semibold text-cocoa sm:text-2xl">
            Muskan&apos;s picks from the board
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-center text-sm text-muted">
            Flavours families reorder most — tap to order on WhatsApp with the name filled in.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {cakesMenuStaffPicks.map((pick) => (
              <li
                key={pick.id}
                className="flex flex-col overflow-hidden rounded-2xl border border-line bg-cream/40 shadow-sm"
              >
                <div className="relative aspect-[4/3] bg-cream">
                  <Image
                    src={pick.image}
                    alt={pick.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 25vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <h3 className="font-display font-semibold text-cocoa">{pick.name}</h3>
                  <p className="mt-1 flex-1 text-xs leading-relaxed text-muted">{pick.blurb}</p>
                  <a
                    href={getReadyMadeCakeWhatsAppUrl(pick.name, pick.categoryTitle)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center justify-center rounded-full bg-terracotta px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-cream"
                  >
                    Order on WhatsApp
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="menu-occasions"
        className="scroll-mt-24 border-b border-line/60 bg-cream/40 py-10 sm:py-12"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-xl font-semibold text-cocoa sm:text-2xl">
            Pick by celebration
          </h2>
          <p className="mt-2 max-w-xl text-sm text-muted">
            Match your event to flavours on the board — then open the full guide for gallery ideas.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {cakesMenuOccasionPicks.map((occ) => (
              <li
                key={occ.label}
                className="rounded-2xl border border-line bg-surface p-5 sm:p-6"
              >
                <span className="text-2xl" aria-hidden>
                  {occ.emoji}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold text-cocoa">{occ.label}</h3>
                <p className="mt-2 text-sm text-muted">
                  Try:{" "}
                  <span className="font-medium text-cocoa">{occ.flavours.join(" · ")}</span>
                </p>
                <Link
                  href={occ.href}
                  className="mt-4 inline-block text-xs font-semibold text-terracotta hover:underline"
                >
                  Full guide →
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-line/60 bg-white py-10 sm:py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-xl font-semibold text-cocoa sm:text-2xl">
            From the menu to the table
          </h2>
          <p className="mt-2 max-w-xl text-sm text-muted">
            Real builds behind board flavours — read how Muskan handled soak, heat, and delivery.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {cakesMenuCaseStudySpots.map((spot) => (
              <li key={spot.slug}>
                <Link
                  href={`/case-studies/${spot.slug}`}
                  className="group flex gap-4 overflow-hidden rounded-2xl border border-line bg-cream/40 p-4 transition-colors hover:border-terracotta/30"
                >
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl ring-1 ring-line">
                    <Image
                      src={spot.image}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="80px"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-terracotta">
                      {spot.menuFlavour}
                    </p>
                    <h3 className="mt-1 font-display text-sm font-semibold text-cocoa group-hover:text-terracotta">
                      {spot.title}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted">
                      {spot.excerpt}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-line/60 bg-cream/30 py-10 sm:py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-xl font-semibold text-cocoa">Before you cut</h2>
              <ul className="mt-6 space-y-3">
                {cakesMenuServingTips.map((tip) => (
                  <li key={tip.title} className="rounded-xl border border-line bg-surface p-4">
                    <h3 className="font-display text-sm font-semibold text-cocoa">{tip.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{tip.detail}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-xl font-semibold text-cocoa">Smart pairings</h2>
              <ul className="mt-6 space-y-3">
                {cakesMenuAddOns.map((addon) => (
                  <li
                    key={addon.title}
                    className="rounded-xl border border-terracotta/15 bg-terracotta/[0.04] p-4"
                  >
                    <h3 className="font-display text-sm font-semibold text-cocoa">{addon.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{addon.detail}</p>
                    <a
                      href={getReadyMadeCakeWhatsAppUrl(addon.flavour, addon.categoryTitle)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-block text-xs font-semibold text-terracotta hover:underline"
                    >
                      Order {addon.flavour} on WhatsApp →
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line/60 bg-white py-8">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-muted">
            From Goa families
          </p>
          <blockquote className="mt-3 font-display text-lg leading-relaxed text-cocoa">
            &ldquo;{testimonials[1]?.text ?? testimonials[0].text}&rdquo;
          </blockquote>
          <p className="mt-3 text-sm font-semibold text-cocoa">
            {testimonials[1]?.name ?? testimonials[0].name}
            <span className="font-normal text-muted">
              {" "}
              · {testimonials[1]?.location ?? testimonials[0].location}
            </span>
          </p>
        </div>
      </section>
    </>
  );
}
