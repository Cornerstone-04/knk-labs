import { products } from "@/lib/data";
import { LuArrowRight } from "react-icons/lu";
import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";

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
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-surface overflow-hidden"
            >
              <div className="relative aspect-square bg-[#0a0a0a] overflow-hidden">
                <Image
                  src={p.images.full}
                  alt={p.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="eager"
                  className="object-contain brightness-90 transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 font-mono text-xxs tracking-[0.15em] normal-case text-black bg-orange px-2.5 py-1 transition-colors duration-300 group-hover:bg-white">
                  {p.tag}
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-heading font-bold text-[1.6rem] normal-case text-white mb-1">
                  {p.name}
                </h3>
                <p className="font-mono text-xxs normal-case tracking-[0.15em] text-orange/60 mb-4">
                  {p.tagline}
                </p>
                <p className="font-sans text-[0.78rem] text-white/45 leading-[1.7] mb-6 line-clamp-3">
                  {p.desc}
                </p>
                <Link
                  href={`/products/${p.slug}`}
                  className="font-mono text-xxs tracking-[0.15em] normal-case text-orange border-b border-orange/40 pb-0.5 no-underline hover:border-orange transition-colors duration-200 inline-flex items-center gap-2"
                >
                  Learn More <LuArrowRight />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
