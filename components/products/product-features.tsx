"use client";

import { motion } from "motion/react";

type ProductFeature = {
  id: string | number;
  title: string;
};

type ProductFeaturesProps = {
  features: ProductFeature[];
};

export const ProductFeatures = ({ features }: ProductFeaturesProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.35 }}
      className="mb-10 flex flex-wrap gap-2"
    >
      {features.map((feature) => (
        <span
          key={feature.id}
          className="border border-white/10 px-3 py-1.5 font-mono text-xxs normal-case tracking-[0.15em] text-white/35"
        >
          {feature.title}
        </span>
      ))}
    </motion.div>
  );
};
