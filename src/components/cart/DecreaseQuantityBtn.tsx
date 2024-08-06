"use client";

import type { DecreaseQuantityBtnProps } from "@/lib/types/cartTypes";

export default function DecreaseQuantityBtn({
  onDecrease,
  product,
}: DecreaseQuantityBtnProps) {
  return (
    <button
      onClick={() => onDecrease(product.id)}
      className="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-black hover:text-white"
    >
      -
    </button>
  );
}
