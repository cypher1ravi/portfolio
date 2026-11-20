"use client";

import { motion } from "framer-motion";

// Number is stored reversed and split so it never appears as a plain phone number
// in the HTML/JS (keeps simple scraper bots away). It is assembled only on click.
const PARTS = ["439", "629", "615", "819"];
const MESSAGE = "Hi Ravindra, I saw your portfolio and would like to connect.";

function openWhatsApp() {
  const number = PARTS.join("").split("").reverse().join("");
  window.open(`https://wa.me/${number}?text=${encodeURIComponent(MESSAGE)}`, "_blank", "noopener,noreferrer");
}

/** Secondary button for the dark contact section, styled to match the site theme. */
export default function WhatsAppButton() {
  return (
    <motion.button
      type="button"
      onClick={openWhatsApp}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="group inline-flex w-full items-center justify-center gap-3 rounded-full border-2 border-cream/25 px-8 py-[18px] text-lg font-semibold text-cream transition-colors hover:border-orange-soft hover:text-orange-soft sm:w-auto"
    >
      <svg viewBox="0 0 32 32" width="22" height="22" fill="currentColor" aria-hidden>
        <path d="M16.04 3C9.4 3 4 8.33 4 14.9c0 2.1.56 4.15 1.62 5.95L4 29l8.37-1.6a12.2 12.2 0 0 0 3.67.56C22.68 27.960 28 22.63 28 16.06 28 9.48 22.68 3 16.04 3zm0 22.75c-1.2 0-2.38-.2-3.5-.6l-.25-.09-4.97.95.97-4.8-.16-.27a9.66 9.66 0 0 1-1.5-5.14c0-5.37 4.4-9.740 9.8-9.740 5.4 0 9.6 4.84 9.6 10.2 0 5.38-4.4 9.5-9.99 9.5zm5.42-7.28c-.3-.15-1.75-.86-2.020-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.46a8.9 8.9 0 0 1-1.65-2.04c-.17-.3-.02-.46.13-.6.13-.14.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.2-.24-.57-.48-.5-.67-.5h-.57c-.2 0-.52.08-.79.37-.27.3-1.04 1.01-1.04 2.47 0 1.45 1.07 2.86 1.22 3.06.15.2 2.1 3.2 5.08 4.48.71.3 1.27.49 1.7.63.72.23 1.37.2 1.88.12.57-.08 1.75-.71 2-1.4.25-.69.25-1.28.17-1.4-.07-.12-.27-.2-.57-.35z" />
      </svg>
      Chat on WhatsApp
    </motion.button>
  );
}
