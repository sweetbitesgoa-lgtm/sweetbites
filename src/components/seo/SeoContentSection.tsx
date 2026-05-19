import type { SeoPageContent } from "@/lib/seo-content";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { site } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { WhatsAppIconInline } from "@/components/ui/WhatsAppButton";

type SeoContentSectionProps = SeoPageContent & {
  className?: string;
  showCta?: boolean;
};

export function SeoContentSection({
  heading,
  paragraphs,
  subsections,
  listTitle,
  listItems,
  faqs,
  className = "",
  showCta = true,
}: SeoContentSectionProps) {
  return (
    <section
      className={`border-t border-cocoa/5 bg-white py-14 sm:py-20 ${className}`}
      aria-labelledby="seo-content-heading"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2
          id="seo-content-heading"
          className="font-display text-2xl font-semibold text-cocoa sm:text-3xl"
        >
          {heading}
        </h2>
        <div className="mt-6 space-y-4 text-base leading-relaxed text-cocoa/75">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {subsections?.map((sub) => (
          <div key={sub.title} className="mt-10">
            <h3 className="font-display text-xl font-semibold text-cocoa">
              {sub.title}
            </h3>
            <div className="mt-3 space-y-3 text-base leading-relaxed text-cocoa/75">
              {sub.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        ))}

        {listTitle && listItems && listItems.length > 0 && (
          <div className="mt-10">
            <h3 className="font-display text-xl font-semibold text-cocoa">
              {listTitle}
            </h3>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {listItems.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm text-cocoa/80"
                >
                  <span className="text-terracotta" aria-hidden>
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {faqs && faqs.length > 0 && (
          <div className="mt-12">
            <h3 className="font-display text-xl font-semibold text-cocoa">
              Frequently asked questions
            </h3>
            <dl className="mt-4 space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <dt className="font-semibold text-cocoa">{faq.question}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-cocoa/75">
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        )}

        {showCta && (
          <div className="mt-12 rounded-2xl bg-cream p-6 text-center ring-1 ring-cocoa/5">
            <p className="text-sm font-medium text-cocoa">
              Ready to order? Message Muskan on WhatsApp
            </p>
            <p className="mt-1 text-xs text-cocoa/60">
              {site.phone} · sweetbites.me
            </p>
            <Button
              href={getWhatsAppUrl()}
              variant="whatsapp"
              external
              className="mt-4"
            >
              <WhatsAppIconInline className="h-5 w-5" />
              Order on WhatsApp
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
