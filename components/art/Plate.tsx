import type { PlateVariant } from "@/content/site";

type Palette = {
  from: string;
  to: string;
  form: string;
  line: string;
  accent: string;
};

/**
 * Editorial artwork plates with optional local photography.
 *
 * These are original vector still-life compositions in the brand palette, not
 * stock photography. They remain as a fallback when a photo is not provided.
 */

const palettes: Record<PlateVariant, Palette> = {
  hamper: { from: "#fdf1e3", to: "#f3ddc4", form: "#ddc2a2", line: "#5c4230", accent: "#8f6fc4" },
  stationery: { from: "#f7f1fd", to: "#ece0f9", form: "#d7c4ef", line: "#4a2f5c", accent: "#8f6fc4" },
  jewellery: { from: "#fdf3f2", to: "#f8e3e1", form: "#eec6c7", line: "#7b4046", accent: "#a87f47" },
  drape: { from: "#f7e9d0", to: "#ead4ad", form: "#c9a478", line: "#5a3d20", accent: "#8f6630" },
  bloom: { from: "#fbf2f5", to: "#f2dfe7", form: "#e9c9d6", line: "#7a3f55", accent: "#b49be0" },
  ribbon: { from: "#faf4ff", to: "#eee1fa", form: "#ddc9f6", line: "#4a2f5c", accent: "#8f6fc4" },
  note: { from: "#fdf7f0", to: "#f7e8d9", form: "#ecd6c3", line: "#6b4b2c", accent: "#b48a4f" },
};

const Star = ({ x, y, s = 1, fill }: { x: number; y: number; s?: number; fill: string }) => (
  <path
    d={`M${x} ${y - 16 * s} L${x + 3.4 * s} ${y - 3.4 * s} L${x + 16 * s} ${y} L${x + 3.4 * s} ${y + 3.4 * s} L${x} ${y + 16 * s} L${x - 3.4 * s} ${y + 3.4 * s} L${x - 16 * s} ${y} L${x - 3.4 * s} ${y - 3.4 * s} Z`}
    fill={fill}
  />
);

function PrintMarks({ color }: { color: string }) {
  return (
    <g stroke={color} strokeWidth={1.4} opacity={0.28} fill="none">
      <path d="M56 92 h26 M56 92 v26" />
      <path d="M944 92 h-26 M944 92 v26" />
      <path d="M56 1168 h26 M56 1168 v-26" />
      <path d="M944 1168 h-26 M944 1168 v-26" />
    </g>
  );
}

