"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { navLinks, products } from "@/lib/data";
import { LuArrowRight } from "react-icons/lu";

type NavbarDesktopProps = {
  pathname: string;
  closeAction: () => void;
};

export function NavbarDesktop({ pathname, closeAction }: NavbarDesktopProps) {
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList className="gap-2">
        {navLinks.slice(0, -1).map(({ href, label }) => {
          const productsLink = label === "Products";

          if (productsLink) {
            const active =
              pathname === "/products" || pathname.startsWith("/products/");

            return (
              <NavigationMenuItem key={href} className="">
                <NavigationMenuTrigger
                  className={cn(
                    "h-auto bg-transparent px-4 py-2 font-sans text-[0.78rem] tracking-[0.05em] capitalize transition-colors hover:bg-transparent focus:bg-transparent data-active:bg-transparent data-[state=open]:bg-transparent",
                    active ? "text-white" : "text-white/50 hover:text-white",
                  )}
                >
                  Products
                </NavigationMenuTrigger>

                <NavigationMenuContent>
                  <div className="w-70 border border-white/10 bg-black/95 shadow-2xl backdrop-blur-md">
                    <NavigationMenuLink asChild>
                      <Link
                        href="/products"
                        onClick={closeAction}
                        className="group flex items-center justify-between rounded-sm border-b border-white/5 px-4 py-3 font-mono text-[10px] capitalize tracking-[0.15em] text-white/40 no-underline transition-colors hover:bg-white/5 hover:text-white"
                      >
                        <span>All Products</span>
                        <LuArrowRight className="text-xxs text-white/20 transition-all group-hover:translate-x-0.5" />
                      </Link>
                    </NavigationMenuLink>

                    {products.map((product) => (
                      <NavigationMenuLink key={product.slug} asChild>
                        <Link
                          href={`/products/${product.slug}`}
                          onClick={closeAction}
                          className="group flex items-center justify-between rounded-sm border-b border-white/5 px-4 py-4 no-underline transition-colors hover:bg-white/5 last:border-b-0"
                        >
                          <div>
                            <p className="font-heading text-[0.85rem] font-bold capitalize leading-tight text-white transition-colors group-hover:text-orange">
                              {product.name}
                            </p>
                            <p className="mt-1 font-mono text-[9px] capitalize tracking-widest text-white/30">
                              {product.tag}
                            </p>
                          </div>

                          <LuArrowRight className="text-xxs text-white/20 transition-all group-hover:translate-x-0.5 group-hover:text-orange" />
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            );
          }

          const active = isActive(href);

          return (
            <NavigationMenuItem key={href}>
              <NavigationMenuLink asChild>
                <Link
                  href={href}
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "h-auto bg-transparent px-4 py-2 font-sans text-[0.78rem] tracking-[0.05em] capitalize no-underline transition-colors hover:bg-transparent focus:bg-transparent",
                    active ? "text-white" : "text-white/50 hover:text-white",
                  )}
                >
                  {label}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
