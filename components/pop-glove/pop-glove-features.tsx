"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { popGloveFeatures } from "@/lib/pop-glove";

export function PopGloveFeatures() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-2">
        <div className="flex items-start border-b border-border md:border-r md:border-b-0 px-8 md:px-0">
          <div className="relative flex min-h-105 w-full items-center justify-center bg-[#f3ece5] md:sticky md:top-0 md:h-svh">
            <div className="relative">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(249,115,22,0.08)_0%,transparent_75%)] blur-md" />

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="mx-auto w-full max-w-70 md:max-w-85 lg:max-w-105"
              >
                <Image
                  src="/images/pop-glove/pop-design-cutout.png"
                  alt="P.O.P Glove features"
                  width={420}
                  height={420}
                  className="relative z-10 h-auto w-full max-w-70 object-contain md:max-w-85 lg:max-w-105"
                />
              </motion.div>
            </div>
          </div>
        </div>

        <div className="min-w-0 overflow-x-clip">
          {" "}
          {popGloveFeatures.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="min-w-0 overflow-hidden border-b border-border px-6 py-10 md:px-12 md:py-20"
            >
              <div className="mb-6 flex min-w-0 flex-wrap items-center gap-4">
                {" "}
                <span className="font-mono text-xxs tracking-[0.25em] text-orange">
                  {feature.id}
                </span>
                <span className="bg-orange px-2 py-0.5 font-mono text-xxs tracking-[0.15em] text-black normal-case">
                  {feature.title}
                </span>
              </div>

              <h2 className="mb-6 max-w-full wrap-break-word font-heading text-[clamp(2rem,4vw,3rem)] font-black leading-none text-white normal-case">
                {" "}
                {feature.title}
              </h2>

              <p className="max-w-full wrap-break-word font-sans text-[0.9rem] leading-[1.85] text-white/50 md:mb-8">
                {" "}
                {feature.desc}
              </p>

              {"bullets" in feature && Array.isArray(feature.bullets) && (
                <ul className="space-y-3">
                  {feature.bullets.map((bullet, bulletIndex) => (
                    <motion.li
                      key={bullet}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: bulletIndex * 0.06,
                      }}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-orange" />
                      <span className="font-sans text-[0.85rem] text-white/55">
                        {bullet}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
