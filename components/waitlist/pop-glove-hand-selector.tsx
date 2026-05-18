"use client";

import { HandType } from "@/lib/pop-glove";

type PopGloveHandSelectorProps = {
  selectedHand: HandType;
  onHandChange: (hand: HandType) => void;
};

export function PopGloveHandSelector({
  selectedHand,
  onHandChange,
}: PopGloveHandSelectorProps) {
  return (
    <div>
      <label className="mb-4 block font-mono text-xs normal-case tracking-[0.15em] text-white/60">
        Hand Orientation
      </label>

      <div className="grid grid-cols-2 gap-3">
        {(["left", "right"] as const).map((hand) => {
          const isSelected = selectedHand === hand;

          return (
            <button
              key={hand}
              type="button"
              onClick={() => onHandChange(hand)}
              className={`px-10 py-4 font-sans text-[0.85rem] font-semibold tracking-[0.08em] transition-all duration-300 ${
                isSelected
                  ? "bg-orange text-black shadow-lg shadow-orange/20"
                  : "border border-white/20 bg-surface/40 text-white/70 hover:border-white/40 hover:text-white"
              }`}
            >
              {hand === "left" ? "Left Hand" : "Right Hand"}
            </button>
          );
        })}
      </div>
    </div>
  );
}
