"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";
import { MotionConfig, motion, useScroll, useSpring } from "framer-motion";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.09,
      anchors: { offset: -72 },
    });
    return () => lenis.destroy();
  }, []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 });

  return (
    <MotionConfig reducedMotion="user" transition={{ ease: [0.22, 1, 0.36, 1] }}>
      <motion.div
        aria-hidden
        style={{ scaleX }}
        className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-orange"
      />
      {children}
    </MotionConfig>
  );
}
