import { products } from "@/lib/data";
import { LuArrowRight } from "react-icons/lu";
import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { ProductCard } from "../ui/product-card";

export const ProductsSection = () => {
  return (
    <section className="border-b border-border px-6 py-24 md:px-12 bg-surface">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4 font-mono text-xxs tracking-[0.3em] normal-case text-orange"
        >
          The Gloves
        </motion.div>
        <div className="flex items-end justify-between mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-black normal-case text-[clamp(2.5rem,6vw,5rem)] text-white"
          >
            Two Gloves.
            <br />
            <span className="text-orange">One Ecosystem.</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href="/products"
              className="font-mono text-xxs tracking-[0.15em] normal-case text-white/40 border-b border-white/20 pb-0.5 no-underline hover:text-white hover:border-white/50 transition-all duration-200 hidden md:inline-flex md:items-center md:gap-2 "
            >
              View All <LuArrowRight />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-2">
          {products.map((p, i) => (
            <ProductCard key={p.slug} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
