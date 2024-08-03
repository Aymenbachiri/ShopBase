"use client";

import useCart from "@/lib/hooks/useCart";
import type { ProductCartProps } from "@/lib/types/cartTypes";
import { useTranslations } from "next-intl";

export default function AddToCartBtn({
  product,
}: {
  product: ProductCartProps;
}) {
  const { handleAddToCart } = useCart();
  const t = useTranslations("CartPage");

  return (
    <button
      onClick={() => {
        handleAddToCart({
          title: product.title,
          description: product.description,
          category: product.category,
          imageurl: product.imageurl,
          price: product.price,
          rating: product.rating,
          creator: product.creator,
          quantity: 1,
          id: product.id,
        });
      }}
    >
      {t("AddToCartBtn")}
    </button>
  );
}
