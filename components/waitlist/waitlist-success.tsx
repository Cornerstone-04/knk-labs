"use client";

import { motion } from "motion/react";

export const WaitlistSuccess = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="py-16 text-center"
    >
      <div className="mb-6 text-[3rem]">✦</div>

      <h2 className="mb-4 font-heading text-[2.5rem] font-black uppercase text-white">
        You're on the list.
      </h2>

      <p className="font-sans text-[0.85rem] leading-[1.8] text-white/40">
        We&apos;ll be in touch as soon as your spot is ready.
        <br />
        Stay sharp.
      </p>
    </motion.div>
  );
};
