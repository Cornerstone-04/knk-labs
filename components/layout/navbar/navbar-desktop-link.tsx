import Link from "next/link";

type NavbarDesktopLinkProps = {
  href: string;
  label: string;
  active: boolean;
};

export const NavbarDesktopLink = ({
  href,
  label,
  active,
}: NavbarDesktopLinkProps) => {
  return (
    <li>
      <Link
        href={href}
        className={`font-sans text-[0.78rem] tracking-[0.05em] no-underline transition-colors duration-200 ${
          active ? "text-white" : "text-white/50 hover:text-white"
        }`}
      >
        {label}
      </Link>
    </li>
  );
};
