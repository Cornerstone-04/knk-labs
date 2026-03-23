import { navLinks } from "@/lib/data";
import { NavbarDesktopLink } from "./navbar-desktop-link";
import { NavbarProductsDropdown } from "./navbar-products-dropdown";

type NavbarDesktopProps = {
  pathname: string;
  dropdown: boolean;
  setDropdown: React.Dispatch<React.SetStateAction<boolean>>;
  closeAll: () => void;
};

export const NavbarDesktop = ({
  pathname,
  dropdown,
  setDropdown,
  closeAll,
}: NavbarDesktopProps) => {
  return (
    <ul className="hidden list-none items-center gap-8 md:flex">
      {navLinks.slice(0, -1).map(({ href, label }) => {
        const isProducts = label === "Products";
        const active =
          href === "/" ? pathname === "/" : pathname.startsWith(href);

        if (isProducts) {
          return (
            <NavbarProductsDropdown
              key={href}
              label={label}
              href={href}
              active={active}
              dropdown={dropdown}
              dropdownAction={setDropdown}
              closeAction={closeAll}
            />
          );
        }

        return (
          <NavbarDesktopLink
            key={href}
            href={href}
            label={label}
            active={active}
          />
        );
      })}
    </ul>
  );
};
