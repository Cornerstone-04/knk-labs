"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

type PopGloveHeroProps = {
  onConfigureClick: () => void;
};

export function PopGloveHero({ onConfigureClick }: PopGloveHeroProps) {
  return (
    <section className="border-b border-border px-6 pt-24 pb-0 md:px-12 min">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-4 font-mono text-xxs tracking-[0.3em] text-orange normal-case"
            >
              KNK Labs · P.O.P Collection
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mb-4 font-heading text-[clamp(3.5rem,7vw,9rem)] font-black leading-none tracking-[-0.02em] text-white normal-case"
            >
              P.O.P Glove
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mb-10 font-mono text-xxs tracking-[0.2em] text-orange/60 normal-case"
            >
              Time exactly where you need it.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.42 }}
              className="mb-10 max-w-[42ch] font-sans text-[0.95rem] leading-[1.8] text-white/55"
            >
              A next-generation luxury driving glove with a statement timepiece
              built directly into the dorsal side of the hand.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mb-16 flex flex-wrap gap-4 lg:mb-0"
            >
              <Link
                href="/waitlist"
                className="inline-block bg-orange px-8 py-[0.9rem] font-sans text-[0.8rem] font-semibold tracking-[0.08em] text-black no-underline transition-opacity duration-200 hover:opacity-85"
              >
                Pre-Order Now
              </Link>

              <button
                type="button"
                onClick={onConfigureClick}
                className="inline-block border border-white/15 bg-transparent px-8 py-[0.9rem] font-sans text-[0.8rem] font-semibold tracking-[0.08em] text-white/60  hover:border-white/40 hover:text-white"
              >
                Configure Your Glove
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.4,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative flex min-h-125 items-center justify-center overflow-hidden bg-bg lg:min-h-155"
          >
            <div className="pointer-events-none absolute bottom-[6%] left-1/2 z-0 h-30 w-[58%] -translate-x-1/2 rounded-full bg-orange/20 blur-3xl lg:h-32" />

            <motion.div
              animate={{ y: [0, -12, 0], scale: [1, 1.015, 1] }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 h-90 w-full max-w-180 px-6 sm:h-105 lg:h-130 lg:px-10"
            >
              <Image
                src="/images/pop-glove/pop-hero-cutout.png"
                alt="P.O.P Glove"
                fill
                priority
                sizes="(max-width: 640px) 88vw, (max-width: 1024px) 70vw, 42vw"
                className="object-contain"
              />
            </motion.div>

            <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 h-24 bg-linear-to-t from-black/20 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
