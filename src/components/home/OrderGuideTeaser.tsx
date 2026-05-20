"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { orderSteps, site } from "@/lib/content";
import { fadeUp, staggerContainer, defaultTransition } from "@/lib/motion";

export function OrderGuideTeaser() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="bg-sage-light py-14 sm:py-20" aria-labelledby="order-guide-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-cocoa/5 sm:p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sage">
                How to order
              </p>
              <h2
                id="order-guide-heading"
                className="mt-2 font-display text-2xl font-semibold text-cocoa sm:text-3xl"
              >
                New here? Start with our booking guide
              </h2>
              <p className="mt-3 text-cocoa/70 leading-relaxed">
                Pick an occasion, see what to send on WhatsApp, and get a quote from Muskan —
                usually the same day on studio hours.
              </p>
            </div>
            <Link
              href="/order"
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-terracotta px-8 py-3.5 text-sm font-semibold text-white shadow-md transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              Open booking guide
            </Link>
          </div>

          <motion.ol
            className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            variants={staggerContainer}
            initial={reducedMotion ? false : "hidden"}
            whileInView={reducedMotion ? undefined : "visible"}
            viewport={{ once: true }}
          >
            {orderSteps.map((step, i) => (
              <motion.li
                key={step.title}
                variants={fadeUp}
                transition={defaultTransition}
                className="rounded-xl bg-cream/80 p-4"
              >
                <span className="font-display text-lg font-bold text-gold/80">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-1 font-display text-base font-semibold text-cocoa">
                  {step.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-cocoa/65">
                  {step.description}
                </p>
              </motion.li>
            ))}
          </motion.ol>

          <p className="mt-6 text-center text-xs text-cocoa/50 lg:text-left">
            Questions? WhatsApp {site.phone} · Pickup in {site.studioCity}, delivery across Goa
          </p>
        </div>
      </div>
    </section>
  );
}
