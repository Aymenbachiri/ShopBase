import type { ProductsType } from "../types/types";

const API_URL = process.env.API_URL;

export async function getDashboardProducts(
  name: string | null | undefined,
  revalidate: number = 0
): Promise<ProductsType[]> {
  try {
    const res = await fetch(
      `${API_URL}/api/dashboardProducts?creator=${name}`,
      {
        cache: "no-store",
        next: { revalidate: revalidate },
      }
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
