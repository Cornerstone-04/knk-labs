"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { LuArrowRight, LuCheck } from "react-icons/lu";
import PopGloveLoader from "@/components/layout/pop-glove-loader";
import {
  popGloveColours,
  SIDEWAYS_IDS,
  handOptions,
  gloveStyles,
  popGloveFeatures,
  preorderDiscount,
  popGloveHistory,
} from "@/lib/pop-glove";

export default function PopGlovePage() {
  const [selectedHand, setSelectedHand] = useState<"left" | "right">("right");
  const [selectedColourId, setSelectedColourId] = useState<string>("03");
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);
  const [loaderComplete, setLoaderComplete] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const colourSelectorRef = useRef<HTMLDivElement>(null);

  // Update colour when hand changes
  useEffect(() => {
    const availableColours = handOptions[selectedHand].availableColourIds;
    if (!availableColours.includes(selectedColourId)) {
      setSelectedColourId(availableColours[0]);
    }
  }, [selectedHand, selectedColourId]);

  const availableColours = popGloveColours.filter((c) =>
    handOptions[selectedHand].availableColourIds.includes(c.id),
  );

  const selectedColour = popGloveColours.find((c) => c.id === selectedColourId);
  const isClockSideways = SIDEWAYS_IDS.includes(selectedColourId);

  const scrollToConfigurator = () => {
    colourSelectorRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  if (!loaderComplete) {
    return <PopGloveLoader onComplete={() => setLoaderComplete(true)} />;
  }

  return (
    <div ref={containerRef} className="bg-bg">
      {/* ── HERO SECTION ── */}
      <section className="min-h-svh border-b border-border px-6 pt-24 pb-12 md:px-12 md:pb-16 flex flex-col justify-center relative overflow-hidden">
        <div className="mx-auto max-w-7xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: Content */}
            <div className="flex flex-col justify-center">
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="font-mono text-xxs tracking-[0.3em] text-orange normal-case mb-4"
              >
                KNK Labs · P.O.P Collection
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <h1 className="font-heading font-black text-[clamp(4rem,12vw,10rem)] leading-none tracking-[-0.02em] text-white normal-case mb-6">
                  P.O.P
                  <br />
                  Glove
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-sans text-[clamp(0.9rem,2vw,1.1rem)] text-white/60 max-w-[42ch] leading-relaxed mb-8"
              >
                Luxury driving gloves with a built-in Swatch Pop Royal. Time
                exactly where you need it.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  href="/waitlist"
                  className="inline-block bg-orange px-8 py-[0.9rem] font-sans text-[0.8rem] font-semibold normal-case tracking-[0.08em] text-black no-underline transition-opacity duration-200 hover:opacity-85"
                >
                  Pre-Order Now
                </Link>
                <button
                  onClick={scrollToConfigurator}
                  className="inline-block border border-white/15 px-8 py-[0.9rem] font-sans text-[0.8rem] font-semibold normal-case tracking-[0.08em] text-white/60 no-underline transition-all duration-200 hover:border-white/40 hover:text-white bg-transparent cursor-pointer"
                >
                  Configure Your Glove
                </button>
              </motion.div>
            </div>

            {/* Right: Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative flex items-center justify-center bg-surface border border-border aspect-square min-h-96 overflow-hidden group"
            >
              <Image
                src=""
                alt="P.O.P Glove"
                fill
                priority
                sizes="(max-width: 640px) 88vw, (max-width: 1024px) 70vw, 42vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── HISTORY SECTION ── */}
      <section className="border-b border-border px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="font-mono text-xxs tracking-[0.3em] text-orange normal-case mb-6">
                {popGloveHistory.eyebrow}
              </p>
              <h2 className="font-heading font-black text-[clamp(2.5rem,6vw,4.5rem)] leading-tight tracking-[-0.02em] text-white normal-case mb-10">
                {popGloveHistory.headline}
              </h2>
              <div className="space-y-6">
                {popGloveHistory.body.map((paragraph, idx) => (
                  <p
                    key={idx}
                    className="font-sans text-[0.95rem] leading-[1.8] text-white/60"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>

            {/* Right: Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative flex items-center justify-center bg-surface border border-border aspect-square overflow-hidden group"
            >
              <Image
                src=""
                alt="P.O.P Glove Design"
                fill
                sizes="(max-width: 640px) 88vw, (max-width: 1024px) 70vw, 45vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── AVAILABLE STYLES SECTION (before configurator) ── */}
      <section className="border-b border-border px-6 py-24 md:px-12 md:py-32 bg-surface">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <p className="font-mono text-xxs tracking-[0.3em] text-orange normal-case mb-4">
              Style Options
            </p>
            <h2 className="font-heading font-black text-[clamp(2rem,5vw,3.5rem)] leading-tight tracking-[-0.02em] text-white normal-case">
              Choose Your Edition
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {gloveStyles.map((style, idx) => (
              <motion.div
                key={style.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group bg-bg border border-border p-10 hover:border-orange/40 hover:bg-bg/50 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start justify-between mb-6">
                  <h3 className="font-heading font-bold text-[1.3rem] text-white normal-case">
                    {style.label}
                  </h3>
                  <motion.div
                    className="w-8 h-8 border border-white/20 group-hover:border-orange transition-colors duration-300 flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <motion.div
                      className="w-4 h-4 border-2 border-orange opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ borderRadius: "2px" }}
                    />
                  </motion.div>
                </div>
                <p className="font-sans text-[0.9rem] text-white/60 leading-relaxed">
                  {style.note}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GLOVE CONFIGURATOR SECTION ── */}
      <section
        ref={colourSelectorRef}
        className="border-b border-border px-6 py-24 md:px-12 md:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-20"
          >
            <p className="font-mono text-xxs tracking-[0.3em] text-orange normal-case mb-4">
              Build Your P.O.P Glove
            </p>
            <h2 className="font-heading font-black text-[clamp(2rem,5vw,3.5rem)] leading-tight tracking-[-0.02em] text-white normal-case">
              Configure Your Colourway
            </h2>
          </motion.div>

          {/* Hand Selection: Premium Pill Buttons */}
          <div className="mb-24">
            <p className="font-mono text-xxs text-white/50 tracking-widest normal-case mb-8">
              STEP 1: SELECT HAND
            </p>
            <div className="flex gap-4">
              {(["left", "right"] as const).map((hand) => (
                <motion.button
                  key={hand}
                  onClick={() => setSelectedHand(hand)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`px-10 py-4 font-sans text-[0.85rem] font-semibold normal-case tracking-[0.08em] transition-all duration-300 ${
                    selectedHand === hand
                      ? "bg-orange text-black shadow-lg shadow-orange/20"
                      : "border border-white/20 text-white/70 hover:text-white hover:border-white/40 bg-surface/40"
                  }`}
                >
                  {handOptions[hand].label}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Colourway Selection: Premium Circular Swatches */}
          <div className="mb-24">
            <p className="font-mono text-xxs text-white/50 tracking-widest normal-case mb-8">
              STEP 2: SELECT COLOURWAY
            </p>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {availableColours.map((colour) => (
                <motion.button
                  key={colour.id}
                  onClick={() => setSelectedColourId(colour.id)}
                  className="flex flex-col items-center gap-4 group"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Circular swatch with ring indicator */}
                  <div className="relative w-20 h-20 md:w-24 md:h-24">
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-orange opacity-0"
                      animate={{
                        opacity: selectedColourId === colour.id ? 1 : 0,
                        scale: selectedColourId === colour.id ? 1 : 0.9,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.div
                      style={{ backgroundColor: colour.hex }}
                      className="w-full h-full rounded-full border border-white/10 group-hover:border-white/40 transition-colors duration-300 shadow-lg shadow-black/30"
                      whileHover={{ boxShadow: `0 0 24px ${colour.hex}40` }}
                    />
                  </div>
                  {/* Label */}
                  <div className="text-center">
                    <p className="font-mono text-xxxs text-white/60 group-hover:text-white transition-colors normal-case line-clamp-2 leading-tight max-w-20">
                      {colour.name.split(" /")[0]}
                    </p>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Selected Configuration Detail Panel */}
          {selectedColour && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16 mb-24 border-t border-white/10 pt-20"
            >
              {/* Left: Large Product Preview */}
              <div className="lg:col-span-1">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5 }}
                  className="relative flex items-center justify-center bg-surface border border-border aspect-square overflow-hidden group"
                >
                  <Image
                    src={selectedHand === "left" ? "" : ""}
                    alt={`${selectedColour.name} P.O.P Glove`}
                    fill
                    sizes="(max-width: 640px) 88vw, (max-width: 1024px) 70vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </motion.div>
              </div>

              {/* Center: Configuration Details */}
              <div className="lg:col-span-1 flex flex-col justify-between">
                <div>
                  <p className="font-mono text-xxxs text-white/40 mb-3 tracking-widest normal-case">
                    Selected Edition
                  </p>
                  <h3 className="font-heading font-black text-[clamp(1.5rem,3vw,2.5rem)] leading-tight tracking-[-0.02em] text-white normal-case mb-8">
                    {selectedColour.edition}
                  </h3>

                  <div className="space-y-6 border-y border-white/10 py-8">
                    {[
                      {
                        label: "Colourway",
                        value: selectedColour.name,
                      },
                      {
                        label: "Hand",
                        value: handOptions[selectedHand].label,
                      },
                      {
                        label: "Watch Orientation",
                        value: isClockSideways ? "Sideways" : "Upright",
                      },
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                      >
                        <p className="font-mono text-xxxs text-white/40 mb-2 tracking-[0.05em]">
                          {item.label}
                        </p>
                        <p className="font-sans text-[0.95rem] text-white">
                          {item.value}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Call to Action */}
              <div className="lg:col-span-1 flex flex-col justify-between">
                <div>
                  <p className="font-mono text-xxxs text-white/50 mb-6 tracking-widest normal-case">
                    READY TO ORDER?
                  </p>
                  <p className="font-sans text-[0.9rem] text-white/60 leading-relaxed mb-8">
                    Join the waitlist to secure your {selectedColour.edition}{" "}
                    P.O.P Glove with {preorderDiscount}% off for early
                    supporters.
                  </p>
                </div>
                <Link
                  href="/waitlist"
                  className="inline-flex items-center gap-3 bg-orange px-8 py-3 font-sans text-[0.85rem] font-semibold normal-case tracking-[0.08em] text-black no-underline transition-opacity duration-200 hover:opacity-85 group/cta w-full justify-center"
                >
                  Join Waitlist
                  <LuArrowRight className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* ── FEATURES SECTION (Sticky Layout) ── */}
      <section className="border-b border-border px-6 py-24 md:px-12 md:py-32 bg-surface">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            {/* Left: Sticky Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="sticky top-24 h-fit"
            >
              <div className="relative flex items-center justify-center bg-bg border border-border aspect-square overflow-hidden group">
                <Image
                  src=""
                  alt="P.O.P Glove Features"
                  fill
                  sizes="(max-width: 640px) 88vw, (max-width: 1024px) 70vw, 42vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>

            {/* Right: Feature List */}
            <div className="space-y-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="mb-12"
              >
                <p className="font-mono text-xxs tracking-[0.3em] text-orange normal-case mb-4">
                  Engineering Excellence
                </p>
                <h2 className="font-heading font-black text-[clamp(2rem,5vw,3.5rem)] leading-tight tracking-[-0.02em] text-white normal-case">
                  Engineered for Excellence
                </h2>
              </motion.div>

              {popGloveFeatures.map((feature, idx) => (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.08 }}
                  onClick={() =>
                    setHoveredFeature(
                      hoveredFeature === feature.id ? null : feature.id,
                    )
                  }
                  onMouseEnter={() => setHoveredFeature(feature.id)}
                  onMouseLeave={() => setHoveredFeature(null)}
                  className="group border-b border-white/10 py-8 cursor-pointer last:border-0"
                >
                  <div className="flex items-start gap-6 md:gap-8">
                    {/* Feature Number */}
                    <motion.div
                      animate={{
                        color:
                          hoveredFeature === feature.id
                            ? "rgb(249, 115, 22)"
                            : "rgb(255, 255, 255, 0.4)",
                      }}
                      className="shrink-0 font-heading font-black text-[1.5rem] md:text-[2rem] transition-colors duration-200"
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </motion.div>

                    {/* Feature Content */}
                    <div className="flex-1 min-w-0">
                      <motion.h3
                        animate={{
                          color:
                            hoveredFeature === feature.id
                              ? "rgb(255, 255, 255)"
                              : "rgb(255, 255, 255, 0.9)",
                        }}
                        className="font-heading font-bold text-[1.1rem] md:text-[1.25rem] normal-case mb-2 transition-colors duration-200"
                      >
                        {feature.title}
                      </motion.h3>
                      <motion.p
                        initial={false}
                        animate={{
                          height: hoveredFeature === feature.id ? "auto" : 0,
                          opacity: hoveredFeature === feature.id ? 1 : 0,
                          marginTop: hoveredFeature === feature.id ? 12 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="font-sans text-[0.9rem] text-white/60 leading-relaxed overflow-hidden"
                      >
                        {feature.desc}
                      </motion.p>
                    </div>

                    {/* Check Icon */}
                    <motion.div
                      animate={{
                        scale: hoveredFeature === feature.id ? 1 : 0.8,
                        opacity: hoveredFeature === feature.id ? 1 : 0.4,
                      }}
                      className="shrink-0 w-6 h-6 rounded-full border border-white/20 flex items-center justify-center group-hover:border-orange transition-colors duration-200"
                    >
                      <LuCheck className="w-4 h-4 text-orange" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA SECTION ── */}
      <section className="border-b border-border px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-heading font-black text-[clamp(2rem,6vw,4rem)] leading-tight tracking-[-0.02em] text-white normal-case mb-8">
              Ready for the Future of Driving?
            </h2>
            <p className="font-sans text-[0.95rem] text-white/60 max-w-[55ch] mx-auto mb-12">
              The P.O.P Glove is available for pre-order now. Join an exclusive
              community of drivers who demand both precision and style.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/waitlist"
                className="inline-block bg-orange px-10 py-4 font-sans text-[0.85rem] font-semibold normal-case tracking-[0.08em] text-black no-underline transition-opacity duration-200 hover:opacity-85"
              >
                Pre-Order Now
              </Link>
              <button
                onClick={scrollToConfigurator}
                className="inline-block border border-white/20 px-10 py-4 font-sans text-[0.85rem] font-semibold normal-case tracking-[0.08em] text-white no-underline transition-all duration-200 hover:border-white/50 hover:bg-white/5 cursor-pointer"
              >
                Build Your Custom P.O.P Glove
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
