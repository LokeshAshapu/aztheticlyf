import { Instagram } from "lucide-react";
import { gallery, site } from "@/content/site";
import { Plate } from "@/components/art/Plate";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Cta } from "@/components/ui/Cta";

const spans = ["aspect-[4/5]", "aspect-square", "aspect-[3/4]", "aspect-[4/5]", "aspect-square", "aspect-[4/3]", "aspect-square"];

export function Gallery() {
  return (
    <section id="instagram" className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-[86rem] px-5 sm:px-8 lg:px-12">
        <SectionLabel index="06" title="Instagram" meta={`@${site.instagram.handle}`} />

        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <h2 className="u-display text-[clamp(2.4rem,5.6vw,4.4rem)] text-ink">
              <em className="u-serif-italic text-plum">@</em>
              {site.instagram.handle}
            </h2>
            <p className="mt-4 max-w-md text-[0.9rem] leading-relaxed text-ink/60">
              Hampers being packed, new stationery drops and the pieces people keep tagging us in.
              The studio lives on Instagram — this is the shelf.
            </p>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-5">
            <div className="flex flex-wrap items-end gap-8 border-t border-ink/12 pt-5 lg:justify-end">
              <div>
                <p className="font-display text-[1.6rem] leading-none text-ink">
                  {site.instagram.followers}
                </p>
                <p className="mt-1.5 text-[0.6rem] tracking-[0.16em] text-ink/40 uppercase">
                  followers
                </p>
              </div>
              <div>
                <p className="font-display text-[1.6rem] leading-none text-ink">
                  {site.instagram.posts}
                </p>
                <p className="mt-1.5 text-[0.6rem] tracking-[0.16em] text-ink/40 uppercase">
                  posts
                </p>
              </div>
              <Cta href={site.instagram.url} tone="outline" className="ml-auto lg:ml-0">
                Follow
              </Cta>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 columns-2 gap-3 sm:columns-3 lg:columns-4 lg:gap-4 [&>*]:mb-3 lg:[&>*]:mb-4">
          {gallery.map((post, index) => (
            <Reveal key={`${post.caption}-${index}`} delay={(index % 4) * 60} className="break-inside-avoid">
              <a
                href={post.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden border border-ink/10"
                aria-label={`${post.caption} — view on Instagram`}
              >
                <div className="plate-zoom">
                  <Plate
                    variant={post.variant}
                    alt={`${post.caption} — editorial artwork`}
                    className={`${spans[index % spans.length]} w-full`}
                  />
                </div>

                <div className="pointer-events-none absolute inset-0 bg-plum/0 transition-colors duration-700 group-hover:bg-plum/35" />

                <div className="absolute inset-x-0 bottom-0 translate-y-3 p-4 opacity-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="flex items-end justify-between gap-3">
                    <div>
                      <p className="text-[0.58rem] tracking-[0.16em] text-cream/70 uppercase">
                        {post.tag}
                      </p>
                      <p className="mt-1 font-display text-[0.95rem] leading-snug text-cream">
                        {post.caption}
                      </p>
                    </div>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cream text-ink">
                      <Instagram className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden="true" />
                    </span>
                  </div>
                </div>

                {/* touch-friendly caption */}
                <span className="absolute top-3 left-3 rounded-full bg-cream/80 px-2.5 py-1 text-[0.55rem] tracking-[0.14em] text-ink/55 uppercase backdrop-blur-sm transition-opacity duration-500 group-hover:opacity-0">
                  {post.tag}
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 flex flex-col items-start justify-between gap-5 border-t border-ink/12 pt-6 sm:flex-row sm:items-center">
          <p className="max-w-sm text-[0.8rem] leading-relaxed text-ink/45">
            New hampers and drops are posted first on Instagram. Follow along, or message the
            studio directly.
          </p>
          <a
            href={site.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 text-[0.78rem] font-semibold text-ink"
          >
            <Instagram className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
            <span className="link-underline">Follow @{site.instagram.handle}</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
