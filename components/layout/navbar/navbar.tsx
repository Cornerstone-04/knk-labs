"use client";

import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { usePathname } from "next/navigation";
import { NavbarLogo } from "./navbar-logo";
import { NavbarDesktop } from "./navbar-desktop";
import { NavbarCta } from "./navbar-cta";
import { NavbarMobileToggle } from "./navbar-mobile-toggle";
import { NavbarMobileMenu } from "./navbar-mobile-menu";

export default function Navbar() {
  const pathname = usePathname();

  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(latest > 20);

    if (latest > prev && latest > 80 && !open) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const closeAll = () => {
    setOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: hidden ? "-100%" : 0, opacity: 1 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 right-0 left-0 z-50 flex h-16 items-center justify-between px-6 md:px-12 ${
          scrolled || open
            ? "border-b border-white/6 bg-black/95 backdrop-blur-md"
            : "border-b-0 bg-transparent"
        }`}
        style={{
          WebkitBackdropFilter: scrolled || open ? "blur(12px)" : "none",
        }}
      >
        <NavbarLogo onClick={closeAll} />

        <NavbarDesktop pathname={pathname} closeAction={closeAll} />

        <NavbarCta className="hidden md:inline-flex" />

        <NavbarMobileToggle
          open={open}
          btnAction={() => setOpen((prev) => !prev)}
        />
      </motion.nav>

      <AnimatePresence>
        {open && (
          <NavbarMobileMenu pathname={pathname} closeAction={closeAll} />
        )}
      </AnimatePresence>
    </>
  );
}
