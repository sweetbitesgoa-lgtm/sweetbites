import Image from "next/image";
import Link from "next/link";
import {
  CAKES_MENU_HERO_ALT,
  CAKES_MENU_HERO_IMAGE,
  cakesMenuAddOns,
  cakesMenuCaseStudySpots,
  cakesMenuMuskanQuote,
  cakesMenuOccasionPicks,
  cakesMenuServingTips,
  cakesMenuStaffPicks,
  getCakesMenuFlavorCount,
  getReadyMadeCakeWhatsAppUrl,
} from "@/lib/cakes-menu";
import { seasonalBanner, site, testimonials } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { WhatsAppIconInline } from "@/components/ui/WhatsAppButton";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { CakesMenuBreadcrumb } from "@/components/menu/CakesMenuBreadcrumb";
import { CakesMenuFlavorMarquee } from "@/components/menu/CakesMenuFlavorMarquee";

const JUMP_LINKS = [
  { href: "#menu-picks", label: "Muskan's picks" },
  { href: "#menu-occasions", label: "By celebration" },
  { href: "#menu-flavours", label: "All flavours" },
  { href: "#menu-faq-heading", label: "FAQs" },
] as const;

const FLAVOR_COUNT = getCakesMenuFlavorCount();

function SectionIntro({
  eyebrow,
  title,
  description,
  centered = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  centered?: boolean;
}) {
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="cakes-menu-eyebrow">{eyebrow}</p>
      <h2 className="cakes-menu-section-title mt-2">{title}</h2>
      <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{description}</p>
    </div>
  );
}

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

      <section
        className="cakes-menu-hero border-b border-line"
        aria-labelledby="cakes-menu-hero-heading"
      >
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <CakesMenuBreadcrumb />
          <div className="relative mb-8 overflow-hidden rounded-2xl cakes-menu-hero-image bg-cream ring-2 ring-terracotta/30 lg:hidden">
            <div className="relative aspect-[3/4] w-full max-h-[min(480px,75vh)]">
              <Image
                src={CAKES_MENU_HERO_IMAGE}
                alt={CAKES_MENU_HERO_ALT}
                fill
                className="object-contain object-center p-1"
                sizes="100vw"
                priority
              />
            </div>
            <p className="bg-gradient-to-r from-terracotta to-[#a84830] px-4 py-3 text-center text-[10px] font-bold uppercase tracking-widest text-cream">
              Full cakes menu · {site.studioCity}, Goa
            </p>
          </div>

          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="cakes-menu-eyebrow">Sweet Bites · Ready-made cakes</p>
              <h1
                id="cakes-menu-hero-heading"
                className="mt-3 font-display text-[clamp(2.1rem,5vw,3.35rem)] font-semibold leading-[1.08] tracking-tight text-cocoa"
              >
                Cakes menu in Goa — order on WhatsApp
              </h1>
              <p className="mt-5 max-w-2xl text-[1.0625rem] leading-relaxed text-muted sm:text-lg">
                {FLAVOR_COUNT} flavours on our printed board — Regular, Fruit, Premium & Special.
                Same list as our {site.studioCity} kitchen. Tap any flavour to order; Muskan confirms
                size, eggless options, and delivery across Goa.
              </p>

              <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
                <li className="cakes-menu-stat rounded-xl border border-line/80 px-4 py-3 text-center">
                  <p className="font-display text-2xl font-semibold text-terracotta">{FLAVOR_COUNT}</p>
                  <p className="mt-0.5 text-[10px] font-bold uppercase tracking-wider text-muted">
                    Menu flavours
                  </p>
                </li>
                <li className="cakes-menu-stat rounded-xl border border-line/80 px-4 py-3 text-center">
                  <p className="font-display text-2xl font-semibold text-terracotta">
                    {site.stats.rating}★
                  </p>
                  <p className="mt-0.5 text-[10px] font-bold uppercase tracking-wider text-muted">
                    Google rating
                  </p>
                </li>
                <li className="cakes-menu-stat col-span-2 rounded-xl border border-line/80 px-4 py-3 text-center sm:col-span-1">
                  <p className="font-display text-2xl font-semibold text-terracotta">4</p>
                  <p className="mt-0.5 text-[10px] font-bold uppercase tracking-wider text-muted">
                    Menu sections
                  </p>
                </li>
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={getWhatsAppUrl()} variant="whatsapp" external>
                  <WhatsAppIconInline className="h-5 w-5" />
                  Order on WhatsApp
                </Button>
                <Button href="#menu-flavours" variant="outline" className="rounded-md px-5">
                  Browse flavours
                </Button>
              </div>
              <nav
                className="mt-6 flex flex-wrap gap-2"
                aria-label="On this page"
              >
                {JUMP_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="rounded-full border border-terracotta/20 bg-white/80 px-3 py-1.5 text-xs font-semibold text-cocoa shadow-sm transition-colors hover:border-terracotta/50 hover:text-terracotta"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="hidden lg:col-span-5 lg:block">
              <div className="cakes-menu-hero-image overflow-hidden rounded-2xl bg-cream ring-2 ring-terracotta/30">
                <div className="relative aspect-[3/4] w-full max-h-[min(520px,68vh)]">
                  <Image
                    src={CAKES_MENU_HERO_IMAGE}
                    alt={CAKES_MENU_HERO_ALT}
                    fill
                    className="object-contain object-center p-2"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    priority
                  />
                </div>
                <p className="bg-gradient-to-r from-terracotta to-[#a84830] px-4 py-3 text-center text-xs font-bold uppercase tracking-widest text-cream">
                  Full cakes menu · {site.name}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CakesMenuFlavorMarquee />

      <div className="border-b border-line/60 bg-white/90 backdrop-blur-sm">
        <ul className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-3 px-4 py-4 sm:gap-4">
          {[
            `${site.stats.rating}★ on Google`,
            `${site.stats.celebrations}+ celebrations`,
            `Eggless on request`,
            `Pickup ${site.studioCity} · delivery Goa-wide`,
          ].map((label) => (
            <li
              key={label}
              className="rounded-full border border-line bg-cream/90 px-3.5 py-1.5 text-xs font-semibold text-cocoa/80"
            >
              {label}
            </li>
          ))}
        </ul>
      </div>

      <blockquote className="relative mx-auto max-w-3xl border-b border-line/60 px-4 py-10 text-center sm:px-6">
        <span
          className="pointer-events-none absolute left-1/2 top-4 -translate-x-1/2 font-display text-6xl leading-none text-terracotta/15"
          aria-hidden
        >
          &ldquo;
        </span>
        <p className="relative text-base italic leading-relaxed text-cocoa/85 sm:text-lg">
          {cakesMenuMuskanQuote.quote}
        </p>
        <footer className="relative mt-4 text-[11px] font-bold uppercase tracking-wider text-terracotta">
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
        className="scroll-mt-24 border-b border-line/60 bg-white py-14 sm:py-16"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionIntro
            centered
            eyebrow="Best sellers"
            title="Muskan's picks from the board"
            description="Flavours Goa families reorder most — tap to order on WhatsApp with the name filled in."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {cakesMenuStaffPicks.map((pick, index) => (
              <li
                key={pick.id}
                className="cakes-menu-pick-card group flex flex-col overflow-hidden rounded-2xl border border-line bg-white"
              >
                <div className="relative aspect-[4/3] bg-cream">
                  <span className="cakes-menu-pick-rank absolute left-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-cream">
                    {index + 1}
                  </span>
                  <Image
                    src={pick.image}
                    alt={`${pick.name} — ready-made cake on Sweet Bites menu, Goa`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 25vw"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-cocoa/50 via-transparent to-transparent"
                    aria-hidden
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
        className="scroll-mt-24 border-b border-line/60 bg-cream/50 py-14 sm:py-16"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Goa celebrations"
            title="Pick by occasion"
            description="Match your event to menu flavours — then open a full guide for gallery ideas and WhatsApp tips."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2">
            {cakesMenuOccasionPicks.map((occ) => (
              <li
                key={occ.label}
                className="cakes-menu-occasion-card rounded-2xl border border-line p-6 sm:p-7"
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

      <section className="border-b border-line/60 bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Case studies"
            title="From the menu to the table"
            description="Real builds behind board flavours — how Muskan handled soak, heat, and delivery in Goa."
          />
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
                      alt={`${spot.menuFlavour} case study — Sweet Bites Goa`}
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

      <section className="border-b border-line/60 bg-gradient-to-b from-cream/80 to-white py-12">
        <div className="mx-auto max-w-2xl rounded-2xl border border-line bg-white px-6 py-8 text-center shadow-sm sm:px-10">
          <p className="cakes-menu-eyebrow">From Goa families</p>
          <blockquote className="mt-4 font-display text-lg leading-relaxed text-cocoa sm:text-xl">
            &ldquo;{testimonials[1]?.text ?? testimonials[0].text}&rdquo;
          </blockquote>
          <p className="mt-4 text-sm font-semibold text-cocoa">
            {testimonials[1]?.name ?? testimonials[0].name}
            <span className="font-normal text-muted">
              {" "}
              · {testimonials[1]?.location ?? testimonials[0].location}
            </span>
          </p>
          <Link
            href={site.googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-xs font-semibold text-terracotta hover:underline"
          >
            Read more on Google ({site.stats.rating}★) →
          </Link>
        </div>
      </section>
    </>
  );
}
