export function SectionLabel({
  index,
  title,
  meta,
  tone = "ink",
}: {
  index: string;
  title: string;
  meta?: string;
  tone?: "ink" | "cream";
}) {
  const muted = tone === "cream" ? "text-cream/45" : "text-ink/45";
  const strong = tone === "cream" ? "text-cream/80" : "text-ink/70";
  const line = tone === "cream" ? "bg-cream/20" : "bg-ink/12";
  const accent = tone === "cream" ? "text-lilac" : "text-lilac-deep";

  return (
    <div className="flex items-center gap-4">
      <span className={`u-label text-[0.62rem] ${accent}`}>{index}</span>
      <span className={`h-px flex-1 ${line}`} aria-hidden="true" />
      <span className={`u-label text-[0.62rem] ${strong}`}>{title}</span>
      {meta ? <span className={`u-label hidden text-[0.62rem] sm:block ${muted}`}>{meta}</span> : null}
    </div>
  );
}
