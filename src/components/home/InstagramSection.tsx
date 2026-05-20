"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/lib/content";
import { getFeaturedCreations } from "@/lib/catalog";
import { formatCreationImageAlt } from "@/lib/creation-seo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp, staggerContainer, defaultTransition } from "@/lib/motion";

const gridCreations = getFeaturedCreations(6);

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

export function InstagramSection() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      className="bg-cocoa py-16 sm:py-24"
      aria-label="Follow Sweet Bites on Instagram"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            light
            align="left"
            eyebrow="On Instagram"
            title="Latest from the kitchen"
            description={`Follow ${site.instagramHandle} for new cakes, reels, and seasonal specials — fresh work posted regularly.`}
          />
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center gap-2.5 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] px-6 py-3 text-sm font-bold text-white shadow-lg transition-transform hover:scale-[1.03] active:scale-[0.98] lg:mb-12"
          >
            <InstagramIcon className="h-5 w-5" />
            Follow {site.instagramHandle}
          </a>
        </div>

        <motion.ul
          className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 lg:gap-4"
          variants={staggerContainer}
          initial={reducedMotion ? false : "hidden"}
          whileInView={reducedMotion ? undefined : "visible"}
          viewport={{ once: true, margin: "-40px" }}
        >
          {gridCreations.map((creation) => (
            <motion.li key={creation.slug} variants={fadeUp} transition={defaultTransition}>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-square overflow-hidden rounded-xl ring-1 ring-cream/10 sm:rounded-2xl"
                aria-label={`View ${site.instagramHandle} on Instagram — ${creation.title}`}
              >
                <Image
                  src={creation.cover}
                  alt={formatCreationImageAlt(creation)}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, 33vw"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-cocoa/0 transition-colors group-hover:bg-cocoa/40">
                  <InstagramIcon className="h-8 w-8 scale-75 text-white opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100" />
                </span>
                {creation.video && (
                  <span className="absolute right-2 top-2 rounded-md bg-black/50 px-1.5 py-0.5 text-[10px] font-bold text-white backdrop-blur-sm">
                    REEL
                  </span>
                )}
              </a>
            </motion.li>
          ))}
        </motion.ul>

        <p className="mt-6 text-center text-xs text-cream/50 sm:text-left">
          Gallery preview from sweetbites.me — tap any tile to open our Instagram profile.
        </p>
      </div>
    </section>
  );
}
