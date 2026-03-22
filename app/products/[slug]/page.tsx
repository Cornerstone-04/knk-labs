"use client";

import { motion, useScroll, useTransform } from "motion/react";
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

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  const otherProducts = products.filter((p) => p.slug !== slug);

  return (
    <div className="bg-bg pt-16">
      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className="relative min-h-[85vh] flex items-end overflow-hidden border-b border-border"
      >
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] rounded-full bg-[radial-gradient(circle,rgba(249,115,22,0.06)_0%,transparent_65%)] z-0" />
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-bg to-transparent z-1" />

        {/* Floating image */}
        <motion.div
          style={{ opacity: heroOpacity, y: heroY }}
          className="absolute inset-0 z-0 flex items-center justify-end pr-12 md:pr-24"
        >
          <motion.div
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div className="absolute bottom-[-15%] left-1/2 -translate-x-1/2 w-[70%] h-[30%] bg-orange/10 blur-3xl rounded-full pointer-events-none" />
            <Image
              src={product.image}
              alt={product.name}
              width={520}
              height={520}
              className="object-contain max-w-[45vw] relative z-10"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Text */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-2 w-full px-6 md:px-12 pb-16 pt-32"
        >
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-mono text-xxs tracking-[0.3em] uppercase text-orange mb-4"
          >
            {product.tag}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading font-black text-[clamp(3.5rem,10vw,9rem)] leading-none tracking-[-0.02em] text-white mb-4 max-w-[60%]"
          >
            {product.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="font-mono text-xxs uppercase tracking-[0.2em] text-orange/60 mb-10"
          >
            {product.tagline}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/waitlist"
              className="inline-block bg-orange px-8 py-[0.9rem] font-sans text-[0.8rem] font-semibold uppercase tracking-[0.08em] text-black no-underline transition-opacity duration-200 hover:opacity-85"
            >
              Join the Waitlist
            </Link>
            <Link
              href="/products"
              className="inline-block border border-white/15 px-8 py-[0.9rem] font-sans text-[0.8rem] font-semibold uppercase tracking-[0.08em] text-white/60 no-underline transition-all duration-200 hover:border-white/40 hover:text-white"
            >
              All Products
            </Link>
          </motion.div>
        </motion.div>
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
            <div className="mb-8 font-mono text-xxs uppercase tracking-[0.3em] text-white/25">
              Overview
            </div>
            <p className="font-sans text-[1rem] leading-[1.9] text-white/55">
              {product.desc}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="mb-8 font-mono text-xxs uppercase tracking-[0.3em] text-white/25">
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
                  <span className="font-heading font-bold text-[1.1rem] text-white uppercase">
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
                    src={product.image}
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
                  <span className="font-mono text-xxs tracking-[0.15em] uppercase text-black bg-orange px-2 py-0.5">
                    {f.title}
                  </span>
                </div>
                <h2 className="font-heading font-black text-[clamp(2rem,4vw,3rem)] text-white leading-none mb-6">
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
      {product.dockReasons.length > 0 && (
        <section className="border-b border-border px-6 py-24 md:px-12 bg-surface">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-4 font-mono text-xxs uppercase tracking-[0.3em] text-orange"
            >
              Why the Back of the Hand?
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading font-black text-[clamp(2rem,5vw,4rem)] text-white mb-16"
            >
              Designed for Motion.
            </motion.h2>
            <div className="border-t border-border">
              {product.dockReasons.map((r, i) => (
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
        <section className="border-b border-border px-6 py-24 md:px-12">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-4 font-mono text-xxs uppercase tracking-[0.3em] text-orange"
            >
              Also From KNK Labs
            </motion.div>
            <div className="grid grid-cols-1 gap-px bg-border ">
              {otherProducts.map((p, i) => (
                <motion.div
                  key={p.slug}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group bg-bg overflow-hidden"
                >
                  <div className="relative aspect-video bg-surface overflow-hidden">
                    <Image
                      src={
                        p.slug === "echo-glove"
                          ? "/images/echo_glove_cutout.png"
                          : "/images/tekglove_angle_cutout.png"
                      }
                      alt={p.name}
                      fill
                      className="object-contain brightness-75 transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 font-mono text-xxs tracking-[0.15em] uppercase text-black bg-orange px-2.5 py-1">
                      {p.tag}
                    </div>
                  </div>
                  <div className="p-8 flex items-end justify-between">
                    <div>
                      <h3 className="font-heading font-bold text-[1.4rem] text-white mb-1">
                        {p.name}
                      </h3>
                      <p className="font-mono text-xxs uppercase tracking-[0.15em] text-orange/60">
                        {p.tagline}
                      </p>
                    </div>
                    <Link
                      href={`/products/${p.slug}`}
                      className="font-mono text-xxs tracking-[0.15em] uppercase text-white/40 border-b border-white/20 pb-0.5 no-underline hover:text-orange hover:border-orange transition-all duration-200 shrink-0 ml-8"
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
            <p className="font-mono text-xxs tracking-[0.3em] uppercase text-orange mb-6">
              Limited Availability
            </p>
            <h2 className="font-heading font-black text-[clamp(2rem,6vw,4.5rem)] text-white mb-6">
              Ready to Experience
              <br />
              <span className="text-orange">{product.name}?</span>
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-4 justify-center">
              <Link
                href="/waitlist"
                className="inline-flex items-center gap-2 bg-orange px-10 py-4 font-sans text-[0.85rem] font-semibold uppercase tracking-[0.08em] text-black no-underline transition-opacity duration-200 hover:opacity-85"
              >
                Join the Waitlist <LuArrowRight />
              </Link>
              {product.slug === "tek-glove" && (
                <Link
                  href="https://tekglove.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-white/20 px-10 py-4 font-sans text-[0.85rem] font-semibold uppercase tracking-[0.08em] text-white/60 no-underline transition-all duration-200 hover:border-white/60 hover:text-white"
                >
                  More About TekGlove <LuArrowRight />
                </Link>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
