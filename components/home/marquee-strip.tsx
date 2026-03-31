"use client";

import Marquee from "react-fast-marquee";

const ITEMS = [
  "One System. Two Gloves.",
  "Left Hand · Tek Glove",
  "Right Hand · Echo Glove",
  "Smart Watch Mount",
  "Haptic Feedback",
  "Gesture Intelligence",
  "Predictive Analytics",
  "AR/VR Interaction",
  "Personal Security",
];

export const MarqueeStrip = () => {
  return (
    <div className="overflow-hidden border-b border-border bg-surface py-5">
      <Marquee autoFill speed={25} gradient={false} pauseOnHover={false}>
        {ITEMS.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="mr-16 shrink-0 font-mono text-xxs tracking-[0.25em] normal-case text-white/50"
          >
            <span className="mr-4 text-orange">✦</span>
            {item}
          </span>
        ))}
      </Marquee>
    </div>
  );
};
