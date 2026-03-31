"use client";

import { motion } from "motion/react";
import { developers } from "@/lib/data";

export const DevelopersIntro = () => {
  return (
    <section className="border-b border-border px-6 py-24 md:px-12">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-16 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-8 font-mono text-xxs normal-case tracking-[0.3em] text-orange">
            The Ecosystem
          </div>

          <h2 className="mb-6 font-heading text-[clamp(2rem,4vw,3rem)] font-black text-white">
            {developers.headline}
          </h2>

          <p className="font-sans text-[1rem] leading-[1.9] text-white/55">
            {developers.desc}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="mb-8 font-mono text-xxs normal-case tracking-[0.3em] text-orange">
            What You Get
          </div>

          <p className="font-sans text-[1rem] leading-[1.9] text-white/55">
            Gesture APIs, haptic libraries, device SDKs, and firmware tools —
            everything you need to build the next generation of human–machine
            interaction on the KNK platform.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
