"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { navLinks, products } from "@/lib/data";
import { NavbarCta } from "./navbar-cta";

type NavbarMobileMenuProps = {
  pathname: string;
  closeAction: () => void;
};

export const NavbarMobileMenu = ({
  pathname,
  closeAction,
}: NavbarMobileMenuProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-40 flex flex-col bg-black/97 pt-16 backdrop-blur-[20px] md:hidden"
      style={{ WebkitBackdropFilter: "blur(20px)" }}
    >
      <div className="flex flex-1 flex-col overflow-y-auto px-6 pt-8">
        {navLinks.slice(0, -1).map(({ href, label }, i) => {
          const isProducts = label === "Products";
          const active =
            href === "/" ? pathname === "/" : pathname.startsWith(href);
          return (
            <motion.div
              key={href}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.3,
                delay: 0.05 + i * 0.07,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="border-b border-white/5"
            >
              <Link
                href={href}
                onClick={closeAction}
                className="group flex items-center justify-between py-5 no-underline"
              >
                <span
                  className={`font-heading text-[clamp(2rem,8vw,3rem)] font-black uppercase leading-none transition-colors duration-200 ${
                    active ? "text-orange" : "text-white/85"
                  }`}
                >
                  {label}
                </span>

                <span className="font-mono text-xxs uppercase tracking-[0.2em] text-white/20 transition-colors duration-200 group-hover:text-orange">
                  0{i + 1}
                </span>
              </Link>

              {isProducts && (
                <div className="flex flex-col gap-3 pb-5 pl-4">
                  {products.map((product) => (
                    <Link
                      key={product.slug}
                      href={`/products/${product.slug}`}
                      onClick={closeAction}
                      className="group/sub flex items-center gap-3 no-underline"
                    >
                      <span className="h-px w-4 shrink-0 bg-white/10" />
                      <span className="font-heading text-[1.3rem] font-bold uppercase text-white/50 transition-colors duration-200 group-hover/sub:text-orange">
                        {product.name}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className="flex flex-col gap-4 px-6 pt-8 pb-12"
      >
        <NavbarCta
          onClick={closeAction}
          className="inline-flex w-full justify-center px-6 py-4 text-center text-[0.85rem]"
        />
        <p className="text-center font-mono text-xxs uppercase tracking-[0.2em] text-white/20">
          knklabs.com
        </p>
      </motion.div>
    </motion.div>
  );
};
