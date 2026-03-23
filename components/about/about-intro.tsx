"use client";

import { motion } from "motion/react";
import { about } from "@/lib/data";

export const AboutIntro = () => {
  return (
    <section className="border-b border-border px-6 py-24 md:px-12">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-16 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-8 font-mono text-xxs uppercase tracking-[0.3em] text-white/25">
            Who We Are
          </div>

          <p className="font-sans text-[1rem] leading-[1.9] text-white/55">
            {about.desc}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="mb-8 font-mono text-xxs uppercase tracking-[0.3em] text-white/25">
            Our Mission
          </div>

          <p className="mb-6 font-sans text-[1rem] leading-[1.9] text-white/55">
            {about.mission}
          </p>

          <p className="font-sans text-[1rem] leading-[1.9] text-white/55">
            We build technology that becomes a natural extension of the hand.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
