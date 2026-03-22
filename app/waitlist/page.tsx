"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { waitlist } from "@/lib/data";

type ProductPref = "tek-glove" | "echo-glove" | "both" | "";

export default function WaitlistPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [pref, setPref] = useState<ProductPref>("");

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 600));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="min-h-svh bg-bg pt-16">
      <div className="px-6 py-20">
        <div className="mx-auto max-w-2xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 font-mono text-xxs uppercase tracking-[0.3em] text-orange"
          >
            Limited Availability
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-4 font-heading text-[clamp(3rem,9vw,6rem)] leading-[0.9] font-black uppercase text-white"
          >
            Be First.
            <br />
            <span className="text-orange">Be Ahead.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-4 font-sans text-[0.9rem] leading-[1.8] text-white/50"
          >
            {waitlist.subheadline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12 font-sans text-[0.85rem] leading-[1.8] text-white/30"
          >
            {waitlist.note}
          </motion.p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="py-16 text-center"
            >
              <div className="mb-6 text-[3rem]">✦</div>
              <h2 className="mb-4 font-heading text-[2.5rem] font-black uppercase text-white">
                You're on the list.
              </h2>
              <p className="font-sans text-[0.85rem] leading-[1.8] text-white/40">
                We'll be in touch as soon as your spot is ready.
                <br />
                Stay sharp.
              </p>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              onSubmit={handleSubmit}
              className="flex flex-col gap-10"
            >
              <div>
                <label className="mb-2 block font-mono text-xxs uppercase tracking-[0.2em] text-white/30">
                  Full Name *
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full border-b border-border bg-transparent py-3 font-sans text-[0.85rem] text-white outline-none transition-colors placeholder:text-white/25 focus:border-orange"
                />
              </div>

              <div>
                <label className="mb-2 block font-mono text-xxs uppercase tracking-[0.2em] text-white/30">
                  Email Address *
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full border-b border-border bg-transparent py-3 font-sans text-[0.85rem] text-white outline-none transition-colors placeholder:text-white/25 focus:border-orange"
                />
              </div>

              <div>
                <label className="mb-4 block font-mono text-xxs uppercase tracking-[0.2em] text-white/30">
                  Product Preference *
                </label>
                <div className="flex flex-wrap gap-3">
                  {[
                    { value: "tek-glove", label: "Tek Glove" },
                    { value: "echo-glove", label: "Echo Glove" },
                    { value: "both", label: "KNK System Bundle" },
                  ].map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => setPref(opt.value as ProductPref)}
                      className={`border px-5 py-2.5 font-mono text-xxs uppercase tracking-[0.15em] transition-all duration-200 ${pref === opt.value ? "border-orange bg-orange/10 text-orange" : "border-border bg-transparent text-white/40"}`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="mb-2 block font-mono text-xxs uppercase tracking-[0.2em] text-white/30">
                  Country *
                </label>
                <input
                  name="country"
                  type="text"
                  required
                  placeholder="Your country"
                  className="w-full border-b border-border bg-transparent py-3 font-sans text-[0.85rem] text-white outline-none transition-colors placeholder:text-white/25 focus:border-orange"
                />
              </div>

              <button
                type="submit"
                disabled={loading || !pref}
                className={`border-none px-8 py-4 font-sans text-[0.85rem] font-semibold uppercase tracking-[0.08em] text-black transition-opacity ${loading || !pref ? "cursor-not-allowed bg-orange/40" : "cursor-pointer bg-orange hover:opacity-85"}`}
              >
                {loading ? "Submitting..." : "Join the Waitlist →"}
              </button>

              <p className="font-mono text-xxs text-white/25 text-center">
                {waitlist.reassurance}
              </p>
            </motion.form>
          )}
        </div>
      </div>
    </div>
  );
}
