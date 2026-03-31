import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import { useRef } from "react";
import { site } from "@/lib/data";

export const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  return (
    <section
      ref={heroRef}
      className="relative min-h-svh flex items-center overflow-hidden border-b border-border"
    >
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] rounded-full bg-[radial-gradient(circle,rgba(249,115,22,0.07)_0%,transparent_65%)] z-0" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-[linear-gradient(to_top,#000_0%,transparent_100%)] z-1" />

      <motion.div
        style={{ opacity: heroOpacity, y: heroY }}
        className="relative z-10 w-full px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center pt-24 pb-16"
      >
        <div>
          {/*<motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-mono text-xxs tracking-[0.3em] normal-case text-orange mb-6"
          >
            King Krown Labs — Wearable Technology
          </motion.p>*/}

          <h1 className="font-heading font-black normal-case text-[clamp(3.5rem,10vw,8rem)] leading-[0.9] tracking-[-0.02em] text-white mb-6">
            {["Innovation", "at Your"].map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.3 + i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="block"
              >
                {word}
              </motion.span>
            ))}
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="block text-orange"
            >
              Fingertips.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="font-sans text-base leading-relaxed text-white/50 max-w-[42ch] mb-10"
          >
            {site.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/waitlist"
              className="font-sans font-semibold text-[0.8rem] tracking-[0.08em] normal-case bg-orange text-black px-8 py-[0.9rem] no-underline transition-opacity duration-200 hover:opacity-85"
            >
              Join the Waitlist
            </Link>
            <Link
              href="/products"
              className="font-sans font-medium text-[0.8rem] tracking-[0.08em] normal-case text-white/60 border border-white/15 px-8 py-[0.9rem] no-underline transition-all duration-200 hover:text-white hover:border-white/40"
            >
              Explore Products
            </Link>
          </motion.div>
        </div>

        {/* Dual-hand render */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex justify-center"
        >
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="relative">
              <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[60%] h-[30%] bg-orange/15 blur-3xl rounded-full pointer-events-none" />
              {/*<Image
                src="/images/knk_dual_angle_cutout.png"
                alt="Tek Glove and Echo Glove — The KNK System"
                width={560}
                height={480}
                className="object-contain max-w-full relative z-10"
                priority
              />*/}
              <Image
                src="/images/knk_dual_angle_cutout.png"
                alt="KNK Gloves — Tek Glove and Echo Glove"
                width={1200}
                height={900}
                className="h-auto w-full object-contain z-10"
                priority
                loading="eager"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none z-10"
      >
        <span className="font-mono text-xxs tracking-[0.25em] normal-case text-white/25">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-linear-to-b from-orange/60 to-transparent"
        />
      </motion.div>
    </section>
  );
};
