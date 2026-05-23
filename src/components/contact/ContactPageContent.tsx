import Link from "next/link";
import { ContactBreadcrumb } from "@/components/contact/ContactBreadcrumb";
import { ContactWhatsAppTemplate } from "@/components/contact/ContactWhatsAppTemplate";
import { SecondaryPageHero } from "@/components/layout/SecondaryPageHero";
import { WhatsAppOrderCard } from "@/components/order/WhatsAppOrderCard";
import { ReviewsNote } from "@/components/home/ReviewsNote";
import { Button } from "@/components/ui/Button";
import { WhatsAppIconInline } from "@/components/ui/WhatsAppButton";
import {
  contactHeroStats,
  contactMeetMuskan,
  contactMuskanQuote,
  contactOccasionLinks,
  contactOrderPaths,
  contactPageFaqs,
  contactPaymentNotes,
  contactQuickLinks,
  contactResponseSteps,
  contactSeasonalBanner,
  contactVisitTips,
} from "@/lib/contact-page";
import { deliveryAreas, site, testimonials, trustPillars } from "@/lib/content";
import { locationPath } from "@/lib/locations";
import { siteMedia } from "@/lib/site-media";
import { getWhatsAppUrl } from "@/lib/whatsapp";

function SectionIntro({
  eyebrow,
  title,
  description,
  centered = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
}) {
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="contact-eyebrow">{eyebrow}</p>
      <h2 className="contact-section-title mt-2">{title}</h2>
      {description ? (
        <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{description}</p>
      ) : null}
    </div>
  );
}

