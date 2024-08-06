"use client";

import { RemoveFromCartBtnProps } from "@/lib/types/cartTypes";

export default function RemoveFromCartBtn({
  product,
  onRemove,
}: RemoveFromCartBtnProps) {
  return (
    <button
      onClick={() => onRemove(product.id)}
      type="button"
      className="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900"
    >
      <svg
        className="block h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
          className=""
        ></path>
      </svg>
    </button>
  );
}
