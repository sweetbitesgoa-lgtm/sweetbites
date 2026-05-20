import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/lib/content";
import {
  getAllBlogPosts,
  BLOG_INDEX_DESCRIPTION,
  getBlogIndexKeywords,
  getBlogListingJsonLd,
} from "@/lib/blog";
import { siteMedia } from "@/lib/site-media";
import {
  buildPageMetadata,
  getBreadcrumbJsonLd,
  DEFAULT_OG_IMAGE,
} from "@/lib/seo";
import { BlogIndexView } from "@/components/blog/BlogIndexView";

const posts = getAllBlogPosts();

const baseMeta = buildPageMetadata({
  title: "Journal — cake guides & stories from Goa",
  description: BLOG_INDEX_DESCRIPTION,
  path: "/blog",
  keywords: getBlogIndexKeywords(posts),
  ogImage: DEFAULT_OG_IMAGE,
  ogImageAlt: `${site.name} Journal — custom cake tips, wedding delivery & eggless guides for Goa celebrations`,
});

export const metadata: Metadata = {
  ...baseMeta,
  authors: [{ name: "Muskan", url: `${site.url}/about` }],
};

export default function BlogIndexPage() {
  return (
    <>
      <JsonLd
        data={[
          getBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Journal", path: "/blog" },
          ]),
          getBlogListingJsonLd(posts),
        ]}
      />
      <BlogIndexView
        posts={posts}
        heroImageSrc={siteMedia.showcaseImage}
        heroImageAlt={`Custom celebration cakes from ${site.name} — ${site.studioCity}, Goa`}
        secondaryImageSrc={siteMedia.heroPoster}
        secondaryImageAlt={`Muskan decorating cakes at ${site.name} — ${site.studioCity}, Goa`}
      />
    </>
  );
}
