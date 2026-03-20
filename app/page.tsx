"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { site, products, about } from "@/lib/data";

const MARQUEE_ITEMS = [
  "Gesture Intelligence", "Biometric Tracking", "Apple Watch Dock",
  "Haptic Feedback", "Robotics Control", "AR/VR Interaction",
  "Gesture Intelligence", "Biometric Tracking", "Apple Watch Dock",
  "Haptic Feedback", "Robotics Control", "AR/VR Interaction",
];

const STATS = [
  { value: "2",    label: "Products"          },
  { value: "7+",   label: "Core Technologies" },
  { value: "2026", label: "Launch Year"       },
];

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const heroY       = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <div className="bg-bg">

      {/* ── HERO ── */}
      <section ref={heroRef} className="relative min-h-svh flex items-center overflow-hidden border-b border-border">
        <div className="pointer-events-none absolute top-1/2 right-[-10%] -translate-y-1/2 w-[70vw] h-[70vw] rounded-full bg-[radial-gradient(circle,rgba(249,115,22,0.08)_0%,transparent_65%)] z-0" />
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-[linear-gradient(to_top,#000_0%,transparent_100%)] z-1" />

        <motion.div style={{ opacity: heroOpacity, y: heroY }} className="relative z-10 w-full px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center pt-24 pb-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-mono text-xxs tracking-[0.3em] uppercase text-orange mb-6"
            >
              King Krown Labs — Wearable Technology
            </motion.p>

            <h1 className="font-heading font-black text-[clamp(3.5rem,10vw,8rem)] leading-[0.9] tracking-[-0.02em] text-white mb-6">
              {["Innovation", "at Your"].map((word, i) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="block"
                >
                  {word}
                </motion.span>
              ))}
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="block text-orange"
              >
                Fingertips.
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="font-sans text-base leading-relaxed text-white/50 max-w-[42ch] mb-10"
            >
              {site.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.85 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/waitlist" className="font-sans font-semibold text-[0.8rem] tracking-[0.08em] uppercase bg-orange text-black px-8 py-[0.9rem] no-underline transition-opacity duration-200 hover:opacity-85">
                Join the Waitlist
              </Link>
              <Link href="/products" className="font-sans font-medium text-[0.8rem] tracking-[0.08em] uppercase text-white/60 border border-white/15 px-8 py-[0.9rem] no-underline transition-all duration-200 hover:text-white hover:border-white/40">
                Explore Products
              </Link>
            </motion.div>
          </div>

          {/* Floating glove */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex justify-center"
          >
            <motion.div animate={{ y: [0, -14, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
              <div className="relative">
                <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[60%] h-[30%] bg-orange/15 blur-3xl rounded-full pointer-events-none" />
                <Image src="/images/tekglove-front.jpg" alt="Tek Glove" width={480} height={480} className="object-contain max-w-full relative z-10" priority />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none z-10"
        >
          <span className="font-mono text-xxs tracking-[0.25em] uppercase text-white/25">Scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }} className="w-px h-8 bg-gradient-to-b from-orange/60 to-transparent" />
        </motion.div>
      </section>

      {/* ── MARQUEE ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="border-b border-border bg-surface overflow-hidden py-5"
      >
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex gap-16 whitespace-nowrap w-max"
        >
          {MARQUEE_ITEMS.map((t, i) => (
            <span key={i} className="font-mono text-xxs tracking-[0.25em] uppercase text-white/30 shrink-0">
              <span className="text-orange mr-4">✦</span>{t}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* ── STATS ── */}
      <div className="border-b border-border grid grid-cols-3">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`flex flex-col items-center justify-center py-10 gap-2 ${i < 2 ? "border-r border-border" : ""}`}
          >
            <span className="font-heading font-black text-[clamp(2.5rem,6vw,4.5rem)] leading-none text-white">{s.value}</span>
            <span className="font-mono text-xxs tracking-[0.2em] uppercase text-white/30">{s.label}</span>
          </motion.div>
        ))}
      </div>

      {/* ── WHO WE ARE ── */}
      <section className="border-b border-border px-6 py-24 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="mb-4 font-mono text-xxs tracking-[0.3em] uppercase text-orange">Who We Are</div>
            <h2 className="font-heading font-black text-[clamp(2rem,5vw,4rem)] text-white leading-none">
              Makers of<br />the Future.
            </h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}>
            <p className="font-sans text-[0.95rem] leading-[1.9] text-white/55 mb-6">
              At KNK Labs, we create intelligent wearables that merge human capability with machine precision. Our flagship products — Tek Glove and Echo Glove — combine AI, biometrics, and integrated device docking to give you complete control, communication, and awareness from the palm of your hand.
            </p>
            <p className="font-sans text-[0.95rem] leading-[1.9] text-white/55 mb-8">
              The future of touch begins here.
            </p>
            <Link href="/about" className="border-b border-orange/40 pb-0.5 font-sans text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-orange no-underline hover:border-orange transition-colors duration-200">
              About KNK Labs →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section className="border-b border-border px-6 py-24 md:px-12 bg-surface">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-4 font-mono text-xxs tracking-[0.3em] uppercase text-orange">
            Our Products
          </motion.div>
          <div className="flex items-end justify-between mb-16">
            <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="font-heading font-black text-[clamp(2.5rem,6vw,5rem)] text-white">
              Two Gloves.<br />One Ecosystem.
            </motion.h2>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
              <Link href="/products" className="font-mono text-xxs tracking-[0.15em] uppercase text-white/40 border-b border-white/20 pb-0.5 no-underline hover:text-white hover:border-white/50 transition-all duration-200 hidden md:block">
                View All →
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-2">
            {products.map((p, i) => (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-surface overflow-hidden"
              >
                <div className="relative aspect-square bg-[#0a0a0a] overflow-hidden">
                  <Image src={p.image} alt={p.name} fill className="object-cover brightness-90 transition-transform duration-700 ease-out group-hover:scale-105" />
                  <div className="absolute top-4 left-4 font-mono text-xxs tracking-[0.15em] uppercase text-black bg-orange px-2.5 py-1 transition-colors duration-300 group-hover:bg-white">
                    {p.tag}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-heading font-bold text-[1.6rem] text-white mb-1">{p.name}</h3>
                  <p className="font-mono text-xxs uppercase tracking-[0.15em] text-orange/60 mb-4">{p.tagline}</p>
                  <p className="font-sans text-[0.78rem] text-white/45 leading-[1.7] mb-6 line-clamp-3">{p.desc}</p>
                  <Link href={`/products/${p.slug}`} className="font-mono text-xxs tracking-[0.15em] uppercase text-orange border-b border-orange/40 pb-0.5 no-underline hover:border-orange transition-colors duration-200">
                    Learn More →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERTISE STRIP ── */}
      <section className="border-b border-border px-6 py-24 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-4 font-mono text-xxs tracking-[0.3em] uppercase text-orange">
            Built on
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="font-heading font-black text-[clamp(2rem,5vw,4rem)] text-white mb-16">
            Core Technologies
          </motion.h2>

          <div className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {about.expertise.slice(0, 4).map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-bg px-8 py-10"
              >
                <div className="mb-4 font-mono text-xxs tracking-[0.2em] text-orange">0{i + 1}</div>
                <h3 className="mb-3 font-heading font-bold text-[1.3rem] text-white uppercase">{item.title}</h3>
                <p className="font-sans text-[0.8rem] leading-[1.75] text-white/40">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="mt-6 text-right">
            <Link href="/about" className="font-mono text-xxs tracking-[0.15em] uppercase text-white/40 border-b border-white/20 pb-0.5 no-underline hover:text-white hover:border-white/50 transition-all duration-200">
              See All Expertise →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── DEVELOPER STRIP ── */}
      <section className="border-b border-border px-6 py-24 md:px-12 bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="mb-4 font-mono text-xxs tracking-[0.3em] uppercase text-orange">For Builders</div>
            <h2 className="mb-6 font-heading font-black text-[clamp(2rem,5vw,4rem)] text-white">Build With KNK.</h2>
            <p className="mb-8 font-sans text-[0.9rem] leading-[1.85] text-white/50">
              Gesture APIs, haptic libraries, device SDKs, and firmware tools — designed for developers and innovators building the next generation of human–machine interaction.
            </p>
            <Link href="/developers" className="border-b border-orange/40 pb-0.5 font-sans text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-orange no-underline hover:border-orange transition-colors duration-200">
              Visit Developer Hub →
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }} className="border border-white/5 bg-bg p-10">
            <div className="mb-6 font-mono text-xxs uppercase tracking-[0.2em] text-orange">Coming Soon</div>
            <ul className="space-y-4">
              {["Gesture & Haptic API", "Hardware SDK", "Robotics Integration Guides", "Developer Community", "Sample Code Libraries"].map((item, i) => (
                <motion.li key={item} initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
                  <span className="font-mono text-xxs text-white/50">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-6 py-32 text-center">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <p className="font-mono text-xxs tracking-[0.3em] uppercase text-orange mb-6">Limited Availability</p>
            <h2 className="font-heading font-black text-[clamp(2.5rem,8vw,6rem)] text-white mb-6">
              Be First.
              <br /><span className="text-orange">Be Ahead.</span>
            </h2>
            <p className="font-sans text-[0.9rem] leading-[1.8] text-white/40 mb-10">
              Join the priority waitlist for early access to Tek Glove and Echo Glove. Limited spots available.
            </p>
            <Link href="/waitlist" className="font-sans font-semibold text-[0.85rem] tracking-[0.08em] uppercase bg-orange text-black px-10 py-4 inline-block no-underline transition-opacity duration-200 hover:opacity-85">
              Join the Waitlist →
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
