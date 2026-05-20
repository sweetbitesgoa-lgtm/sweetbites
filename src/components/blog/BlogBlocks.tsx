import Link from "next/link";
import type { BlogBlock } from "@/lib/blog";
import { BlogRichText, slugifyHeading } from "@/components/blog/blog-rich-text";

export function BlogBlocks({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="blog-prose space-y-8">
      {blocks.map((block, i) => {
        if (block.type === "h2") {
          const id = block.id ?? slugifyHeading(block.text);
          return (
            <h2
              key={i}
              id={id}
              className="scroll-mt-28 font-display text-[clamp(1.35rem,3vw,1.75rem)] font-medium tracking-tight text-cocoa"
            >
              <BlogRichText text={block.text} />
            </h2>
          );
        }
        if (block.type === "h3") {
          return (
            <h3
              key={i}
              className="font-display text-lg font-medium tracking-tight text-cocoa sm:text-xl"
            >
              <BlogRichText text={block.text} />
            </h3>
          );
        }
        if (block.type === "ul") {
          return (
            <ul
              key={i}
              className="space-y-3 border-l-2 border-terracotta/25 pl-5 text-[1.0625rem] leading-relaxed text-muted sm:text-lg sm:leading-[1.75]"
            >
              {block.items.map((item) => (
                <li key={item.slice(0, 24)} className="relative">
                  <span
                    className="absolute -left-5 top-[0.65em] h-1.5 w-1.5 rounded-full bg-terracotta/70"
                    aria-hidden
                  />
                  <BlogRichText text={item} />
                </li>
              ))}
            </ul>
          );
        }
        if (block.type === "callout") {
          const isTip = block.variant === "tip";
          return (
            <aside
              key={i}
              className={`rounded-xl border p-5 sm:p-6 ${
                isTip
                  ? "border-terracotta/20 bg-terracotta/[0.06]"
                  : "border-gold/25 bg-gold-light/60"
              }`}
            >
              {block.title ? (
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-terracotta">
                  {block.title}
                </p>
              ) : null}
              <p
                className={`text-[1.0625rem] leading-relaxed text-cocoa/85 sm:text-lg ${
                  block.title ? "mt-2" : ""
                }`}
              >
                <BlogRichText text={block.text} />
              </p>
            </aside>
          );
        }
        if (block.type === "related") {
          return (
            <nav
              key={i}
              aria-label={block.title}
              className="rounded-xl border border-line bg-cream/80 p-5 sm:p-6"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                {block.title}
              </p>
              <ul className="mt-4 space-y-3">
                {block.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="group block rounded-lg border border-transparent px-3 py-2.5 transition-colors hover:border-terracotta/15 hover:bg-white"
                    >
                      <span className="font-display text-base font-medium text-cocoa transition-colors group-hover:text-terracotta">
                        {item.label}
                      </span>
                      {item.description ? (
                        <span className="mt-1 block text-sm leading-relaxed text-muted">
                          {item.description}
                        </span>
                      ) : null}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          );
        }
        return (
          <p
            key={i}
            className="text-[1.0625rem] leading-[1.8] text-muted sm:text-lg sm:leading-[1.85]"
          >
            <BlogRichText text={block.text} />
          </p>
        );
      })}
    </div>
  );
}

export function getBlogHeadings(blocks: BlogBlock[]): { id: string; text: string }[] {
  return blocks
    .filter((b): b is Extract<BlogBlock, { type: "h2" }> => b.type === "h2")
    .map((b) => ({
      id: b.id ?? slugifyHeading(b.text),
      text: b.text.replace(/\*\*/g, ""),
    }));
}
