"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { deliveryAreas, site } from "@/lib/content";
import { homeLocationBlocks } from "@/lib/home-locations";
import { locationPath } from "@/lib/locations";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { fadeUp, staggerContainer, defaultTransition } from "@/lib/motion";

function PinIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21s7-4.5 7-11a7 7 0 10-14 0c0 6.5 7 11 7 11z"
      />
      <circle cx="12" cy="10" r="2.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LocationSeoBlocks() {
  const reducedMotion = useReducedMotion();
  return (
    <section
      className="relative isolate overflow-hidden bg-sage py-16 sm:py-24"
      aria-labelledby="locations-heading"
    >
      <motion.div
        className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-gold/15 blur-3xl"
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-terracotta/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-2xl"
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={defaultTransition}
        >
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold-light">
            Across Goa
          </p>
          <h2
            id="locations-heading"
            className="mt-2 font-display text-3xl font-semibold text-cream sm:text-4xl"
          >
            We deliver to major towns & beaches
          </h2>
          <p className="mt-3 text-base leading-relaxed text-cream/75">
            Baked in {site.studioCity}, delivered across North & South Goa — tap a
            place below or message us for your village.
          </p>
        </motion.div>

        <motion.ul
          className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 md:grid-cols-4 lg:grid-cols-6"
          variants={staggerContainer}
          initial={reducedMotion ? false : "hidden"}
          whileInView={reducedMotion ? undefined : "visible"}
          viewport={{ once: true, margin: "-40px" }}
        >
          {deliveryAreas.map((place) => {
            const isStudio = place === site.studioCity;
            return (
              <motion.li key={place} variants={fadeUp} transition={defaultTransition}>
                <Link
                  href={locationPath(place.toLowerCase())}
                  className={`flex flex-col items-center justify-center gap-1.5 rounded-xl border px-2 py-3 text-center transition-all sm:py-4 ${
                    isStudio
                      ? "border-gold/50 bg-gold/20 text-cream shadow-lg shadow-gold/10 hover:border-gold"
                      : "border-cream/15 bg-cream/5 text-cream/90 hover:border-gold/35 hover:bg-cream/10"
                  }`}
                >
                  <PinIcon
                    className={`h-4 w-4 sm:h-5 sm:w-5 ${isStudio ? "text-gold-light" : "text-gold/70"}`}
                  />
                  <span className="font-display text-sm font-semibold leading-tight sm:text-base">
                    {place}
                  </span>
                  {isStudio && (
                    <span className="text-[9px] font-bold uppercase tracking-wider text-gold-light">
                      Our kitchen
                    </span>
                  )}
                </Link>
              </motion.li>
            );
          })}
        </motion.ul>

        <motion.div
          className="mt-12 grid gap-4 lg:grid-cols-2"
          variants={staggerContainer}
          initial={reducedMotion ? false : "hidden"}
          whileInView={reducedMotion ? undefined : "visible"}
          viewport={{ once: true }}
        >
          {homeLocationBlocks.map((block) => (
            <motion.article
              key={block.id}
              variants={fadeUp}
              transition={defaultTransition}
              className="group flex flex-col justify-between rounded-2xl border border-cream/10 bg-cocoa/40 p-6 backdrop-blur-sm transition-colors hover:border-gold/30 hover:bg-cocoa/55 sm:flex-row sm:items-center sm:gap-6"
            >
              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold">
                  {block.area}
                </p>
                <h3 className="mt-1 font-display text-lg font-semibold text-cream sm:text-xl">
                  {block.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/65">
                  {block.description}
                </p>
              </div>
              <Link
                href={block.href}
                className="mt-4 inline-flex shrink-0 items-center justify-center rounded-full border border-cream/20 bg-cream/10 px-5 py-2.5 text-sm font-semibold text-cream transition-colors group-hover:border-gold group-hover:bg-gold/20 group-hover:text-gold-light sm:mt-0"
              >
                {block.linkLabel}
              </Link>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-gold/25 bg-gradient-to-r from-gold/15 via-cream/5 to-terracotta/10 px-6 py-5 sm:flex-row"
          initial={reducedMotion ? false : { opacity: 0, y: 12 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...defaultTransition, delay: 0.15 }}
        >
          <p className="text-center text-sm text-cream/85 sm:text-left">
            <span className="font-semibold text-cream">Your area not listed?</span>{" "}
            We often deliver to nearby villages — WhatsApp your location for a quote.
          </p>
          <motion.div className="flex shrink-0 flex-wrap justify-center gap-2 sm:justify-end">
            <Link
              href="/locations"
              className="rounded-full border border-cream/25 bg-cream/10 px-5 py-2.5 text-sm font-bold text-cream transition-colors hover:border-gold hover:bg-gold/20"
            >
              All areas
            </Link>
            <Link
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-terracotta px-5 py-2.5 text-sm font-bold text-white shadow-md transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              Ask about delivery
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
