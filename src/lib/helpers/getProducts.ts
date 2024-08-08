import type { ProductsType } from "../types/types";

const API_URL = process.env.API_URL;

export async function getProducts(): Promise<ProductsType[]> {
  try {
    const res = await fetch(`${API_URL}/api/products`, { cache: "no-store" });

    if (!res.ok) {
      throw new Error(
        `Failed to fetch products: ${res.status} ${res.statusText}`
      );
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}
