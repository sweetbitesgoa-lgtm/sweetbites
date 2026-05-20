"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  cakesMenuCategories,
  cakesMenuKitchenGallery,
  CAKES_MENU_IMAGE,
  getReadyMadeCakeWhatsAppUrl,
  type CakesMenuCategory,
} from "@/lib/cakes-menu";
import { site } from "@/lib/content";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { WhatsAppIconInline } from "@/components/ui/WhatsAppButton";
export function CakesMenuView() {
  const [activeId, setActiveId] = useState(cakesMenuCategories[0]?.id ?? "regular");

  return (
    <div className="cakes-menu-page min-h-screen bg-[#fff9f4] text-cocoa">
      <div className="cakes-menu-pattern border-b border-terracotta/10 py-3">
        <p className="text-center text-[11px] font-bold uppercase tracking-[0.2em] text-terracotta/80">
          Ready-made cakes · WhatsApp to order · {site.studioCity}, Goa
        </p>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:grid lg:grid-cols-12 lg:gap-10 lg:px-8 lg:py-14">
        {/* Left — menu board */}
        <div className="lg:col-span-7">
          <header className="cakes-menu-board relative overflow-hidden rounded-2xl border-2 border-terracotta/25 bg-cream px-6 py-10 shadow-[0_20px_50px_-30px_rgba(196,92,62,0.35)] sm:px-10 sm:py-12">
            <div className="cakes-menu-board-inner pointer-events-none absolute inset-0 opacity-40" aria-hidden />
            <p className="relative text-center font-display text-[clamp(2.5rem,8vw,4.5rem)] font-semibold uppercase leading-none tracking-tight text-terracotta drop-shadow-sm">
              Cakes
            </p>
            <p className="relative mx-auto mt-4 max-w-md text-center text-sm leading-relaxed text-cocoa/70">
              Pick a flavour below — Muskan confirms size, price & same-day options on WhatsApp.
              Custom designs still available via{" "}
              <Link href="/creations" className="font-semibold text-terracotta underline underline-offset-2">
                Creations
              </Link>
              .
            </p>

            {/* Category tabs */}
            <nav
              className="relative mt-10 flex flex-wrap justify-center gap-2"
              aria-label="Cake categories"
            >
              {cakesMenuCategories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveId(cat.id)}
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

        {/* Right — visual column */}
        <aside className="mt-10 lg:col-span-5 lg:mt-0">
          <div className="lg:sticky lg:top-28 space-y-6">
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
                <ul className="mt-3 grid grid-cols-3 gap-2">
                  {cakesMenuKitchenGallery.map((item) => (
                    <li key={item.id} className="relative aspect-square overflow-hidden rounded-lg ring-1 ring-line">
                      {item.image ? (
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                          sizes="120px"
                        />
                      ) : null}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

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
    </div>
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
    <div className="group flex items-center justify-between gap-2 rounded-lg border border-transparent bg-cream/60 px-3 py-2.5 transition-colors hover:border-terracotta/15 hover:bg-white">
      <div className="min-w-0">
        <p className="font-display text-sm font-bold uppercase tracking-wide text-cocoa sm:text-base">
          {item.name}
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
