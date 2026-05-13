"use client";

import Image from "next/image";
import Link from "next/link";
import { forwardRef, useMemo, useState } from "react";
import { motion } from "motion/react";
import { LuArrowRight } from "react-icons/lu";
import {
  handOptions,
  popGloveColours,
  preorderDiscount,
  SIDEWAYS_IDS,
} from "@/lib/pop-glove";

type Hand = "left" | "right";

export const PopGloveConfigurator = forwardRef<HTMLElement>(
  function PopGloveConfigurator(_, ref) {
    const [selectedHand, setSelectedHand] = useState<Hand>("right");
    const [selectedColourId, setSelectedColourId] = useState("03");

    const availableColours = useMemo(() => {
      return popGloveColours.filter((colour) =>
        handOptions[selectedHand].availableColourIds.includes(colour.id),
      );
    }, [selectedHand]);

    const selectedColour =
      popGloveColours.find((colour) => colour.id === selectedColourId) ??
      availableColours[0];

    const isClockSideways = SIDEWAYS_IDS.includes(selectedColour.id);

    function handleHandChange(hand: Hand) {
      const firstAvailableColour = handOptions[hand].availableColourIds[0];

      setSelectedHand(hand);
      setSelectedColourId(firstAvailableColour);
    }

    return (
      <section
        ref={ref}
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
            <p className="mb-4 font-mono text-xxs tracking-[0.3em] text-orange normal-case">
              Build Your P.O.P Glove
            </p>

            <h2 className="font-heading text-[clamp(2rem,5vw,3.5rem)] font-black leading-tight tracking-[-0.02em] text-white normal-case">
              Configure Your Colourway
            </h2>
          </motion.div>

          <div className="mb-20">
            <p className="mb-8 font-mono text-xxs tracking-widest text-white/50 normal-case">
              STEP 1: SELECT HAND
            </p>

            <div className="flex flex-wrap gap-4">
              {(["left", "right"] as const).map((hand) => {
                const isActive = selectedHand === hand;

                return (
                  <motion.button
                    key={hand}
                    type="button"
                    onClick={() => handleHandChange(hand)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`px-10 py-4 font-sans text-[0.85rem] font-semibold tracking-[0.08em] transition-all duration-300 ${
                      isActive
                        ? "bg-orange text-black shadow-lg shadow-orange/20"
                        : "border border-white/20 bg-surface/40 text-white/70 hover:border-white/40 hover:text-white"
                    }`}
                  >
                    {handOptions[hand].label}
                  </motion.button>
                );
              })}
            </div>

            <p className="mt-5 max-w-2xl font-sans text-[0.9rem] leading-relaxed text-white/45">
              {handOptions[selectedHand].description}
            </p>
          </div>

          <div className="mb-24">
            <p className="mb-4 font-mono text-xxs tracking-[0.2em] text-white/20 normal-case">
              STEP 02 · COLOURWAY
            </p>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {availableColours.map((colour) => {
                const isActive = colour.id === selectedColour.id;

                return (
                  <button
                    key={colour.id}
                    type="button"
                    onClick={() => setSelectedColourId(colour.id)}
                    className={`group flex items-center gap-3 border px-4 py-3 text-left transition-all duration-300 ${
                      isActive
                        ? "border-orange bg-orange/10"
                        : "border-border bg-surface/40 hover:border-white/30 hover:bg-white/3"
                    }`}
                  >
                    <span
                      className="relative size-10 shrink-0 border border-white/15"
                      style={{ backgroundColor: colour.hex }}
                    >
                      <span
                        className="absolute bottom-1 right-1 size-3 border border-black/40"
                        style={{ backgroundColor: colour.accent }}
                      />
                    </span>

                    <span className="min-w-0">
                      <span className="block font-mono text-xxxs tracking-[0.18em] text-white/35">
                        {colour.id}
                      </span>

                      <span className="block truncate font-sans text-[0.8rem] text-white/70 transition-colors group-hover:text-white">
                        {colour.name}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <motion.div
            key={`${selectedHand}-${selectedColour.id}`}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="grid grid-cols-1 gap-10 border-t border-white/10 pt-20 lg:grid-cols-3 lg:gap-16"
          >
            <div>
              <div className="group relative aspect-square overflow-hidden border border-border bg-surface">
                <Image
                  src={selectedColour.image}
                  alt={`${selectedColour.name} P.O.P Glove`}
                  fill
                  sizes="(max-width: 640px) 88vw, (max-width: 1024px) 70vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <p className="mb-3 font-mono text-xxxs tracking-widest text-white/40 normal-case">
                  Selected Edition
                </p>

                <h3 className="mb-8 font-heading text-[clamp(1.5rem,3vw,2.5rem)] font-black leading-tight tracking-[-0.02em] text-white normal-case">
                  {selectedColour.edition}
                </h3>

                <div className="space-y-6 border-y border-white/10 py-8">
                  <ConfigRow label="Colourway" value={selectedColour.name} />
                  <ConfigRow
                    label="Hand"
                    value={handOptions[selectedHand].label}
                  />
                  <ConfigRow
                    label="Watch Orientation"
                    value={isClockSideways ? "Sideways" : "Upright"}
                  />
                  <ConfigRow
                    label="Style"
                    value={handOptions[selectedHand].style}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <p className="mb-6 font-mono text-xxxs tracking-widest text-white/50 normal-case">
                  READY TO ORDER?
                </p>

                <p className="mb-8 font-sans text-[0.9rem] leading-relaxed text-white/60">
                  Join the waitlist to secure your {selectedColour.edition}{" "}
                  P.O.P Glove with {preorderDiscount}% off for early supporters.
                </p>
              </div>

              <Link
                href="/waitlist"
                className="group inline-flex w-full items-center justify-center gap-3 bg-orange px-8 py-3 font-sans text-[0.85rem] font-semibold tracking-[0.08em] text-black no-underline transition-opacity duration-200 hover:opacity-85"
              >
                Join Waitlist
                <LuArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    );
  },
);

type ConfigRowProps = {
  label: string;
  value: string;
};

function ConfigRow({ label, value }: ConfigRowProps) {
  return (
    <div>
      <p className="mb-2 font-mono text-xxxs tracking-[0.05em] text-white/40">
        {label}
      </p>
      <p className="font-sans text-[0.95rem] text-white">{value}</p>
    </div>
  );
}
