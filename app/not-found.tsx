"use client";

import { motion } from "motion/react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-svh bg-bg flex items-center justify-center px-6">
      <div className="text-center max-w-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-xxs normal-case tracking-[0.3em] text-orange mb-6">
            404 — Not Found
          </p>
          <h1 className="font-heading font-black text-[clamp(3rem,12vw,8rem)] leading-none text-white mb-4">
            Lost
            <br />
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "2px rgba(255,255,255,0.15)" }}
            >
              Signal.
            </span>
          </h1>
          <p className="font-sans text-[0.9rem] leading-[1.8] text-white/40 mb-10">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/"
              className="inline-block bg-orange px-8 py-[0.9rem] font-sans text-[0.8rem] font-semibold normal-case tracking-[0.08em] text-black no-underline transition-opacity duration-200 hover:opacity-85"
            >
              Go Home
            </Link>
            <Link
              href="/products"
              className="inline-block border border-white/15 px-8 py-[0.9rem] font-sans text-[0.8rem] font-semibold normal-case tracking-[0.08em] text-white/60 no-underline transition-all duration-200 hover:border-white/40 hover:text-white"
            >
              View Products
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
