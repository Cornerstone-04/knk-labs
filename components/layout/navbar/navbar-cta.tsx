import { NavbarCtaProps } from "@/types";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";

export const NavbarCta = ({ className = "", onClick }: NavbarCtaProps) => {
  return (
    <Link
      href="/waitlist"
      onClick={onClick}
      className={`items-center gap-2 bg-orange px-5 py-2 font-sans text-[0.72rem] font-semibold capitalize tracking-[0.08em] text-black no-underline transition-opacity duration-200 hover:opacity-90 ${className}`}
    >
      Join Waitlist <LuArrowRight />
    </Link>
  );
};
