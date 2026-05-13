"use client";

import { motion } from "motion/react";

type PopGlovePreorderSuccessProps = {
  selectedColourName: string;
};

export function PopGlovePreorderSuccess({
  selectedColourName,
}: PopGlovePreorderSuccessProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="rounded border border-orange/30 bg-orange/5 p-8 text-center"
    >
      <h3 className="mb-3 font-heading text-xl font-bold text-white">
        Pre-Order Registered
      </h3>

      <p className="font-sans text-sm text-white/70">
        Your P.O.P Glove configuration has been saved. We&apos;ll be in touch
        with pre-order details and pricing for your selected{" "}
        <span className="text-orange">{selectedColourName}</span> colourway
        soon.
      </p>
    </motion.div>
  );
}
