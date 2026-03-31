import { LuArrowRight } from "react-icons/lu";
import { motion } from "motion/react";
import Link from "next/link";

export const CTAStrip = () => {
  return (
    <section className="px-6 py-32 text-center">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-xxs tracking-[0.3em] normal-case text-orange mb-6">
            Limited Availability
          </p>
          <h2 className="font-heading normal-case font-black text-[clamp(2.5rem,8vw,6rem)] text-white mb-6">
            Be First.
            <br />
            <span className="text-orange">Be Ahead.</span>
          </h2>
          <p className="font-sans text-[0.9rem] leading-[1.8] text-white/40 mb-10">
            Join the priority waitlist for early access to Tek Glove, Echo
            Glove, or the full KNK System bundle.
          </p>
          <Link
            href="/waitlist"
            className="font-sans font-semibold text-[0.85rem] tracking-[0.08em] normal-case bg-orange text-black px-10 py-4 inline-flex items-center gap-2 no-underline transition-opacity duration-200 hover:opacity-85"
          >
            Join the Waitlist <LuArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
