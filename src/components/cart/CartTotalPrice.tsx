"use client";

import useCart from "@/lib/hooks/useCart";

export default function CartTotalPrice() {
  const { totalPrice } = useCart();

  return <>{totalPrice}</>;
}
