import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { Container } from "@/components/ui";
import { BlogPostBody } from "@/components/blog-post-body";
import { CalendarIcon } from "@/components/icons";
import {
  formatPostDate,
  getPost,
  postDate,
  postHref,
  postSlug,
  posts,
  siteConfig,
} from "@/lib/site";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((post) => ({ slug: postSlug(post) }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) return { title: "Article not found" };

  const title = post.title || "Article";
  const description = post.excerpt || `${title} — a message from ${siteConfig.name}.`;

  return {
    title,
    description,
    alternates: { canonical: postHref(post) },
    openGraph: {
      title,
      description,
      type: "article",
      url: postHref(post),
      publishedTime: postDate(post)?.toISOString(),
      authors: post.author ? [post.author] : undefined,
      images: [
        {
          url: "/images/og-image.png",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/og-image.png"],
    },
  };
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) notFound();

  const title = post.title || "Untitled article";
  const published = postDate(post)?.toISOString();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: post.excerpt || undefined,
    datePublished: published,
    dateModified: published,
    author: {
      "@type": post.author ? "Person" : "Organization",
      name: post.author || siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: { "@type": "ImageObject", url: `${siteConfig.url}/images/logo.jpg` },
    },
    mainEntityOfPage: `${siteConfig.url}${postHref(post)}`,
    url: `${siteConfig.url}${postHref(post)}`,
  };

  return (
    <div className="flex min-h-svh flex-col bg-cream-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <SiteHeader />

      <main className="pt-32 pb-24">
        <Container className="max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gold-700 transition-colors hover:text-gold-600"
          >
            ← All articles
          </Link>

          <article className="mt-6">
            <header className="border-b border-night-900/10 pb-8">
              <div className="mb-4 flex flex-wrap items-center gap-3">
                {post.category ? (
                  <span className="rounded-full bg-gold-500/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-gold-700">
                    {post.category}
                  </span>
                ) : null}
                <span className="inline-flex items-center gap-1.5 text-sm text-night-900/50">
                  <CalendarIcon className="h-4 w-4" />
                  {formatPostDate(post)}
                </span>
              </div>

              <h1 className="font-serif text-4xl font-semibold leading-tight tracking-tight text-night-900 sm:text-5xl">
                {title}
              </h1>

              {post.author ? (
                <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-night-900/50">
                  By {post.author}
                </p>
              ) : null}

              {post.excerpt ? (
                <p className="mt-6 border-l-4 border-gold-500 pl-5 font-serif text-lg italic leading-relaxed text-night-900/70 sm:text-xl">
                  {post.excerpt}
                </p>
              ) : null}
            </header>

            <div className="mt-10">
              <BlogPostBody body={post.body ?? ""} />
            </div>
          </article>

          <div className="mt-14 rounded-3xl bg-gradient-to-br from-night-950 via-night-900 to-night-800 p-8 text-center text-cream-50 sm:p-10">
            <p className="font-serif text-2xl font-semibold">Join us in prayer</p>
            <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-cream-50/70">
              We would love to worship with you. English service at 8:30 AM and Arabic
              service at 10:30 AM every Sunday in Juba.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                href="/#services"
                className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-night-950 transition-colors hover:bg-gold-400"
              >
                Service times
              </Link>
              <Link
                href="/#visit"
                className="inline-flex items-center rounded-full border border-cream-50/25 px-6 py-3 text-sm font-semibold text-cream-50 transition-colors hover:border-gold-400 hover:text-gold-300"
              >
                Find us
              </Link>
            </div>
          </div>
        </Container>
      </main>

      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}
