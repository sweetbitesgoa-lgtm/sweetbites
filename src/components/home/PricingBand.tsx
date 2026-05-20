"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { site, sizes } from "@/lib/content";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp, staggerContainer, defaultTransition } from "@/lib/motion";

export function PricingBand() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="bg-cocoa py-16 sm:py-20" aria-labelledby="pricing-heading">
      <motion.div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          light
          eyebrow="Transparent starting points"
          title="Guide prices — custom quote on WhatsApp"
          description={`Final price depends on design, flavours, and delivery distance from ${site.studioCity}. Message us for an exact quote.`}
        />

        <motion.ul
          id="pricing-heading"
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          variants={staggerContainer}
          initial={reducedMotion ? false : "hidden"}
          whileInView={reducedMotion ? undefined : "visible"}
          viewport={{ once: true }}
        >
          {sizes.map((size) => (
            <motion.li
              key={size.label}
              variants={fadeUp}
              transition={defaultTransition}
              className="rounded-2xl border border-cream/10 bg-cream/5 p-6 text-center backdrop-blur-sm"
            >
              <p className="text-xs font-bold uppercase tracking-wider text-gold">
                {size.label}
              </p>
              <p className="mt-2 font-display text-3xl font-semibold text-cream">
                {size.from}
              </p>
              <p className="mt-2 text-sm text-cream/65">{size.serves}</p>
            </motion.li>
          ))}
        </motion.ul>

        <motion.p
          className="mt-8 text-center text-sm text-cream/55"
          initial={reducedMotion ? false : { opacity: 0 }}
          whileInView={reducedMotion ? undefined : { opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ...defaultTransition, delay: 0.2 }}
        >
          Bento, fondant themes, and wedding tiers are quoted individually. Book{" "}
          <span className="font-semibold text-gold">{site.bookAheadDays}</span> ahead.
        </motion.p>

        <motion.div
          className="mt-6 flex justify-center"
          initial={reducedMotion ? false : { opacity: 0, y: 8 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...defaultTransition, delay: 0.3 }}
        >
          <Link
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            Get your quote on WhatsApp
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
