import Link from "next/link";
import { seasonalBanner } from "@/lib/content";

export function SeasonalBanner() {
  if (!seasonalBanner.active) return null;

  return (
    <div className="bg-sage text-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-4 gap-y-2 px-4 py-2.5 text-center text-sm sm:text-base">
        <span aria-hidden>{seasonalBanner.emoji}</span>
        <p className="font-medium">{seasonalBanner.message}</p>
        <Link
          href={seasonalBanner.ctaHref}
          className="font-semibold underline decoration-gold underline-offset-4 transition-colors hover:text-gold"
        >
          {seasonalBanner.ctaLabel} →
        </Link>
      </div>
    </div>
  );
}
