"use client";

import { useNavbar } from "@/lib/providers/NavbarProvider";
import CloseIcon from "@/lib/svg/CloseIcon";
import HamburgerIcon from "@/lib/svg/HamburgerIcon";
import { useLocale } from "next-intl";

export default function MobileNavBtn() {
  const { handleNav, nav } = useNavbar();
  const Locale = useLocale();
  const dir = Locale === "ar" ? "rtl" : "ltr";

  return (
    <main
      onClick={handleNav}
      className={
        dir === "ltr"
          ? "md:hidden z-10 cursor-pointer p-4 absolute right-0"
          : "md:hidden z-10 cursor-pointer p-4 absolute left-0"
      }
    >
      {!nav ? <HamburgerIcon /> : <CloseIcon />}
    </main>
  );
}
