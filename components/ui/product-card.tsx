"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { LuArrowRight } from "react-icons/lu";

interface ProductCardProps {
  product: any;
  index: number;
}

export const ProductCard = ({ product, index }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        href={`/products/${product.slug}`}
        className="group block bg-surface overflow-hidden"
      >
        <div className="relative aspect-square bg-[#0a0a0a] overflow-hidden">
          <video
            src={product.video}
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-contain brightness-90 transition-transform duration-700 ease-out group-hover:scale-105"
          />

          <div className="absolute top-4 left-4 font-mono text-xxs tracking-[0.15em] normal-case text-black bg-orange px-2.5 py-1 transition-colors ease-linear duration-300 group-hover:bg-white">
            {product.tag}
          </div>
        </div>

        <div className="p-8">
          <h3 className="font-heading font-bold text-[1.6rem] normal-case text-white mb-1">
            {product.name}
          </h3>

          <p className="font-mono text-xxs normal-case tracking-[0.15em] text-orange/60 mb-4">
            {product.tagline}
          </p>

          <p className="font-sans text-[0.78rem] text-white/45 leading-[1.7] mb-6 line-clamp-3">
            {product.desc}
          </p>

          <div className="font-mono text-xxs tracking-[0.15em] normal-case text-orange border-b border-orange/40 pb-0.5 inline-flex items-center gap-2 group-hover:border-orange transition-colors duration-200">
            Learn More <LuArrowRight />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
