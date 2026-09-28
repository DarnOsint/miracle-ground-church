import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { Container } from "@/components/ui";
import { ArrowIcon, CalendarIcon } from "@/components/icons";
import { formatPostDate, postHref, posts } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog — Messages from the Bishop",
  description:
    "Read messages, teachings and reflections from the Bishop and leadership of Miracle Ground International Church, Juba — on faith, prayer, prophecy and peace in South Sudan.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog — Messages from the Bishop | Miracle Ground International Church",
    description:
      "Messages of faith, prayer and peace from Miracle Ground International Church, Juba, South Sudan.",
    url: "/blog",
    type: "website",
  },
};

export default function BlogPage() {
  return (
    <div className="flex min-h-svh flex-col bg-cream-50">
      <SiteHeader />

      <main className="pt-32">
        <section className="relative overflow-hidden bg-gradient-to-b from-night-950 via-night-900 to-night-800 py-20 text-cream-50 sm:py-24">
          <div className="absolute inset-0 bg-dots-white" />
          <div className="absolute -right-20 top-0 h-80 w-80 rounded-full bg-gold-500/20 blur-3xl" />
          <Container className="relative">
            <span className="inline-flex items-center gap-2 font-script text-2xl leading-none text-gold-400">
              <span className="h-0.5 w-6 rounded-full bg-gradient-to-r from-transparent to-gold-500" />
              Word &amp; Reflection
              <span className="h-0.5 w-6 rounded-full bg-gradient-to-l from-transparent to-gold-500" />
            </span>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              The Church Blog
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-cream-50/70 sm:text-lg">
              Messages from the pulpit, thoughts for the week, and Biblical answers
              for the days we are living in.
            </p>
            <Link
              href="/#blog"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-cream-50/25 px-6 py-3 text-sm font-semibold text-cream-50 transition-colors hover:border-gold-400 hover:text-gold-300"
            >
              ← Back to the homepage
            </Link>
          </Container>
        </section>

        <section className="py-20 sm:py-24">
          <Container className="space-y-8">
            {posts.length === 0 ? (
              <p className="rounded-3xl border border-dashed border-night-900/15 p-12 text-center text-night-900/60">
                No articles have been published yet. Please check back soon.
              </p>
            ) : (
              posts.map((post) => (
                <Link
                  key={post.id || post.title}
                  href={postHref(post)}
                  className="group block rounded-3xl border border-night-900/10 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-gold-500/40 hover:shadow-xl sm:p-9"
                >
                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    {post.category ? (
                      <span className="rounded-full bg-gold-500/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-gold-700">
                        {post.category}
                      </span>
                    ) : null}
                    <span className="inline-flex items-center gap-1.5 text-xs text-night-900/50">
                      <CalendarIcon className="h-3.5 w-3.5" />
                      {formatPostDate(post)}
                    </span>
                  </div>

                  <h2 className="font-serif text-2xl font-semibold leading-snug text-night-900 transition-colors group-hover:text-gold-700 sm:text-3xl">
                    {post.title || "Untitled article"}
                  </h2>

                  {post.excerpt ? (
                    <p className="mt-3 text-base leading-relaxed text-night-900/70">
                      {post.excerpt}
                    </p>
                  ) : null}

                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-700">
                    Read the full message
                    <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))
            )}
          </Container>
        </section>
      </main>

      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}
