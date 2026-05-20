"use client";

import { motion, useReducedMotion } from "framer-motion";
import { trustPillars } from "@/lib/content";
import { fadeUp, staggerContainer, defaultTransition } from "@/lib/motion";

export function TrustStrip() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      className="border-b border-cocoa/8 bg-cream py-10 sm:py-12"
      aria-label="Why Sweet Bites"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.ul
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={staggerContainer}
          initial={reducedMotion ? false : "hidden"}
          whileInView={reducedMotion ? undefined : "visible"}
          viewport={{ once: true, margin: "-40px" }}
        >
          {trustPillars.map((item) => (
            <motion.li
              key={item.title}
              variants={fadeUp}
              transition={defaultTransition}
              className="flex gap-4 rounded-2xl border border-cocoa/8 bg-white/80 p-5 shadow-sm backdrop-blur-sm"
            >
              <span
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold-light text-xl"
                aria-hidden
              >
                {item.icon}
              </span>
              <div>
                <h3 className="font-display text-base font-semibold text-cocoa">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-cocoa/65">
                  {item.description}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
