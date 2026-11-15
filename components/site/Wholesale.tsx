import { wholesaleProcess, whatsappLink, whatsappMessages } from "@/content/site";
import { Plate } from "@/components/art/Plate";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Cta } from "@/components/ui/Cta";

export function Wholesale() {
  return (
    <section id="wholesale" className="relative overflow-hidden bg-mist/60 py-24 lg:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-[26rem] w-[26rem] rounded-full border border-lilac/40"
      />

      <div className="relative mx-auto max-w-[86rem] px-5 sm:px-8 lg:px-12">
        <SectionLabel index="05" title="Wholesale" meta="Retail · Reselling" />

        <div className="mt-12 grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <Reveal>
              <h2 className="u-display max-w-[15ch] text-[clamp(2.2rem,4.6vw,3.8rem)] text-ink">
                For the shopkeepers, resellers and{" "}
                <em className="u-serif-italic text-plum">wedding planners.</em>
              </h2>
            </Reveal>

            <Reveal delay={100}>
              <p className="mt-6 max-w-md text-[0.95rem] leading-[1.8] text-ink/60">
                The same studio that wraps a single birthday hamper supplies Korean stationery,
                accessories and anti-tarnish jewellery in bulk. Tell us what your customers ask
                for and we will show you what is in stock.
              </p>
            </Reveal>

            <div className="mt-10">
              {wholesaleProcess.map((step, index) => (
                <Reveal key={step.step} delay={index * 70}>
                  <div className="group grid grid-cols-[3rem_1fr] gap-4 border-t border-ink/12 py-6 last:border-b">
                    <span className="font-display text-[0.9rem] leading-none text-plum/60">
                      {step.step}
                    </span>
                    <div>
                      <h3 className="font-sans text-[0.8rem] font-semibold tracking-[0.05em] text-ink uppercase">
                        {step.title}
                      </h3>
                      <p className="mt-2 max-w-md text-[0.875rem] leading-relaxed text-ink/55">
                        {step.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={120} className="mt-9">
              <Cta href={whatsappLink(whatsappMessages.wholesale)}>Request bulk pricing</Cta>
            </Reveal>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <Reveal delay={80}>
              <div className="relative">
                <Plate
                  variant="stationery"
                  alt="Editorial artwork of a stack of notebooks — the wholesale range"
                  label="Wholesale range"
                  className="aspect-[3/4] w-full border border-ink/10"
                />

                <div className="absolute -bottom-6 -left-6 w-[72%] border border-ink/10 bg-cream p-5 shadow-[0_24px_50px_-30px_rgba(27,17,32,0.6)] sm:-left-10">
                  <p className="u-label text-[0.58rem] text-ink/40">Stocked for</p>
                  <p className="mt-2 font-display text-[1.2rem] leading-tight text-ink">
                    Boutiques · Gift shops · Resellers · Planners
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-[0.62rem] tracking-[0.14em] text-ink/45 uppercase">
                    <span className="h-1.5 w-1.5 rounded-full bg-lilac-deep" aria-hidden="true" />
                    Prices on enquiry
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
