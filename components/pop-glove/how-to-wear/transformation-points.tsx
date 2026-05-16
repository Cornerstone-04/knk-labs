"use client";

import { motion } from "motion/react";
import { howToWear } from "@/lib/pop-glove";

export function TransformationPoints() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
      className="space-y-12 md:space-y-16"
    >
      <div className="mb-12 min-w-0 md:mb-16">
        <p className="mb-4 font-mono text-xxs tracking-[0.3em] text-orange normal-case">
          Why This Matters
        </p>

        <h3 className="wrap-break-word font-heading text-[clamp(2rem,7vw,3.5rem)] font-black leading-[0.98] tracking-[-0.02em] text-white normal-case">
          The Transformation
        </h3>
      </div>

      <div className="grid grid-cols-1 gap-6 md:gap-12 lg:grid-cols-2 lg:gap-20">
        {howToWear.experiencePoints.map((point, index) => (
          <motion.div
            key={point.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            className="min-w-0 border-l border-orange/30 pl-5 py-2.5"
          >
            <h4 className="mb-4 wrap-break-word font-heading text-[1.15rem] font-bold tracking-[-0.01em] text-white">
              {point.title}
            </h4>

            <p className="wrap-break-word font-sans text-[0.95rem] leading-[1.8] text-white/60">
              {point.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
