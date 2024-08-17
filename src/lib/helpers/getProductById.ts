import { notFound } from "next/navigation";
import type { ProductsType } from "../types/types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getProductById(ProductId: string): Promise<ProductsType> {
  try {
    const res = await fetch(`${API_URL}/api/products/${ProductId}`, {
      cache: "no-store",
    });

    if (!res.ok) notFound();

    return res.json();
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
}
