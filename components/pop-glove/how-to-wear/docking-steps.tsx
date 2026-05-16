"use client";

import { motion } from "motion/react";
import { howToWear } from "@/lib/pop-glove";

export function DockingSteps() {
  return (
    <div className="py-12 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="mb-12 min-w-0 md:mb-16"
      >
        <p className="mb-4 font-mono text-xxs tracking-[0.3em] text-orange normal-case">
          The Experience
        </p>

        <h3 className="wrap-break-word font-heading text-[clamp(2rem,7vw,3.5rem)] font-black leading-[0.98] tracking-[-0.02em] text-white normal-case">
          Dock. Lock. Drive.
        </h3>
      </motion.div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        {howToWear.dockingSteps.map((step, index) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            className="group min-w-0 overflow-hidden border border-border bg-surface/50 p-5 transition-all ease-linear hover:border-white/20 hover:bg-surface md:p-6 lg:p-8"
          >
            <div className="mb-6 flex min-w-0 items-baseline justify-between">
              <span className="wrap-break-word font-heading text-[clamp(2.5rem,14vw,3.5rem)] font-black tracking-[-0.02em] text-orange/30 transition-all ease-linear group-hover:text-orange md:text-[clamp(2.5rem,8vw,3.5rem)]">
                {step.number}
              </span>
            </div>

            <h4 className="mb-3 wrap-break-word font-heading text-[1.1rem] font-bold tracking-[-0.01em] text-white">
              {step.title}
            </h4>

            <p className="wrap-break-word font-sans text-[0.9rem] leading-[1.6] text-white/50">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
