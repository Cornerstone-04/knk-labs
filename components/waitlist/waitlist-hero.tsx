"use client";

import { motion } from "motion/react";
import { waitlist } from "@/lib/data";

export const WaitlistHero = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-4 font-mono text-xxs uppercase tracking-[0.3em] text-orange"
      >
        Limited Availability
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="mb-4 font-heading text-[clamp(3rem,9vw,6rem)] font-black uppercase leading-[0.9] text-white"
      >
        Be First.
        <br />
        <span className="text-orange">Be Ahead.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-4 font-sans text-[0.9rem] leading-[1.8] text-white/50"
      >
        {waitlist.subheadline}
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mb-12 font-sans text-[0.85rem] leading-[1.8] text-white/30"
      >
        {waitlist.note}
      </motion.p>
    </>
  );
};
