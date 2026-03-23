"use client";

import { ProductPref } from "@/types";
import { WAITLIST_PRODUCT_OPTIONS } from "@/lib/waitlist-options";

type WaitlistProductPreferenceProps = {
  value: ProductPref;
  changeAction: (value: ProductPref) => void;
};

export const WaitlistProductPreference = ({
  value,
  changeAction,
}: WaitlistProductPreferenceProps) => {
  return (
    <div>
      <label className="mb-4 block font-mono text-xxs uppercase tracking-[0.2em] text-white/30">
        Product Preference *
      </label>

      <div className="flex flex-wrap gap-3">
        {WAITLIST_PRODUCT_OPTIONS.map((option) => {
          const selected = value === option.value;

          return (
            <button
              key={option.value}
              type="button"
              onClick={() => changeAction(option.value)}
              className={`border px-5 py-2.5 font-mono text-xxs uppercase tracking-[0.15em] transition-all duration-200 ${
                selected
                  ? "border-orange bg-orange/10 text-orange"
                  : "border-border bg-transparent text-white/40"
              }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};
