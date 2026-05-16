import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { LuArrowRight } from "react-icons/lu";

export const PopGloveStrip = () => {
  return (
    <section className="overflow-x-clip border-b border-border bg-bg px-6 py-24 md:px-12">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="min-w-0"
        >
          <p className="mb-4 font-mono text-xxs tracking-[0.3em] text-orange normal-case">
            New P.O.P Collection
          </p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading mb-6 font-black normal-case text-[clamp(2rem,5vw,4rem)] text-white"
          >
            Time.
            <br />
            <span className="text-orange">Repositioned.</span>
          </motion.h2>

          <p className="mb-8 font-sans text-[0.9rem] leading-[1.85] text-white/50">
            The P.O.P Glove transforms the AP x Swatch Royal Pop into a
            driver-facing wearable interface — placing time directly where
            motion, control, and visibility meet.
          </p>

          <div className="mb-10 flex flex-wrap gap-2">
            {["Royal Pop Dock", "Driving Interface", "Limited First Run"].map(
              (item) => (
                <span
                  key={item}
                  className="border border-white/10 px-3 py-1.5 font-mono text-xxs tracking-[0.15em] text-white/35 normal-case"
                >
                  {item}
                </span>
              ),
            )}
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/pop-glove"
              className="inline-flex items-center gap-2 bg-orange px-8 py-[0.9rem] font-sans text-[0.8rem] font-semibold tracking-[0.08em] text-black no-underline transition-opacity duration-200 hover:opacity-85"
            >
              Explore P.O.P Glove <LuArrowRight />
            </Link>

            <Link
              href="/waitlist"
              className="inline-flex items-center gap-2 border border-white/15 px-8 py-[0.9rem] font-sans text-[0.8rem] font-semibold tracking-[0.08em] text-white/60 no-underline transition-all duration-200 hover:border-white/40 hover:text-white"
            >
              Join Waitlist
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative min-h-105 overflow-hidden border border-border bg-surface sm:min-h-130 lg:min-h-155"
        >
          <Image
            src="/images/pop-glove/brown-pop-watch.jpg"
            alt="P.O.P Glove"
            fill
            sizes="(max-width: 1024px) 92vw, 58vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent" />

          <div className="absolute bottom-5 left-5 right-5 border-t border-white/10 pt-4 sm:bottom-8 sm:left-8 sm:right-8">
            <p className="font-mono text-xxs tracking-[0.25em] text-orange normal-case">
              P.O.P Glove System
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
