import ProductCard from "@/components/products/ProductCard";
import { getProducts } from "@/lib/helpers/getProducts";
import type { ProductsType } from "@/lib/types/types";

export default async function ProductsPage() {
  const products: ProductsType[] = await getProducts();

  return (
    <main className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <section className="grid gap-5 row-gap-5 mb-8 lg:grid-cols-4 sm:grid-cols-2">
        {products.map((product) => (
          <ProductCard product={product} key={product._id} />
        ))}
      </section>
    </main>
  );
}
