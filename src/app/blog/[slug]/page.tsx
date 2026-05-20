import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { BlogArticleLayout } from "@/components/blog/BlogArticleLayout";
import {
  getBlogPostBySlug,
  getBlogPostSlugs,
  getRelatedBlogPosts,
  postCanonicalUrl,
} from "@/lib/blog";
import {
  buildPageMetadata,
  getBreadcrumbJsonLd,
  SITE_URL,
  DEFAULT_OG_IMAGE,
} from "@/lib/seo";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getBlogPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: "Article not found" };

  return buildPageMetadata({
    title: post.title,
    description: `${post.excerpt} Focus: ${post.focusKeyword}.`,
    path: `/blog/${slug}`,
    keywords: [...post.keywords, post.focusKeyword],
    ogImage: post.heroImage,
    ogImageAlt: post.heroImageAlt,
  });
}

function blogPostingJsonLd(post: NonNullable<ReturnType<typeof getBlogPostBySlug>>) {
  const base = SITE_URL.replace(/\/$/, "");
  const url = postCanonicalUrl(post.slug);
  const heroPath = post.heroImage ?? DEFAULT_OG_IMAGE;
  const imageUrl = `${base}${heroPath.startsWith("/") ? heroPath : `/${heroPath}`}`;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    keywords: post.keywords.join(", "),
    datePublished: `${post.publishedAt}T09:00:00+05:30`,
    author: {
      "@type": "Person",
      name: "Muskan",
      url: `${base}/about`,
    },
    publisher: {
      "@type": "Organization",
      name: "Sweet Bites",
      url: `${base}`,
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    image: [imageUrl],
    url,
  };
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const path = `/blog/${slug}`;
  const relatedPosts = getRelatedBlogPosts(slug, 2);

  return (
    <>
      <JsonLd
        data={[
          getBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Journal", path: "/blog" },
            { name: post.title, path },
          ]),
          blogPostingJsonLd(post),
        ]}
      />
      <BlogArticleLayout post={post} relatedPosts={relatedPosts} />
    </>
  );
}
