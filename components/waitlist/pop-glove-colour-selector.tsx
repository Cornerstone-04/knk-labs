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

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {popGloveColours.map((colour) => {
          const isAvailable = availableColourIds.includes(colour.id);
          const isSelected = colour.id === selectedColourId;

          return (
            <motion.button
              key={colour.id}
              type="button"
              onClick={() => onColourChange(colour.id)}
              whileHover={isAvailable ? { y: -3 } : undefined}
              whileTap={isAvailable ? { scale: 0.97 } : undefined}
              disabled={!isAvailable}
              title={
                isAvailable
                  ? colour.name
                  : `Not available for selected hand orientation`
              }
              className={`group flex items-center gap-3 border p-3 text-left transition-all duration-300 ${
                isSelected
                  ? "border-orange bg-orange/10"
                  : isAvailable
                    ? "border-border bg-bg hover:border-white/30 hover:bg-white/3"
                    : "cursor-not-allowed border-white/5 bg-bg opacity-35"
              }`}
            >
              <span
                className="relative h-10 w-full shrink-0 border border-white/15"
                style={{ backgroundColor: colour.hex }}
              >
                <span
                  className="absolute bottom-1 right-1 size-3 border border-black/40"
                  style={{ backgroundColor: colour.accent }}
                />
              </span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
