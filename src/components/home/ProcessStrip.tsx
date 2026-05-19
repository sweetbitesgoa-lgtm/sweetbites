"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { processSteps } from "@/lib/content";
import { getFeaturedCreations } from "@/lib/catalog";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp, staggerContainer, defaultTransition } from "@/lib/motion";

const stepImages = getFeaturedCreations(4).map((c) => c.cover);

export function ProcessStrip() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="bg-blush/50 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Behind the scenes"
          title="From sketch to celebration"
          description="A peek into how your custom cake comes to life in our Goa kitchen."
        />
        <motion.div
          className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory lg:grid lg:grid-cols-4 lg:overflow-visible lg:pb-0"
          variants={staggerContainer}
          initial={reducedMotion ? false : "hidden"}
          whileInView={reducedMotion ? undefined : "visible"}
          viewport={{ once: true }}
        >
          {processSteps.map((step, i) => (
            <motion.article
              key={step.title}
              variants={fadeUp}
              transition={defaultTransition}
              className="relative w-72 shrink-0 snap-center overflow-hidden rounded-2xl bg-white shadow-md lg:w-auto"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={stepImages[i] ?? stepImages[0]}
                  alt={step.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 288px, 25vw"
                />
                <span className="absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-terracotta text-sm font-bold text-white">
                  {i + 1}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-display text-lg font-semibold text-cocoa">
                  {step.title}
                </h3>
                <p className="mt-1 text-sm text-cocoa/70">{step.description}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
