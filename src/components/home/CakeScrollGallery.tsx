"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { getFeaturedCreations } from "@/lib/catalog";
import { defaultTransition } from "@/lib/motion";

const stripCreations = getFeaturedCreations(12);

export function CakeScrollGallery() {
  const reducedMotion = useReducedMotion();
  const doubled = [...stripCreations, ...stripCreations];

  return (
    <section className="overflow-hidden bg-cocoa py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={defaultTransition}
          className="mb-8 flex flex-wrap items-end justify-between gap-4"
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-gold">
              Fresh from the kitchen
            </p>
            <h2 className="font-display text-2xl font-semibold text-cream sm:text-3xl">
              Latest creations
            </h2>
          </div>
          <Link
            href="/creations"
            className="text-sm font-semibold text-gold transition-colors hover:text-gold-light"
          >
            View all →
          </Link>
        </motion.div>

        <div className="relative -mx-4 sm:-mx-6 lg:-mx-8">
          <ul className="flex animate-marquee gap-4 px-4">
            {doubled.map((creation, i) => (
              <li
                key={`${creation.slug}-${i}`}
                className="relative h-48 w-64 shrink-0 overflow-hidden rounded-2xl"
              >
                <Link href={`/creations/${creation.slug}`}>
                  <Image
                    src={creation.cover}
                    alt={creation.title}
                    fill
                    className="object-cover transition-transform hover:scale-105"
                    sizes="256px"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
