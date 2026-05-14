"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { howToWear } from "@/lib/pop-glove";

export function PopGloveHowToWear() {
  return (
    <section className="border-b border-border px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Intro Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 md:mb-32"
        >
          <p className="mb-4 font-mono text-xxs tracking-[0.3em] text-orange normal-case">
            {howToWear.eyebrow}
          </p>

          <h2 className="mb-6 font-heading text-[clamp(2.5rem,6vw,4.5rem)] font-black leading-tight tracking-[-0.02em] text-white normal-case">
            {howToWear.headline}
          </h2>

          <p className="max-w-[65ch] font-sans text-[1rem] leading-[1.8] text-white/60">
            {howToWear.intro}
          </p>
        </motion.div>

        {/* Royal Pop Spotlight Section */}
        <div className="mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-12"
          >
            <p className="mb-4 font-mono text-xxs tracking-[0.3em] text-orange normal-case">
              {howToWear.royalPopSpotlight.eyebrow}
            </p>

            <h3 className="mb-10 font-heading text-[clamp(2rem,5vw,3.5rem)] font-black leading-tight tracking-[-0.02em] text-white normal-case">
              {howToWear.royalPopSpotlight.headline}
            </h3>

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="space-y-6"
              >
                {howToWear.royalPopSpotlight.body.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="font-sans text-[0.95rem] leading-[1.8] text-white/60"
                  >
                    {paragraph}
                  </p>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="group relative flex aspect-square items-center justify-center overflow-hidden border border-border bg-surface"
              >
                <Image
                  src="/images/pop-glove/pop-royal-detail.jpg"
                  alt="Audemars Piguet x Swatch Royal Pop"
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 88vw, (max-width: 1024px) 70vw, 42vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Step-by-Step Docking Section */}
        <div className="mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <p className="mb-4 font-mono text-xxs tracking-[0.3em] text-orange normal-case">
              The Experience
            </p>

            <h3 className="font-heading text-[clamp(2rem,5vw,3.5rem)] font-black leading-tight tracking-[-0.02em] text-white normal-case">
              Dock. Lock. Drive.
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {howToWear.dockingSteps.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group border border-border bg-surface/50 p-8 transition-all duration-300 hover:bg-surface hover:border-white/20"
              >
                <div className="mb-6 flex items-baseline justify-between">
                  <span className="font-heading text-[clamp(2.5rem,8vw,3.5rem)] font-black tracking-[-0.02em] text-orange/30 transition-colors group-hover:text-orange">
                    {step.number}
                  </span>
                </div>

                <h4 className="mb-3 font-heading text-[1.1rem] font-bold tracking-[-0.01em] text-white">
                  {step.title}
                </h4>

                <p className="font-sans text-[0.9rem] leading-[1.6] text-white/50">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experience Points Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-16"
        >
          <div className="mb-16">
            <p className="mb-4 font-mono text-xxs tracking-[0.3em] text-orange normal-case">
              Why This Matters
            </p>

            <h3 className="font-heading text-[clamp(2rem,5vw,3.5rem)] font-black leading-tight tracking-[-0.02em] text-white normal-case">
              The Transformation
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
            {howToWear.experiencePoints.map((point, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="border-l border-orange/30 pl-6"
              >
                <h4 className="mb-4 font-heading text-[1.15rem] font-bold tracking-[-0.01em] text-white">
                  {point.title}
                </h4>

                <p className="font-sans text-[0.95rem] leading-[1.8] text-white/60">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
