import type { ReactNode } from "react";
import Image from "next/image";

export type SecondaryPageHeroImage = {
  src: string;
  alt: string;
  /** LCP hero — set true on above-the-fold pages */
  priority?: boolean;
};

type SecondaryPageHeroProps = {
  /** Small line above title, e.g. "Gallery" */
  label?: string;
  title: string;
  description: string;
  children?: ReactNode;
  /** Optional right-column image (large screens); stacks under copy on mobile */
  image?: SecondaryPageHeroImage;
};

/**
 * Light editorial page header (creations, reels, contact — matches /about tone).
 */
export function SecondaryPageHero({
  label,
  title,
  description,
  children,
  image,
}: SecondaryPageHeroProps) {
  const body = (
    <>
      {label ? (
        <p className="text-sm font-medium text-muted">{label}</p>
      ) : null}
      <h1 className="mt-2 max-w-3xl font-display text-[clamp(2rem,4.5vw,3rem)] font-medium leading-[1.1] tracking-tight text-cocoa">
        {title}
      </h1>
      <p className="mt-5 max-w-2xl text-[1.0625rem] leading-relaxed text-muted sm:text-lg">
        {description}
      </p>
      {children ? <div className="mt-8 flex flex-wrap gap-3">{children}</div> : null}
    </>
  );

  return (
    <header className="about-mesh border-b border-line">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        {image ? (
          <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-10 lg:gap-y-12">
            <div className="lg:col-span-7">{body}</div>
            <div className="lg:col-span-5">
              <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-lg bg-cream ring-1 ring-line lg:ml-auto lg:max-h-[min(440px,62vh)]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority={image.priority ?? true}
                />
              </div>
            </div>
          </div>
        ) : (
          body
        )}
      </div>
    </header>
  );
}
