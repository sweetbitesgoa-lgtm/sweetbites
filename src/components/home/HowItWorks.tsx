"use client";

import { motion, useReducedMotion } from "framer-motion";
import { orderSteps } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { fadeUp, staggerContainer, defaultTransition } from "@/lib/motion";

export function HowItWorks() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative bg-sage-light py-20 sm:py-28">
      <WaveDivider className="absolute -top-px w-full text-white" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How it works"
          title="Your dream cake, in four steps"
          description="Ordering a custom cake from Sweet Bites is simple — we guide you from idea to celebration."
        />

        <motion.ol
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
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
              className="relative rounded-2xl bg-white p-6 shadow-sm"
            >
              <span className="font-display text-4xl font-bold text-gold/40">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 font-display text-xl font-semibold text-cocoa">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-cocoa/70">
                {step.description}
              </p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
