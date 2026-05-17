"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { howToWear } from "@/lib/pop-glove";

export function HowToWearIntro() {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 border-b border-border pb-12 md:pb-24 md:gap-12 lg:grid-cols-2 lg:gap-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="group order-1 md:order-2 relative flex aspect-video min-w-0 items-center justify-center overflow-hidden border border-border bg-surface"
      >
        <Image
          src="/images/pop-glove/pop-swatch-colors.png"
          alt="AP x Swatch Royal Pop colour collection"
          fill
          loading="eager"
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 88vw, 45vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="min-w-0 order-2 md:order-1"
      >
        <p className="mb-4 font-mono text-xxs tracking-[0.3em] text-orange normal-case">
          {howToWear.eyebrow}
        </p>

        <h2 className="mb-6 wrap-break-word font-heading text-[clamp(2rem,8vw,4.5rem)] font-black leading-[0.95] tracking-[-0.02em] text-white normal-case">
          {howToWear.headline}
        </h2>

        <p className="max-w-[65ch] wrap-break-word font-sans text-[0.95rem] leading-[1.8] text-white/60 md:text-[1rem]">
          {howToWear.intro}
        </p>
      </motion.div>
    </div>
  );
}
