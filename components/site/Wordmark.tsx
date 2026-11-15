import Link from "next/link";

export function Wordmark({
  tone = "ink",
  className = "",
  asLink = true,
}: {
  tone?: "ink" | "cream";
  className?: string;
  asLink?: boolean;
}) {
  const color = tone === "cream" ? "text-cream" : "text-ink";

  const content = (
    <span className={`inline-flex items-baseline gap-2 ${color} ${className}`}>
      <span className="font-display text-[1.35rem] leading-none font-medium tracking-[-0.03em]">
        Aztheticlyf
      </span>
      <span
        aria-hidden="true"
        className={`h-1.5 w-1.5 translate-y-[-2px] rounded-full ${tone === "cream" ? "bg-lilac" : "bg-lilac-deep"}`}
      />
    </span>
  );

  if (!asLink) return content;

  return (
    <Link href="/" aria-label="Aztheticlyf — home" className="group inline-flex">
      {content}
    </Link>
  );
}
