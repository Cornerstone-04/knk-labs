"use client";

import { AboutExpertiseRowProps } from "@/types";
import { motion } from "motion/react";

export const AboutExpertiseRow = ({
  index,
  title,
  description,
}: AboutExpertiseRowProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className="group grid grid-cols-[60px_1fr] items-baseline gap-4 border-b border-border py-6 transition-colors duration-200 hover:bg-bg/60 md:grid-cols-[80px_1fr_1fr]"
    >
      <span className="pt-0.5 font-mono text-xxs tracking-[0.2em] text-white/20">
        {String(index + 1).padStart(2, "0")}
      </span>

      <span className="font-heading text-[clamp(1.1rem,2.5vw,1.6rem)] font-bold uppercase leading-none text-white transition-colors duration-200 group-hover:text-orange">
        {title}
      </span>

      <span className="col-start-2 font-sans text-[0.82rem] leading-[1.75] text-white/40 md:col-start-3">
        {description}
      </span>
    </motion.div>
  );
};
