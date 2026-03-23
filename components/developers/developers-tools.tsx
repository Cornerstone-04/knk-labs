"use client";

import { motion } from "motion/react";
import { developers } from "@/lib/data";

export const DevelopersTools = () => {
  return (
    <section className="border-b border-border bg-surface px-6 py-24 md:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4 font-mono text-xxs uppercase tracking-[0.3em] text-orange"
        >
          Resources
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16 font-heading text-[clamp(2rem,5vw,4rem)] font-black text-white"
        >
          Developer Tools
        </motion.h2>

        <div className="border-t border-border">
          {developers.tools.map((tool, i) => (
            <motion.div
              key={tool.label}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group grid cursor-pointer grid-cols-1 border-b border-border py-6 transition-colors duration-200 hover:bg-bg/50 md:grid-cols-[280px_1fr]"
            >
              <span className="mb-2 font-heading text-[1.1rem] font-bold text-white transition-colors duration-200 group-hover:text-orange md:mb-0">
                {tool.label}
              </span>

              <span className="font-sans text-[0.88rem] leading-relaxed text-white/50">
                {tool.desc}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
