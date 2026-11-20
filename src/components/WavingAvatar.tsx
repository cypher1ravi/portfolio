"use client";

import { motion, useReducedMotion } from "framer-motion";

const SLEEVE = "#5a3a28";
const SLEEVE_DARK = "#4a2f20";
const SKIN = "#ae7a52";
const SHADE = "#946240";

/**
 * Cartoon avatar (public/images/avatar.svg, DiceBear "avataaars") with a hand-drawn
 * arm that waves from the elbow at (262, 236), using an SVG animateTransform so the
 * pivot is exact. Skipped when the visitor prefers reduced motion.
 */
export default function WavingAvatar({ name }: { name: string }) {
  const reduceMotion = useReducedMotion();
  return (
    <div className="relative h-full w-full">
      <svg
        viewBox="-10 0 350 300"
        className="absolute inset-x-0 bottom-0 w-full"
        role="img"
        aria-label={`Cartoon avatar of ${name} waving hello`}
      >
        <image href="/images/avatar.svg" x="0" y="20" width="280" height="280" />

        {/* upper arm, fixed */}
        <path d="M206 262 Q236 258 262 236" stroke={SLEEVE} strokeWidth="42" strokeLinecap="round" fill="none" />

        {/* forearm + hand */}
        <g>
          {!reduceMotion && (
            <animateTransform
              attributeName="transform"
              type="rotate"
              dur="2.6s"
              begin="0.8s"
              repeatCount="indefinite"
              keyTimes="0;0.1;0.2;0.3;0.4;0.55;1"
              values="0 262 236;16 262 236;-10 262 236;16 262 236;-6 262 236;0 262 236;0 262 236"
              calcMode="spline"
              keySplines="0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0 0 1 1"
            />
          )}
          <path d="M262 236 L272 186" stroke={SLEEVE} strokeWidth="38" strokeLinecap="round" />
          <path d="M256 190 Q272 182 290 190" stroke={SLEEVE_DARK} strokeWidth="7" strokeLinecap="round" fill="none" />
          <g transform="translate(276 150) rotate(8)">
            <path
              d="M-17 -6 C-17 -30 -14 -44 -9 -44 C-4 -44 -3 -34 -3 -24 L-3 -46 C-3 -54 6 -54 6 -46 L6 -24 L6 -44 C6 -52 15 -52 15 -44 L15 -20 L15 -36 C15 -43 23 -43 23 -36 L23 2 C23 22 10 30 0 30 C-14 30 -22 20 -26 10 L-33 -6 C-36 -13 -28 -18 -23 -11 L-17 -2 Z"
              fill={SKIN}
            />
            <path d="M-3 -24 L-3 -8 M6 -24 L6 -8 M15 -20 L15 -6" stroke={SHADE} strokeWidth="1.6" strokeLinecap="round" />
          </g>
        </g>
      </svg>

      {/* speech bubble */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 0.4, rotate: -8 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 16, delay: 1.1 }}
        className="absolute left-[12%] top-[16%] origin-bottom-right"
      >
        <div className="rounded-2xl rounded-br-sm bg-ink px-4 py-2 font-display text-xl font-semibold text-cream shadow-lg md:px-5 md:py-2.5 md:text-2xl">
          Hi<span className="text-orange-soft">!</span>
        </div>
      </motion.div>
    </div>
  );
}
