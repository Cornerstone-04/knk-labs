import { motion } from "framer-motion";
import { bundle } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";

export const BundleSecction = () => {
  return (
    <section className="border-b border-border px-6 py-24 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-4 font-mono text-xxs tracking-[0.3em] normal-case text-orange">
            The Bundle
          </div>
          <h2 className="mb-6 font-heading font-black normal-case text-[clamp(2rem,5vw,4rem)] text-white">
            {bundle.tagline}
          </h2>
          <p className="mb-8 font-sans text-[0.9rem] leading-[1.85] text-white/50">
            {bundle.desc}
          </p>
          <div className="flex flex-wrap gap-2 mb-10">
            {bundle.includes.map((item) => (
              <span
                key={item}
                className="border border-white/10 px-3 py-1.5 font-mono text-xxs normal-case tracking-[0.15em] text-white/35"
              >
                {item}
              </span>
            ))}
          </div>
          <Link
            href="/waitlist"
            className="inline-flex items-center gap-2 bg-orange px-8 py-[0.9rem] font-sans text-[0.8rem] font-semibold normal-case tracking-[0.08em] text-black no-underline transition-opacity duration-200 hover:opacity-85"
          >
            Join the Waitlist <LuArrowRight />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex items-center justify-center bg-bg "
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/images/knk_dual_int_cutout.png"
              alt="KNK System — Tek Glove and Echo Glove"
              width={1200}
              height={900}
              className="h-auto w-full object-contain"
              loading="eager"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
