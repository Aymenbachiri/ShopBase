"use client";

import { Link } from "@/navigation";
import { useState } from "react";
import LocaleMenu from "./LocaleMenu";
import CloseIcon from "@/lib/svg/CloseIcon";
import HamburgerIcon from "@/lib/svg/HamburgerIcon";
import ThemeSwitch from "./ThemeSwitch";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header className="fixed top-0 w-full z-20 start-0 bg-gray-700/80">
      {/* Large Screen Menu */}
      <nav className="max-w-screen-xl min-h-[50px] flex flex-wrap items-center justify-between mx-auto z-10 text-white ">
        <span>Logo</span>
        <ul className="hidden md:flex justify-between gap-x-8 items-center px-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/gallery">Gallery</Link>
          </li>
          <li>
            <Link href="/deals">Deals</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* Translation Menu */}
        <div className="hidden md:flex justify-between items-center gap-x-3">
          <LocaleMenu buttonText="Language" />
          <ThemeSwitch />
        </div>

        {/* Theme Toggle */}

        {/* Hamburger Icon */}
        <div
          onClick={handleNav}
          className="md:hidden z-10 cursor-pointer p-4 absolute right-0"
        >
          {!nav ? <HamburgerIcon /> : <CloseIcon />}
        </div>
      </nav>

      {/* Mobile Menu */}
      <nav
        className={
          nav
            ? `overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col`
            : `absolute top-0 h-screen left-[-100%] ease-in duration-300`
        }
      >
        <ul className="h-full w-full text-center pt-12">
          <li className="text-2xl py-8">
            <Link href="/" onClick={handleNav}>
              Home
            </Link>
          </li>
          <li className="text-2xl py-8">
            <Link href="/gallery" onClick={handleNav}>
              Gallery
            </Link>
          </li>
          <li className="text-2xl py-8">
            <Link href="/deals" onClick={handleNav}>
              Deals
            </Link>
          </li>
          <li className="text-2xl py-8">
            <Link href="/contact" onClick={handleNav}>
              Contact
            </Link>
          </li>
          <li className="text-2xl py-8">
            <LocaleMenu buttonText="us" />
          </li>
          <li className="md:hidden text-2xl py-8 flex justify-center items-center text-white">
            <ThemeSwitch />
          </li>
        </ul>
      </nav>
    </header>
  );
}
3;
