"use client";

import EmptyCart from "@/components/cart/EmptyCart";
import useCart from "../hooks/useCart";

export default function CartLengthCheck({
  children,
}: {
  children: React.ReactNode;
}) {
  const { products } = useCart();

  if (products.length > 0) {
    return <>{children}</>;
  } else {
    return <EmptyCart />;
  }
}
