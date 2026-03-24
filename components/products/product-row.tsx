"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { ProductFeatures } from "./product-features";
import { ProductActions } from "./product-actions";

type ProductFeature = {
  id: string | number;
  title: string;
};

type Product = {
  slug: string;
  image: string;
  name: string;
  tag: string;
  tagline: string;
  desc: string;
  features: ProductFeature[];
};

type ProductRowProps = {
  product: Product;
  index: number;
};

export const ProductRow = ({ product, index }: ProductRowProps) => {
  const isEven = index % 2 === 0;

  return (
    <section className="border-b border-border overflow-y-hidden">
      <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: isEven ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`flex items-center justify-center bg-surface px-8 py-20 ${
            isEven
              ? "border-r border-border md:order-1"
              : "border-l border-border md:order-2"
          }`}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 5 + index,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src={product.image}
              alt={product.name}
              width={420}
              height={420}
              className="max-w-full object-contain"
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: isEven ? 30 : -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className={`flex flex-col justify-center px-8 py-20 md:px-12 ${
            isEven ? "md:order-2" : "md:order-1"
          }`}
        >
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="mb-3 font-mono text-xxs uppercase tracking-[0.2em] text-orange"
          >
            {product.tag}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-2 font-heading text-[clamp(2rem,5vw,3.5rem)] font-black uppercase leading-none text-white"
          >
            {product.name}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mb-8 font-mono text-xxs uppercase tracking-[0.2em] text-orange/60"
          >
            {product.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-10 font-sans text-[0.9rem] leading-[1.85] text-white/50"
          >
            {product.desc}
          </motion.p>

          <ProductFeatures features={product.features} />
          <ProductActions slug={product.slug} />
        </motion.div>
      </div>
    </section>
  );
};
