"use client";

import { motion } from "motion/react";
import { preorderDiscount } from "@/lib/pop-glove";

export function PopGlovePreorderHeader() {
  return (
    <div className="mb-12 border-b border-white/10 pb-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mb-2 font-mono text-xxs tracking-[0.2em] text-orange"
      >
        Limited Edition Drop
      </motion.div>

      <h2 className="mb-4 font-heading text-[clamp(2rem,6vw,3.5rem)] font-black normal-case leading-[0.95] text-white">
        Configure Your P.O.P
      </h2>

      <p className="max-w-2xl font-sans text-sm text-white/50">
        Choose your hand orientation and colourway. Pre-order early and lock in{" "}
        <span className="font-semibold text-orange">
          {preorderDiscount}% off
        </span>{" "}
        the full retail price. Limited to 8 full-finger editions + 1 fingerless
        edition.
      </p>
    </div>
  );
}
