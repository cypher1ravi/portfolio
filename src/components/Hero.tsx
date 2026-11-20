"use client";

import WavingAvatar from "./WavingAvatar";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { site } from "@/data/site";

const EASE = [0.22, 1, 0.36, 1] as const;

function RotatingRole() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % site.roles.length), 2600);
    return () => clearInterval(t);
  }, []);
  return (
    <span className="relative block h-[1.625em] overflow-hidden leading-[1.625em]">
      <AnimatePresence mode="wait">
        <motion.span
          key={site.roles[i]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.55, ease: EASE }}
          className="inline-block whitespace-nowrap font-semibold text-orange"
        >
          {site.roles[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

const headline = ["Building", "web", "experiences", "that", "feel", "effortless."];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const blobScale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} id="home" aria-label="Introduction" className="relative flex items-center overflow-hidden pb-16 pt-28 md:min-h-svh md:pb-8 md:pt-24">
      {/* soft background shapes */}
      <motion.div
        aria-hidden
        style={{ scale: blobScale }}
        className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-orange/15 blur-3xl"
      />
      <div aria-hidden className="pointer-events-none absolute -left-32 top-1/2 h-80 w-80 rounded-full bg-cream-3/70 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-5 md:grid-cols-[1.25fr_1fr] md:gap-10">
        <motion.div style={{ y: textY, opacity: fade }}>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mb-4 font-display text-2xl font-medium text-ink-2 sm:text-3xl md:text-[clamp(1.5rem,4.2vh,2.25rem)]"
          >
            Hi, I&apos;m <span className="font-semibold text-orange">{site.name}</span>
          </motion.p>

          <h1 className="font-display text-[2.75rem] font-semibold leading-[1.02] tracking-tight text-ink sm:text-6xl md:text-[clamp(2.75rem,8.4vh,4.5rem)]">
            <span className="sr-only">{site.name}, {site.role}. </span>
            {headline.map((w, idx) => (
              <span key={idx} className="inline-block overflow-hidden pb-1 align-top">
                <motion.span
                  aria-hidden
                  className={`inline-block ${w === "effortless." ? "italic text-orange" : ""}`}
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.9, delay: 0.4 + idx * 0.07, ease: EASE }}
                >
                  {w}&nbsp;
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted md:mt-[clamp(1rem,3vh,1.75rem)]"
          >
            <RotatingRole />
            I design and build fast, responsive web apps with React, Node.js and a love for clean details.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.15 }}
            className="mt-8 flex flex-wrap items-center gap-4 md:mt-[clamp(1.25rem,4vh,2.5rem)]"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 font-semibold text-cream transition hover:bg-orange"
            >
              View my work
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border-2 border-ink px-7 py-[14px] font-semibold text-ink transition hover:border-orange hover:text-orange"
            >
              Contact me
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: EASE }}
          className="relative mx-auto hidden w-full max-w-sm md:block md:w-[min(100%,24rem,calc((100svh-12rem)*0.8))]"
        >
          <div aria-hidden className="absolute inset-0 translate-x-4 translate-y-4 rounded-t-full rounded-b-[2.5rem] bg-orange" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-full rounded-b-[2.5rem] bg-cream-2 ring-1 ring-ink/10">
            <motion.div style={{ y: imgY }} className="absolute inset-0">
              <WavingAvatar name={site.name} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
