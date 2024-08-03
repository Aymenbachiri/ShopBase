import { getProducts } from "./getProducts";

export async function getAllProductIds(): Promise<string[]> {
  const products = await getProducts();
  return products.map((product) => product._id);
}