function Artwork({ variant }: { variant: PlateVariant }) {
  const p = palettes[variant];

  if (variant === "hamper") {
    return (
      <>
        <ellipse cx="500" cy="560" rx="330" ry="330" fill={p.form} opacity="0.45" style={{ filter: "blur(50px)" }} />
        <path d="M175 1210 V600 A325 325 0 0 1 825 600 V1210 Z" fill={p.form} opacity="0.5" />
        <ellipse cx="500" cy="1012" rx="215" ry="24" fill={p.line} opacity="0.14" style={{ filter: "blur(16px)" }} />

        {/* box shadow + body */}
        <rect x="292" y="700" width="416" height="292" rx="10" fill="#fffdf8" opacity="0.95" stroke={p.line} strokeOpacity="0.22" />
        <rect x="266" y="646" width="468" height="62" rx="8" fill="#fffdf8" stroke={p.line} strokeOpacity="0.24" />
        <line x1="266" y1="688" x2="734" y2="688" stroke={p.line} strokeOpacity="0.18" />

        {/* ribbon */}
        <rect x="478" y="646" width="44" height="346" fill={p.accent} opacity="0.92" />
        <rect x="292" y="800" width="416" height="30" fill={p.accent} opacity="0.92" />

        {/* bow */}
        <path d="M500 646 C452 556 336 566 344 626 C351 678 438 686 500 646 Z" fill={p.accent} opacity="0.95" stroke={p.line} strokeOpacity="0.25" />
        <path d="M500 646 C548 556 664 566 656 626 C649 678 562 686 500 646 Z" fill={p.accent} opacity="0.95" stroke={p.line} strokeOpacity="0.25" />
        <path d="M500 650 C480 740 448 792 414 830" stroke={p.accent} strokeWidth="24" strokeLinecap="round" fill="none" />
        <path d="M500 650 C520 740 552 792 586 830" stroke={p.accent} strokeWidth="24" strokeLinecap="round" fill="none" opacity="0.9" />
        <circle cx="500" cy="646" r="17" fill={p.accent} stroke={p.line} strokeOpacity="0.25" />

        {/* tag */}
        <g transform="translate(742 806) rotate(13)">
          <rect width="150" height="96" rx="4" fill={p.from} stroke={p.line} strokeOpacity="0.35" />
          <circle cx="22" cy="20" r="5" fill="none" stroke={p.line} strokeOpacity="0.45" />
          <line x1="42" y1="46" x2="122" y2="46" stroke={p.line} strokeOpacity="0.35" />
          <line x1="42" y1="62" x2="98" y2="62" stroke={p.line} strokeOpacity="0.25" />
        </g>

        <Star x={214} y={742} s={0.9} fill={p.accent} />
        <Star x={812} y={628} s={0.65} fill={p.line} />
        <circle cx="760" cy="960" r="7" fill={p.line} opacity="0.35" />
      </>
    );
  }

  if (variant === "stationery") {
    return (
      <>
        <circle cx="720" cy="360" r="280" fill={p.form} opacity="0.55" style={{ filter: "blur(60px)" }} />
        <rect x="150" y="170" width="700" height="900" rx="6" fill={p.form} opacity="0.16" />
        {Array.from({ length: 12 }).map((_, row) =>
          Array.from({ length: 9 }).map((_, col) => (
            <circle
              key={`${row}-${col}`}
              cx={190 + col * 78}
              cy={230 + row * 76}
              r="2.4"
              fill={p.line}
              opacity="0.22"
            />
          )),
        )}

        {/* notebook stack */}
        <g transform="rotate(-8 360 640)">
          <rect x="186" y="438" width="336" height="428" rx="4" fill="#fffdf8" stroke={p.line} strokeOpacity="0.28" />
          <rect x="186" y="438" width="10" height="428" fill={p.accent} opacity="0.85" />
          <rect x="226" y="494" width="150" height="12" rx="6" fill={p.line} opacity="0.35" />
          <rect x="226" y="522" width="96" height="8" rx="4" fill={p.line} opacity="0.18" />
          <circle cx="330" cy="760" r="46" fill="none" stroke={p.accent} strokeOpacity="0.55" />
          <circle cx="330" cy="760" r="24" fill={p.accent} opacity="0.25" />
        </g>

        <g transform="rotate(5 520 600)">
          <rect x="380" y="380" width="310" height="404" rx="4" fill={p.from} stroke={p.line} strokeOpacity="0.3" />
          <rect x="380" y="470" width="310" height="46" fill={p.accent} opacity="0.82" />
          <rect x="414" y="580" width="128" height="8" rx="4" fill={p.line} opacity="0.22" />
          <rect x="414" y="602" width="182" height="8" rx="4" fill={p.line} opacity="0.16" />
          <rect x="414" y="624" width="150" height="8" rx="4" fill={p.line} opacity="0.16" />
        </g>

        <g transform="rotate(11 690 830)">
          <rect x="592" y="732" width="196" height="196" rx="3" fill={p.form} stroke={p.line} strokeOpacity="0.22" />
          <path d="M616 800 h148 M616 824 h110 M616 848 h130" stroke={p.line} strokeOpacity="0.28" />
        </g>

        {/* pen */}
        <g transform="rotate(24 760 470)">
          <rect x="748" y="286" width="24" height="316" rx="12" fill={p.line} opacity="0.85" />
          <path d="M748 602 h24 l-12 34 z" fill={p.line} />
          <rect x="748" y="360" width="24" height="16" fill={p.from} opacity="0.85" />
        </g>
      </>
    );
  }

  if (variant === "jewellery") {
    return (
      <>
        <circle cx="500" cy="500" r="320" fill={p.form} opacity="0.5" style={{ filter: "blur(66px)" }} />
        <circle cx="500" cy="560" r="300" fill="none" stroke={p.line} strokeOpacity="0.12" />
        <circle cx="500" cy="560" r="360" fill="none" stroke={p.line} strokeOpacity="0.07" />

        {/* chain */}
        <path d="M120 286 C310 742 690 742 880 286" fill="none" stroke={p.line} strokeWidth="4" strokeDasharray="0.1 21" strokeLinecap="round" opacity="0.6" />
        <path d="M154 300 C330 700 670 700 846 300" fill="none" stroke={p.accent} strokeWidth="1.4" opacity="0.5" />

        <circle cx="500" cy="690" r="11" fill="none" stroke={p.accent} strokeWidth="3" />
        <circle cx="500" cy="806" r="106" fill="#fffdf8" opacity="0.86" stroke={p.accent} strokeWidth="2.4" />
        <circle cx="500" cy="806" r="76" fill="none" stroke={p.line} strokeOpacity="0.35" />
        <circle cx="500" cy="806" r="30" fill={p.form} opacity="0.85" />
        <Star x={500} y={806} s={1.1} fill={p.accent} />

        <circle cx="742" cy="968" r="56" fill="none" stroke={p.accent} strokeWidth="7" opacity="0.75" />
        <circle cx="252" cy="944" r="26" fill="none" stroke={p.line} strokeOpacity="0.4" strokeWidth="2" />

        <Star x={258} y={392} s={1.2} fill={p.accent} />
        <Star x={748} y={318} s={0.7} fill={p.line} />
        <Star x={652} y={640} s={0.5} fill={p.accent} />
        <circle cx="322" cy="608" r="6" fill={p.line} opacity="0.35" />
        <circle cx="690" cy="470" r="4" fill={p.line} opacity="0.3" />
      </>
    );
  }

  if (variant === "drape") {
    return (
      <>
        <rect x="0" y="0" width="1000" height="1250" fill={p.form} opacity="0.18" />
        {[0, 1, 2, 3, 4].map((i) => {
          const x = 60 + i * 200;
          return (
            <path
              key={i}
              d={`M${x} 90 C${x - 84} 420 ${x + 96} 760 ${x - 34} 1240 L${x + 168} 1240 C${x + 246} 760 ${x + 78} 420 ${x + 168} 90 Z`}
              fill={i % 2 === 0 ? p.from : p.form}
              opacity={i % 2 === 0 ? 0.92 : 0.75}
              stroke={p.line}
              strokeOpacity="0.1"
            />
          );
        })}

        {/* gold border */}
        <path
          d="M660 90 C576 420 756 760 626 1240"
          fill="none"
          stroke={p.accent}
          strokeWidth="7"
          opacity="0.9"
        />
        <path
          d="M674 90 C590 420 770 760 640 1240"
          fill="none"
          stroke={p.accent}
          strokeWidth="2"
          opacity="0.5"
        />
        <path
          d="M674 90 C590 420 770 760 640 1240"
          fill="none"
          stroke={p.accent}
          strokeWidth="1"
          opacity="0.55"
        />

        {/* pleats */}
        {[240, 420, 820].map((x) => (
          <path
            key={x}
            d={`M${x} 90 C${x - 70} 420 ${x + 80} 760 ${x - 20} 1240`}
            fill="none"
            stroke={p.line}
            strokeOpacity="0.16"
          />
        ))}

        {/* embroidery motifs */}
        {[
          [300, 1080],
          [500, 1140],
          [700, 1060],
          [380, 980],
          [620, 990],
        ].map(([cx, cy]) => (
          <g key={`${cx}-${cy}`} opacity="0.7">
            <circle cx={cx} cy={cy} r="7" fill="none" stroke={p.accent} strokeWidth="1.6" />
            <path d={`M${cx - 18} ${cy} h10 M${cx + 8} ${cy} h10 M${cx} ${cy - 18} v10 M${cx} ${cy + 8} v10`} stroke={p.accent} strokeWidth="1.4" />
          </g>
        ))}
      </>
    );
  }

  if (variant === "ribbon") {
    return (
      <>
        <ellipse cx="540" cy="560" rx="300" ry="300" fill={p.form} opacity="0.5" style={{ filter: "blur(58px)" }} />
        <path d="M190 1210 V620 A310 310 0 0 1 810 620 V1210 Z" fill={p.form} opacity="0.28" />

        {/* spool */}
        <rect x="418" y="452" width="164" height="300" rx="6" fill="#fffdf8" stroke={p.line} strokeOpacity="0.25" />
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <line
            key={i}
            x1="424"
            y1={474 + i * 40}
            x2="576"
            y2={474 + i * 40}
            stroke={p.accent}
            strokeOpacity={0.5 - i * 0.04}
            strokeWidth="2"
          />
        ))}
        <rect x="380" y="418" width="240" height="36" rx="9" fill={p.form} stroke={p.line} strokeOpacity="0.18" />
        <rect x="380" y="750" width="240" height="36" rx="9" fill={p.form} stroke={p.line} strokeOpacity="0.18" />

        {/* curling ribbon */}
        <path
          d="M576 600 C780 552 878 716 726 806 C632 862 640 972 770 1014"
          stroke={p.accent}
          strokeWidth="38"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M576 626 C764 584 850 720 714 798 C614 856 622 950 748 992"
          stroke={p.line}
          strokeOpacity="0.2"
          strokeWidth="1.6"
          fill="none"
        />
        <path
          d="M420 752 C300 822 344 946 246 1006"
          stroke={p.accent}
          strokeWidth="30"
          strokeLinecap="round"
          fill="none"
          opacity="0.85"
        />

        {/* folded tag */}
        <g transform="translate(212 470) rotate(-12)">
          <path d="M0 0 h132 l26 26 v74 h-158 z" fill="#fffdf8" stroke={p.line} strokeOpacity="0.3" />
          <circle cx="16" cy="28" r="4.5" fill="none" stroke={p.line} strokeOpacity="0.4" />
          <line x1="30" y1="52" x2="120" y2="52" stroke={p.line} strokeOpacity="0.28" />
          <line x1="30" y1="66" x2="94" y2="66" stroke={p.line} strokeOpacity="0.2" />
        </g>

        <Star x={742} y={432} s={0.9} fill={p.accent} />
        <Star x={266} y={852} s={0.6} fill={p.line} />
        <circle cx="810" cy="700" r="6" fill={p.line} opacity="0.3" />
      </>
    );
  }

  if (variant === "note") {
    return (
      <>
        <circle cx="500" cy="520" r="300" fill={p.form} opacity="0.55" style={{ filter: "blur(60px)" }} />
        <path d="M170 1200 V640 A330 330 0 0 1 830 640 V1200 Z" fill={p.form} opacity="0.3" />

        {/* letter */}
        <g transform="rotate(5 500 600)">
          <rect x="296" y="396" width="404" height="300" rx="3" fill="#fffdf8" stroke={p.line} strokeOpacity="0.25" />
          <line x1="336" y1="452" x2="560" y2="452" stroke={p.line} strokeOpacity="0.26" />
          <line x1="336" y1="478" x2="640" y2="478" stroke={p.line} strokeOpacity="0.18" />
          <line x1="336" y1="504" x2="606" y2="504" stroke={p.line} strokeOpacity="0.18" />
          <line x1="336" y1="530" x2="520" y2="530" stroke={p.line} strokeOpacity="0.18" />
        </g>

        {/* envelope */}
        <g transform="rotate(-4 500 760)">
          <rect x="242" y="640" width="516" height="336" rx="4" fill="#fffdf8" stroke={p.line} strokeOpacity="0.28" />
          <path d="M242 640 L500 836 L758 640" fill="none" stroke={p.line} strokeOpacity="0.28" />
          <path d="M242 976 L452 806 M758 976 L548 806" stroke={p.line} strokeOpacity="0.16" />
          <circle cx="500" cy="838" r="52" fill={p.accent} opacity="0.9" />
          <Star x={500} y={838} s={0.8} fill={p.from} />
        </g>

        {/* stamp */}
        <g transform="rotate(7 748 520)">
          <rect x="690" y="462" width="116" height="136" rx="2" fill={p.form} stroke={p.line} strokeOpacity="0.22" />
          <rect x="702" y="474" width="92" height="112" rx="1" fill="none" stroke={p.from} strokeWidth="2" opacity="0.9" />
          <Star x={748} y={530} s={0.7} fill={p.line} />
        </g>

        {/* sprig */}
        <path d="M226 900 C258 800 268 720 250 646" fill="none" stroke={p.line} strokeOpacity="0.35" strokeWidth="2" />
        <path d="M246 812 C212 800 194 770 190 742 C222 744 244 772 246 812 Z" fill={p.form} opacity="0.8" stroke={p.line} strokeOpacity="0.12" />
        <path d="M256 764 C292 752 312 724 316 696 C282 696 258 726 256 764 Z" fill={p.form} opacity="0.7" stroke={p.line} strokeOpacity="0.12" />

        <Star x={318} y={388} s={0.8} fill={p.accent} />
        <Star x={812} y={928} s={0.6} fill={p.accent} />
        <circle cx="812" cy="742" r="5" fill={p.line} opacity="0.3" />
      </>
    );
  }

  // bloom
  return (
    <>
      <circle cx="500" cy="640" r="330" fill={p.form} opacity="0.55" style={{ filter: "blur(60px)" }} />
      <circle cx="500" cy="620" r="270" fill="none" stroke={p.line} strokeOpacity="0.12" />

      {[0, 60, 120, 180, 240, 300].map((deg, i) => (
        <g key={deg} transform={`rotate(${deg} 500 660)`}>
          <ellipse
            cx="500"
            cy="470"
            rx="86"
            ry="190"
            fill={i % 2 === 0 ? p.form : p.from}
            opacity={i % 2 === 0 ? 0.92 : 0.85}
            stroke={p.line}
            strokeOpacity="0.14"
          />
          <path d="M500 300 C486 400 486 500 500 600" stroke={p.line} strokeOpacity="0.16" fill="none" />
        </g>
      ))}

      <circle cx="500" cy="660" r="88" fill={p.from} stroke={p.line} strokeOpacity="0.2" />
      <circle cx="500" cy="660" r="56" fill={p.form} opacity="0.9" />
      <circle cx="500" cy="660" r="16" fill={p.accent} opacity="0.75" />

      <path d="M500 760 C520 880 470 980 500 1120" stroke={p.line} strokeWidth="2.4" opacity="0.45" fill="none" />
      <path d="M498 920 C440 900 410 850 400 810 C450 812 486 860 498 920 Z" fill={p.form} opacity="0.8" stroke={p.line} strokeOpacity="0.12" />
      <path d="M502 1000 C560 984 596 940 606 900 C556 900 516 944 502 1000 Z" fill={p.form} opacity="0.7" stroke={p.line} strokeOpacity="0.12" />

      <Star x={760} y={420} s={1} fill={p.accent} />
      <Star x={246} y={520} s={0.6} fill={p.line} />
      <circle cx="790" cy="880" r="7" fill={p.line} opacity="0.28" />
      <circle cx="212" cy="860" r="5" fill={p.line} opacity="0.3" />
    </>
  );
}

export function Plate({
  variant,
  className = "",
  label,
  alt,
  src,
  priority = false,
}: {
  variant: PlateVariant;
  className?: string;
  label?: string;
  alt: string;
  src?: string;
  priority?: boolean;
}) {
  const p = palettes[variant];

  return (
    <div
      className={`relative isolate overflow-hidden ${className}`}
      style={{
        background: `linear-gradient(160deg, ${p.from} 0%, ${p.to} 100%)`,
      }}
    >
      {src ? (
        // Real photography slot — see README for where to drop the studio's images.
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <svg
          viewBox="0 0 1000 1250"
          preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0 h-full w-full"
          role="img"
          aria-label={alt}
        >
          <Artwork variant={variant} />
          <PrintMarks color={p.line} />
        </svg>
      )}

      {label ? (
        <span
          className="absolute bottom-4 left-4 z-10 text-[10px] font-semibold tracking-[0.22em] uppercase"
          style={{ color: p.line, opacity: 0.6 }}
        >
          {label}
        </span>
      ) : null}
    </div>
  );
}
