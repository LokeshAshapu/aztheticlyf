import { site } from "@/content/site";
import { Plate } from "@/components/art/Plate";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowLink } from "@/components/ui/Cta";
import { SectionLabel } from "@/components/ui/SectionLabel";

const principles = [
  {
    title: "Curated by eye",
    body: "Every range is edited before it is sold. If it would not go in a gift we would give, it does not go on the shelf.",
  },
  {
    title: "Packed by hand",
    body: "Hampers are assembled in the studio, one at a time, around the person receiving them.",
  },
  {
    title: "Open to everyone",
    body: "One hamper or a thousand return gifts — wholesale enquiries are as welcome as a single birthday gift.",
  },
];

export function About() {
  return (
    <section id="studio" className="relative bg-cream py-24 lg:py-36">
      <div className="mx-auto max-w-[86rem] px-5 sm:px-8 lg:px-12">
        <SectionLabel index="01" title="The Studio" />

        <div className="mt-12 grid gap-14 lg:mt-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <Reveal>
              <h2 className="u-display max-w-[13ch] text-[clamp(2.2rem,4.4vw,3.7rem)] text-ink">
                A small studio with a very particular idea of <em className="u-serif-italic text-plum">beautiful</em>.
              </h2>
            </Reveal>

            <Reveal delay={120} className="mt-10">
              <div className="relative">
                <Plate
                  variant="drape"
                  alt="Saree and jewellery from an Aztheticlyf Instagram post"
                  src="/images/instagram/saree-jewellery.jpg"
                  className="aspect-[4/5] w-full rounded-t-[10rem] border border-ink/10"
                />
                <div className="absolute -right-3 bottom-6 w-[42%] rotate-[4deg] border-[6px] border-cream bg-cream shadow-[0_20px_45px_-25px_rgba(27,17,32,0.55)]">
                  <Plate
                    variant="bloom"
                    alt="Body-care product featured in an Instagram reel"
                    src="/images/instagram/bath-bubbles.jpg"
                    className="aspect-square w-full"
                  />
                </div>
              </div>
              <p className="mt-4 max-w-sm text-[0.7rem] leading-relaxed tracking-[0.12em] text-ink/45 uppercase">
                Retail, wholesale and reselling — from a single gift to a full shelf.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal delay={80}>
              <p className="text-[1.05rem] leading-[1.8] text-ink/75">
                Aztheticlyf is an aesthetic gift studio in {site.location.city}. We began with Korean
                stationery — the kind of notebooks and pens that make an ordinary desk feel
                considered — and grew into accessories, anti-tarnish jewellery and the hampers that
                tie all of it together.
              </p>
            </Reveal>

            <Reveal delay={140}>
              <p className="mt-6 text-[1.05rem] leading-[1.8] text-ink/75">
                Ten thousand gifts later, the studio still works the same way: a WhatsApp message,
                a conversation about who the gift is for, and a box that leaves here looking like
                someone cared. Some of those boxes go to a best friend across the city. Some go to
                a shopkeeper stocking their first display.
              </p>
            </Reveal>

            <Reveal delay={180} className="mt-10">
              <blockquote className="border-l-2 border-lilac pl-6">
                <p className="font-display text-[clamp(1.5rem,2.6vw,2.1rem)] leading-[1.35] font-light tracking-[-0.02em] text-plum">
                  A gift should feel like it was chosen by someone who actually knows you.
                </p>
                <footer className="mt-4 text-[0.66rem] tracking-[0.18em] text-ink/45 uppercase">
                  The studio's working rule
                </footer>
              </blockquote>
            </Reveal>

            <div className="mt-12 border-t border-ink/12">
              {principles.map((principle) => (
                <Reveal key={principle.title} delay={60}>
                  <div className="group grid gap-2 border-b border-ink/12 py-5 sm:grid-cols-[11rem_1fr] sm:gap-6">
                    <h3 className="font-sans text-[0.78rem] font-semibold tracking-[0.06em] text-ink uppercase">
                      {principle.title}
                    </h3>
                    <p className="text-[0.9rem] leading-relaxed text-ink/60 transition-colors duration-500 group-hover:text-ink/80">
                      {principle.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="mt-8">
              <ArrowLink href="#collections">See what the studio makes</ArrowLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
