"use client";

import { useState, useEffect, useCallback } from "react";
import Logo from "@/components/Elements/Logo";
import NavMenu from "@/components/Fragments/NavMenu";
import NavIcons from "@/components/Fragments/NavIcons";
import { Button } from "@/components/Elements/Button";
import Link from "next/link";
import { AlignRight, X } from "lucide-react";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false); // toggle hamburger

  const controlNavbar = useCallback(() => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        // Scroll Down
        setShowNavbar(false);
      } else {
        // Scroll Up
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    }
  }, [lastScrollY]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY, controlNavbar]);

  return (
    <nav
      className={`font-lato fixed w-8/10 md:w-7/10 z-50 bg-white text-black px-4 py-2 rounded-full mt-4 flex items-center justify-between shadow-xl/30 left-1/2 transform -translate-x-1/2 transition-all duration-500 ease-in-out h-14 ${
        showNavbar
          ? "translate-y-0 opacity-100 blur-0"
          : "-translate-y-20 opacity-0 blur-md"
      }`}
    >
      {/* Logo + Desktop Menu */}
      <div className="flex items-center space-x-2 md:space-x-4 lg:space-x-8">
        <Logo />
        <span className="text-sm font-black pl-2 md:hidden">
          CV MANDIRI KERJA ABADI
        </span>
        {/* Desktop Menu */}
        <div className="hidden md:block">
          <NavMenu />
        </div>
      </div>

      {/* Desktop Right Side */}
      <div className="hidden md:flex items-center space-x-1 md:space-x-2 lg:space-x-4">
        <NavIcons />
        <Button asChild>
          <Link href="/contactus">Contact Us</Link>
        </Button>
      </div>

      {/* Hamburger Button (mobile only) */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden transition-all duration-300 ease-in-out"
      >
        {menuOpen ? <X size={30} /> : <AlignRight size={30} />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md rounded-xl p-4 flex flex-col space-y-4 md:hidden">
          <NavMenu isMobile onClick={() => setMenuOpen(false)} />
          <NavIcons isMobile />
          <Button asChild>
            <Link href="/contactus">Contact Us</Link>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
