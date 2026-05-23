"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks } from "@/lib/content";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";

const leftNav = navLinks.slice(0, 5); // Home, Creations, Case Studies, Reels, Locations
const rightNav = navLinks.slice(5);

function isActive(href: string, pathname: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

function NavLink({
  href,
  label,
  pathname,
  highlight = false,
}: {
  href: string;
  label: string;
  pathname: string;
  highlight?: boolean;
}) {
  const active = isActive(href, pathname);

  if (highlight) {
    return (
      <Link
        href={href}
        className={`rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] transition-all duration-300 ${
          active
            ? "bg-terracotta text-white shadow-md shadow-terracotta/25"
            : "bg-cocoa text-cream hover:bg-terracotta hover:shadow-md hover:shadow-terracotta/20"
        }`}
      >
        {label}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className="group relative px-1 py-2 font-display text-[13px] font-medium tracking-wide text-cocoa/75 transition-colors hover:text-terracotta"
    >
      <span className={active ? "text-terracotta" : ""}>{label}</span>
      <span
        className={`absolute -bottom-0.5 left-1/2 h-px -translate-x-1/2 bg-gradient-to-r from-transparent via-gold to-transparent transition-all duration-300 ${
          active ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-3/4 group-hover:opacity-70"
        }`}
        aria-hidden
      />
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40">
      <div className="relative border-b border-cocoa/[0.07] bg-cream/92 shadow-[0_8px_32px_-12px_rgba(44,24,16,0.12)] backdrop-blur-xl">
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(201,162,39,0.06)_0%,transparent_42%)]"
          aria-hidden
        />
        <div className="grain-overlay pointer-events-none absolute inset-0 opacity-[0.35]" aria-hidden />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="hidden items-center py-4 md:grid md:grid-cols-[1fr_auto_1fr] md:gap-6 lg:py-5">
            <nav
              className="flex items-center justify-start gap-5 lg:gap-9"
              aria-label="Primary left"
            >
              {leftNav.map((link) => (
                <NavLink
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  pathname={pathname}
                />
              ))}
            </nav>

            <div className="flex items-center justify-center px-2 py-1">
              <Logo size="lg" />
            </div>

            <nav
              className="flex items-center justify-end gap-5 lg:gap-8"
              aria-label="Primary right"
            >
              {rightNav.map((link) => (
                <NavLink
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  pathname={pathname}
                  highlight={link.href === "/order"}
                />
              ))}
            </nav>
          </div>

          <div className="relative flex items-center justify-between py-3.5 md:hidden">
            <button
              type="button"
              className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-cocoa/10 bg-white/60 shadow-sm backdrop-blur-sm"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              <span className="flex w-4 flex-col items-center justify-center gap-[5px]">
                <span
                  className={`block h-px w-full bg-cocoa transition-all duration-300 ${open ? "translate-y-[6px] rotate-45" : ""}`}
                />
                <span
                  className={`block h-px w-full bg-cocoa transition-all duration-300 ${open ? "scale-x-0 opacity-0" : ""}`}
                />
                <span
                  className={`block h-px w-full bg-cocoa transition-all duration-300 ${open ? "-translate-y-[6px] -rotate-45" : ""}`}
                />
              </span>
            </button>

            <Logo
              size="sm"
              showTagline
              onNavigate={() => setOpen(false)}
              className="absolute left-1/2 z-10 max-w-[min(100%,14rem)] -translate-x-1/2"
            />

            <Link
              href="/order"
              className="relative z-10 rounded-full bg-terracotta px-3.5 py-2 text-[10px] font-semibold uppercase tracking-wider text-white shadow-sm"
            >
              Book
            </Link>
          </div>

          {open && (
            <nav
              className="border-t border-cocoa/8 px-1 pb-6 pt-4 md:hidden"
              aria-label="Mobile"
            >
              <p className="mb-3 text-center font-display text-[10px] uppercase tracking-[0.3em] text-cocoa/40">
                Menu
              </p>
              <ul className="flex flex-col gap-1">
                {navLinks.map((link) => {
                  const active = isActive(link.href, pathname);
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={`flex items-center justify-between rounded-xl px-4 py-3.5 font-display text-lg transition-colors ${
                          active
                            ? "bg-terracotta/10 text-terracotta"
                            : "text-cocoa hover:bg-cocoa/[0.04]"
                        }`}
                        onClick={() => setOpen(false)}
                      >
                        {link.label}
                        {active && (
                          <span className="text-xs text-gold" aria-hidden>
                            ✦
                          </span>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-5 border-t border-cocoa/8 pt-5">
                <Button
                  href={getWhatsAppUrl()}
                  variant="whatsapp"
                  external
                  className="w-full"
                >
                  WhatsApp Muskan
                </Button>
              </div>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
