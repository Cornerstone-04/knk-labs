"use client";

import {
  WaitlistForm,
  WaitlistHero,
  WaitlistSuccess,
  PopGlovePreorder,
} from "@/components/waitlist";
import { useState } from "react";
import { motion } from "motion/react";

export default function WaitlistPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-svh bg-bg pt-16">
      {/* Standard Waitlist Section */}
      <div className="px-6 py-20 border-b border-white/5">
        <div className="mx-auto max-w-2xl px-4">
          <WaitlistHero />

          {submitted ? (
            <WaitlistSuccess />
          ) : (
            <WaitlistForm successAction={() => setSubmitted(true)} />
          )}
        </div>
      </div>

      {/* P.O.P Glove Pre-Order Section */}
      <div className="px-6 py-24">
        <div className="mx-auto max-w-5xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <PopGlovePreorder />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
