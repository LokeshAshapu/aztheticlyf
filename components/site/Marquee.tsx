const items = [
  "Korean Stationery",
  "Curated Hampers",
  "Anti-Tarnish Jewellery",
  "Return Gifts",
  "Wholesale & Reselling",
  "Worldwide Shipping",
];

export function Marquee() {
  return (
    <section aria-label="What the studio makes" className="border-y border-ink/12 bg-ink text-cream">
      <div className="marquee flex overflow-hidden py-5">
        <div className="marquee-track flex shrink-0 items-center gap-10 pr-10">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 items-center gap-10" aria-hidden={copy === 1}>
              {items.map((item) => (
                <div key={`${copy}-${item}`} className="flex shrink-0 items-center gap-10">
                  <span className="u-label text-[0.68rem] whitespace-nowrap text-cream/70">{item}</span>
                  <span className="text-lilac" aria-hidden="true">
                    ✦
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
