"use client";

type HandType = "left" | "right" | "fingerless";

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

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {(["left", "right", "fingerless"] as const).map((hand) => {
          const isSelected = selectedHand === hand;

          return (
            <button
              key={hand}
              type="button"
              onClick={() => onHandChange(hand)}
              className={`flex-1 border px-4 py-3 font-sans text-sm font-semibold normal-case transition-all ${
                isSelected
                  ? "border-orange bg-orange/10 text-orange"
                  : "border-white/20 text-white/60 hover:border-white/40"
              }`}
            >
              {hand === "left"
                ? "Left Hand"
                : hand === "right"
                  ? "Right Hand"
                  : "Fingerless"}
            </button>
          );
        })}
      </div>
    </div>
  );
}
