/**
 * Single source of truth for the AZTHETICLYF website.
 *
 * Everything below is taken from the brand's public Instagram profile and posts
 * (bio, highlights and captions) as of November 2026. No prices, reviews,
 * founding dates or claims have been invented. When new products, collections or
 * campaign landing pages are added, edit this file (or add a sibling content file)
 * and compose new pages from the same components — no design work required.
 */

export const site = {
  name: "Aztheticlyf",
  wordmark: "AZTHETICLYF",
  tagline: "Aesthetic Gift Studio",
  description:
    "Korean stationery, dainty accessories and anti-tarnish jewellery, curated into gift hampers, return gifts and wholesale collections. Based in Chennai, shipping worldwide.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://aztheticlyf.com",
  instagram: {
    handle: "aztheticlyf",
    url: "https://www.instagram.com/aztheticlyf/",
    followers: "6.4k",
    posts: 295,
    // From the Instagram bio: "💜 Korean Stationery ~ Accessories ~ Gifts / 🫶 10k happy customers / 🎯 Wholesale ~ Retail ~ Reselling"
  },
  whatsapp: {
    // From the Instagram bio: +91 7871501939
    number: "917871501939",
    display: "+91 7871501939",
  },
  location: {
    city: "Chennai",
    region: "Tamil Nadu",
    country: "India",
    display: "Chennai, Tamil Nadu",
  },
  shipping: "Worldwide shipping",
  customers: "10,000+ happy customers",
  jewelleryLabel: {
    name: "Tara Luxe",
    handle: "tara.luxe.in",
    url: "https://www.instagram.com/tara.luxe.in/",
    note: "Anti-tarnish jewellery by our sister label",
  },
  /** Optional config — see README. Leave blank until connected. */
  email: "",
} as const;

export type PlateVariant = "hamper" | "stationery" | "jewellery" | "drape" | "bloom" | "ribbon" | "note";

export type Collection = {
  slug: string;
  index: string;
  name: string;
  short: string;
  description: string;
  details: string[];
  variant: PlateVariant;
  /** Shown as a small mono label on the artwork */
  artLabel: string;
  featured?: boolean;
};

/** Category names and content come from the brand's Instagram highlights, bio and captions. */
export const collections: Collection[] = [
  {
    slug: "gift-hampers",
    index: "01",
    name: "Curated Gift Hampers",
    short: "Built around a feeling, not a checklist.",
    description:
      "Birthday, anniversary, wedding and festive hampers assembled by hand — bath and bubbles edits, saree hampers, and the TARA hamper among our recent releases. Tell us who it is for and we will build the rest.",
    details: ["Gifting", "Weddings", "Festive"],
    variant: "hamper",
    artLabel: "Hampers",
    featured: true,
  },
  {
    slug: "korean-stationery",
    index: "02",
    name: "Korean Stationery",
    short: "The quiet pleasure of good paper.",
    description:
      "Notebooks, pens, stickers and desk pieces picked for how they feel in the hand. The category that started the studio, and still the one people come back for.",
    details: ["Retail & wholesale", "New drops regularly", "Great for resellers"],
    variant: "stationery",
    artLabel: "Stationery",
  },
  {
    slug: "accessories",
    index: "03",
    name: "Accessories",
    short: "Small things that finish the look.",
    description:
      "Hair accessories, charms and the dainty extras that make a gift feel complete. Chosen to sit beautifully beside the stationery and jewellery.",
    details: ["Everyday wear", "Gift-ready", "Bundled with hampers"],
    variant: "bloom",
    artLabel: "Accessories",
  },
  {
    slug: "anti-tarnish-jewellery",
    index: "04",
    name: "Anti-Tarnish Jewellery",
    short: "Kept for daily wear, not special occasions.",
    description:
      "Our anti-tarnish edit, also available through our sister label Tara Luxe — pieces designed to stay bright through everyday life.",
    details: ["Anti-tarnish finish", "Everyday pieces", "Retail & bulk"],
    variant: "jewellery",
    artLabel: "Tarnish-free",
  },
  {
    slug: "return-gifts",
    index: "05",
    name: "Return Gifts",
    short: "Thoughtful, in quantity.",
    description:
      "Return gifts for weddings, baby showers, housewarmings and corporate occasions — curated so every guest receives something they would actually keep.",
    details: ["Bulk friendly", "Custom quantities", "Packaging options"],
    variant: "drape",
    artLabel: "Return gifts",
  },
];

export type Feature = {
  title: string;
  kicker: string;
  body: string;
  variant: PlateVariant;
  tag: string;
  /** No prices are published by the brand, so every feature runs through WhatsApp. */
  enquire: string;
};

