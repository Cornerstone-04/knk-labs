"use client";

import { handOptions, preorderDiscount } from "@/lib/pop-glove";

type HandType = "left" | "right" | "fingerless";

type PopGloveColour = {
  id: string;
  name: string;
  edition: string;
  hex: string;
  accent: string;
};

type PopGloveConfigurationSummaryProps = {
  selectedColour: PopGloveColour;
  selectedHand: HandType;
  isClockSideways: boolean;
};

export function PopGloveConfigurationSummary({
  selectedColour,
  selectedHand,
  isClockSideways,
}: PopGloveConfigurationSummaryProps) {
  return (
    <div className="border-t border-white/10 pt-8">
      <p className="mb-4 font-mono text-xs tracking-widest text-white/50">
        YOUR CONFIGURATION
      </p>

      <div className="space-y-3">
        <SummaryRow label="Colourway" value={selectedColour.name} />
        <SummaryRow label="Edition" value={selectedColour.edition} />
        <SummaryRow label="Hand" value={handOptions[selectedHand].label} />
        <SummaryRow
          label="Watch Orientation"
          value={
            selectedHand === "fingerless"
              ? "Dual-Hand Set"
              : isClockSideways
                ? "Sideways"
                : "Upright"
          }
        />

        <div className="flex items-center justify-between border-t border-white/10 pt-3">
          <span className="text-white/50">Early Bird Discount</span>
          <span className="font-semibold text-orange">
            {preorderDiscount}% off
          </span>
        </div>
      </div>
    </div>
  );
}

type SummaryRowProps = {
  label: string;
  value: string;
};

function SummaryRow({ label, value }: SummaryRowProps) {
  return (
    <div className="flex items-center justify-between gap-6 text-sm">
      <span className="text-white/70">{label}</span>
      <span className="text-right font-semibold text-white">{value}</span>
    </div>
  );
}
