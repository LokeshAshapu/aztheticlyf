import { Star } from "lucide-react";

/** Slowly rotating circular stamp — a printed-seal detail. */
export function Stamp({
  id,
  text,
  className = "",
}: {
  id: string;
  text: string;
  className?: string;
}) {
  return (
    <div
      className={`relative grid place-items-center rounded-full border border-ink/15 bg-cream/90 backdrop-blur-sm ${className}`}
    >
      <svg viewBox="0 0 200 200" className="anim-spin-slow absolute inset-0 h-full w-full" aria-hidden="true">
        <defs>
          <path id={id} d="M100,100 m-76,0 a76,76 0 1,1 152,0 a76,76 0 1,1 -152,0" fill="none" />
        </defs>
        <text className="fill-ink/70" style={{ fontSize: 12.5, letterSpacing: "2.6px", fontWeight: 600 }}>
          <textPath href={`#${id}`} startOffset="0%">
            {text}
          </textPath>
        </text>
      </svg>
      <Star className="h-5 w-5 text-lilac-deep" strokeWidth={1.2} aria-hidden="true" />
    </div>
  );
}
