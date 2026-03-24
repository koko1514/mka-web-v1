"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

type NavMenuProps = {
  isMobile?: boolean;
  onClick?: () => void;
};


const menus = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/aboutus" },
  { name: "Product Services", path: "/productservices" },
];

const NavMenu: FC<NavMenuProps> = ({ isMobile = false, onClick }) => {
  const pathname = usePathname();

  return (
    <ul
      className={
        isMobile
          ? "flex flex-col space-y-5 text-center font-lato text-sm py-3"
          : "hidden md:flex space-x-4 sm:space-x-6 xl:space-x-10 font-lato text-sm justify-center items-center"
      }
    >
      {menus.map((menu, i) => (
        <li key={i}>
          <Link
            href={menu.path}
            onClick={onClick}
            className={
              pathname === menu.path
                ? "bg-primary px-4 py-2 rounded-full font-semibold"
                : "hover:text-primary"
            }
          >
            {menu.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavMenu;
