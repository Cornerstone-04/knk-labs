"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";
import { bundle } from "@/lib/data";

export const ProductsBundle = () => {
  return (
    <section className="border-b border-border bg-surface/30 px-6 py-24 md:px-12">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-4 font-mono text-xxs normal-case tracking-[0.3em] text-orange">
            The Bundle
          </div>

          <h2 className="mb-6 font-heading text-[clamp(2rem,5vw,4rem)] normal-case font-black text-white">
            {bundle.tagline}
          </h2>

          <p className="mb-8 font-sans text-[0.9rem] leading-[1.85] text-white/50">
            {bundle.desc}
          </p>

          <div className="mb-10 flex flex-wrap gap-2">
            {bundle.includes.map((item) => (
              <span
                key={item}
                className="border border-white/10 px-3 py-1.5 font-mono text-xxs normal-case tracking-[0.15em] text-white/35"
              >
                {item}
              </span>
            ))}
          </div>

          <Link
            href="/waitlist"
            className="inline-flex items-center gap-2 bg-orange px-8 py-[0.9rem] font-sans text-[0.8rem] font-semibold normal-case tracking-[0.08em] text-black no-underline transition-opacity duration-200 hover:opacity-85"
          >
            Join the Waitlist <LuArrowRight />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex items-center justify-center px-8 py-16"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/images/knk_dual.png"
              alt="KNK System Bundle"
              width={480}
              height={400}
              className="w-full h-auto max-w-full object-contain"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
