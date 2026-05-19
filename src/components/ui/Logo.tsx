import Link from "next/link";
import { site } from "@/lib/content";

type LogoProps = {
  className?: string;
  variant?: "default" | "light";
  onNavigate?: () => void;
};

export function Logo({
  className = "",
  variant = "default",
  onNavigate,
}: LogoProps) {
  const isLight = variant === "light";

  return (
    <Link
      href="/"
      onClick={onNavigate}
      className={`group flex items-center gap-2.5 ${className}`}
    >
      <span
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full shadow-md transition-transform group-hover:scale-105 ${
          isLight
            ? "bg-gold text-cocoa"
            : "bg-terracotta text-white shadow-terracotta/25"
        }`}
        aria-hidden
      >
        <svg viewBox="0 0 32 32" className="h-5 w-5" fill="currentColor">
          <path d="M16 4c-1 4-4 6-6 8 2 1 4 2 6 2v10c0 1 4 1 4 0V14c2 0 4-1 6-2-2-2-5-4-6-8z" />
          <circle cx="12" cy="11" r="1.5" opacity="0.6" />
          <circle cx="20" cy="11" r="1.5" opacity="0.6" />
        </svg>
      </span>
      <span className="flex flex-col leading-tight">
        <span
          className={`font-display text-lg font-semibold sm:text-xl ${
            isLight
              ? "text-cream group-hover:text-gold"
              : "text-cocoa group-hover:text-terracotta"
          }`}
        >
          {site.name}
        </span>
        <span
          className={`text-[10px] font-semibold uppercase tracking-[0.2em] sm:text-xs ${
            isLight ? "text-gold" : "text-terracotta"
          }`}
        >
          {site.tagline}
        </span>
      </span>
    </Link>
  );
}