export const features: Feature[] = [
  {
    title: "The TARA Hamper",
    kicker: "New release",
    body:
      "Our latest hamper, launched alongside Tara Luxe. A gift that carries the whole studio in one box — stationery, accessories and anti-tarnish jewellery, wrapped as one.",
    variant: "hamper",
    tag: "Launch",
    enquire: "Hi Aztheticlyf! I'd like to know more about the TARA Hamper — availability, what's inside and pricing.",
  },
  {
    title: "Bath & Bubbles",
    kicker: "Best loved",
    body:
      "A slow-evening hamper for someone who deserves a pause. Softly scented, generously packed, and finished with a handwritten note if you would like one.",
    variant: "bloom",
    tag: "Gifting",
    enquire: "Hi Aztheticlyf! I'm interested in the Bath & Bubbles gift hamper. Could you share the details and pricing?",
  },
  {
    title: "The Saree Hamper",
    kicker: "Wedding season",
    body:
      "Built for the wedding circuit — a hamper that arrives as beautifully as the saree it accompanies. Adjustable to the occasion and the guest list.",
    variant: "drape",
    tag: "Weddings",
    enquire: "Hi Aztheticlyf! I'd like details on the Saree Hamper for an upcoming wedding. Could you help me plan quantities?",
  },
];

export const differentiators = [
  {
    index: "01",
    title: "Gifts, not bundles",
    body:
      "Every hamper is put together by hand, around one person and one occasion. Nothing is picked off a shelf and dropped into a box.",
  },
  {
    index: "02",
    title: "10,000+ happy customers",
    body:
      "Ten thousand gifts later, the studio still runs on WhatsApp conversations and repeat customers — a number we are happy to be measured by.",
  },
  {
    index: "03",
    title: "Chennai to anywhere",
    body:
      "Based in Chennai, Tamil Nadu and shipping worldwide — so a gift can reach the person who needs it, wherever they happen to be.",
  },
  {
    index: "04",
    title: "Wholesale, retail, reselling",
    body:
      "One gift or a full shelf. The same studio supplies retailers and resellers with Korean stationery, accessories and anti-tarnish jewellery.",
  },
];

export const gallery = [
  { caption: "Launching the TARA hamper", variant: "hamper" as PlateVariant, tag: "Hampers", href: "https://www.instagram.com/p/DfoVQm0GsR5/" },
  { caption: "Bath & bubbles, packed", variant: "bloom" as PlateVariant, tag: "Hampers", href: "https://www.instagram.com/p/DfZI2KRhV_K" },
  { caption: "Anti-tarnish, every day", variant: "jewellery" as PlateVariant, tag: "Jewellery", href: "https://www.instagram.com/aztheticlyf/" },
  { caption: "Saree hamper season", variant: "drape" as PlateVariant, tag: "Weddings", href: "https://www.instagram.com/aztheticlyf/" },
  { caption: "Korean stationery drop", variant: "stationery" as PlateVariant, tag: "Stationery", href: "https://www.instagram.com/aztheticlyf/" },
  { caption: "Return gift edits", variant: "note" as PlateVariant, tag: "Return gifts", href: "https://www.instagram.com/aztheticlyf/" },
  { caption: "Ribbon, wrap, seal", variant: "ribbon" as PlateVariant, tag: "Packing", href: "https://www.instagram.com/aztheticlyf/" },
];

export const wholesaleProcess = [
  {
    step: "01",
    title: "Message the studio",
    body: "Tell us what you sell and what you are looking for — stationery, accessories, jewellery or a mix.",
  },
  {
    step: "02",
    title: "See the collection",
    body: "We share the current range and bulk pricing on WhatsApp, so you can plan your order against real availability.",
  },
  {
    step: "03",
    title: "Confirm & dispatch",
    body: "Finalise quantities and packaging, and we take it from there. Reselling and retail enquiries both welcome.",
  },
];

export const nav = [
  { label: "The Studio", href: "#studio" },
  { label: "Collections", href: "#collections" },
  { label: "Featured", href: "#featured" },
  { label: "Wholesale", href: "#wholesale" },
  { label: "Instagram", href: "#instagram" },
  { label: "Contact", href: "#contact" },
];

export const whatsappMessages = {
  general:
    "Hi Aztheticlyf! I found your website and I'd love to know more about your gift hampers and collections.",
  hamper:
    "Hi Aztheticlyf! I'd like to put together a gift hamper. Here's what I have in mind:",
  wholesale:
    "Hi Aztheticlyf! I'm interested in wholesale / reselling. Could you share the current collection and bulk pricing?",
  returnGifts:
    "Hi Aztheticlyf! I'm looking for return gifts in bulk. Could you help me with options and pricing?",
};

export function whatsappLink(message: string = whatsappMessages.general) {
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(message)}`;
}

export const enquiryInterests = [
  "Gift hamper",
  "Korean stationery",
  "Accessories",
  "Anti-tarnish jewellery",
  "Return gifts (bulk)",
  "Wholesale / reselling",
  "Something else",
];
