import Link from "next/link";
import { Instagram, MessageCircle, ArrowUpRight } from "lucide-react";
import { nav, site, whatsappLink, whatsappMessages } from "@/content/site";
import { Wordmark } from "./Wordmark";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-ink/12 bg-cream pt-16">
      <div className="mx-auto max-w-[86rem] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Wordmark />
            <p className="mt-5 max-w-xs text-[0.875rem] leading-[1.75] text-ink/55">
              An aesthetic gift studio in {site.location.city} — Korean stationery, accessories,
              anti-tarnish jewellery and hampers, made to be given.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <a
                href={whatsappLink(whatsappMessages.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-4 py-2 text-[0.72rem] font-semibold text-ink transition-colors hover:border-ink hover:bg-ink hover:text-cream"
              >
                <MessageCircle className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden="true" />
                WhatsApp
              </a>
              <a
                href={site.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-4 py-2 text-[0.72rem] font-semibold text-ink transition-colors hover:border-ink hover:bg-ink hover:text-cream"
              >
                <Instagram className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden="true" />
                Instagram
              </a>
            </div>
          </div>

          <nav aria-label="Footer" className="lg:col-span-3">
            <p className="u-label text-[0.58rem] text-ink/40">Explore</p>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="link-underline text-[0.85rem] text-ink/70 transition-colors hover:text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-4">
            <p className="u-label text-[0.58rem] text-ink/40">Studio</p>
            <ul className="mt-4 space-y-3 text-[0.85rem] text-ink/70">
              <li>
                <a
                  href={whatsappLink(whatsappMessages.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline"
                >
                  {site.whatsapp.display}
                </a>
                <span className="mt-0.5 block text-[0.72rem] text-ink/35">Orders on WhatsApp</span>
              </li>
              <li>
                {site.location.display}
                <span className="mt-0.5 block text-[0.72rem] text-ink/35">{site.shipping}</span>
              </li>
              <li>
                <a
                  href={site.jewelleryLabel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline inline-flex items-center gap-1.5"
                >
                  {site.jewelleryLabel.name}
                  <ArrowUpRight className="h-3 w-3" strokeWidth={1.75} aria-hidden="true" />
                </a>
                <span className="mt-0.5 block text-[0.72rem] text-ink/35">
                  Anti-tarnish jewellery label
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-ink/12 py-6 text-[0.7rem] text-ink/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Aztheticlyf. All rights reserved.</p>
          <p className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>Wholesale enquiries welcome</span>
            <span aria-hidden="true" className="hidden h-1 w-1 rounded-full bg-ink/25 sm:block" />
            <span>Made in Chennai, for everywhere</span>
          </p>
        </div>
      </div>

      <div aria-hidden="true" className="pointer-events-none select-none px-5 sm:px-8 lg:px-12">
        <p className="-mb-[0.14em] font-display text-[clamp(3rem,13.2vw,11.5rem)] leading-[0.8] font-light tracking-[-0.05em] text-ink/[0.07]">
          Aztheticlyf
        </p>
      </div>
    </footer>
  );
}
