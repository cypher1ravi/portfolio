"use client";

import { motion } from "framer-motion";
import { services } from "@/data/site";
import { SectionHeading, fadeUp, stagger } from "./Reveal";

const icons: Record<string, React.ReactNode> = {
  design: (
    <path d="M12 19l7-7 3 3-7 7-3-3zM18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5zM2 2l7.586 7.586M11 11a2 2 0 100-4 2 2 0 000 4z" />
  ),
  code: <path d="M16 18l6-6-6-6M8 6l-6 6 6 6M14 4l-4 16" />,
  app: <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 17h6M17 14v6" />,
};

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-28 md:py-36">
      <SectionHeading
        eyebrow="Services"
        title={
          <span id="services-title">
            What I can <span className="italic text-orange">do for you.</span>
          </span>
        }
      />

      <motion.ul
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid gap-6 md:grid-cols-3"
      >
        {services.map((s, i) => (
          <motion.li
            key={s.title}
            variants={fadeUp}
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            className="group relative overflow-hidden rounded-[2rem] border border-ink/10 bg-cream-2/60 p-8 md:p-10"
          >
            <div
              aria-hidden
              className="absolute inset-0 origin-bottom scale-y-0 bg-ink transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100"
            />
            <div className="relative">
              <div className="flex items-start justify-between">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange text-cream transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-110">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    {icons[s.icon]}
                  </svg>
                </span>
                <span className="font-display text-5xl font-semibold text-ink/10 transition-colors duration-500 group-hover:text-cream/15">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-10 font-display text-3xl font-semibold text-ink transition-colors duration-500 group-hover:text-cream">
                {s.title}
              </h3>
              <p className="mt-4 leading-relaxed text-muted transition-colors duration-500 group-hover:text-cream/75">{s.text}</p>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
