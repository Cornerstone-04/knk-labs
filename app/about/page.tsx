"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { about } from "@/lib/data";
import { LuArrowRight } from "react-icons/lu";

export default function AboutPage() {
  return (
    <div className="bg-bg pt-16">

      {/* Header */}
      <div className="border-b border-border px-6 pt-20 pb-16 md:px-12">
        <div className="mx-auto max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-4 font-mono text-xxs uppercase tracking-[0.3em] text-orange">
            About Us
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="font-heading text-[clamp(3rem,9vw,7rem)] font-black uppercase text-white leading-[0.9]">
            Built for the
            <br /><span className="text-orange">Bold.</span>
          </motion.h1>
        </div>
      </div>

      {/* Who We Are */}
      <section className="border-b border-border px-6 py-24 md:px-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="mb-8 font-mono text-xxs uppercase tracking-[0.3em] text-white/25">Who We Are</div>
            <p className="font-sans text-[1rem] leading-[1.9] text-white/55">{about.desc}</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}>
            <div className="mb-8 font-mono text-xxs uppercase tracking-[0.3em] text-white/25">Our Mission</div>
            <p className="font-sans text-[1rem] leading-[1.9] text-white/55 mb-6">{about.mission}</p>
            <p className="font-sans text-[1rem] leading-[1.9] text-white/55">We build technology that becomes a natural extension of the hand.</p>
          </motion.div>
        </div>
      </section>

      {/* Expertise */}
      <section className="border-b border-border px-6 py-24 md:px-12 bg-surface">
        <div className="mx-auto max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-4 font-mono text-xxs uppercase tracking-[0.3em] text-orange">
            What We Do
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="font-heading font-black text-[clamp(2rem,5vw,4rem)] text-white mb-16">
            Our Expertise
          </motion.h2>

          <div className="border-t border-border">
            {about.expertise.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="group grid grid-cols-[60px_1fr] md:grid-cols-[80px_1fr_1fr] border-b border-border py-6 hover:bg-bg/60 transition-colors duration-200 gap-4 items-baseline"
              >
                <span className="font-mono text-xxs tracking-[0.2em] text-white/20 pt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-heading font-bold text-[clamp(1.1rem,2.5vw,1.6rem)] text-white group-hover:text-orange transition-colors duration-200 uppercase leading-none">
                  {item.title}
                </span>
                <span className="col-start-2 md:col-start-3 font-sans text-[0.82rem] leading-[1.75] text-white/40">
                  {item.desc}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 text-center">
        <div className="max-w-2xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <h2 className="font-heading font-black text-[clamp(2rem,6vw,4.5rem)] text-white mb-6">
              Ready to Wear
              <br /><span className="text-orange">the Future?</span>
            </h2>
            <Link href="/waitlist" className="inline-flex items-center gap-2 bg-orange px-10 py-4 font-sans text-[0.85rem] font-semibold uppercase tracking-[0.08em] text-black no-underline transition-opacity duration-200 hover:opacity-85">
              Join the Waitlist <LuArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
