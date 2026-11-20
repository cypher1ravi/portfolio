"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { experience } from "@/data/site";
import { SectionHeading } from "./Reveal";

export default function Experience() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 25 });

  return (
    <section id="experience" aria-labelledby="exp-title" className="scroll-mt-24 bg-cream-2/50 py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Experience"
          title={
            <span id="exp-title">
              Where I&apos;ve <span className="italic text-orange">worked.</span>
            </span>
          }
        />

        <ol ref={ref} className="relative ml-3 md:ml-0">
          <div aria-hidden className="absolute left-0 top-2 h-full w-px bg-ink/15 md:left-[13.5rem]" />
          <motion.div
            aria-hidden
            style={{ scaleY }}
            className="absolute left-0 top-2 h-full w-px origin-top bg-orange md:left-[13.5rem]"
          />

          {experience.map((job) => (
            <motion.li
              key={job.company}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative grid gap-3 pb-16 pl-10 last:pb-0 md:grid-cols-[13.5rem_1fr] md:gap-0 md:pl-0"
            >
              <motion.span
                aria-hidden
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ type: "spring", stiffness: 300, damping: 18, delay: 0.2 }}
                className="absolute left-0 top-1.5 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-cream bg-orange ring-1 ring-orange md:left-[13.5rem]"
              />
              <div className="md:pr-10 md:text-right">
                <p className="text-sm font-semibold uppercase tracking-wider text-orange">{job.period}</p>
                <p className="mt-1 text-sm text-muted">{job.location}</p>
              </div>
              <div className="md:pl-12">
                <h3 className="font-display text-2xl font-semibold text-ink md:text-3xl">{job.role}</h3>
                <p className="mt-1 font-semibold text-ink-2">{job.company}</p>
                <ul className="mt-5 space-y-3">
                  {job.points.map((p) => (
                    <li key={p} className="flex gap-3 text-ink-2">
                      <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
