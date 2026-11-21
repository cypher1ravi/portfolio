"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { projects, site, type Project } from "@/data/site";
import { SectionHeading } from "./Reveal";

/** "https://folify-gen.vercel.app/" -> "folify-gen.vercel.app" */
const displayUrl = (url: string) => url.replace(/^https?:\/\//, "").replace(/\/?(#\/?)?$/, "");

const companyProjects = projects.filter((p) => p.company);
const personalProjects = projects.filter((p) => !p.company);

function Row({ p, n }: { p: Project; n: number }) {
  const body: ReactNode = (
    <>
      {/* hover fill */}
      <span
        aria-hidden
        className="absolute inset-0 origin-bottom scale-y-0 rounded-2xl bg-cream-2 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100"
      />

      <span className="relative font-display text-xl font-semibold text-ink/30 transition-colors group-hover:text-orange md:text-2xl">
        {String(n).padStart(2, "0")}
      </span>

      <div className="relative">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange">{p.tag}</p>
        <h3 className="mt-1 font-display text-2xl font-semibold text-ink md:text-3xl">{p.title}</h3>
        {p.metric && (
          <p className="mt-3 inline-flex rounded-full bg-ink px-3 py-1 text-xs font-semibold text-cream">{p.metric}</p>
        )}
      </div>

      <div className="relative col-span-3 col-start-1 md:col-span-1 md:col-start-auto">
        <p className="text-muted">{p.text}</p>
        {p.stack && (
          <ul className="mt-3 flex flex-wrap gap-2" aria-label="Tech stack">
            {p.stack.map((s) => (
              <li key={s} className="rounded-full border border-ink/15 px-3 py-1 text-xs font-medium text-ink-2">
                {s}
              </li>
            ))}
          </ul>
        )}
        {p.live && (
          <p className="mt-3 break-all text-sm font-medium text-ink-2 underline decoration-ink/20 underline-offset-4 transition-colors group-hover:text-orange group-hover:decoration-orange">
            {displayUrl(p.live)}
          </p>
        )}
      </div>

      {p.live ? (
        <span
          aria-hidden
          className="relative col-start-3 row-start-1 flex h-12 w-12 items-center justify-center rounded-full border border-ink/15 text-lg text-ink transition-all duration-300 group-hover:rotate-45 group-hover:border-orange group-hover:bg-orange group-hover:text-cream md:col-start-auto md:row-start-auto"
        >
          ↗
        </span>
      ) : (
        <span className="relative col-start-3 row-start-1 hidden text-xs font-medium text-muted md:col-start-auto md:row-start-auto md:block">
          Private
        </span>
      )}
    </>
  );

  const cls =
    "group relative grid grid-cols-[auto_1fr_auto] items-start gap-x-5 gap-y-2 px-2 py-7 md:grid-cols-[3rem_1.1fr_1.4fr_3rem] md:items-center md:gap-x-8 md:px-4 md:py-8";

  return (
    <motion.li
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: 0.06 }}
      className="border-b border-ink/15"
    >
      {p.live ? (
        <a href={p.live} target="_blank" rel="noopener noreferrer" className={cls}>
          {body}
        </a>
      ) : (
        <div className={cls}>{body}</div>
      )}
    </motion.li>
  );
}

function Group({ label, items, start }: { label: string; items: Project[]; start: number }) {
  if (!items.length) return null;
  return (
    <div className="mt-12 first:mt-0">
      <h3 className="mb-4 text-sm font-semibold text-ink-2">{label}</h3>
      <ul className="border-t border-ink/15">
        {items.map((p, i) => (
          <Row key={p.title} p={p} n={start + i} />
        ))}
      </ul>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="scroll-mt-16 bg-ink">
      <div className="rounded-[3rem] bg-cream py-28 md:rounded-[5rem] md:py-36">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Selected work"
              title={
                <span id="projects-title">
                  Things I&apos;ve <span className="italic text-orange">built.</span>
                </span>
              }
            />
            <a
              href={site.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-14 inline-flex items-center gap-2 font-semibold text-ink underline decoration-orange decoration-2 underline-offset-8 transition hover:text-orange md:mb-20"
            >
              More on GitHub ↗
            </a>
          </div>

          <Group label="At Adsolut Media" items={companyProjects} start={1} />
          <Group label="Personal projects" items={personalProjects} start={companyProjects.length + 1} />
        </div>
      </div>
    </section>
  );
}
