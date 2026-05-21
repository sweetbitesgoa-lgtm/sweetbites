"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { celebrationPickers } from "@/lib/catalog";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp, staggerContainer, defaultTransition } from "@/lib/motion";

export function OccasionCards() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Celebrations"
          title="What's the occasion?"
          description="Tap a category for a Goa ordering guide, gallery picks, and WhatsApp tips."
        />
        <motion.div
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial={reducedMotion ? false : "hidden"}
          whileInView={reducedMotion ? undefined : "visible"}
          viewport={{ once: true }}
        >
          {celebrationPickers.map((occ) => (
            <motion.div
              key={occ.id}
              variants={fadeUp}
              transition={defaultTransition}
            >
              <Link
                href={occ.href}
                className={`flex flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${occ.color}`}
              >
                <span className="text-4xl" aria-hidden>
                  {occ.emoji}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-cocoa">
                  {occ.label}
                </h3>
                <p className="mt-2 text-sm text-cocoa/70">{occ.description}</p>
                <span className="mt-4 text-sm font-semibold text-terracotta">
                  Browse →
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
