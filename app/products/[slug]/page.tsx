"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/lib/data";
import { use, useRef } from "react";
import { LuArrowRight } from "react-icons/lu";

export default function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const otherProducts = products.filter((p) => p.slug !== slug);

  return (
    <div className="bg-bg pt-16">
      {/* ── HERO ── */}
      <section className="border-b border-border px-6 pt-24 pb-0 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-12">
            <div className="flex flex-col">
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-mono text-xxs tracking-[0.3em] normal-case text-orange mb-4"
              >
                {product.tag}
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="font-heading font-black text-[clamp(3.5rem,7vw,9rem)] normal-case leading-none tracking-[-0.02em] text-white mb-4"
              >
                {product.name}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="font-mono text-xxs normal-case tracking-[0.2em] text-orange/60 mb-10"
              >
                {product.tagline}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-wrap gap-4 mb-16 lg:mb-0"
              >
                <Link
                  href="/waitlist"
                  className="inline-block bg-orange px-8 py-[0.9rem] font-sans text-[0.8rem] font-semibold normal-case tracking-[0.08em] text-black no-underline transition-opacity duration-200 hover:opacity-85"
                >
                  Join the Waitlist
                </Link>
                <Link
                  href="/products"
                  className="inline-block border border-white/15 px-8 py-[0.9rem] font-sans text-[0.8rem] font-semibold normal-case tracking-[0.08em] text-white/60 no-underline transition-all duration-200 hover:border-white/40 hover:text-white"
                >
                  All Products
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative flex min-h-125 items-center justify-center overflow-hidden rounded-2xl bg-bg lg:min-h-155"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(249,115,22,0.08)_0%,transparent_65%)]" />

              <div className="pointer-events-none absolute bottom-[6%] left-1/2 z-0 h-24 w-[58%] -translate-x-1/2 rounded-full bg-orange/20 blur-3xl lg:h-32" />

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
                  src={product.images.hero}
                  alt={product.name}
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

      {/* ── OVERVIEW ── */}
      <section className="border-b border-border px-6 py-24 md:px-12">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-8 font-mono text-xxs normal-case tracking-[0.3em] text-orange">
              Overview
            </div>
            <p className="font-sans text-[1rem] leading-[1.9] text-white/55">
              {product.desc}
            </p>
            {product.slug === "tek-glove" && (
              <Link
                href="https://tekglove.co.uk"
                target="_blank"
                className="inline-flex items-center gap-2 font-mono text-xxs tracking-[0.2em] normal-case text-orange border-b border-orange/30 pb-1 hover:border-orange transition-all"
              >
                Explore Technical Documentation{" "}
                <LuArrowRight className="w-3 h-3" />
              </Link>
            )}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="mb-8 font-mono text-xxs normal-case tracking-[0.3em] text-orange">
              Key Capabilities
            </div>
            <div className="space-y-0">
              {product.features.map((f, i) => (
                <motion.div
                  key={f.id}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="border-t border-border py-4 flex items-baseline gap-6"
                >
                  <span className="font-mono text-xxs tracking-[0.2em] text-white/20 shrink-0">
                    {f.id}
                  </span>
                  <span className="font-heading font-bold text-[1.1rem] text-white normal-case">
                    {f.title}
                  </span>
                </motion.div>
              ))}
              <div className="border-t border-border" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FEATURES — sticky image + scrolling ── */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2">
          {/* Sticky image */}
          <div className="hidden md:flex items-start border-r border-border">
            <div className="sticky top-0 h-svh w-full flex items-center justify-center bg-surface">
              <div className="relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(249,115,22,0.08)_0%,transparent_65%)] pointer-events-none" />
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Image
                    src={product.images.angle}
                    alt={product.name}
                    width={420}
                    height={420}
                    className="object-contain relative z-10"
                  />
                </motion.div>
              </div>
            </div>
          </div>

          {/* Scrolling features */}
          <div>
            {product.features.map((f, i) => (
              <motion.div
                key={f.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="border-b border-border px-8 md:px-12 py-20"
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-mono text-xxs tracking-[0.25em] text-white/20">
                    {f.id}
                  </span>
                  <span className="font-mono text-xxs tracking-[0.15em] normal-case text-black bg-orange px-2 py-0.5">
                    {f.title}
                  </span>
                </div>
                <h2 className="font-heading normal-case font-black text-[clamp(2rem,4vw,3rem)] text-white leading-none mb-6">
                  {f.title}
                </h2>
                <p className="font-sans text-[0.9rem] leading-[1.85] text-white/50 mb-8 max-w-[48ch]">
                  {f.desc}
                </p>
                <ul className="space-y-3">
                  {f.bullets.map((b, bi) => (
                    <motion.li
                      key={bi}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: bi * 0.06 }}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
                      <span className="font-sans text-[0.85rem] text-white/55">
                        {b}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DOCK REASONS — if any ── */}
      {product.mountReasons.length > 0 && (
        <section className="border-b border-border px-6 py-24 md:px-12 bg-surface">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-4 font-mono text-xxs normal-case tracking-[0.3em] text-orange"
            >
              Why the Back of the Hand?
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading font-black text-[clamp(2rem,5vw,4rem)] normal-case text-white mb-16"
            >
              Designed for Motion.
            </motion.h2>
            <div className="border-t border-border">
              {product.mountReasons.map((r, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="grid grid-cols-[60px_1fr] border-b border-border py-6"
                >
                  <span className="font-mono text-xxs tracking-[0.2em] text-white/20">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-sans text-[0.9rem] leading-[1.75] text-white/55">
                    {r}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── OTHER PRODUCTS ── */}
      {otherProducts.length > 0 && (
        <section className="border-b border-border px-6 py-16 md:px-12 bg-surface/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-10 flex items-center justify-between"
            >
              <div className="font-mono text-xxs normal-case tracking-[0.3em] text-orange">
                Related Gear
              </div>
              <div className="h-px flex-1 bg-border ml-8 hidden md:block" />
            </motion.div>

            {/* Changed to grid-cols-2 on tablet and grid-cols-3 on desktop if needed */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {otherProducts.map((p, i) => (
                <motion.div
                  key={p.slug}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group bg-bg border border-border overflow-hidden flex flex-col"
                >
                  <div className="relative aspect-21/9 bg-surface overflow-hidden">
                    <Image
                      src={p.images.hero} // Using the standard cutout for consistency
                      alt={p.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-contain p-4 brightness-90 transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 font-mono text-[10px] tracking-widest normal-case text-black bg-orange px-2 py-0.5">
                      {p.tag}
                    </div>
                  </div>

                  <div className="p-5 flex items-end justify-between gap-4">
                    <div>
                      <h3 className="font-heading font-bold text-[1.1rem] text-white normal-case leading-tight">
                        {p.name}
                      </h3>
                      <p className="font-mono text-[9px] normal-case tracking-widest text-white/40 mt-1">
                        {p.tagline}
                      </p>
                    </div>
                    <Link
                      href={`/products/${p.slug}`}
                      className="inline-flex items-center gap-2 font-mono text-[10px] tracking-widest normal-case text-orange border-b border-orange/0 pb-0.5 no-underline hover:border-orange transition-all duration-200 shrink-0"
                    >
                      View <LuArrowRight />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="px-6 py-24 text-center">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-mono text-xxs tracking-[0.3em] normal-case text-orange mb-6">
              Limited Availability
            </p>
            <h2 className="font-heading normal-case font-black text-[clamp(2rem,6vw,4.5rem)] text-white mb-6">
              Ready to Experience
              <br />
              <span className="text-orange">{product.name}?</span>
            </h2>
            <Link
              href="/waitlist"
              className="inline-flex items-center gap-2 bg-orange px-10 py-4 font-sans text-[0.85rem] font-semibold normal-case tracking-[0.08em] text-black no-underline transition-opacity duration-200 hover:opacity-85"
            >
              Join the Waitlist <LuArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
