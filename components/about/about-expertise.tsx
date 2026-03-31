"use client";

import { motion } from "motion/react";
import { about } from "@/lib/data";
import { AboutExpertiseRow } from "./about-expertise-row";

export const AboutExpertise = () => {
  return (
    <section className="border-b border-border bg-surface px-6 py-24 md:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4 font-mono text-xxs normal-case tracking-[0.3em] text-orange"
        >
          What We Do
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16 font-heading text-[clamp(2rem,5vw,4rem)] font-black text-white"
        >
          Our Expertise
        </motion.h2>

        <div className="border-t border-border">
          {about.expertise.map((item, index) => (
            <AboutExpertiseRow
              key={item.title}
              index={index}
              title={item.title}
              description={item.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
