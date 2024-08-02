"use client";

import useSWR from "swr";
import ProductCard from "@/components/products/ProductCard";
import ProductCardSkeleton from "@/components/products/ProductCardSkeleton";
import type { ProductsType } from "@/lib/types/types";
import SwrFetcher from "@/lib/hooks/SwrFetcher";

const getSkeletonCount = (
  products: ProductsType[] | undefined,
  placeholderCount = 8
) => {
  return products ? products.length : placeholderCount;
};

export default function ProductsPage() {
  const { data: products, error } = useSWR<ProductsType[]>(
    "/api/products",
    SwrFetcher
  );

  if (error) return <div>Failed to load products</div>;

  const skeletonCount = getSkeletonCount(products);

  return (
    <main className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-5 row-gap-5 mb-8 lg:grid-cols-4 sm:grid-cols-2">
        {!products
          ? Array.from({ length: skeletonCount }).map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))
          : products.map((product) => (
              <ProductCard product={product} key={product._id} />
            ))}
      </div>
    </main>
  );
}
