import Link from "next/link";

type NavbarLogoProps = {
  onClick: () => void;
};

export const NavbarLogo = ({ onClick }: NavbarLogoProps) => {
  return (
    <Link href="/" onClick={onClick} className="no-underline">
      <span className="font-heading text-[1.1rem] font-black uppercase tracking-[0.15em] text-white">
        KNK<span className="text-orange">Labs</span>
      </span>
    </Link>
  );
};
