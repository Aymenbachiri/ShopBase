"use client";

import useCart from "@/lib/hooks/useCart";
import CartIcon from "@/lib/svg/CartIcon";
import { Link } from "@/navigation";

export default function CartLink() {
  const { cart } = useCart();

  return (
    <Link href="/cart" className="flex justify-center items-center relative">
      <span className="absolute w-4 h-4 rounded-full z-10 md:right-[-3px] top-[-10px] flex items-center justify-center text-[10px] text-white dark:text-white bg-red-600">
        {cart.length}
      </span>
      <CartIcon />
    </Link>
  );
}
