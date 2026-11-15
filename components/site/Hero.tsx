import { site } from "@/content/site";
import { Cta } from "@/components/ui/Cta";
import { Magnetic } from "@/components/ui/Magnetic";
import { HeroArt } from "./HeroArt";

const facts = [
  { value: "10,000+", label: "happy customers" },
  { value: "Worldwide", label: "shipping" },
  { value: "Wholesale", label: "retail & reselling" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      {/* soft light behind the composition */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10%] h-[46rem] w-[46rem] rounded-full bg-mist/70 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/3 h-64 w-[40rem] rounded-full bg-blush/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-[86rem] px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-14 pt-28 pb-20 sm:pt-32 lg:min-h-[100svh] lg:grid-cols-12 lg:gap-10 lg:pt-24 lg:pb-16">
          <div className="lg:col-span-6 xl:col-span-6">
            <div className="anim-rise flex items-center gap-3" style={{ animationDelay: "80ms" }}>
              <span className="h-1.5 w-1.5 rounded-full bg-lilac-deep" aria-hidden="true" />
              <p className="u-eyebrow text-ink/55">
                {site.tagline} — {site.location.city}
              </p>
            </div>

            <h1 className="u-display mt-6 text-[clamp(2.9rem,8.2vw,6.4rem)] text-ink">
              <span className="block overflow-hidden pb-[0.06em]">
                <span className="anim-rise block" style={{ animationDelay: "180ms" }}>
                  Gifts worth
                </span>
              </span>
              <span className="block overflow-hidden pb-[0.06em]">
                <span className="anim-rise block" style={{ animationDelay: "300ms" }}>
                  keeping the
                </span>
              </span>
              <span className="block overflow-hidden pb-[0.08em]">
                <span className="anim-rise u-serif-italic block text-plum" style={{ animationDelay: "420ms" }}>
                  ribbon on.
                </span>
              </span>
            </h1>

            <p
              className="anim-rise mt-7 max-w-[30rem] text-[0.975rem] leading-[1.75] text-ink/65"
              style={{ animationDelay: "560ms" }}
            >
              Korean stationery, dainty accessories and anti-tarnish jewellery, curated into
              hampers, return gifts and wholesale collections. Assembled by hand in Chennai,
              sent anywhere in the world.
            </p>

            <div
              className="anim-rise mt-9 flex flex-wrap items-center gap-x-4 gap-y-4 sm:gap-x-7"
              style={{ animationDelay: "700ms" }}
            >
              <Magnetic strength={7}>
                <Cta href="#collections">Explore the studio</Cta>
              </Magnetic>
              <Cta href="#contact" tone="outline">
                Contact us
              </Cta>
            </div>

            <dl
              className="anim-rise mt-12 grid max-w-xl grid-cols-3 gap-x-4 border-t border-ink/12 pt-5"
              style={{ animationDelay: "860ms" }}
            >
              {facts.map((fact) => (
                <div key={fact.label} className="min-w-0">
                  <dt className="font-display text-[1.05rem] leading-tight font-medium text-ink sm:text-[1.25rem]">
                    {fact.value}
                  </dt>
                  <dd className="mt-1 text-[0.66rem] leading-snug tracking-[0.12em] text-ink/45 uppercase">
                    {fact.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-6 xl:col-span-6">
            <HeroArt />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-7 left-12 hidden items-center gap-3 lg:flex">
        <span className="u-label text-[0.6rem] text-ink/40">Scroll</span>
        <span className="relative h-10 w-px overflow-hidden bg-ink/15">
          <span className="anim-scroll-cue absolute inset-x-0 top-0 h-1/2 bg-ink/50" />
        </span>
      </div>
    </section>
  );
}
