"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { popGloveFeatures } from "@/lib/pop-glove";

export function PopGloveFeatures() {
  return (
    <section className="border-b border-border bg-surface px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-24">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="sticky top-24 h-fit"
        >
          <div className="group relative aspect-5/7 overflow-hidden border border-border bg-bg">
            <Image
              src="/images/pop-glove/pop-design.jpg"
              alt="P.O.P Glove features"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </motion.div>

        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-12"
          >
            <p className="mb-4 font-mono text-xxs tracking-[0.3em] text-orange normal-case">
              Engineering Excellence
            </p>

            <h2 className="font-heading text-[clamp(2rem,5vw,3.5rem)] font-black leading-tight tracking-[-0.02em] text-white normal-case">
              Engineered for Excellence
            </h2>
          </motion.div>

          <div className="space-y-0">
            {popGloveFeatures.map((feature, index) => (
              <motion.article
                key={feature.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="border-b border-white/10 py-8 last:border-0"
              >
                <div className="flex items-start gap-6 md:gap-8">
                  <span className="shrink-0 font-heading text-[1.5rem] font-black text-white/30 md:text-[2rem]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="min-w-0 flex-1">
                    <h3 className="mb-4 font-heading text-[1.1rem] font-bold text-white md:text-[1.25rem]">
                      {feature.title}
                    </h3>

                    <p className="font-sans text-[0.92rem] leading-[1.9] text-white/55">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
