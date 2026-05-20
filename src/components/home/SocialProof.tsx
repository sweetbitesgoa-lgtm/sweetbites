"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/lib/content";
import { getFeaturedCreations } from "@/lib/catalog";
import { formatCreationImageAlt } from "@/lib/creation-seo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp, staggerContainer, defaultTransition } from "@/lib/motion";

const customerPhotos = getFeaturedCreations(4).map((c) => ({
  image: c.cover,
  caption: c.title,
  href: `/creations/${c.slug}`,
  alt: formatCreationImageAlt(c),
}));

export function SocialProof() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <SectionHeading
              align="left"
              eyebrow="Real celebrations"
              title="Sweet moments shared"
              description="A glimpse of cakes we've crafted for celebrations across Goa."
            />
          </div>
          {(site.googleReviewUrl ?? site.googleBusinessUrl) ? (
            <a
              href={site.googleReviewUrl ?? site.googleBusinessUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-2xl bg-gold-light px-5 py-3 transition-colors hover:bg-gold-light/80"
            >
              <span className="font-display text-3xl font-bold text-terracotta">
                {site.stats.rating}
              </span>
              <div className="text-left text-sm">
                <p className="font-semibold text-cocoa">Loved in Goa</p>
                <p className="text-cocoa/60">
                  {site.stats.reviewCount}+ happy orders · Google
                </p>
              </div>
            </a>
          ) : (
            <div className="flex items-center gap-3 rounded-2xl bg-gold-light px-5 py-3">
              <span className="font-display text-3xl font-bold text-terracotta">
                {site.stats.rating}
              </span>
              <div className="text-left text-sm">
                <p className="font-semibold text-cocoa">Loved in Goa</p>
                <p className="text-cocoa/60">{site.stats.reviewCount}+ happy orders</p>
              </div>
            </div>
          )}
        </div>

        <motion.div
          className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4"
          variants={staggerContainer}
          initial={reducedMotion ? false : "hidden"}
          whileInView={reducedMotion ? undefined : "visible"}
          viewport={{ once: true }}
        >
          {customerPhotos.map((photo) => (
            <motion.figure
              key={photo.href}
              variants={fadeUp}
              transition={defaultTransition}
              className="group relative aspect-square overflow-hidden rounded-2xl"
            >
              <Link href={photo.href}>
                <Image
                  src={photo.image}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-cocoa/80 to-transparent p-3 text-xs font-medium text-white">
                  {photo.caption}
                </figcaption>
              </Link>
            </motion.figure>
          ))}
        </motion.div>

        <p className="mt-8 text-center text-sm text-cocoa/60">
          Tag us on Instagram{" "}
          <Link
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-terracotta hover:underline"
          >
            {site.instagramHandle}
          </Link>
        </p>
      </div>
    </section>
  );
}
