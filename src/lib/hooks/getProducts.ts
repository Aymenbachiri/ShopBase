import type { ProductsType } from "../types/types";

const API_URL = process.env.API_URL;

export async function getProducts(): Promise<ProductsType[]> {
  const res = await fetch(`${API_URL}/api/products`);
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}
