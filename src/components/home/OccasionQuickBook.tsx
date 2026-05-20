"use client";

import { motion, useReducedMotion } from "framer-motion";
import { homeQuickBookChips } from "@/lib/order-booking";
import { getBookingPathWhatsAppUrl, getWhatsAppUrl } from "@/lib/whatsapp";
import { fadeUp, staggerContainer, defaultTransition } from "@/lib/motion";

function chipHref(chip: (typeof homeQuickBookChips)[number]): string {
  if ("pathId" in chip) {
    return getBookingPathWhatsAppUrl(chip.pathId);
  }
  return getWhatsAppUrl(chip.message);
}

export function OccasionQuickBook() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="bg-white py-8 sm:py-10" aria-label="Quick book on WhatsApp">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="rounded-2xl border border-sage/15 bg-sage-light/40 px-4 py-5 sm:px-6 sm:py-6"
          initial={reducedMotion ? false : { opacity: 0, y: 12 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={defaultTransition}
        >
          <p className="text-center text-xs font-bold uppercase tracking-[0.22em] text-sage">
            Start in one tap
          </p>
          <p className="mt-1 text-center text-sm text-cocoa/70">
            Opens WhatsApp with a ready-made message — add your date and details.
          </p>
          <motion.ul
            className="mt-4 flex flex-wrap justify-center gap-2 sm:gap-3"
            variants={staggerContainer}
            initial={reducedMotion ? false : "hidden"}
            whileInView={reducedMotion ? undefined : "visible"}
            viewport={{ once: true }}
          >
            {homeQuickBookChips.map((chip) => (
              <motion.li key={chip.id} variants={fadeUp} transition={defaultTransition}>
                <a
                  href={chipHref(chip)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-cocoa/10 bg-white px-4 py-2.5 text-sm font-semibold text-cocoa shadow-sm transition-all hover:border-terracotta/30 hover:bg-blush/30 hover:text-terracotta hover:shadow-md active:scale-[0.98]"
                >
                  <span aria-hidden>{chip.emoji}</span>
                  {chip.label}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}
