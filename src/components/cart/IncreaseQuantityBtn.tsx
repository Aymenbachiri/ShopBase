"use client";

import type { IncreaseQuantityBtnProps } from "@/lib/types/cartTypes";

export default function IncreaseQuantityBtn({
  product,
  onIncrease,
}: IncreaseQuantityBtnProps) {
  return (
    <button
      onClick={() => onIncrease(product.id)}
      className="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-black hover:text-white"
    >
      +
    </button>
  );
}
