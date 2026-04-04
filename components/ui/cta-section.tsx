"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";

interface CTASectionProps {
  label?: string;
  title: React.ReactNode;
  description?: string;
  buttonText: string;
  href: string;
  size?: "default" | "large";
}

export const CTASection = ({
  label,
  title,
  description,
  buttonText,
  href,
  size = "default",
}: CTASectionProps) => {
  return (
    <section
      className={`px-6 text-center ${size === "large" ? "py-32" : "py-24"}`}
    >
      <div
        className={`mx-auto ${size === "large" ? "max-w-3xl" : "max-w-2xl"}`}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {label && (
            <p className="font-mono text-xxs tracking-[0.3em] normal-case text-orange mb-6">
              {label}
            </p>
          )}

          <h2
            className={`font-heading normal-case font-black text-white mb-6 leading-none ${
              size === "large"
                ? "text-[clamp(2.5rem,8vw,6rem)]"
                : "text-[clamp(2rem,5vw,4rem)]"
            }`}
          >
            {title}
          </h2>

          {description && (
            <p className="font-sans text-[0.9rem] leading-[1.8] text-white/40 mb-10">
              {description}
            </p>
          )}

          <Link
            href={href}
            className="inline-flex items-center gap-2 bg-orange px-10 py-4 font-sans text-[0.85rem] font-semibold normal-case tracking-[0.08em] text-black no-underline transition-opacity duration-200 hover:opacity-85"
          >
            {buttonText} <LuArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export const CTATitle = ({
  firstLine,
  secondLine,
}: {
  firstLine?: string;
  secondLine?: string;
}) => {
  return (
    <>
      {firstLine && (
        <>
          {firstLine}
          <br />
        </>
      )}
      {secondLine && <span className="text-orange">{secondLine}</span>}
    </>
  );
};
