"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";

const earlyAccessItems = [
  "Gesture & haptic API access",
  "Hardware SDK beta",
  "Robotics integration guides",
  "Developer community access",
];

export const DevelopersComingSoon = () => {
  return (
    <section className="border-b border-border px-6 py-24 md:px-12">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/*<div className="mb-4 font-mono text-xxs uppercase tracking-[0.3em] text-orange">
            Coming Soon
          </div>*/}

          <h2 className="mb-6 font-heading text-[clamp(2rem,4vw,3rem)] font-black text-white">
            Full SDK Access
          </h2>

          <p className="mb-8 font-sans text-[0.9rem] leading-[1.85] text-white/50">
            The KNK Developer Hub is being built alongside our hardware. Join
            the waitlist to be the first to access APIs, SDKs, and integration
            guides when they launch.
          </p>

          <p className="font-sans text-[0.9rem] leading-[1.85] text-white/50">
            Create the next generation of human–machine interaction.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="border border-white/5 bg-surface p-10"
        >
          <div className="mb-4 font-mono text-xxs uppercase tracking-[0.2em] text-orange">
            Early Access
          </div>

          <h3 className="mb-6 font-heading text-[2rem] font-black text-white">
            Get Notified First
          </h3>

          <ul className="mb-8 space-y-4">
            {earlyAccessItems.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
                <span className="font-sans text-[0.85rem] text-white/55">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <Link
            href="/waitlist"
            className="inline-flex items-center gap-2 bg-orange px-8 py-[0.9rem] font-sans text-[0.8rem] font-semibold uppercase tracking-[0.08em] text-black no-underline transition-opacity duration-200 hover:opacity-90"
          >
            Join the Waitlist <LuArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
