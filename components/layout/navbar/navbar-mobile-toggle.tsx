"use client";

import { motion } from "motion/react";

type NavbarMobileToggleProps = {
  open: boolean;
  btnAction: () => void;
};

export const NavbarMobileToggle = ({
  open,
  btnAction,
}: NavbarMobileToggleProps) => {
  return (
    <button
      onClick={btnAction}
      className="-mr-2 flex flex-col justify-center gap-1.25 p-2 md:hidden"
      aria-label="Toggle menu"
    >
      <motion.span
        animate={{ rotate: open ? 45 : 0, y: open ? 7 : 0 }}
        transition={{ duration: 0.25 }}
        className="block h-px w-6 origin-center bg-white"
      />
      <motion.span
        animate={{ opacity: open ? 0 : 1, scaleX: open ? 0 : 1 }}
        transition={{ duration: 0.2 }}
        className="block h-px w-6 origin-center bg-white"
      />
      <motion.span
        animate={{ rotate: open ? -45 : 0, y: open ? -7 : 0 }}
        transition={{ duration: 0.25 }}
        className="block h-px w-6 origin-center bg-white"
      />
    </button>
  );
};
