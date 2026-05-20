import Link from "next/link";
import type { ReactNode } from "react";

const TOKEN =
  /(\*\*[^*]+\*\*|\[[^\]]+\]\(\/[^)]+\)|\[[^\]]+\]\(https?:\/\/[^)]+\))/g;

function parseToken(part: string, key: string): ReactNode {
  if (part.startsWith("**") && part.endsWith("**")) {
    return (
      <strong key={key} className="font-semibold text-cocoa">
        {part.slice(2, -2)}
      </strong>
    );
  }
  const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
  if (linkMatch) {
    const [, label, href] = linkMatch;
    const className =
      "font-semibold text-terracotta underline decoration-terracotta/35 underline-offset-[3px] transition-colors hover:decoration-terracotta";
    if (href.startsWith("http")) {
      return (
        <a key={key} href={href} target="_blank" rel="noopener noreferrer" className={className}>
          {label}
        </a>
      );
    }
    return (
      <Link key={key} href={href} className={className}>
        {label}
      </Link>
    );
  }
  return part;
}

/** Inline **bold** and [label](/path) for blog SEO copy */
export function BlogRichText({ text }: { text: string }) {
  const parts = text.split(TOKEN).filter((p) => p.length > 0);
  return <>{parts.map((part, i) => parseToken(part, `${i}-${part.slice(0, 8)}`))}</>;
}

export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
