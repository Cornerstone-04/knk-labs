"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";

export const AboutCta = () => {
  return (
    <section className="px-6 py-24 text-center">
      <div className="mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="mb-6 normal-case font-heading text-[clamp(2rem,6vw,4.5rem)] font-black text-white">
            Ready to Wear
            <br />
            <span className="text-orange">the Future?</span>
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
  );
};
