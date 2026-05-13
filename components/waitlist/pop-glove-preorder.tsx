"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import {
  popGloveColours,
  handOptions,
  preorderDiscount,
  SIDEWAYS_IDS,
} from "@/lib/pop-glove";
import { WaitlistField } from "./waitlist-field";

type HandType = "left" | "right";

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function PopGlovePreorder() {
  const [selectedHand, setSelectedHand] = useState<HandType>("right");
  const [selectedColourId, setSelectedColourId] = useState("03");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const selectedColour = popGloveColours.find(
    (c) => c.id === selectedColourId,
  )!;
  const isClockSideways = SIDEWAYS_IDS.includes(selectedColourId);
  const availableColours = handOptions[selectedHand].availableColourIds;

  const handleColourClick = (id: string) => {
    if (availableColours.includes(id)) {
      setSelectedColourId(id);
    }
  };

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);
      await delay(600);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="rounded border border-orange/30 bg-orange/5 p-8 text-center"
      >
        <h3 className="mb-3 font-heading text-xl font-bold text-white">
          Pre-Order Registered
        </h3>
        <p className="font-sans text-sm text-white/70">
          Your P.O.P Glove configuration has been saved. We&apos;ll be in touch
          with pre-order details and pricing for your selected{" "}
          <span className="text-orange">{selectedColour.name}</span> colourway
          soon.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="border border-white/5 bg-surface p-8 md:p-12"
    >
      {/* Header */}
      <div className="mb-12 border-b border-white/10 pb-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-2 font-mono text-xxs tracking-[0.2em] text-orange"
        >
          Limited Edition Drop
        </motion.div>
        <h2 className="mb-4 font-heading text-[clamp(2rem,6vw,3.5rem)] font-black normal-case leading-[0.95] text-white">
          Configure Your P.O.P
        </h2>
        <p className="max-w-2xl font-sans text-sm text-white/50">
          Choose your hand orientation and colourway. Pre-order early and lock
          in{" "}
          <span className="text-orange font-semibold">
            {preorderDiscount}% off
          </span>{" "}
          the full retail price. Limited to 8 editions.
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-2">
        {/* Left: Configuration */}
        <div className="flex flex-col gap-12">
          {/* Hand Selection */}
          <div>
            <label className="mb-4 block font-mono text-xs normal-case tracking-[0.15em] text-white/60">
              Hand Orientation
            </label>
            <div className="flex gap-3">
              {(["left", "right"] as const).map((hand) => (
                <button
                  key={hand}
                  onClick={() => setSelectedHand(hand)}
                  className={`flex-1 border px-4 py-3 font-sans text-sm font-semibold normal-case transition-all ${
                    selectedHand === hand
                      ? "border-orange bg-orange/10 text-orange"
                      : "border-white/20 text-white/60 hover:border-white/40"
                  }`}
                >
                  {hand === "left" ? "Left" : "Right"} Hand
                </button>
              ))}
            </div>
          </div>

          {/* Colourway Selection */}
          <div>
            <label className="mb-4 block font-mono text-xs normal-case tracking-[0.15em] text-white/60">
              Colourway
            </label>
            <div className="grid grid-cols-4 gap-3">
              {popGloveColours.map((colour) => {
                const isAvailable = availableColours.includes(colour.id);
                const isSelected = colour.id === selectedColourId;

                return (
                  <motion.button
                    key={colour.id}
                    onClick={() => handleColourClick(colour.id)}
                    whileHover={isAvailable ? { scale: 1.08 } : {}}
                    whileTap={isAvailable ? { scale: 0.95 } : {}}
                    disabled={!isAvailable}
                    className={`relative aspect-square border-2 transition-all ${
                      isSelected
                        ? "border-orange"
                        : isAvailable
                          ? "border-white/20 hover:border-white/40"
                          : "border-white/5 opacity-40 cursor-not-allowed"
                    }`}
                    title={
                      isAvailable
                        ? colour.name
                        : `Not available for ${selectedHand} hand`
                    }
                  >
                    <div
                      className="absolute inset-0"
                      style={{ backgroundColor: colour.hex }}
                    />
                    {isSelected && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                        <svg
                          className="h-5 w-5 text-orange"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    )}
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Configuration Summary */}
          <div className="border-t border-white/10 pt-8">
            <p className="mb-4 font-mono text-xs text-white/50 tracking-widest">
              YOUR CONFIGURATION
            </p>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-white/70">Colourway</span>
                <span className="font-semibold text-white">
                  {selectedColour.name}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/70">Edition</span>
                <span className="font-semibold text-white">
                  {selectedColour.edition}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/70">Hand</span>
                <span className="font-semibold text-white">
                  {handOptions[selectedHand].label}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/70">Watch Orientation</span>
                <span className="font-semibold text-white">
                  {isClockSideways ? "Sideways" : "Upright"}
                </span>
              </div>
              <div className="border-t border-white/10 pt-3 flex items-center justify-between">
                <span className="text-white/50">Early Bird Discount</span>
                <span className="font-semibold text-orange">
                  {preorderDiscount}% off
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div className="flex flex-col gap-8">
          {/* Preview Image */}
          <div className="relative aspect-square border border-white/10 overflow-hidden bg-black/20">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 30% 30%, rgba(249, 115, 22, 0.1), transparent)",
              }}
            />
            <Image
              src="/images/pop-glove-hero.jpg"
              alt="P.O.P Glove"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <WaitlistField
              label="Full Name *"
              name="name"
              type="text"
              required
              placeholder="Your name"
            />

            <WaitlistField
              label="Email Address *"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
            />

            <WaitlistField
              label="Country *"
              name="country"
              type="text"
              required
              placeholder="Your country"
            />

            <div className="border-t border-white/10 pt-6">
              <p className="mb-3 text-xs text-white/40">
                By pre-ordering, you agree to be notified when the P.O.P Glove
                launches and will receive exclusive early-bird pricing.
              </p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`border-none px-8 py-4 font-sans text-[0.85rem] font-semibold normal-case tracking-[0.08em] text-black transition-opacity ${
                loading
                  ? "cursor-not-allowed bg-orange/40"
                  : "cursor-pointer bg-orange hover:opacity-85"
              }`}
            >
              {loading ? "Securing Pre-Order..." : "Reserve Your P.O.P Glove →"}
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}
