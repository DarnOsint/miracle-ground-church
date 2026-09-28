import Link from "next/link";
import { Container, SectionHeading } from "@/components/ui";
import { ArrowIcon, CalendarIcon } from "@/components/icons";
import { formatPostDate, postHref, posts } from "@/lib/site";

export function Blog() {
  return (
    <section
      id="blog"
      className="relative scroll-mt-24 overflow-hidden bg-gradient-to-b from-cream-100 via-cream-50 to-cream-100 py-24 sm:py-32"
    >
      <div className="absolute inset-0 bg-grid-faint" />
      <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-amber-400/20 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-violet-500/15 blur-3xl" />

      <Container className="relative space-y-14">
        <SectionHeading
          eyebrow="Word & Reflection"
          title="Thoughts from Our Bishop"
          description="Messages of faith, prayer and peace for our family here in Juba and for everyone reading around the world."
        />

        {posts.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-night-900/15 bg-white/60 p-12 text-center">
            <h3 className="font-serif text-2xl font-semibold text-night-900">
              New articles coming soon
            </h3>
            <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-night-900/60">
              Messages from the pulpit will be posted here as they are shared.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.slice(0, 3).map((post) => (
              <Link
                key={post.id || post.title}
                href={postHref(post)}
                className="group flex flex-col rounded-3xl border border-night-900/10 bg-white p-7 shadow-sm transition-all hover:-translate-y-1.5 hover:border-gold-500/40 hover:shadow-xl"
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

                <h3 className="font-serif text-2xl font-semibold leading-snug text-night-900 transition-colors group-hover:text-gold-700">
                  {post.title || "Untitled article"}
                </h3>

                {post.excerpt ? (
                  <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-night-900/70">
                    {post.excerpt}
                  </p>
                ) : null}

                <div className="mt-auto pt-6">
                  {post.author ? (
                    <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-night-900/45">
                      By {post.author}
                    </p>
                  ) : null}
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-gold-700">
                    Read the full message
                    <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}

        {posts.length > 0 ? (
          <div className="flex justify-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-full bg-night-900 px-8 py-3.5 text-sm font-semibold text-cream-50 transition-colors hover:bg-night-800"
            >
              View all articles
              <ArrowIcon className="h-4 w-4" />
            </Link>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
