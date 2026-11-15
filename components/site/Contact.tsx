"use client";

import { useId, useState } from "react";
import { ArrowUpRight, Instagram, MapPin, MessageCircle, Phone, Globe, Send } from "lucide-react";
import { enquiryInterests, site, whatsappLink, whatsappMessages } from "@/content/site";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

type Status = "idle" | "sending" | "whatsapp" | "sent" | "error";
type Errors = Partial<Record<"name" | "reach" | "interest" | "message", string>>;

const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

export function Contact() {
  const uid = useId();
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [values, setValues] = useState({
    name: "",
    reach: "",
    interest: "",
    message: "",
  });

  const field = (key: keyof typeof values) => ({
    id: `${uid}-${key}`,
    name: key,
    value: values[key],
    "aria-invalid": errors[key] ? true : undefined,
    "aria-describedby": errors[key] ? `${uid}-${key}-error` : undefined,
    onChange: (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
    ) => {
      setValues((current) => ({ ...current, [key]: event.target.value }));
      setErrors((current) => ({ ...current, [key]: undefined }));
    },
  });

  function validate() {
    const next: Errors = {};
    if (values.name.trim().length < 2) next.name = "Please tell us your name.";
    if (values.reach.trim().length < 5)
      next.reach = "Add a phone number or email so we can reply.";
    if (!values.interest) next.interest = "Choose what your enquiry is about.";
    if (values.message.trim().length < 8) next.message = "A sentence or two is plenty.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function composeMessage() {
    return [
      `Hi Aztheticlyf! I'd like to enquire about: ${values.interest}.`,
      "",
      values.message.trim(),
      "",
      `— ${values.name.trim()}`,
      `Reach me at: ${values.reach.trim()}`,
    ].join("\n");
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validate()) return;

    if (!endpoint) {
      // No form backend connected yet: hand the enquiry to WhatsApp, prefilled.
      setStatus("whatsapp");
      window.open(whatsappLink(composeMessage()), "_blank", "noopener,noreferrer");
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...values, source: "aztheticlyf.com" }),
      });
      if (!response.ok) throw new Error("Request failed");
      setStatus("sent");
      setValues({ name: "", reach: "", interest: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  const contacts = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: site.whatsapp.display,
      href: whatsappLink(whatsappMessages.hamper),
      hint: "Fastest — usually the studio replies here",
    },
    {
      icon: Phone,
      label: "Call",
      value: site.whatsapp.display,
      href: `tel:+${site.whatsapp.number}`,
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: `@${site.instagram.handle}`,
      href: site.instagram.url,
    },
    {
      icon: MapPin,
      label: "Studio",
      value: site.location.display,
      hint: "India",
    },
    {
      icon: Globe,
      label: "Shipping",
      value: "Worldwide",
    },
  ];

  return (
    <section id="contact" className="relative overflow-hidden bg-ink py-24 text-cream lg:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-32 h-[34rem] w-[34rem] rounded-full bg-lilac/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-[86rem] px-5 sm:px-8 lg:px-12">
        <SectionLabel index="07" title="Contact" meta="Orders & enquiries" tone="cream" />

        <div className="mt-12 grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <h2 className="u-display max-w-[13ch] text-[clamp(2.3rem,4.6vw,3.8rem)] text-cream">
                Tell us who it&rsquo;s <em className="u-serif-italic text-lilac">for.</em>
              </h2>
            </Reveal>
            <Reveal delay={90}>
              <p className="mt-6 max-w-sm text-[0.925rem] leading-[1.8] text-cream/60">
                A birthday, a wedding, a shelf that needs stocking — tell the studio the occasion
                and we will take it from there. WhatsApp is where every order starts.
              </p>
            </Reveal>

            <div className="mt-10">
              {contacts.map((contact, index) => {
                const Icon = contact.icon;
                const content = (
                  <>
                    <span className="flex items-center gap-4">
                      <Icon className="h-4 w-4 shrink-0 text-lilac" strokeWidth={1.6} aria-hidden="true" />
                      <span>
                        <span className="block text-[0.6rem] tracking-[0.16em] text-cream/40 uppercase">
                          {contact.label}
                        </span>
                        <span className="mt-1 block text-[0.9rem] text-cream/85">{contact.value}</span>
                        {contact.hint ? (
                          <span className="mt-1 block text-[0.7rem] text-cream/35">{contact.hint}</span>
                        ) : null}
                      </span>
                    </span>
                    {contact.href ? (
                      <ArrowUpRight
                        className="h-4 w-4 shrink-0 text-cream/30 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cream"
                        strokeWidth={1.6}
                        aria-hidden="true"
                      />
                    ) : null}
                  </>
                );

                return (
                  <Reveal key={contact.label} delay={index * 50}>
                    {contact.href ? (
                      <a
                        href={contact.href}
                        target={contact.href.startsWith("http") ? "_blank" : undefined}
                        rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="group flex items-center justify-between gap-4 border-t border-cream/12 py-4 transition-colors hover:border-cream/30"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="flex items-center justify-between gap-4 border-t border-cream/12 py-4">
                        {content}
                      </div>
                    )}
                  </Reveal>
                );
              })}
            </div>
          </div>

          <Reveal delay={80} className="lg:col-span-6 lg:col-start-7">
            <div className="bg-cream p-6 text-ink shadow-[0_40px_80px_-40px_rgba(0,0,0,0.7)] sm:p-9">
              <div className="flex items-baseline justify-between gap-4 border-b border-ink/12 pb-5">
                <h3 className="font-display text-[1.6rem] leading-none font-normal tracking-[-0.02em]">
                  Send an enquiry
                </h3>
                <span className="text-[0.58rem] tracking-[0.16em] text-ink/40 uppercase">
                  Step 01 / 01
                </span>
              </div>

              <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-6">
                <div>
                  <label htmlFor={`${uid}-name`} className="u-label text-[0.58rem] text-ink/45">
                    Your name
                  </label>
                  <input
                    {...field("name")}
                    type="text"
                    autoComplete="name"
                    placeholder="Ananya"
                    className="field"
                    required
                  />
                  {errors.name ? (
                    <p id={`${uid}-name-error`} className="mt-1.5 text-[0.72rem] text-[#a33a3a]">
                      {errors.name}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor={`${uid}-reach`} className="u-label text-[0.58rem] text-ink/45">
                    Phone or email
                  </label>
                  <input
                    {...field("reach")}
                    type="text"
                    autoComplete="tel"
                    placeholder="+91 00000 00000"
                    className="field"
                    required
                  />
                  {errors.reach ? (
                    <p id={`${uid}-reach-error`} className="mt-1.5 text-[0.72rem] text-[#a33a3a]">
                      {errors.reach}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor={`${uid}-interest`} className="u-label text-[0.58rem] text-ink/45">
                    I&rsquo;m enquiring about
                  </label>
                  <select {...field("interest")} className="field cursor-pointer" required>
                    <option value="">Select an option</option>
                    {enquiryInterests.map((interest) => (
                      <option key={interest} value={interest}>
                        {interest}
                      </option>
                    ))}
                  </select>
                  {errors.interest ? (
                    <p id={`${uid}-interest-error`} className="mt-1.5 text-[0.72rem] text-[#a33a3a]">
                      {errors.interest}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor={`${uid}-message`} className="u-label text-[0.58rem] text-ink/45">
                    The occasion
                  </label>
                  <textarea
                    {...field("message")}
                    rows={3}
                    placeholder="A 25th birthday, delivered in Chennai on Saturday…"
                    className="field resize-none"
                    required
                  />
                  {errors.message ? (
                    <p id={`${uid}-message-error`} className="mt-1.5 text-[0.72rem] text-[#a33a3a]">
                      {errors.message}
                    </p>
                  ) : null}
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group/btn inline-flex w-full items-center justify-between gap-3 rounded-full bg-ink px-6 py-4 text-[0.82rem] font-semibold text-cream transition-colors duration-500 hover:bg-plum disabled:cursor-wait disabled:opacity-70"
                >
                  <span>{status === "sending" ? "Sending…" : "Send enquiry"}</span>
                  <Send
                    className="h-4 w-4 transition-transform duration-500 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                </button>

                <div aria-live="polite" className="min-h-[1.25rem]">
                  {status === "whatsapp" ? (
                    <p className="text-[0.75rem] leading-relaxed text-ink/60">
                      Opening WhatsApp with your enquiry ready to send. If nothing opened,{" "}
                      <a
                        href={whatsappLink(composeMessage())}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-underline font-semibold text-plum"
                      >
                        tap here
                      </a>
                      .
                    </p>
                  ) : null}
                  {status === "sent" ? (
                    <p className="text-[0.75rem] leading-relaxed text-ink/60">
                      Thank you — your enquiry is with the studio. We will reply to{" "}
                      {values.reach || "your number"} shortly.
                    </p>
                  ) : null}
                  {status === "error" ? (
                    <p className="text-[0.75rem] leading-relaxed text-[#a33a3a]">
                      The form could not reach the studio just now. Please message us on WhatsApp
                      instead — the button in the header works.
                    </p>
                  ) : null}
                  {status === "idle" ? (
                    <p className="text-[0.7rem] leading-relaxed text-ink/40">
                      Enquiries open in WhatsApp with your message written out. Nothing is stored
                      on this website.
                    </p>
                  ) : null}
                </div>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
