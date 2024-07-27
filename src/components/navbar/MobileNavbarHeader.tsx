"use client";

import { useNavbar } from "@/lib/providers/NavbarProvider";

export default function MobileNavbarHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  const { nav } = useNavbar();

  return (
    <nav
      className={
        nav
          ? `overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col`
          : `absolute top-0 h-screen left-[-100%] ease-in duration-300`
      }
    >
      {children}
    </nav>
  );
}
