"use client";

import { useState } from "react";
import { homeSeo } from "@/lib/seo-content";
import Link from "next/link";
import { deliveryAreas, site } from "@/lib/content";
import { locationPath } from "@/lib/locations";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { WhatsAppIconInline } from "@/components/ui/WhatsAppButton";

export function HomeSeoCollapsible() {
  const [open, setOpen] = useState(false);
  const preview = homeSeo.paragraphs[0];
  const restParagraphs = homeSeo.paragraphs.slice(1);

  return (
    <section
      className="border-t border-cocoa/5 bg-white py-12 sm:py-16"
      aria-labelledby="seo-studio-heading"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2
          id="seo-studio-heading"
          className="font-display text-2xl font-semibold text-cocoa sm:text-3xl"
        >
          {homeSeo.heading}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-cocoa/75">{preview}</p>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-terracotta hover:underline"
          aria-expanded={open}
        >
          {open ? "Show less" : "Read more about our Goa cake studio"}
          <span
            className={`inline-block transition-transform ${open ? "rotate-180" : ""}`}
            aria-hidden
          >
            ▾
          </span>
        </button>

        {open && (
          <div className="mt-6 space-y-4 border-t border-cocoa/10 pt-6 text-base leading-relaxed text-cocoa/75">
            {restParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}

            {homeSeo.subsections?.map((sub) => (
              <div key={sub.title} className="pt-4">
                <h3 className="font-display text-lg font-semibold text-cocoa">
                  {sub.title}
                </h3>
                {sub.paragraphs.map((p, i) => (
                  <p key={i} className="mt-2">
                    {p}
                  </p>
                ))}
              </div>
            ))}

            {homeSeo.listTitle && (
              <div className="pt-4">
                <h3 className="font-display text-lg font-semibold text-cocoa">
                  {homeSeo.listTitle}
                </h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {deliveryAreas.map((place) => (
                    <li key={place}>
                      <Link
                        href={locationPath(place.toLowerCase())}
                        className="inline-block rounded-full border border-sage/20 bg-sage-light/60 px-3 py-1.5 text-sm font-medium text-cocoa/85 transition-colors hover:border-terracotta hover:text-terracotta"
                      >
                        {place}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="rounded-2xl bg-cream p-6 text-center ring-1 ring-cocoa/5">
              <p className="text-sm font-medium text-cocoa">
                Ready to order? Message Muskan on WhatsApp
              </p>
              <p className="mt-1 text-xs text-cocoa/60">
                {site.phone} · {site.domain}
              </p>
              <Button
                href={getWhatsAppUrl()}
                variant="whatsapp"
                external
                className="mt-4"
              >
                <WhatsAppIconInline className="h-5 w-5" />
                Order on WhatsApp
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
