"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Reveal({
  children,
  delay = 0,
  y = 32,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export function SectionHeading({
  eyebrow,
  title,
  dark = false,
}: {
  eyebrow: string;
  title: ReactNode;
  dark?: boolean;
}) {
  return (
    <div className="mb-14 md:mb-20">
      <Reveal>
        <p className="mb-4 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange">
          <span className="h-px w-10 bg-orange" />
          {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          className={`font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl ${
            dark ? "text-cream" : "text-ink"
          }`}
        >
          {title}
        </h2>
      </Reveal>
    </div>
  );
}
