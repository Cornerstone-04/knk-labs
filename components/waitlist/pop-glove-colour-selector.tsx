"use client";

import { motion } from "motion/react";
import { popGloveColours } from "@/lib/pop-glove";

type PopGloveColourSelectorProps = {
  selectedColourId: string;
  availableColourIds: readonly string[];
  onColourChange: (colourId: string) => void;
};

export function PopGloveColourSelector({
  selectedColourId,
  availableColourIds,
  onColourChange,
}: PopGloveColourSelectorProps) {
  return (
    <div>
      <label className="mb-4 block font-mono text-xs normal-case tracking-[0.15em] text-white/60">
        Colourway
      </label>

      <div className="grid grid-cols-3 gap-3  md:grid-cols-4">
        {popGloveColours
          .filter((colour) => availableColourIds.includes(colour.id))
          .map((colour) => {
            const isSelected = colour.id === selectedColourId;

            return (
              <motion.button
                key={colour.id}
                type="button"
                onClick={() => onColourChange(colour.id)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                title={colour.name}
                className={`group flex min-w-0 items-center gap-3 border px-3 py-3 text-left transition-all duration-300 ${
                  isSelected
                    ? "border-orange bg-orange/10 shadow-[0_0_24px_rgba(249,115,22,0.08)]"
                    : "border-border bg-bg hover:border-white/30 hover:bg-white/3"
                }`}
              >
                <span
                  className={`relative size-10 shrink-0 border transition-all duration-300 ${
                    isSelected ? "border-orange" : "border-white/15"
                  }`}
                  style={{ backgroundColor: colour.hex }}
                >
                  {/* <span
                    className="absolute bottom-1 right-1 size-3 border border-black/40"
                    style={{ backgroundColor: colour.accent }}
                  /> */}

                  {isSelected && (
                    <span className="absolute -right-1 -top-1 size-2 bg-orange" />
                  )}
                </span>

                <span className="min-w-0">
                  <span className="block font-mono text-xxs md:text-xs tracking-[0.18em] text-white/35">
                    {colour.id}
                  </span>

                  <span
                    className={`block truncate font-sans text-xs md:text-sm transition-colors ${
                      isSelected
                        ? "text-white"
                        : "text-white/65 group-hover:text-white"
                    }`}
                  >
                    {colour.name}
                  </span>
                </span>
              </motion.button>
            );
          })}
      </div>
    </div>
  );
}
