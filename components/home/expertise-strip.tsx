import { LuArrowRight } from "react-icons/lu";
import { motion } from "motion/react";
import Link from "next/link";
import { about } from "@/lib/data";

export const ExpertiseStrip = () => {
  return (
    <section className="border-b border-border px-6 py-24 md:px-12 bg-surface">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4 font-mono text-xxs tracking-[0.3em] normal-case text-orange"
        >
          Built on
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading font-black text-[clamp(2rem,5vw,4rem)] text-white mb-16"
        >
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
              <div className="mb-4 font-mono text-xxs tracking-[0.2em] text-orange">
                0{i + 1}
              </div>
              <h3 className="mb-3 font-heading font-bold text-[1.3rem] text-white uppercase">
                {item.title}
              </h3>
              <p className="font-sans text-[0.8rem] leading-[1.75] text-white/40">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 text-right"
        >
          <Link
            href="/about"
            className="inline-flex items-center gap-2 font-mono text-xxs tracking-[0.15em] normal-case text-white/40 border-b border-white/20 pb-0.5 no-underline hover:text-white hover:border-white/50 transition-all duration-200"
          >
            See All Expertise <LuArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
