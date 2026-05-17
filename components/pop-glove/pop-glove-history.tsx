"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { popGloveHistory } from "@/lib/pop-glove";

export function PopGloveHistory() {
  return (
    <section className="border-b border-border px-6 py-16 md:px-12 md:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="order-1 md:order-2 min-w-0"
        >
          <p className="mb-6 font-mono text-xxs tracking-[0.3em] text-orange normal-case">
            {popGloveHistory.eyebrow}
          </p>

          <h2 className="mb-10 font-heading text-[clamp(2.5rem,6vw,4.5rem)] font-black leading-tight tracking-[-0.02em] text-white normal-case">
            {popGloveHistory.headline}
          </h2>

          <div className="space-y-6">
            {popGloveHistory.body.map((paragraph) => (
              <p
                key={paragraph}
                className="font-sans text-[0.95rem] leading-[1.8] text-white/60"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="group order-2 md:order-1 relative flex aspect-square items-center justify-center overflow-hidden border border-border bg-surface"
        >
          <Image
            src="/images/pop-glove/pop-stadium.jpg"
            alt="P.O.P Glove design concept"
            fill
            loading="eager"
            sizes="(max-width: 640px) 88vw, (max-width: 1024px) 70vw, 45vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </motion.div>
      </div>
    </section>
  );
}
