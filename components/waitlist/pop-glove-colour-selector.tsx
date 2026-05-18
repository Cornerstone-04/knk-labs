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
                className={`group flex items-center gap-3 border p-2 focus:ring-1 focus:ring-orange text-left transition-all duration-300 ${
                  isSelected
                    ? "border-orange bg-orange/10"
                    : "border-border bg-surface/40 hover:border-white/30 hover:bg-white/3"
                }`}
              >
                <span
                  className="relative size-8 shrink-0 border border-white/15"
                  style={{ backgroundColor: colour.hex }}
                ></span>

                <span className="min-w-0">
                  <span className="block font-mono text-xxs md:text-xs text-white/35">
                    {colour.id}
                  </span>

                  <span className="block truncate font-sans text-xs md:text-sm text-white/70 transition-colors group-hover:text-white">
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
