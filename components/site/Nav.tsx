"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { nav, site, whatsappLink, whatsappMessages } from "@/content/site";
import { Wordmark } from "./Wordmark";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
          scrolled || open
            ? "border-b border-ink/10 bg-cream/85 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[4.25rem] max-w-[86rem] items-center justify-between px-5 sm:px-8 lg:h-20 lg:px-12">
          <div className="flex items-center gap-4">
            <Wordmark />
            <span className="hidden h-4 w-px bg-ink/15 lg:block" aria-hidden="true" />
            <span className="hidden text-[10px] tracking-[0.2em] text-ink/50 uppercase lg:block">
              {site.tagline}
            </span>
          </div>

          <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="link-underline text-[0.78rem] font-medium tracking-[0.02em] text-ink/70 transition-colors hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={whatsappLink(whatsappMessages.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="group hidden items-center gap-2 rounded-full border border-ink/20 px-5 py-2.5 text-[0.75rem] font-semibold tracking-[0.02em] text-ink transition-colors duration-500 hover:border-ink hover:bg-ink hover:text-cream sm:inline-flex"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lilac-deep opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-lilac-deep transition-colors group-hover:bg-lilac" />
              </span>
              WhatsApp
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden="true" />
            </a>

            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/20 text-ink transition-colors hover:bg-ink hover:text-cream lg:hidden"
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              <Menu className="h-4 w-4" strokeWidth={1.75} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile / tablet overlay menu */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className={`fixed inset-0 z-[60] bg-plum text-cream transition-opacity duration-500 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="flex h-[4.25rem] items-center justify-between px-5 sm:px-8">
            <Wordmark tone="cream" />
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cream/25 text-cream"
              aria-label="Close menu"
            >
              <X className="h-4 w-4" strokeWidth={1.75} />
            </button>
          </div>

          <nav aria-label="Mobile" className="flex flex-1 flex-col justify-center px-5 sm:px-8">
            <ul className="space-y-1">
              {nav.map((item, index) => (
                <li
                  key={item.href}
                  className="overflow-hidden border-b border-cream/10"
                  style={{
                    transform: open ? "translateY(0)" : "translateY(24px)",
                    opacity: open ? 1 : 0,
                    transition: `transform 700ms cubic-bezier(0.22,1,0.36,1) ${index * 55 + 100}ms, opacity 700ms ease ${index * 55 + 100}ms`,
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-baseline justify-between py-4"
                  >
                    <span className="font-display text-[2.1rem] leading-none font-light tracking-[-0.03em]">
                      {item.label}
                    </span>
                    <span className="text-[10px] tracking-[0.2em] text-cream/40">
                      0{index + 1}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col gap-4 text-sm text-cream/70">
              <a href={whatsappLink(whatsappMessages.general)} target="_blank" rel="noopener noreferrer" className="link-underline self-start">
                WhatsApp {site.whatsapp.display}
              </a>
              <a href={site.instagram.url} target="_blank" rel="noopener noreferrer" className="link-underline self-start">
                @{site.instagram.handle}
              </a>
              <span className="text-cream/45">
                {site.location.display} · {site.shipping}
              </span>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
