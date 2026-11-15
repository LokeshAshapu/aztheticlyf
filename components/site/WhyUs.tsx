import { differentiators } from "@/content/site";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function WhyUs() {
  return (
    <section className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-[86rem] px-5 sm:px-8 lg:px-12">
        <SectionLabel index="04" title="Why the studio" meta="The difference" />

        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <h2 className="u-display max-w-[12ch] text-[clamp(2.2rem,4.4vw,3.6rem)] text-ink">
                  Four reasons people <em className="u-serif-italic text-plum">come back.</em>
                </h2>
              </Reveal>
              <Reveal delay={100}>
                <p className="mt-6 max-w-xs text-[0.875rem] leading-relaxed text-ink/55">
                  No discount gimmicks, no invented numbers. These are the things the studio is
                  actually built on.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            {differentiators.map((item, index) => (
              <Reveal key={item.index} delay={index * 60}>
                <div className="group border-t border-ink/12 py-7 transition-colors duration-500 last:border-b hover:border-ink/30">
                  <div className="flex gap-5 sm:gap-8">
                    <span className="font-display text-[0.95rem] leading-none text-lilac-deep transition-transform duration-500 group-hover:-translate-y-0.5">
                      {item.index}
                    </span>
                    <div className="flex-1">
                      <h3 className="font-display text-[1.5rem] leading-tight font-normal tracking-[-0.02em] text-ink sm:text-[1.75rem]">
                        {item.title}
                      </h3>
                      <p className="mt-2.5 max-w-lg text-[0.9rem] leading-[1.75] text-ink/55">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
