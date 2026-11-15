import { features, whatsappLink } from "@/content/site";
import { Plate } from "@/components/art/Plate";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Cta } from "@/components/ui/Cta";

export function Featured() {
  return (
    <section id="featured" className="relative overflow-hidden bg-plum py-24 text-cream lg:py-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[-14rem] right-[-10rem] h-[38rem] w-[38rem] rounded-full bg-lilac/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-12rem] left-[-8rem] h-[30rem] w-[30rem] rounded-full bg-blush/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-[86rem] px-5 sm:px-8 lg:px-12">
        <SectionLabel index="03" title="Featured" meta="New & loved" tone="cream" />

        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-8">
            <h2 className="u-display max-w-[17ch] text-[clamp(2.4rem,5.2vw,4.5rem)] text-cream">
              Three hampers. Three entirely{" "}
              <em className="u-serif-italic text-lilac">different feelings.</em>
            </h2>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-4">
            <p className="max-w-sm text-[0.9rem] leading-relaxed text-cream/60">
              The releases people ask for by name. Each one is assembled to order and sent
              wherever the person receiving it happens to be.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 space-y-16 lg:mt-20 lg:space-y-24">
          {features.map((feature, index) => {
            const reversed = index % 2 === 1;
            return (
              <Reveal key={feature.title} delay={60}>
                <article
                  className="group grid gap-8 border-t border-cream/15 pt-8 lg:grid-cols-12 lg:items-center lg:gap-12 lg:pt-12"
                >
                  <div
                    className={`plate-zoom relative overflow-hidden border border-cream/15 ${
                      reversed ? "lg:order-2 lg:col-span-6 lg:col-start-7" : "lg:col-span-7"
                    }`}
                  >
                    <Plate
                      variant={feature.variant}
                      alt={`${feature.title} — editorial artwork`}
                      className={`${index === 0 ? "aspect-[5/4]" : "aspect-[4/3]"} w-full`}
                    />                      <span className="absolute top-4 right-4 rounded-full bg-plum/70 px-3 py-1 text-[0.58rem] tracking-[0.16em] text-cream/80 uppercase backdrop-blur">
                        {feature.kicker}
                      </span>

                    <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-plum to-transparent p-6 opacity-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="max-w-sm text-[0.8rem] leading-relaxed text-cream/80">
                        Assembled by hand in Chennai · shipped worldwide
                      </p>
                    </div>
                  </div>

                  <div
                    className={
                      reversed
                        ? "lg:order-1 lg:col-span-5 lg:col-start-1"
                        : "lg:col-span-5 lg:col-start-8"
                    }
                  >
                    <div className="flex items-center gap-3">
                      <span className="u-label text-[0.6rem] text-lilac">
                        No. 0{index + 1}
                      </span>
                      <span className="h-px w-8 bg-cream/25" aria-hidden="true" />
                      <span className="u-label text-[0.6rem] text-cream/45">{feature.kicker}</span>
                    </div>

                    <h3 className="mt-4 font-display text-[clamp(1.9rem,3.4vw,2.9rem)] leading-[1.05] font-light tracking-[-0.03em]">
                      {feature.title}
                    </h3>
                    <p className="mt-4 max-w-md text-[0.925rem] leading-[1.8] text-cream/65">
                      {feature.body}
                    </p>

                    <div className="mt-7 flex flex-wrap items-center gap-5">
                      <Cta href={whatsappLink(feature.enquire)} tone="cream">
                        Enquire on WhatsApp
                      </Cta>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-cream/15 pt-8 sm:flex-row sm:items-center">
          <p className="max-w-md text-[0.85rem] leading-relaxed text-cream/55">
            Looking for something not here? Most hampers begin as a conversation, not a product
            page.
          </p>
          <Cta href="#contact" tone="outlineLight">
            Start a hamper
          </Cta>
        </Reveal>
      </div>
    </section>
  );
}
