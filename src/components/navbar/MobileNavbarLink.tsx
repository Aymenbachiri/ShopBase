"use client";

import { useNavbar } from "@/lib/providers/NavbarProvider";
import type { MobileNavbarLinkProps } from "@/lib/types/types";
import { Link } from "@/navigation";

export default function MobileNavbarLink({ link }: MobileNavbarLinkProps) {
  const { handleNav } = useNavbar();
  return (
    <Link className="hover:border-b py-2" href={link.href} onClick={handleNav}>
      {link.label}
    </Link>
  );
}
