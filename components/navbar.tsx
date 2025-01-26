import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from "@nextui-org/navbar";

import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { Image } from "@nextui-org/image";
import { siteConfig } from "@/config/site";

export const Navbar = () => {
  return (
    <NextUINavbar maxWidth="xl" position="sticky" className="flex">
  <NavbarContent className="basis-1/5 sm:basis-full justify-between">
    <NavbarBrand as="li" className="gap-3 max-w-fit">
      <NextLink className="flex justify-start items-center gap-1" href="/">
        <Image
          alt="mb logo"
          className="m-5"
          src="/mb.svg"
          width={40}
        />
      </NextLink>
    </NavbarBrand>
    <ul className="flex gap-4 justify-end ml-auto">
      {siteConfig.navItems.map((item) => (
        <NavbarItem key={item.href}>
          <NextLink
            className={clsx(
              linkStyles({ color: "foreground" }),
              "data-[active=true]:text-primary data-[active=true]:font-medium"
            )}
            color="foreground"
            href={item.href}
          >
            {item.label}
          </NextLink>
        </NavbarItem>
      ))}
    </ul>
  </NavbarContent>
</NextUINavbar>
  );
};
