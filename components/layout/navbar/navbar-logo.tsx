import Image from "next/image";
import Link from "next/link";

type NavbarLogoProps = {
  onClick: () => void;
};

export const NavbarLogo = ({ onClick }: NavbarLogoProps) => {
  return (
    <Link
      href="/"
      onClick={onClick}
      className="no-underline inline-flex items-center"
    >
      <Image
        src="/knk-logo-white.png"
        alt="KNK Labs"
        width={100}
        height={50}
        loading="eager"
        className="h-12 w-auto object-contain"
      />
      <span className="font-heading text-[1.1rem] font-black normal-case tracking-[0.15em] text-white">
        KNK<span className="text-orange">Labs</span>
      </span>
    </Link>
  );
};
