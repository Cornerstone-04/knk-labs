"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { LuArrowRight } from "react-icons/lu";

interface RelatedProductCardProps {
  product: any;
  index: number;
}

export const RelatedProductCard = ({
  product,
  index,
}: RelatedProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        href={`/products/${product.slug}`}
        className="group bg-bg border border-border overflow-hidden flex flex-col cursor-pointer"
      >
        <div className="relative aspect-21/9 bg-surface overflow-hidden">
          <Image
            src={product.images.front}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain p-4 brightness-90 transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute top-3 left-3 font-mono text-[10px] tracking-widest normal-case text-black bg-orange group-hover:bg-white transition-all ease-linear px-2 py-0.5">
            {product.tag}
          </div>
        </div>

        <div className="p-5 flex items-end justify-between gap-4">
          <div>
            <h3 className="font-heading font-bold text-[1.1rem] text-white normal-case leading-tight">
              {product.name}
            </h3>
            <p className="font-mono text-[9px] normal-case tracking-widest text-white/40 mt-1">
              {product.tagline}
            </p>
          </div>

          {/* Not a Link anymore */}
          <div className="inline-flex items-center gap-2 font-mono text-[10px] tracking-widest normal-case text-orange border-b border-orange/0 pb-0.5 transition-all duration-200 shrink-0 group-hover:border-orange">
            View <LuArrowRight />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
