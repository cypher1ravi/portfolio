"use client";

import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import { site } from "@/data/site";
import { Reveal } from "./Reveal";
import WhatsAppButton from "./WhatsAppButton";

const links = [
  { label: "Email", value: site.email, href: `mailto:${site.email}` },
  { label: "LinkedIn", value: "in/ravindrachaubey", href: site.socials.linkedin },
  { label: "GitHub", value: "cypher1ravi", href: site.socials.github },
  { label: "Location", value: site.location },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const field =
    "w-full rounded-2xl border border-cream/15 bg-cream/5 px-5 py-4 text-cream placeholder:text-cream/40 outline-none transition focus:border-orange focus:bg-cream/10";

  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-16 bg-ink py-28 text-cream md:py-36">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="mb-4 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-soft">
            <span className="h-px w-10 bg-orange-soft" />
            Contact
          </p>
        </Reveal>
        <h2 id="contact-title" className="font-display text-5xl font-semibold leading-[1] tracking-tight md:text-8xl">
          {["Let's", "build", "something"].map((w, i) => (
            <span key={w} className="inline-block overflow-hidden pb-2 align-top">
              <motion.span
                className="inline-block"
                initial={{ y: "110%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: i * 0.08 }}
              >
                {w}&nbsp;
              </motion.span>
            </span>
          ))}
          <span className="inline-block overflow-hidden pb-2 align-top">
            <motion.span
              className="inline-block italic text-orange"
              initial={{ y: "110%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.24 }}
            >
              together.
            </motion.span>
          </span>
        </h2>

        <div className="mt-16 grid gap-14 md:mt-24 md:grid-cols-[1fr_1.2fr] md:gap-20">
          <ul className="space-y-1">
            {links.map((l, i) => (
              <motion.li
                key={l.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                className="border-b border-cream/10"
              >
                  {l.href ? (
                    <a
                      href={l.href}
                      target={l.href.startsWith("http") ? "_blank" : undefined}
                      rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group flex items-center justify-between py-5"
                    >
                      <span>
                        <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-cream/50">{l.label}</span>
                        <span className="mt-1 block text-lg font-medium transition-colors group-hover:text-orange-soft">{l.value}</span>
                      </span>
                      <span className="text-xl text-cream/40 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-orange-soft">
                        ↗
                      </span>
                    </a>
                  ) : (
                    <div className="py-5">
                      <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-cream/50">{l.label}</span>
                      <span className="mt-1 block text-lg font-medium">{l.value}</span>
                    </div>
                  )}
              </motion.li>
            ))}
          </ul>

          <Reveal delay={0.15}>
            <form onSubmit={onSubmit} className="space-y-4" aria-label="Contact form">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="sr-only">Your name</span>
                  <input name="name" required autoComplete="name" placeholder="Your name" className={field} />
                </label>
                <label className="block">
                  <span className="sr-only">Your email</span>
                  <input name="email" type="email" required autoComplete="email" placeholder="Your email" className={field} />
                </label>
              </div>
              <label className="block">
                <span className="sr-only">Message</span>
                <textarea name="message" required rows={6} placeholder="Tell me about your project…" className={`${field} resize-none`} />
              </label>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-orange px-8 py-5 text-lg font-semibold text-cream transition-colors hover:bg-orange-soft sm:w-auto"
              >
                Send message
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </motion.button>
              <WhatsAppButton />
              </div>
              <p role="status" className="min-h-6 text-sm text-cream/60">
                {sent && "Your email app should open with the message ready. Thanks for reaching out!"}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
