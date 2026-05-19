"use client";

import { motion, useReducedMotion } from "framer-motion";
import { testimonials } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp, staggerContainer, defaultTransition } from "@/lib/motion";

function Stars({ count }: { count: number }) {
  return (
    <span className="flex gap-0.5 text-gold" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </span>
  );
}

export function Testimonials() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Kind words"
          title="Loved by Goa"
          description="Real stories from families and friends who celebrated with Sweet Bites."
        />

        <motion.div
          className="grid gap-8 md:grid-cols-3"
          variants={staggerContainer}
          initial={reducedMotion ? false : "hidden"}
          whileInView={reducedMotion ? undefined : "visible"}
          viewport={{ once: true }}
        >
          {testimonials.map((t) => (
            <motion.blockquote
              key={t.name}
              variants={fadeUp}
              transition={defaultTransition}
              className="rounded-2xl border border-cocoa/5 bg-white p-6 shadow-sm"
            >
              <Stars count={t.rating} />
              <p className="mt-4 text-cocoa/80 leading-relaxed">&ldquo;{t.text}&rdquo;</p>
              <footer className="mt-4 border-t border-cocoa/5 pt-4">
                <cite className="not-italic font-semibold text-cocoa">{t.name}</cite>
                <p className="text-sm text-cocoa/50">{t.location}</p>
              </footer>
            </motion.blockquote>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
