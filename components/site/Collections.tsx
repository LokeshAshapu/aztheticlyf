import { ArrowUpRight } from "lucide-react";
import { collections, whatsappLink, type Collection } from "@/content/site";
import { Plate } from "@/components/art/Plate";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

const ratios = ["aspect-[4/5]", "aspect-square", "aspect-[4/3]", "aspect-[4/5]", "aspect-[4/3]"];

function enquiryFor(collection: Collection) {
  return `Hi Aztheticlyf! I'm interested in ${collection.name.toLowerCase()}. Could you share what's available and the pricing?`;
}

function CollectionCard({ collection, index }: { collection: Collection; index: number }) {
  return (
    <Reveal delay={index * 70}>
      <a
        href={whatsappLink(enquiryFor(collection))}
        target="_blank"
        rel="noopener noreferrer"
        className="group block"
        aria-label={`Enquire about ${collection.name} on WhatsApp`}
      >
        <div className="plate-zoom relative overflow-hidden border border-ink/10 bg-mist/30">
          <Plate
            variant={collection.variant}
            alt={`${collection.name} — photo from Aztheticlyf on Instagram`}
            src={collection.image}
            label={collection.artLabel}
            className={`${ratios[index % ratios.length]} w-full`}
          />
          <div className="pointer-events-none absolute inset-0 bg-plum/0 transition-colors duration-700 group-hover:bg-plum/10" />

          <span className="absolute right-4 bottom-4 flex h-10 w-10 translate-y-3 items-center justify-center rounded-full bg-cream text-ink opacity-0 shadow-sm transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0 group-hover:opacity-100">
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
          </span>
        </div>

        <div className="mt-5 flex items-start justify-between gap-4 border-t border-ink/12 pt-4">
          <div>
            <div className="flex items-baseline gap-3">
              <span className="text-[0.62rem] tracking-[0.18em] text-ink/35">{collection.index}</span>
              <h3 className="font-display text-[1.45rem] leading-tight font-normal tracking-[-0.02em] text-ink">
                {collection.name}
              </h3>
            </div>
            <p className="mt-2 max-w-[28rem] text-[0.875rem] leading-relaxed text-ink/55">
              {collection.short}
            </p>
            <p className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-[0.62rem] tracking-[0.14em] text-ink/40 uppercase">
              {collection.details.map((detail, i) => (
                <span key={detail} className="flex items-center gap-3">
                  {i > 0 ? <span aria-hidden="true" className="text-lilac-deep">·</span> : null}
                  {detail}
                </span>
              ))}
            </p>
          </div>
          <span className="mt-1 hidden shrink-0 text-[0.62rem] tracking-[0.16em] text-ink/35 uppercase transition-colors duration-500 group-hover:text-plum sm:block">
            Enquire
          </span>
        </div>
      </a>
    </Reveal>
  );
}

export function Collections() {
  const [lead, ...rest] = collections;

  return (
    <section id="collections" className="relative bg-cream-deep/50 py-24 lg:py-36">
      <div className="mx-auto max-w-[86rem] px-5 sm:px-8 lg:px-12">
        <SectionLabel index="02" title="Collections" meta="Five edits" />

        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <h2 className="u-display max-w-[16ch] text-[clamp(2.3rem,5vw,4.2rem)] text-ink">
              What leaves <em className="u-serif-italic text-plum">the studio.</em>
            </h2>
          </Reveal>
          <Reveal delay={100} className="lg:col-span-4 lg:col-start-9">
            <p className="max-w-sm text-[0.9rem] leading-relaxed text-ink/60">
              Five things, one idea: that the objects around us should feel chosen. Prices and
              availability are shared on WhatsApp, because no two hampers are quite the same.
            </p>
          </Reveal>
        </div>

        {/* Lead collection — editorial split */}
        <Reveal delay={80} className="mt-14 lg:mt-20">
          <a
            href={whatsappLink(enquiryFor(lead))}
            target="_blank"
            rel="noopener noreferrer"
            className="group grid gap-8 border-y border-ink/12 py-8 lg:grid-cols-12 lg:items-center lg:gap-12 lg:py-12"
            aria-label={`Enquire about ${lead.name} on WhatsApp`}
          >
            <div className="plate-zoom relative overflow-hidden border border-ink/10 lg:col-span-7">
              <Plate
                variant={lead.variant}
                alt={`${lead.name} — photo from Aztheticlyf on Instagram`}
                src={lead.image}
                label={lead.artLabel}
                className="aspect-[16/11] w-full"
              />
              <span className="absolute top-4 left-4 rounded-full bg-cream/90 px-3 py-1 text-[0.6rem] tracking-[0.16em] text-ink/60 uppercase backdrop-blur">
                Most gifted
              </span>
            </div>

            <div className="lg:col-span-5">
              <span className="u-label text-[0.6rem] text-ink/40">{lead.index} — Signature</span>
              <h3 className="mt-4 font-display text-[clamp(1.9rem,3.4vw,2.8rem)] leading-[1.05] font-light tracking-[-0.03em] text-ink">
                {lead.name}
              </h3>
              <p className="mt-4 text-[0.95rem] leading-[1.75] text-ink/65">{lead.description}</p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {lead.details.map((detail) => (
                  <li
                    key={detail}
                    className="rounded-full border border-ink/15 px-3 py-1.5 text-[0.62rem] tracking-[0.12em] text-ink/55 uppercase"
                  >
                    {detail}
                  </li>
                ))}
              </ul>

              <span className="mt-8 inline-flex items-center gap-3 text-[0.78rem] font-semibold text-ink">
                <span className="link-underline">Enquire on WhatsApp</span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-ink/20 transition-all duration-500 group-hover:bg-ink group-hover:text-cream">
                  <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden="true" />
                </span>
              </span>
            </div>
          </a>
        </Reveal>

        {/* Remaining collections — staggered editorial grid */}
        <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:gap-x-12">
          {rest.map((collection, index) => (
            <div key={collection.slug} className={index % 2 === 1 ? "md:pt-20" : ""}>
              <CollectionCard collection={collection} index={index + 1} />
            </div>
          ))}
        </div>

        <p className="mt-16 border-t border-ink/12 pt-6 text-[0.7rem] leading-relaxed tracking-[0.1em] text-ink/40 uppercase">
          Every enquiry is answered by the studio on WhatsApp · Made to order, not off a shelf
        </p>
      </div>
    </section>
  );
}
