"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { products } from "@/lib/data";
import { LuArrowRight, LuChevronDown } from "react-icons/lu";

type NavbarProductsDropdownProps = {
  label: string;
  href: string;
  active: boolean;
  dropdown: boolean;
  dropdownAction: React.Dispatch<React.SetStateAction<boolean>>;
  closeAction: () => void;
};

export function NavbarProductsDropdown({
  label,
  active,
  dropdown,
  dropdownAction,
  closeAction,
}: NavbarProductsDropdownProps) {
  return (
    <li
      className="relative flex items-center"
      onMouseEnter={() => dropdownAction(true)}
      onMouseLeave={() => dropdownAction(false)}
    >
      <button
        onClick={() => dropdownAction((prev) => !prev)}
        className={`flex h-full cursor-pointer items-center gap-1.5 border-none bg-transparent p-0 font-sans text-[0.78rem]  tracking-[0.05em] transition-colors duration-200 ${
          active || dropdown ? "text-white" : "text-white/50 hover:text-white"
        }`}
      >
        {label}
        <motion.span
          animate={{ rotate: dropdown ? 180 : 0, y: dropdown ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className="inline-block text-[0.65rem]"
        >
          <LuChevronDown />
        </motion.span>
      </button>

      <AnimatePresence>
        {dropdown && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-[calc(100%+1.5rem)] left-1/2 w-56 -translate-x-1/2 overflow-hidden border border-white/10 bg-black/95 shadow-2xl backdrop-blur-md"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />

            <Link
              href="/products"
              onClick={closeAction}
              className="flex items-center justify-between border-b border-white/5 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.15em] text-white/40 no-underline transition-colors duration-150 hover:bg-white/5 hover:text-white"
            >
              All Products
              <LuArrowRight />
            </Link>

            {products.map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                onClick={closeAction}
                className="group flex items-center justify-between border-b border-white/5 px-5 py-4 no-underline transition-colors duration-150 hover:bg-white/5 last:border-0"
              >
                <div>
                  <p className="font-heading text-[0.85rem] font-bold uppercase leading-tight text-white transition-colors duration-150 group-hover:text-orange">
                    {product.name}
                  </p>
                  <p className="mt-1 font-mono text-[9px] uppercase tracking-widest text-white/30">
                    {product.tag}
                  </p>
                </div>

                <LuArrowRight className="text-[10px] text-white/20 transition-all group-hover:translate-x-0.5 group-hover:text-orange" />
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}
