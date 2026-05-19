"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Creation } from "@/lib/catalog";
import { WhatsAppOrderCard } from "@/components/order/WhatsAppOrderCard";

type CreationDetailProps = {
  creation: Creation;
};

export function CreationDetail({ creation }: CreationDetailProps) {
  const [activeImage, setActiveImage] = useState(0);
  const images = creation.images;
  const current = images[activeImage] ?? creation.cover;

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <nav className="mb-8 text-sm text-cocoa/60" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-terracotta">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/creations" className="hover:text-terracotta">
          Creations
        </Link>
        <span className="mx-2">/</span>
        <span className="text-cocoa">{creation.title}</span>
      </nav>

      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-cocoa/5">
            <Image
              src={current}
              alt={`${creation.title} — custom cake by Sweet Bites Goa`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
          {images.length > 1 && (
            <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
              {images.map((src, i) => (
                <button
                  key={src + i}
                  type="button"
                  onClick={() => setActiveImage(i)}
                  className={`relative h-16 w-16 shrink-0 overflow-hidden rounded-xl ring-2 transition-all ${
                    i === activeImage
                      ? "ring-terracotta"
                      : "ring-transparent opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={src}
                    alt={`${creation.title} view ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </button>
              ))}
            </div>
          )}
          {creation.video && (
            <div className="mt-6 overflow-hidden rounded-2xl bg-cocoa shadow-lg ring-1 ring-gold/20">
              <video
                src={creation.video}
                controls
                playsInline
                poster={creation.cover}
                className="w-full"
                aria-label={`Video of ${creation.title} cake decoration`}
              />
            </div>
          )}
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-terracotta">
            Custom cake · Goa
          </p>
          <h1 className="mt-2 font-display text-3xl font-semibold text-cocoa sm:text-4xl">
            {creation.title}
          </h1>
          <p className="mt-4 leading-relaxed text-cocoa/75">
            {creation.description}
          </p>

          {creation.tags.length > 0 && (
            <ul className="mt-6 flex flex-wrap gap-2">
              {creation.tags.map((tag) => (
                <li key={tag}>
                  <Link
                    href={
                      creation.occasion.includes(tag)
                        ? `/creations?occasion=${tag}`
                        : creation.format.includes(tag)
                          ? `/creations?format=${tag}`
                          : `/creations?color=${tag}`
                    }
                    className="rounded-full bg-sage-light px-3 py-1 text-xs font-medium capitalize text-sage transition-colors hover:bg-sage-light/80"
                  >
                    {tag.replace(/-/g, " ")}
                  </Link>
                </li>
              ))}
            </ul>
          )}

          <WhatsAppOrderCard
            creationSlug={creation.slug}
            creationTitle={creation.title}
            className="mt-8"
          />
        </div>
      </div>
    </div>
  );
}
