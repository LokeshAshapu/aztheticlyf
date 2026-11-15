"use client";

import { useRef } from "react";
import { Plate } from "@/components/art/Plate";
import { Stamp } from "@/components/ui/Stamp";

/** Hero composition with a restrained pointer parallax. */
export function HeroArt() {
  const ref = useRef<HTMLDivElement>(null);

  function handleMove(event: React.PointerEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el || event.pointerType !== "mouse") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rect = el.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    el.style.setProperty("--px", `${x * -14}px`);
    el.style.setProperty("--py", `${y * -12}px`);
  }

  function reset() {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--px", "0px");
    el.style.setProperty("--py", "0px");
  }

  return (
    <div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      className="relative mx-auto w-full max-w-[30rem] lg:mx-0 lg:ml-auto"
    >
      {/* arch backdrop */}
      <div
        aria-hidden="true"
        className="absolute -inset-x-5 -top-6 bottom-10 rounded-t-full border-x border-t border-ink/10 bg-mist/40"
      />
      <div
        aria-hidden="true"
        className="absolute -inset-x-1 -top-2 bottom-14 rounded-t-full border-x border-t border-ink/8"
      />

      <div className="relative pl-6 sm:pl-10 lg:pl-0">
        <div
          className="anim-mask relative overflow-hidden rounded-t-[12rem] border border-ink/10 shadow-[0_40px_80px_-40px_rgba(27,17,32,0.45)]"
          style={{ animationDelay: "220ms", transform: "translate3d(var(--px,0), var(--py,0), 0)", transition: "transform 500ms cubic-bezier(0.22,1,0.36,1)" }}
        >
          <Plate
            variant="hamper"
            alt="Editorial artwork of a ribboned gift hamper in lilac and cream"
            label="01 — Hampers"
            priority
            className="aspect-[4/5] w-full"
          />
        </div>

        {/* overlapping stationery detail */}
        <div
          className="anim-rise absolute -bottom-4 -left-2 w-[38%] rotate-[-5deg] overflow-hidden rounded-[3px] border-[6px] border-cream shadow-[0_24px_50px_-24px_rgba(27,17,32,0.5)] sm:-left-6"
          style={{ animationDelay: "900ms" }}
        >
          <Plate
            variant="stationery"
            alt="Editorial artwork of stacked notebooks and a pen"
            label="Stationery"
            className="aspect-square w-full"
          />
        </div>

        <div className="anim-rise absolute -top-2 -right-3 sm:-right-6" style={{ animationDelay: "1100ms" }}>
          <Stamp
            id="hero-stamp"
            text="AESTHETIC GIFT STUDIO · CHENNAI · WORLDWIDE ·"
            className="h-[6.5rem] w-[6.5rem] sm:h-[8.5rem] sm:w-[8.5rem]"
          />
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between gap-4 pl-6 sm:pl-10 lg:pl-0">
        <p className="max-w-[15rem] text-[0.7rem] leading-relaxed tracking-[0.14em] text-ink/45 uppercase">
          Hamper pictured: TARA — our newest release
        </p>
        <span aria-hidden="true" className="h-px flex-1 bg-ink/15" />
      </div>
    </div>
  );
}
