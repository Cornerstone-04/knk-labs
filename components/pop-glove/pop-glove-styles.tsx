"use client";

import { motion } from "motion/react";
import { gloveStyles } from "@/lib/pop-glove";

export function PopGloveStyles() {
  return (
    <section className="border-b border-border bg-surface px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="mb-4 font-mono text-xxs tracking-[0.3em] text-orange normal-case">
            Available Styles
          </p>

          <h2 className="font-heading text-[clamp(2rem,5vw,3.5rem)] font-black leading-tight tracking-[-0.02em] text-white normal-case">
            Choose Your Edition
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {gloveStyles.map((style, index) => (
            <motion.article
              key={style.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group border border-border bg-bg p-10 transition-all duration-300 hover:border-orange/40 hover:bg-bg/50"
            >
              <div className="mb-6 flex items-start justify-between">
                <h3 className="font-heading text-[1.3rem] font-bold text-white normal-case">
                  {style.label}
                </h3>

                <div className="flex size-8 items-center justify-center border border-white/20 transition-colors duration-300 group-hover:border-orange">
                  <div className="size-4 border-2 border-orange opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              </div>

              <p className="font-sans text-[0.9rem] leading-relaxed text-white/60">
                {style.note}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
