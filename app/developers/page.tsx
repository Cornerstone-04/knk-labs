"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { developers } from "@/lib/data";

export default function DevelopersPage() {
  return (
    <div className="bg-bg pt-16">

      {/* Header */}
      <div className="border-b border-border px-6 pt-20 pb-16 md:px-12">
        <div className="mx-auto max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-4 font-mono text-xxs uppercase tracking-[0.3em] text-orange">
            Developer Hub
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="font-heading text-[clamp(3rem,9vw,7rem)] font-black uppercase text-white leading-[0.9]">
            Build the
            <br /><span className="text-orange">Next Thing.</span>
          </motion.h1>
        </div>
      </div>

      {/* Intro */}
      <section className="border-b border-border px-6 py-24 md:px-12">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="mb-8 font-mono text-xxs uppercase tracking-[0.3em] text-white/25">The Ecosystem</div>
            <h2 className="font-heading font-black text-[clamp(2rem,4vw,3rem)] text-white mb-6">{developers.headline}</h2>
            <p className="font-sans text-[1rem] leading-[1.9] text-white/55">{developers.desc}</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}>
            <div className="mb-8 font-mono text-xxs uppercase tracking-[0.3em] text-white/25">What You Get</div>
            <p className="font-sans text-[1rem] leading-[1.9] text-white/55">
              Gesture APIs, haptic libraries, device SDKs, and firmware tools — everything you need to build the next generation of human–machine interaction on the KNK platform.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tools */}
      <section className="border-b border-border px-6 py-24 md:px-12 bg-surface">
        <div className="mx-auto max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-4 font-mono text-xxs uppercase tracking-[0.3em] text-orange">
            Resources
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="font-heading font-black text-[clamp(2rem,5vw,4rem)] text-white mb-16">
            Developer Tools
          </motion.h2>

          <div className="border-t border-border">
            {developers.tools.map((tool, i) => (
              <motion.div key={tool.label} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }} className="group grid grid-cols-1 md:grid-cols-[280px_1fr] border-b border-border py-6 hover:bg-bg/50 transition-colors duration-200 cursor-pointer">
                <span className="font-heading font-bold text-[1.1rem] text-white mb-2 md:mb-0 group-hover:text-orange transition-colors duration-200">{tool.label}</span>
                <span className="font-sans text-[0.88rem] text-white/50 leading-relaxed">{tool.desc}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming soon note */}
      <section className="border-b border-border px-6 py-24 md:px-12">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="mb-4 font-mono text-xxs uppercase tracking-[0.3em] text-orange">Coming Soon</div>
            <h2 className="font-heading font-black text-[clamp(2rem,4vw,3rem)] text-white mb-6">Full SDK Access</h2>
            <p className="font-sans text-[0.9rem] leading-[1.85] text-white/50 mb-8">
              The KNK Developer Hub is being built alongside our hardware. Join the waitlist to be the first to access APIs, SDKs, and integration guides when they launch.
            </p>
            <p className="font-sans text-[0.9rem] leading-[1.85] text-white/50">
              Create the next generation of human–machine interaction.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }} className="border border-white/5 bg-surface p-10">
            <div className="mb-4 font-mono text-xxs uppercase tracking-[0.2em] text-orange">Early Access</div>
            <h3 className="font-heading font-black text-[2rem] text-white mb-6">Get Notified First</h3>
            <ul className="space-y-4 mb-8">
              {["Gesture & haptic API access", "Hardware SDK beta", "Robotics integration guides", "Developer community access"].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
                  <span className="font-sans text-[0.85rem] text-white/55">{item}</span>
                </li>
              ))}
            </ul>
            <Link href="/waitlist" className="inline-block bg-orange px-8 py-[0.9rem] font-sans text-[0.8rem] font-semibold uppercase tracking-[0.08em] text-black no-underline transition-opacity duration-200 hover:opacity-90">
              Join the Waitlist →
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
