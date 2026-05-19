"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { getFeaturedCreations } from "@/lib/catalog";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp, staggerContainer, defaultTransition } from "@/lib/motion";

const featured = getFeaturedCreations(8);

export function FeaturedCakes() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our creations"
          title="Featured from the scrapbook"
          description="Real cakes crafted in Goa — each design can be customized for your celebration."
        />

        <motion.ul
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          variants={staggerContainer}
          initial={reducedMotion ? false : "hidden"}
          whileInView={reducedMotion ? undefined : "visible"}
          viewport={{ once: true, margin: "-40px" }}
        >
          {featured.map((creation) => (
            <motion.li
              key={creation.slug}
              variants={fadeUp}
              transition={defaultTransition}
            >
              <Link
                href={`/creations/${creation.slug}`}
                className="group block overflow-hidden rounded-2xl bg-cream shadow-md transition-shadow hover:shadow-xl"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={creation.cover}
                    alt={creation.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 25vw"
                  />
                  {creation.video && (
                    <span className="absolute right-3 top-3 rounded-full bg-white/95 px-2 py-1 text-[10px] font-bold text-cocoa">
                      REEL
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-sage capitalize">
                    {(creation.occasion[0] ?? creation.format[0] ?? "custom").replace(
                      /-/g,
                      " ",
                    )}
                  </p>
                  <h3 className="mt-1 font-display text-lg font-semibold text-cocoa group-hover:text-terracotta transition-colors">
                    {creation.title}
                  </h3>
                </div>
              </Link>
            </motion.li>
          ))}
        </motion.ul>

        <div className="mt-12 text-center">
          <Link
            href="/creations"
            className="inline-flex items-center gap-2 text-sm font-semibold text-terracotta hover:underline"
          >
            See all creations
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
