"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  cakesMenuCategories,
  cakesMenuExploreLinks,
  cakesMenuFaqs,
  cakesMenuKitchenGallery,
  CAKES_MENU_IMAGE,
  getReadyMadeCakeWhatsAppUrl,
  type CakesMenuCategory,
} from "@/lib/cakes-menu";
import { deliveryAreas, site, sizes, trustPillars } from "@/lib/content";
import { locationPath } from "@/lib/locations";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { WhatsAppIconInline } from "@/components/ui/WhatsAppButton";
import { ReviewsNote } from "@/components/home/ReviewsNote";

export function CakesMenuView() {
  const [activeId, setActiveId] = useState(cakesMenuCategories[0]?.id ?? "regular");

  return (
    <>
      <div
        id="menu-flavours"
        className="scroll-mt-24 mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:grid lg:grid-cols-12 lg:gap-10 lg:px-8 lg:py-14"
      >
        <div className="lg:col-span-7">
          <header className="cakes-menu-board relative overflow-hidden rounded-2xl border-2 border-terracotta/25 bg-cream px-6 py-10 shadow-[0_20px_50px_-30px_rgba(196,92,62,0.35)] sm:px-10 sm:py-12">
            <div className="cakes-menu-board-inner pointer-events-none absolute inset-0 opacity-40" aria-hidden />
            <p className="relative text-center font-display text-[clamp(2.5rem,8vw,4.5rem)] font-semibold uppercase leading-none tracking-tight text-terracotta drop-shadow-sm">
              Cakes
            </p>
            <p className="relative mx-auto mt-4 max-w-md text-center text-sm leading-relaxed text-cocoa/70">
              Pick a flavour below — Muskan confirms size, price & same-day options on WhatsApp.
              Want a themed design? See{" "}
              <Link href="/creations" className="font-semibold text-terracotta underline underline-offset-2">
                Creations
              </Link>{" "}
              or{" "}
              <Link href="/order" className="font-semibold text-terracotta underline underline-offset-2">
                custom booking
              </Link>
              .
            </p>

            <nav
              className="relative mt-10 flex flex-wrap justify-center gap-2"
              aria-label="Cake categories"
            >
              {cakesMenuCategories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => {
                    setActiveId(cat.id);
                    document.getElementById(`menu-${cat.id}`)?.scrollIntoView({
                      behavior: "smooth",
                      block: "nearest",
                    });
                  }}
                  className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors ${
                    activeId === cat.id
                      ? "bg-terracotta text-cream shadow-md shadow-terracotta/25"
                      : "bg-cream text-cocoa ring-1 ring-terracotta/20 hover:bg-terracotta/10"
                  }`}
                >
                  {cat.title}
                </button>
              ))}
            </nav>

            <div className="relative mt-10 space-y-10">
              {cakesMenuCategories.map((cat) => (
                <CategoryBlock
                  key={cat.id}
                  category={cat}
                  highlighted={activeId === cat.id}
                />
              ))}
            </div>
          </header>

          <p className="mt-8 text-center text-xs text-muted">
            Prices vary by size and decoration — final quote on WhatsApp. Studio pickup in{" "}
            {site.studioCity}; delivery across Goa.
          </p>
        </div>

        <aside className="mt-10 lg:col-span-5 lg:mt-0">
          <div className="space-y-6 lg:sticky lg:top-28">
            <div className="overflow-hidden rounded-2xl ring-2 ring-terracotta/20 shadow-xl">
              <div className="relative aspect-[3/4] bg-cream">
                <Image
                  src={CAKES_MENU_IMAGE}
                  alt="Sweet Bites printed cakes menu — Regular, Fruit, Premium and Special flavours in Goa"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
              </div>
              <p className="bg-terracotta px-4 py-3 text-center text-xs font-bold uppercase tracking-widest text-cream">
                In-store menu · {site.name}
              </p>
            </div>

            {cakesMenuKitchenGallery.length > 0 ? (
              <div className="rounded-xl border border-line bg-surface p-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-muted">
                  From our kitchen
                </p>
                <p className="mt-1 text-xs text-muted">Real orders — tap to open gallery</p>
                <ul className="mt-3 grid grid-cols-3 gap-2">
                  {cakesMenuKitchenGallery.map((item) => (
                    <li key={item.id}>
                      <Link
                        href={item.href}
                        className="group relative block aspect-square overflow-hidden rounded-lg ring-1 ring-line transition-all hover:ring-terracotta/40"
                      >
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          sizes="120px"
                        />
                        <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-cocoa/80 to-transparent px-1 pb-1 pt-4 text-[9px] font-bold uppercase tracking-wide text-cream">
                          {item.name.split(" ")[0]}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            <div className="rounded-xl border border-line bg-surface p-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-muted">
                Guide prices
              </p>
              <p className="mt-1 text-xs text-muted">Starting from — custom designs quoted separately</p>
              <ul className="mt-4 space-y-2">
                {sizes.map((s) => (
                  <li
                    key={s.label}
                    className="flex items-center justify-between gap-2 rounded-lg bg-cream/80 px-3 py-2 text-sm"
                  >
                    <span className="font-medium text-cocoa">
                      {s.label}
                      <span className="ml-1 font-normal text-muted">({s.serves})</span>
                    </span>
                    <span className="shrink-0 font-display font-semibold text-terracotta">
                      {s.from}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-terracotta/20 bg-terracotta/[0.06] p-5">
              <p className="font-display text-lg font-medium text-cocoa">How to order</p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-muted">
                <li>Tap any flavour — WhatsApp opens with the name filled in.</li>
                <li>Muskan replies with sizes, eggless options & price.</li>
                <li>Confirm pickup in {site.studioCity} or delivery to your town.</li>
              </ol>
              <Button href={getWhatsAppUrl()} variant="whatsapp" external className="mt-5 w-full">
                <WhatsAppIconInline className="h-5 w-5" />
                {site.phone}
              </Button>
              <p className="mt-4 text-center text-xs text-muted">
                <Link href="/order" className="text-terracotta hover:underline">
                  Custom cake booking
                </Link>
                {" · "}
                <Link href="/contact" className="text-terracotta hover:underline">
                  Studio hours
                </Link>
              </p>
            </div>
          </div>
        </aside>
      </div>

      <section className="border-t border-line/60 bg-white py-12 sm:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-display text-xl font-semibold text-cocoa sm:text-2xl">
            Why families order from Muskan
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {trustPillars.map((pillar) => (
              <li
                key={pillar.title}
                className="rounded-2xl border border-line bg-cream/50 p-5 text-center"
              >
                <span className="text-2xl" aria-hidden>
                  {pillar.icon}
                </span>
                <h3 className="mt-3 font-display text-sm font-semibold text-cocoa">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted">{pillar.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-line/60 bg-cream/40 py-12 sm:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-terracotta/20 bg-surface p-6 sm:p-8">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-terracotta">
                This menu
              </p>
              <h2 className="mt-2 font-display text-xl font-semibold text-cocoa">
                Ready-made flavours
              </h2>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted">
                <li>Familiar flavours from our printed board</li>
                <li>Often faster when the oven has capacity</li>
                <li>Great for home parties & office treats</li>
                <li>Tap Order — flavour pre-filled on WhatsApp</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-muted">
                Need more?
              </p>
              <h2 className="mt-2 font-display text-xl font-semibold text-cocoa">
                Custom celebration cakes
              </h2>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted">
                <li>Character, wedding, haldi & themed designs</li>
                <li>Writing, colours & tiers to match your event</li>
                <li>See real builds in our gallery & case studies</li>
                <li>Book {site.bookAheadDays} minimum for complex work</li>
              </ul>
              <Button href="/creations" variant="outline" className="mt-6">
                Browse 160+ creations
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line/60 py-10 sm:py-12">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-muted">We deliver across Goa from {site.studioCity}</p>
          <ul className="mt-4 flex flex-wrap justify-center gap-2">
            {deliveryAreas.map((place) => (
              <li key={place}>
                <Link
                  href={locationPath(place.toLowerCase())}
                  className="inline-block rounded-full border border-line bg-surface px-3 py-1.5 text-xs font-semibold text-cocoa transition-colors hover:border-terracotta/30 hover:text-terracotta"
                >
                  {place}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-line/60 bg-white py-12 sm:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-xl font-semibold text-cocoa sm:text-2xl">
            Explore more
          </h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {cakesMenuExploreLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-2xl border border-line bg-cream/40 p-5 transition-colors hover:border-terracotta/30 hover:bg-terracotta/[0.04]"
                >
                  <p className="font-display font-semibold text-cocoa">{link.label}</p>
                  <p className="mt-1 text-sm text-muted">{link.description}</p>
                  <span className="mt-3 inline-block text-xs font-semibold text-terracotta">
                    Open →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className="border-t border-line/60 bg-cream/30 py-14 sm:py-16"
        aria-labelledby="menu-faq-heading"
      >
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <h2 id="menu-faq-heading" className="font-display text-xl font-semibold text-cocoa sm:text-2xl">
            Cakes menu — FAQs
          </h2>
          <dl className="mt-8 divide-y divide-line">
            {cakesMenuFaqs.map((faq) => (
              <div key={faq.question} className="py-5 first:pt-0">
                <dt className="font-display text-base font-semibold text-cocoa">{faq.question}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted">{faq.answer}</dd>
              </div>
            ))}
          </dl>
          <ReviewsNote />
        </div>
      </section>

      <section className="border-t border-terracotta/20 bg-terracotta py-12 sm:py-14">
        <div className="mx-auto max-w-xl px-4 text-center sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-cream">
            Ready to order?
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-cream/75">
            Message Muskan with your flavour, date, and town — she replies with today&apos;s availability.
          </p>
          <Button href={getWhatsAppUrl()} variant="whatsapp" external className="mt-6">
            <WhatsAppIconInline className="h-5 w-5" />
            WhatsApp {site.phone}
          </Button>
        </div>
      </section>
    </>
  );
}

function CategoryBlock({
  category,
  highlighted,
}: {
  category: CakesMenuCategory;
  highlighted: boolean;
}) {
  return (
    <section
      id={`menu-${category.id}`}
      className={`scroll-mt-28 transition-opacity duration-300 ${highlighted ? "opacity-100" : "opacity-90"}`}
      aria-labelledby={`heading-${category.id}`}
    >
      <h2
        id={`heading-${category.id}`}
        className="text-center font-display text-xl font-bold uppercase tracking-[0.12em] text-terracotta sm:text-2xl"
      >
        {category.title}
      </h2>
      <p className="mt-2 text-center text-xs text-muted">{category.description}</p>
      <ul className="mt-6 columns-1 gap-x-8 sm:columns-2">
        {category.items.map((item) => (
          <li key={item.id} className="mb-2.5 break-inside-avoid">
            <MenuItemRow item={item} categoryTitle={category.title} />
          </li>
        ))}
      </ul>
    </section>
  );
}

function MenuItemRow({
  item,
  categoryTitle,
}: {
  item: CakesMenuCategory["items"][number];
  categoryTitle: string;
}) {
  return (
    <div className="group flex items-center gap-3 rounded-lg border border-transparent bg-cream/60 px-2 py-2 transition-colors hover:border-terracotta/15 hover:bg-white sm:px-3 sm:py-2.5">
      {item.image && item.creationHref ? (
        <Link
          href={item.creationHref}
          className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg ring-1 ring-line"
        >
          <Image src={item.image} alt="" fill className="object-cover" sizes="48px" />
        </Link>
      ) : item.image ? (
        <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg ring-1 ring-line">
          <Image src={item.image} alt="" fill className="object-cover" sizes="48px" />
        </span>
      ) : null}
      <div className="min-w-0 flex-1">
        <p className="flex flex-wrap items-center gap-2 font-display text-sm font-bold uppercase tracking-wide text-cocoa sm:text-base">
          {item.name}
          {item.badge ? (
            <span className="rounded-full bg-terracotta/10 px-2 py-0.5 text-[9px] font-bold normal-case tracking-normal text-terracotta">
              {item.badge}
            </span>
          ) : null}
        </p>
        {item.creationHref ? (
          <Link
            href={item.creationHref}
            className="text-[10px] font-semibold text-terracotta/80 hover:text-terracotta hover:underline"
          >
            See similar custom cake →
          </Link>
        ) : null}
      </div>
      <a
        href={getReadyMadeCakeWhatsAppUrl(item.name, categoryTitle)}
        target="_blank"
        rel="noopener noreferrer"
        className="shrink-0 rounded-full bg-terracotta px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-cream opacity-90 transition-opacity group-hover:opacity-100"
      >
        Order
      </a>
    </div>
  );
}
