"use client";

import { useNavbar } from "@/lib/providers/NavbarProvider";
import CloseIcon from "@/lib/svg/CloseIcon";
import HamburgerIcon from "@/lib/svg/HamburgerIcon";

export default function MobileNavBtn() {
  const { handleNav, nav } = useNavbar();

  return (
    <main
      onClick={handleNav}
      className="md:hidden z-10 cursor-pointer p-4 absolute right-0"
    >
      {!nav ? <HamburgerIcon /> : <CloseIcon />}
    </main>
  );
}
