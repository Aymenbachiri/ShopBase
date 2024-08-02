"use client";

import { useNavbar } from "@/lib/providers/NavbarProvider";

export default function NavbarHolder({
  children,
}: {
  children: React.ReactNode;
}) {
  const { shadow } = useNavbar();

  return (
    <header
      className={
        shadow
          ? "fixed shadow-xl backdrop-blur-md top-0 w-full start-0 z-[100] ease-in-out duration-300 dark:shadow-[#dedbdb] dark:ease-in-out dark:duration-300"
          : "fixed top-0 w-full z-20 start-0"
      }
    >
      {children}
    </header>
  );
}
