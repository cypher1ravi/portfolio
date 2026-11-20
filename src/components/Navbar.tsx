"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { nav, site } from "@/data/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    ["home", ...nav.map((n) => n.id)].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4"
    >
      <nav
        aria-label="Primary"
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-3 transition-all duration-500 ${
          scrolled ? "bg-cream/80 shadow-[0_8px_30px_-12px_rgba(42,40,38,0.25)] backdrop-blur-md ring-1 ring-ink/5" : ""
        }`}
      >
        <a href="#home" className="font-display text-2xl font-semibold tracking-tight" aria-label={`${site.name}, back to top`}>
          Ravindra<span className="text-orange">.</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active === item.id ? "text-cream" : "text-ink-2 hover:text-orange"
                }`}
              >
                {active === item.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-ink"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={site.resume}
          download
          className="hidden rounded-full bg-orange px-5 py-2.5 text-sm font-semibold text-cream transition hover:bg-ink md:inline-block"
        >
          Resume
        </a>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full bg-ink md:hidden"
        >
          <span className={`h-0.5 w-5 bg-cream transition ${open ? "translate-y-1 rotate-45" : ""}`} />
          <span className={`h-0.5 w-5 bg-cream transition ${open ? "-translate-y-1 -rotate-45" : ""}`} />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 40px) 40px)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-ink px-8 md:hidden"
          >
            <ul className="space-y-2">
              {nav.map((item, i) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + i * 0.06 }}
                >
                  <a
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    className="font-display text-5xl font-semibold text-cream transition hover:text-orange"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <a href={site.resume} download className="mt-10 inline-block w-fit rounded-full bg-orange px-6 py-3 font-semibold text-cream">
              Download resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
