"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { waitlist } from "@/lib/data";
import { ProductPref } from "@/types";
import { WaitlistField } from "./waitlist-field";
import { WaitlistProductPreference } from "./waitlist-product-preference";

type WaitlistFormProps = {
  successAction: () => void;
};

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function WaitlistForm({ successAction }: WaitlistFormProps) {
  const [loading, setLoading] = useState(false);
  const [pref, setPref] = useState<ProductPref>("");

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!pref) return;

    try {
      setLoading(true);
      await delay(600);
      successAction();
    } finally {
      setLoading(false);
    }
  };

  const isDisabled = loading || !pref;

  return (
    <motion.form
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      onSubmit={handleSubmit}
      className="flex flex-col gap-10"
    >
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

      <WaitlistProductPreference value={pref} changeAction={setPref} />

      <WaitlistField
        label="Country *"
        name="country"
        type="text"
        required
        placeholder="Your country"
      />

      <button
        type="submit"
        disabled={isDisabled}
        className={`border-none px-8 py-4 font-sans text-[0.85rem] font-semibold uppercase tracking-[0.08em] text-black transition-opacity ${
          isDisabled
            ? "cursor-not-allowed bg-orange/40"
            : "cursor-pointer bg-orange hover:opacity-85"
        }`}
      >
        {loading ? "Submitting..." : "Join the Waitlist →"}
      </button>

      <p className="text-center font-mono text-xxs text-white/25">
        {waitlist.reassurance}
      </p>
    </motion.form>
  );
}
