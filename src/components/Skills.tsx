"use client";

import { motion } from "framer-motion";
import { site, skillGroups } from "@/data/site";
import { Reveal, SectionHeading } from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="scroll-mt-16 rounded-t-[3rem] bg-ink py-28 text-cream md:rounded-t-[5rem] md:py-36">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          dark
          eyebrow="Skills"
          title={
            <span id="skills-title">
              My <span className="italic text-orange-soft">toolkit.</span>
            </span>
          }
        />

        <div className="grid gap-14 md:grid-cols-[1fr_1.4fr] md:gap-20">
          <div className="space-y-6 text-lg leading-relaxed text-cream/75">
            <Reveal>
              <p>
                My core is the front end: HTML, CSS, JavaScript and React. I use Tailwind CSS and Bootstrap to keep
                interfaces consistent on every device and jQuery when a project calls for it.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                On the back end I build APIs with Node.js and Express and store data in MongoDB or MySQL. For high-traffic
                services I use Fastify, Redis, Google Pub/Sub and BigQuery, running them in Docker behind Traefik on
                bare-metal servers and monitoring them with Grafana.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <a
                href={site.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-2 inline-flex items-center gap-3 rounded-full bg-orange px-7 py-4 font-semibold text-cream transition hover:bg-cream hover:text-ink"
              >
                More on LinkedIn
                <span className="transition-transform duration-300 group-hover:translate-x-1">↗</span>
              </a>
            </Reveal>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {skillGroups.map((g, gi) => (
              <motion.div
                key={g.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: (gi % 2) * 0.08 }}
                className={`rounded-3xl border border-cream/10 bg-cream/[0.04] p-6 ${gi === 0 || gi === skillGroups.length - 1 ? "sm:col-span-2" : ""}`}
              >
                <h3 className="font-display text-xl font-semibold text-cream">{g.title}</h3>
                <ul className={`mt-5 grid gap-x-8 gap-y-5 ${gi === 0 || gi === skillGroups.length - 1 ? "sm:grid-cols-2" : ""}`}>
                  {g.skills.map((s, i) => (
                    <li key={s.name}>
                      <div className="mb-2 flex justify-between text-sm font-medium">
                        <span>{s.name}</span>
                        <span className="text-orange-soft">{s.level}%</span>
                      </div>
                      <div
                        className="h-2 overflow-hidden rounded-full bg-cream/10"
                        role="progressbar"
                        aria-label={s.name}
                        aria-valuenow={s.level}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        <motion.div
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: s.level / 100 }}
                          viewport={{ once: true, margin: "-40px" }}
                          transition={{ duration: 1.4, delay: 0.2 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                          className="h-full origin-left rounded-full bg-gradient-to-r from-orange to-orange-soft"
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
