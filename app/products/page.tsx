"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { products, bundle } from "@/lib/data";
import { LuArrowRight } from "react-icons/lu";

export default function ProductsPage() {
  return (
    <div className="bg-bg pt-16">
      {/* Header */}
      <div className="border-b border-border px-6 pt-20 pb-16 md:px-12">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 font-mono text-xxs uppercase tracking-[0.3em] text-orange"
          >
            KNK Labs
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-heading text-[clamp(3rem,9vw,7rem)] font-black uppercase text-white leading-[0.9]"
          >
            Two Gloves.
            <br />
            <span className="text-orange">One Ecosystem.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 font-sans text-[0.9rem] leading-[1.8] text-white/45 max-w-[50ch]"
          >
            Tek Glove and Echo Glove — two distinct products built on the same
            intelligent wearable platform. Each designed for a different kind of
            human-machine interaction.
          </motion.p>
        </div>
      </div>

      {/* Product rows */}
      {products.map((p, i) => {
        const isEven = i % 2 === 0;
        return (
          <section key={p.slug} className="border-b border-border">
            <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-2">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`flex items-center justify-center bg-surface px-8 py-20 ${
                  isEven
                    ? "md:order-1 border-r border-border"
                    : "md:order-2 border-l border-border"
                }`}
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 5 + i,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Image
                    src={p.image}
                    alt={p.name}
                    width={420}
                    height={420}
                    className="max-w-full object-contain"
                  />
                </motion.div>
              </motion.div>

              {/* Details */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className={`flex flex-col justify-center px-8 md:px-12 py-20 ${
                  isEven ? "md:order-2" : "md:order-1"
                }`}
              >
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.15 }}
                  className="mb-3 font-mono text-xxs uppercase tracking-[0.2em] text-orange"
                >
                  {p.tag}
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mb-2 font-heading font-black text-[clamp(2rem,5vw,3.5rem)] uppercase text-white leading-none"
                >
                  {p.name}
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                  className="mb-8 font-mono text-xxs uppercase tracking-[0.2em] text-orange/60"
                >
                  {p.tagline}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="mb-10 font-sans text-[0.9rem] leading-[1.85] text-white/50"
                >
                  {p.desc}
                </motion.p>

                {/* Feature pills */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.35 }}
                  className="flex flex-wrap gap-2 mb-10"
                >
                  {p.features.map((f) => (
                    <span
                      key={f.id}
                      className="border border-white/10 px-3 py-1.5 font-mono text-xxs uppercase tracking-[0.15em] text-white/35"
                    >
                      {f.title}
                    </span>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="flex flex-wrap gap-4"
                >
                  <Link
                    href={`/products/${p.slug}`}
                    className="inline-flex items-center gap-2 border border-white/20 px-8 py-[0.85rem] font-sans text-[0.8rem] font-semibold uppercase tracking-[0.08em] text-white no-underline transition-all duration-200 hover:border-white/60"
                  >
                    Learn More <LuArrowRight />
                  </Link>
                  <Link
                    href="/waitlist"
                    className="inline-block bg-orange px-8 py-[0.85rem] font-sans text-[0.8rem] font-semibold uppercase tracking-[0.08em] text-black no-underline transition-opacity duration-200 hover:opacity-85"
                  >
                    Join Waitlist
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </section>
        );
      })}

      {/* Bundle */}
      <section className="border-b border-border px-6 py-24 md:px-12 bg-surface">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-4 font-mono text-xxs tracking-[0.3em] uppercase text-orange">
              The Bundle
            </div>
            <h2 className="mb-6 font-heading font-black text-[clamp(2rem,5vw,4rem)] text-white">
              {bundle.tagline}
            </h2>
            <p className="mb-8 font-sans text-[0.9rem] leading-[1.85] text-white/50">
              {bundle.desc}
            </p>
            <div className="flex flex-wrap gap-2 mb-10">
              {bundle.includes.map((item) => (
                <span
                  key={item}
                  className="border border-white/10 px-3 py-1.5 font-mono text-xxs uppercase tracking-[0.15em] text-white/35"
                >
                  {item}
                </span>
              ))}
            </div>
            <Link
              href="/waitlist"
              className="inline-flex items-center gap-2 bg-orange px-8 py-[0.9rem] font-sans text-[0.8rem] font-semibold uppercase tracking-[0.08em] text-black no-underline transition-opacity duration-200 hover:opacity-85"
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
                className="object-contain max-w-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 text-center">
        <div className="mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-mono text-xxs tracking-[0.3em] uppercase text-orange mb-6">
              Limited Availability
            </p>
            <h2 className="font-heading font-black text-[clamp(2rem,6vw,4.5rem)] text-white mb-6">
              Ready to Experience
              <br />
              <span className="text-orange">the Future?</span>
            </h2>
            <Link
              href="/waitlist"
              className="inline-flex items-center gap-2 bg-orange px-10 py-4 font-sans text-[0.85rem] font-semibold uppercase tracking-[0.08em] text-black no-underline transition-opacity duration-200 hover:opacity-85"
            >
              Join the Waitlist <LuArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
// metadata added below
