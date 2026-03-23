import { LuArrowRight } from "react-icons/lu";
import { motion } from "motion/react";
import Link from "next/link";

export const DeveloperStrip = () => {
  return (
    <section className="border-b border-border px-6 py-24 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-4 font-mono text-xxs tracking-[0.3em] uppercase text-orange">
            For Builders
          </div>
          <h2 className="mb-6 font-heading font-black text-[clamp(2rem,5vw,4rem)] text-white">
            Build With KNK.
          </h2>
          <p className="mb-8 font-sans text-[0.9rem] leading-[1.85] text-white/50">
            Gesture APIs, haptic libraries, device SDKs, and firmware tools —
            designed for developers and innovators building the next generation
            of human–machine interaction.
          </p>
          <Link
            href="/developers"
            className="inline-flex items-center gap-2 border-b border-orange/40 pb-0.5 font-sans text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-orange no-underline hover:border-orange transition-colors duration-200"
          >
            Visit Developer Hub <LuArrowRight />
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="border border-white/5 bg-surface p-10"
        >
          <div className="mb-6 font-mono text-xxs uppercase tracking-[0.2em] text-orange">
            Coming Soon
          </div>
          <ul className="space-y-4">
            {[
              "Gesture & Haptic API",
              "Hardware SDK",
              "Robotics Integration Guides",
              "Developer Community",
              "Sample Code Libraries",
            ].map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }}
                className="flex items-center gap-3"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
                <span className="font-mono text-xxs text-white/50">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};
