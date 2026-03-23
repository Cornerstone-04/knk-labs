"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { LuArrowRight } from "react-icons/lu";

type ProductActionsProps = {
  slug: string;
};

export const ProductActions = ({ slug }: ProductActionsProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.4 }}
      className="flex flex-wrap gap-4"
    >
      <Link
        href={`/products/${slug}`}
        className="inline-flex items-center gap-2 border border-white/20 px-8 py-[0.85rem] font-sans text-[0.8rem] font-semibold uppercase tracking-[0.08em] text-white no-underline transition-all duration-200 hover:border-white/60"
      >
        Learn More <LuArrowRight />
      </Link>

      <Link
        href="/waitlist"
        className="inline-block bg-orange px-8 py-[0.85rem] font-sans text-[0.8rem] font-semibold uppercase tracking-[0.08em] text-black no-underline transition-opacity duration-200 hover:opacity-85"
      >
        Join Waitlist
      </Link>
    </motion.div>
  );
};
