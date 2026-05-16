"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { waitlist } from "@/lib/data";
import { ProductPref } from "@/types";
import { useWaitlistSubmit } from "@/hooks/use-waitlist-submit";
import { WaitlistField } from "./waitlist-field";
import { WaitlistProductPreference } from "./waitlist-product-preference";

type WaitlistFormProps = {
  successAction: () => void;
};

export function WaitlistForm({ successAction }: WaitlistFormProps) {
  const [pref, setPref] = useState<ProductPref>("");
  const { loading, error, setError, submitWaitlist } = useWaitlistSubmit();

  async function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!pref) {
      setError("Please select a product preference.");
      return;
    }

    const formData = new FormData(event.currentTarget);

    const fullName = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const country = String(formData.get("country") ?? "").trim();

    if (!fullName || !email || !country) {
      setError("Please fill in all required fields.");
      return;
    }

    try {
      await submitWaitlist({
        formType: "knk",
        fullName,
        email,
        country,
        productInterest: pref,
      });

      successAction();
    } catch {
      // error is already handled by the hook
    }
  }

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

      {error && (
        <p className="border border-red-500/20 bg-red-500/10 px-4 py-3 font-sans text-sm text-red-300">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={isDisabled}
        className={`border-none px-8 py-4 font-sans text-[0.85rem] font-semibold normal-case tracking-[0.08em] text-black transition-opacity ${
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
