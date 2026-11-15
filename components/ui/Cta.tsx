import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

const tones = {
  ink: "bg-ink text-cream hover:bg-plum border border-transparent",
  cream: "bg-cream text-ink hover:bg-white border border-transparent",
  outline: "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-cream",
  outlineLight: "border border-cream/30 text-cream hover:bg-cream hover:text-ink",
  lilac: "bg-lilac text-ink hover:bg-lilac-deep hover:text-cream border border-transparent",
} as const;

export function Cta({
  href,
  children,
  tone = "ink",
  className = "",
  icon = true,
  ariaLabel,
}: {
  href: string;
  children: ReactNode;
  tone?: keyof typeof tones;
  className?: string;
  icon?: boolean;
  ariaLabel?: string;
}) {
  const external = href.startsWith("http");
  const classes = `group/cta inline-flex items-center gap-3 rounded-full px-5 py-3.5 text-[0.8125rem] font-semibold tracking-[0.02em] transition-colors duration-500 sm:px-6 ${tones[tone]} ${className}`;

  const inner = (
    <>
      <span>{children}</span>
      {icon ? (
        <ArrowUpRight
          className="h-4 w-4 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
          aria-hidden="true"
          strokeWidth={1.75}
        />
      ) : null}
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} aria-label={ariaLabel}>
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} aria-label={ariaLabel}>
      {inner}
    </Link>
  );
}

/** Quiet text link with a drawn underline — used for secondary actions. */
export function ArrowLink({
  href,
  children,
  className = "",
  tone = "ink",
  external,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  tone?: "ink" | "cream";
  external?: boolean;
}) {
  const color = tone === "cream" ? "text-cream/85 hover:text-cream" : "text-ink/75 hover:text-ink";
  const content = (
    <span className={`link-underline inline-flex items-center gap-1.5 text-[0.8125rem] font-semibold ${color} ${className}`}>
      {children}
      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" strokeWidth={1.75} />
    </span>
  );

  if (external || href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return <Link href={href}>{content}</Link>;
}
