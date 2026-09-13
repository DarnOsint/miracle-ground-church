import { siteConfig } from "@/lib/site";
import { Container, SectionHeading } from "@/components/ui";
import { GlobeIcon } from "@/components/icons";

export function Sermons() {
  const sermons = siteConfig.sermons;

  return (
    <section
      id="sermons"
      className="relative scroll-mt-24 overflow-hidden bg-gradient-to-br from-teal-800 via-teal-700 to-cyan-700 py-24 text-cream-50 sm:py-32"
    >
      <div className="absolute inset-0 bg-dots-white" />
      <div className="absolute -right-24 top-0 h-96 w-96 rounded-full bg-emerald-400/25 blur-3xl" />
      <div className="absolute -left-24 bottom-0 h-96 w-96 rounded-full bg-gold-400/20 blur-3xl" />
      <Container className="relative space-y-16">
        <SectionHeading
          dark
          eyebrow="The Word"
          title="Recent Sermons"
          description="Fresh messages to strengthen your walk with God, wherever you are."
        />

        {sermons.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-cream-50/15 p-12 text-center">
            <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-cream-50/10">
              <GlobeIcon className="h-6 w-6 text-gold-400" />
            </span>
            <h3 className="font-serif text-2xl font-semibold">Sermons coming soon</h3>
            <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-cream-50/60">
              Audio and video messages will be added from the admin panel.
            </p>
          </div>
        ) : (
          <div className="grid gap-5 md:grid-cols-2">
            {sermons.map((sermon, i) => {
              const date = new Date(sermon.date);
              const hasDate = !Number.isNaN(date.getTime());
              const playable = Boolean(sermon.youtubeId || sermon.videoUrl || sermon.audioUrl);

              return (
                <div
                  key={`${sermon.title}-${i}`}
                  className="group relative overflow-hidden rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-gold-300/50 hover:bg-white/15"
                >
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <span className="rounded-full bg-gold-400/20 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-gold-200">
                      {sermon.speaker || "Miracle Ground"}
                    </span>
                    {hasDate ? (
                      <span className="text-xs text-cream-50/50">
                        {date.toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                    ) : null}
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-cream-50">
                    {sermon.title || "Untitled message"}
                  </h3>
                  {sermon.passage ? (
                    <p className="mt-2 text-sm font-bold text-gold-300">{sermon.passage}</p>
                  ) : null}
                  {sermon.description ? (
                    <p className="mt-3 text-sm leading-relaxed text-cream-50/70">
                      {sermon.description}
                    </p>
                  ) : null}
                  {playable ? (
                    <div className="mt-6 flex flex-wrap gap-3">
                      {sermon.youtubeId ? (
                        <a
                          href={`https://www.youtube.com/watch?v=${sermon.youtubeId}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-5 py-2.5 text-sm font-semibold text-night-950 transition-colors hover:bg-gold-400"
                        >
                          ▶ Watch on YouTube
                        </a>
                      ) : null}
                      {sermon.videoUrl ? (
                        <a
                          href={sermon.videoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold text-cream-50 transition-colors hover:border-gold-300 hover:text-gold-200"
                        >
                          ▶ Video
                        </a>
                      ) : null}
                      {sermon.audioUrl ? (
                        <a
                          href={sermon.audioUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold text-cream-50 transition-colors hover:border-gold-300 hover:text-gold-200"
                        >
                          ▶ Audio
                        </a>
                      ) : null}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        )}
      </Container>
    </section>
  );
}