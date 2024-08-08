import type { ProductsType } from "../types/types";

const API_URL = process.env.API_URL;

export async function getDashboardProducts(
  name: string | null | undefined
): Promise<ProductsType[]> {
  try {
    const res = await fetch(
      `${API_URL}//api/dashboardProducts?creator=${name}`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      throw new Error(
        `Failed to fetch Dashboard products: ${res.status} ${res.statusText}`
      );
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching Dashboard products:", error);
    throw error;
  }
}