export function ContactPageContent() {
  return (
    <>
      <div className="contact-hero-mesh border-b border-line">
        <div className="mx-auto max-w-6xl px-4 pt-6 sm:px-6 lg:px-8">
          <ContactBreadcrumb />
        </div>
      </div>

      {contactSeasonalBanner.enabled ? (
        <div className="border-b border-terracotta/15 bg-terracotta/[0.08] px-4 py-3">
          <p className="mx-auto max-w-3xl text-center text-xs leading-relaxed text-cocoa sm:text-sm">
            <span className="font-semibold text-terracotta">{contactSeasonalBanner.title}.</span>{" "}
            {contactSeasonalBanner.message}
          </p>
        </div>
      ) : null}

      <SecondaryPageHero
        label="Contact"
        title={`Talk to Muskan in ${site.studioCity}, Goa`}
        description={`Orders and quotes go through WhatsApp (${site.phone}) so Muskan can see your photos and reply properly. Studio visits are by appointment — message before you come.`}
        image={{
          src: siteMedia.contactHero,
          alt: `Sweet Bites bento cake — contact Muskan on WhatsApp from ${site.studioCity}, Goa`,
          priority: true,
        }}
      >
        <Button href={getWhatsAppUrl()} variant="whatsapp" external>
          <WhatsAppIconInline className="h-5 w-5" />
          Message on WhatsApp
        </Button>
        <Button href={site.mapsUrl} variant="outline" external className="rounded-md px-5">
          Open Google Maps
        </Button>
        <Button href={`tel:+91${site.phoneRaw}`} variant="outline" className="rounded-md px-5">
          Call {site.phone}
        </Button>
      </SecondaryPageHero>

      <div className="border-b border-line/60 bg-cream/50">
        <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-4 py-6 sm:grid-cols-4 sm:px-6 lg:px-8">
          {contactHeroStats.map((stat) => (
            <li
              key={stat.label}
              className="contact-stat-card rounded-xl border border-line/80 bg-white px-4 py-3 text-center shadow-sm"
            >
              <p className="font-display text-lg font-semibold text-terracotta sm:text-xl">
                {stat.value}
              </p>
              <p className="mt-0.5 text-[10px] font-bold uppercase tracking-wider text-muted">
                {stat.label}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <section className="contact-quote-band border-b border-line/60 py-10 sm:py-12">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
          <blockquote className="relative lg:col-span-7">
            <span
              className="pointer-events-none font-display text-6xl leading-none text-terracotta/15"
              aria-hidden
            >
              &ldquo;
            </span>
            <p className="relative -mt-6 text-lg italic leading-relaxed text-cocoa/85 sm:text-xl">
              {contactMuskanQuote.quote}
            </p>
            <footer className="relative mt-4 text-[11px] font-bold uppercase tracking-wider text-terracotta">
              {contactMuskanQuote.attribution}
            </footer>
          </blockquote>
          <div className="lg:col-span-5">
            <p className="contact-eyebrow">{contactMeetMuskan.eyebrow}</p>
            <h2 className="contact-section-title mt-2">{contactMeetMuskan.title}</h2>
            {contactMeetMuskan.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className="mt-3 text-sm leading-relaxed text-muted">
                {p}
              </p>
            ))}
            <Link
              href="/about"
              className="mt-4 inline-block text-sm font-semibold text-terracotta hover:underline"
            >
              More about Muskan →
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-line/60 bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ContactWhatsAppTemplate />
        </div>
      </section>

      <section className="border-b border-line/60 bg-cream/40 py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionIntro
            centered
            eyebrow="How it works"
            title="What happens when you message"
            description="No forms — one WhatsApp thread from idea to delivery."
          />
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {contactResponseSteps.map((step, index) => (
              <li
                key={step.title}
                className="contact-step-card relative rounded-2xl border border-line bg-cream/40 p-5 pt-8"
              >
                <span className="absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-terracotta text-sm font-bold text-cream">
                  {index + 1}
                </span>
                <h3 className="font-display text-base font-semibold text-cocoa">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-line/60 bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionIntro
            centered
            eyebrow="Celebrations in Goa"
            title="Contact us by occasion"
            description="Open a guide for flavour ideas, lead times, and gallery picks — then message on WhatsApp."
          />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {contactOccasionLinks.map((occ) => (
              <li key={occ.href}>
                <Link
                  href={occ.href}
                  className="contact-occasion-card flex h-full flex-col rounded-2xl border border-line p-5 sm:p-6"
                >
                  <span className="text-2xl" aria-hidden>
                    {occ.emoji}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-semibold text-cocoa">{occ.label}</h3>
                  <p className="mt-1 flex-1 text-sm text-muted">{occ.description}</p>
                  <span className="mt-4 text-xs font-semibold text-terracotta">Open guide →</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-line/60 bg-cream/40 py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Choose your path"
            title="Custom cake or menu flavour?"
            description="Both start on the same WhatsApp number — tell Muskan which you need."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2">
            {contactOrderPaths.map((path) => (
              <li
                key={path.href}
                className="contact-path-card rounded-2xl border border-line bg-white p-6 sm:p-8"
              >
                <h3 className="font-display text-xl font-semibold text-cocoa">{path.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{path.description}</p>
                <Link
                  href={path.href}
                  className="mt-5 inline-block text-sm font-semibold text-terracotta hover:underline"
                >
                  {path.cta} →
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-line bg-surface py-14 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:gap-12 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
          <div className="divide-y divide-line rounded-2xl border border-line bg-cream/40 shadow-sm lg:col-span-5">
            <div className="p-6 sm:p-8">
              <h2 className="contact-eyebrow">Studio</h2>
              <p className="mt-3 text-base leading-relaxed text-cocoa">{site.address}</p>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex text-sm font-medium text-terracotta underline decoration-terracotta/30 underline-offset-4 hover:decoration-terracotta"
              >
                Open in Google Maps
              </a>
              <Link
                href={locationPath("velim")}
                className="mt-3 block text-sm font-semibold text-terracotta hover:underline"
              >
                {site.studioCity} delivery & pickup guide →
              </Link>
            </div>
            <div className="p-6 sm:p-8">
              <h2 className="contact-eyebrow">Hours</h2>
              <p className="mt-3 text-base leading-relaxed text-cocoa">{site.hours}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Closed Mondays. You can message any day — replies during studio hours.
              </p>
            </div>
            <div className="p-6 sm:p-8">
              <h2 className="contact-eyebrow">Reach us</h2>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed">
                <li>
                  <span className="text-muted">WhatsApp · </span>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-cocoa underline decoration-terracotta/35 underline-offset-4 hover:decoration-terracotta"
                  >
                    {site.phone}
                  </a>
                  <span className="text-muted"> — best for orders</span>
                </li>
                <li>
                  <span className="text-muted">Call · </span>
                  <a
                    href={`tel:+91${site.phoneRaw}`}
                    className="font-medium text-cocoa hover:text-terracotta"
                  >
                    {site.phone}
                  </a>
                </li>
                <li>
                  <span className="text-muted">Email · </span>
                  <a
                    href={`mailto:${site.email}`}
                    className="font-medium text-cocoa hover:text-terracotta"
                  >
                    {site.email}
                  </a>
                  <span className="text-muted"> (not for orders)</span>
                </li>
                <li>
                  <a
                    href={site.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-cocoa underline decoration-line underline-offset-4 hover:decoration-terracotta"
                  >
                    {site.instagramHandle}
                  </a>
                  <span className="text-muted"> on Instagram</span>
                </li>
                <li>
                  <a
                    href={site.googleReviewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-terracotta hover:underline"
                  >
                    Leave a Google review
                  </a>
                </li>
              </ul>
            </div>
            <div className="p-6 sm:p-8">
              <h2 className="contact-eyebrow">Before you visit</h2>
              <ul className="mt-4 space-y-3">
                {contactVisitTips.map((tip) => (
                  <li key={tip.title} className="text-sm">
                    <span className="font-semibold text-cocoa">{tip.title}. </span>
                    <span className="text-muted">{tip.detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-7">
            <WhatsAppOrderCard />
          </div>
        </div>
      </section>

      <section className="border-b border-line/60 bg-white py-12 sm:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionIntro
            centered
            eyebrow="Explore"
            title="While you wait for a reply"
            description="Save a design, check the menu, or see if we deliver to your town."
          />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {contactQuickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="contact-explore-card block h-full rounded-2xl border border-line bg-cream/30 p-4"
                >
                  <p className="font-display font-semibold text-cocoa">{link.label}</p>
                  <p className="mt-1 text-xs text-muted">{link.description}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-line/60 bg-cream/30 py-12 sm:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Payments & timing"
            title="Before you confirm on WhatsApp"
            description="Clear quotes and honest lead times — no hidden steps."
          />
          <ul className="mt-8 grid gap-4 sm:grid-cols-3">
            {contactPaymentNotes.map((note) => (
              <li
                key={note.title}
                className="rounded-2xl border border-line bg-white p-5 shadow-sm"
              >
                <h3 className="font-display text-sm font-semibold text-cocoa">{note.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{note.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-line/60 bg-white py-12 sm:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-display text-xl font-semibold text-cocoa sm:text-2xl">
            Why families trust Muskan
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {trustPillars.map((pillar) => (
              <li
                key={pillar.title}
                className="contact-pillar-card rounded-2xl border border-line bg-white p-5 text-center"
              >
                <span className="text-2xl" aria-hidden>
                  {pillar.icon}
                </span>
                <h3 className="mt-3 font-display text-sm font-semibold text-cocoa">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted">{pillar.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-line/60 py-10 sm:py-12">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-muted">
            Cake delivery from {site.studioCity} across Goa
          </p>
          <ul className="mt-4 flex flex-wrap justify-center gap-2">
            {deliveryAreas.map((place) => (
              <li key={place}>
                <Link
                  href={locationPath(place.toLowerCase())}
                  className="inline-block rounded-full border border-line bg-surface px-3 py-1.5 text-xs font-semibold text-cocoa transition-colors hover:border-terracotta/30 hover:text-terracotta"
                >
                  {place}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/locations"
            className="mt-5 inline-block text-sm font-semibold text-terracotta hover:underline"
          >
            All delivery guides →
          </Link>
        </div>
      </section>

      <section className="border-b border-line bg-cream/50 py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Find us"
            title={`Map · ${site.studioCity}, Goa`}
            description="Behind St. Xavier's High School, Ubdando — tap for directions."
          />
          <div className="mt-6 aspect-[16/10] w-full overflow-hidden rounded-2xl bg-cream shadow-md ring-1 ring-line sm:aspect-[21/9]">
            <iframe
              title={`Sweet Bites custom cakes — ${site.studioCity}, Goa location`}
              src={site.mapsEmbedUrl}
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-line bg-white px-6 py-6 text-center shadow-sm">
            <p className="contact-eyebrow">From Goa families</p>
            <blockquote className="mt-3 font-display text-lg leading-relaxed text-cocoa">
              &ldquo;{testimonials[0].text}&rdquo;
            </blockquote>
            <p className="mt-3 text-sm font-semibold text-cocoa">
              {testimonials[0].name}
              <span className="font-normal text-muted"> · {testimonials[0].location}</span>
            </p>
          </div>
          <ReviewsNote />
        </div>
      </section>

      <section
        className="border-b border-line/60 bg-white py-14 sm:py-16"
        aria-labelledby="contact-faq-heading"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="contact-eyebrow">Help</p>
            <h2 id="contact-faq-heading" className="contact-section-title mt-2">
              Contact & ordering — FAQs
            </h2>
            <p className="mt-3 text-sm text-muted sm:text-base">
              Phone, WhatsApp, studio visits, delivery, and payments — answered in plain language.
            </p>
          </div>
          <dl className="mt-10 grid gap-4 sm:grid-cols-2">
            {contactPageFaqs.map((faq) => (
              <div
                key={faq.question}
                className="contact-faq-card rounded-2xl border border-line bg-cream/30 p-5 sm:p-6"
              >
                <dt className="font-display text-base font-semibold text-cocoa">{faq.question}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="contact-cta-band py-14 sm:py-16">
        <div className="mx-auto max-w-xl px-4 text-center sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-cream">
            Ready to order your cake?
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-cream/80">
            Message Muskan on WhatsApp with your date and town — she replies during studio hours.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button href={getWhatsAppUrl()} variant="whatsapp" external>
              <WhatsAppIconInline className="h-5 w-5" />
              WhatsApp {site.phone}
            </Button>
            <Button
              href="/creations"
              variant="outline"
              className="rounded-md border-cream/40 bg-transparent px-5 text-cream hover:bg-cream/10"
            >
              Browse gallery
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
