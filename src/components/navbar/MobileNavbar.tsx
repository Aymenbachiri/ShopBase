"use client";

import { Link } from "@/navigation";
import LocaleMenu from "./LocaleMenu";
import ThemeSwitch from "./ThemeSwitch";
import { NavLinks } from "./NavLinks";
import { useNavbar } from "@/lib/providers/NavbarProvider";

export default function MobileNavbar() {
  const { handleNav, nav } = useNavbar();

  return (
    <nav
      className={
        nav
          ? `overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col`
          : `absolute top-0 h-screen left-[-100%] ease-in duration-300`
      }
    >
      <ul className="h-full w-full text-center pt-12">
        {NavLinks.map((link) => (
          <li key={link.label} className="text-2xl py-8">
            <Link href={link.href} onClick={handleNav}>
              {link.label}
            </Link>
          </li>
        ))}
        <li className="text-2xl py-8">
          <LocaleMenu />
        </li>
        <li className="md:hidden text-2xl py-8 flex justify-center items-center text-white">
          <ThemeSwitch />
        </li>
      </ul>
    </nav>
  );
}
