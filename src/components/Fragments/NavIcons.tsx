"use client";

import Link from "next/link";
import { FaMoon, FaSearch, FaUser, FaPhone, FaAngleDown } from "react-icons/fa";
import { FC } from "react";

type NavIconsProps = {
  isMobile?: boolean;
};

const NavIcons: FC<NavIconsProps> = ({ isMobile = false }) => {
  if (isMobile) {
    return (
      <div className="flex flex-col space-y-4 justify-center items-center">
        {/* Bagian atas: Moon + Search tetap horizontal */}
        <div className="flex items-center space-x-2">
          <button className="bg-gray-200 hover:text-primary text-black p-3 rounded-full">
            <FaMoon />
          </button>
          <button className="bg-gray-200 hover:text-primary text-black p-3 rounded-full">
            <FaSearch />
          </button>
        </div>

        {/* Bagian bawah: Phone dan User jadi vertical */}
        <button className="flex items-center space-x-2 hover:text-primary p-2">
          <FaPhone />
          <span className="text-sm">0812-3456-7890</span>
        </button>
        <Link
          href="/login"
          className="relative w-full flex items-center border border-black bg-white text-sm text-black px-4 py-2 rounded-full hover:bg-black hover:text-white transition"
        >
          <FaUser />
          <span className="font-lato mx-auto">User Name</span>
        </Link>
      </div>
    );
  }

  // Default (desktop)
  return (
    <div className="font-lato flex items-center space-x-1 md:space-x-2 xl:space-x-3">
      <button className="bg-gray-200 hover:text-primary text-black p-3 rounded-full">
        <FaMoon />
      </button>
      <button className="bg-gray-200 hover:text-primary text-black p-3 rounded-full">
        <FaSearch />
      </button>
      <button className="flex items-center space-x-2 hover:text-primary p-2">
        <FaPhone />
        <span className="text-sm hidden lg:inline">0812-3456-7890</span>
      </button>
      <Link href="/login" className="hover:text-primary flex space-x-1">
        <FaUser />
        <FaAngleDown />
      </Link>
    </div>
  );
};

export default NavIcons;
