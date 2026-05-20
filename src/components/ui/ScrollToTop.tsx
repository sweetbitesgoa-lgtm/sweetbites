"use client";

import { useCallback, useEffect, useState } from "react";

function ChevronUpIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 19V5M5 12l7-7 7 7" />
    </svg>
  );
}

const SHOW_AFTER_PX = 400;

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER_PX);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
  }, []);

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-6 left-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-cocoa/10 bg-cream/95 text-cocoa shadow-lg shadow-cocoa/15 backdrop-blur-md transition-all duration-300 hover:border-terracotta/30 hover:bg-white hover:text-terracotta focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta md:bottom-8 md:left-8 md:h-11 md:w-11 ${
        visible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-2 opacity-0"
      }`}
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
    >
      <ChevronUpIcon className="h-5 w-5" />
    </button>
  );
}
