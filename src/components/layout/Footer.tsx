import Link from "next/link";
import type { ReactNode } from "react";
import { navLinks, site } from "@/lib/content";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { WhatsAppIconInline } from "@/components/ui/WhatsAppButton";

function FooterHeading({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-gold">
      {children}
    </p>
  );
}

function FooterNavLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link
        href={href}
        className="group inline-flex items-center gap-1.5 font-display text-sm font-medium text-cream/80 transition-colors hover:text-gold"
      >
        <span
          className="h-px w-0 bg-gold/70 transition-all duration-300 group-hover:w-3"
          aria-hidden
        />
        {label}
      </Link>
    </li>
  );
}

function ExternalFooterLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-sm text-cream/75 transition-colors hover:text-gold"
      >
        {label}
        <span className="text-[10px] text-cream/40" aria-hidden>
          ↗
        </span>
      </a>
    </li>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  const actionHrefs = ["/order", "/contact"];
  const mainNav = navLinks.filter((l) => !actionHrefs.includes(l.href));
  const actionNav = navLinks.filter((l) => actionHrefs.includes(l.href));

  return (
    <footer className="relative overflow-hidden border-t border-cocoa/10 text-cream">
      <div className="hero-goa-sky absolute inset-0" aria-hidden />
      <div
        className="grain-overlay pointer-events-none absolute inset-0 opacity-[0.28]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.35)_100%)]"
        aria-hidden
      />

      <div className="relative">
        {/* Order CTA */}
        <div className="border-b border-cream/[0.08]">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-10 sm:flex-row sm:items-center sm:px-6 lg:px-8 lg:py-12">
            <div className="max-w-md">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-gold/90">
                Book ahead · {site.bookAheadDays}
              </p>
              <p className="mt-2 font-display text-xl font-medium leading-snug tracking-tight text-cream sm:text-2xl">
                Custom cakes across Goa — studio in {site.studioCity}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-cream/65">
                Message Muskan on WhatsApp with your date, theme, and photos for a
                quote.
              </p>
            </div>
            <Button
              href={getWhatsAppUrl()}
              variant="whatsapp"
              external
              className="shrink-0 shadow-lg shadow-[#25D366]/20"
            >
              <WhatsAppIconInline className="h-5 w-5" />
              Order on WhatsApp
            </Button>
          </div>
        </div>

        {/* Main grid */}
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14 lg:grid lg:grid-cols-12 lg:gap-10 lg:px-8 lg:py-16">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Logo variant="light" size="md" align="start" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/70">
              Handcrafted celebration cakes by Muskan — birthdays, weddings, and
              bento boxes from our {site.studioCity} kitchen to your table anywhere
              in Goa.
            </p>
            <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-sm">
              <div>
                <dt className="text-[10px] font-semibold uppercase tracking-wider text-cream/45">
                  Rating
                </dt>
                <dd className="mt-0.5 font-display text-lg font-medium tabular-nums text-gold">
                  {site.stats.rating}
                  <span className="text-cream/80">★</span>
                </dd>
              </div>
              <div>
                <dt className="text-[10px] font-semibold uppercase tracking-wider text-cream/45">
                  Celebrations
                </dt>
                <dd className="mt-0.5 font-display text-lg font-medium tabular-nums text-cream">
                  {site.stats.celebrations}+
                </dd>
              </div>
            </dl>
          </div>

          {/* Navigation */}
          <div className="mt-10 border-t border-cream/[0.08] pt-10 sm:mt-0 sm:border-t-0 sm:pt-0 lg:col-span-2">
            <FooterHeading>Explore</FooterHeading>
            <ul className="space-y-2.5">
              {mainNav.map((link) => (
                <FooterNavLink key={link.href} href={link.href} label={link.label} />
              ))}
            </ul>
          </div>

          <div className="mt-8 lg:col-span-2 lg:mt-0">
            <FooterHeading>Book</FooterHeading>
            <ul className="space-y-2.5">
              {actionNav.map((link) => (
                <FooterNavLink key={link.href} href={link.href} label={link.label} />
              ))}
              <FooterNavLink href="/locations/velim" label={`Studio · ${site.studioCity}`} />
            </ul>
          </div>

          {/* Studio */}
          <div className="mt-10 border-t border-cream/[0.08] pt-10 lg:col-span-4 lg:mt-0 lg:border-t-0 lg:pt-0">
            <FooterHeading>Studio</FooterHeading>
            <div className="rounded-xl border border-cream/[0.1] bg-cream/[0.04] p-5 backdrop-blur-sm">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-gold/90">
                {site.studioCity}, South Goa
              </p>
              <address className="mt-3 not-italic text-sm leading-relaxed text-cream/85">
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-gold"
                >
                  {site.address}
                </a>
              </address>
              <p className="mt-4 text-sm text-cream/65">{site.hours}</p>
              <p className="mt-1 text-xs text-cream/45">Closed Mondays · visits by appointment</p>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-terracotta transition-colors hover:text-gold"
              >
                Open in Google Maps
                <span aria-hidden>↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* Connect row */}
        <div className="border-t border-cream/[0.08]">
          <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
            <FooterHeading>Connect</FooterHeading>
            <ul className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-x-10 sm:gap-y-3">
              <li>
                <a
                  href={`tel:+91${site.phoneRaw}`}
                  className="text-sm font-medium text-cream/80 transition-colors hover:text-gold"
                >
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-sm text-cream/75 transition-colors hover:text-gold"
                >
                  {site.email}
                </a>
              </li>
              <ExternalFooterLink href={site.instagram} label={site.instagramHandle} />
              {site.googleReviewUrl ? (
                <ExternalFooterLink
                  href={site.googleReviewUrl}
                  label="Google reviews"
                />
              ) : null}
              <ExternalFooterLink href={getWhatsAppUrl()} label="WhatsApp" />
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cream/[0.08] bg-black/20">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-center text-xs text-cream/45 sm:flex-row sm:px-6 sm:text-left lg:px-8">
            <p>
              © {year} {site.name}. All rights reserved.
            </p>
            <p className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 sm:justify-end">
              <Link
                href={site.url}
                className="font-medium text-cream/55 transition-colors hover:text-gold"
              >
                {site.domain}
              </Link>
              <span className="text-cream/25" aria-hidden>
                ·
              </span>
              <span>Made with love in Goa</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
