import Link from "next/link";

export function CakesMenuBreadcrumb() {
  return (
    <nav className="mb-6 text-sm text-muted" aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1.5">
        <li>
          <Link href="/" className="transition-colors hover:text-terracotta">
            Home
          </Link>
        </li>
        <li aria-hidden className="text-cocoa/30">
          /
        </li>
        <li>
          <span className="font-medium text-cocoa" aria-current="page">
            Cakes menu
          </span>
        </li>
      </ol>
    </nav>
  );
}
