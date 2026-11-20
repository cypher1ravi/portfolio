"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { Reveal, SectionHeading } from "./Reveal";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: 1800, bounce: 0 });

  useEffect(() => {
    if (inView) mv.set(to);
  }, [inView, mv, to]);

  useEffect(
    () =>
      spring.on("change", (v) => {
        if (ref.current) ref.current.textContent = `${Math.round(v)}${suffix}`;
      }),
    [spring, suffix],
  );

  return (
    <span ref={ref}>
      {to}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 2023, label: "Master's in Computer Science", raw: true },
  { value: 20, suffix: "M+", label: "Ad requests served per day" },
  { value: 11, suffix: "+", label: "Technologies in my toolkit" },
];

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-28 md:py-36">
      <SectionHeading
        eyebrow="About me"
        title={
          <span id="about-title">
            Every line of code <span className="italic text-orange">tells a story.</span>
          </span>
        }
      />

      <div className="grid gap-12 md:grid-cols-[1.3fr_1fr] md:gap-20">
        <div className="space-y-6 text-lg leading-relaxed text-ink-2">
          <Reveal>
            <p>
              I&apos;m Ravindra, a web developer driven by creativity and a love for technology. I hold a{" "}
              <strong className="font-semibold text-ink">Master&apos;s in Computer Science (2023)</strong> and a
              Bachelor&apos;s degree (2021), and I turn ideas into dynamic, responsive products for the web.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p>
              I care about responsive design, smooth interactions and modern, clean interfaces. Today I work across the
              stack, from React front ends to Node.js and Express APIs backed by MongoDB or MySQL.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p>
              Away from the keyboard you&apos;ll find me on the cricket field. I enjoy the strategy as much as the
              game itself.
            </p>
          </Reveal>
        </div>

        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          className="grid gap-4"
        >
          {stats.map((s) => (
            <motion.li
              key={s.label}
              variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
              whileHover={{ x: -6 }}
              className="group flex items-center justify-between gap-6 rounded-3xl border border-ink/10 bg-cream-2/60 px-7 py-6 transition-colors hover:border-orange/40 hover:bg-cream-2"
            >
              <span className="font-display text-5xl font-semibold text-ink transition-colors group-hover:text-orange">
                {s.raw ? s.value : <Counter to={s.value} suffix={s.suffix} />}
              </span>
              <span className="max-w-[10rem] text-right text-sm font-medium text-muted">{s.label}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
