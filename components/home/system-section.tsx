import { LuArrowRight } from "react-icons/lu";
import { motion } from "motion/react";
import Link from "next/link";

export const SystemSection = () => {
  return (
    <section className="border-b border-border px-6 py-24 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-4 font-mono text-xxs tracking-[0.3em] uppercase text-orange">
            The KNK System
          </div>
          <h2 className="font-heading font-black text-[clamp(2rem,5vw,4rem)] text-white leading-none">
            One Hand
            <br />
            Wasn't Enough.
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <p className="font-sans text-[0.95rem] leading-[1.9] text-white/55 mb-6">
            At KNK Labs, we engineer intelligent wearables that merge human
            capability with machine precision. Our flagship products — Tek Glove
            and Echo Glove — are designed to work together as a complete system,
            each glove assigned to a hand with a specific purpose.
          </p>
          <p className="font-sans text-[0.95rem] leading-[1.9] text-white/55 mb-8">
            Left hand for data and control. Right hand for communication and
            awareness. Together, they give you total command from the palm of
            your hands.
          </p>
          <Link
            href="/about"
            className="border-b border-orange/40 pb-0.5 font-sans text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-orange no-underline hover:border-orange transition-colors duration-200 inline-flex items-center gap-2"
          >
            About KNK Labs <LuArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
