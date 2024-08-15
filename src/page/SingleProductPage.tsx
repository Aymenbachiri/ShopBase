import AddToCartBtn from "@/components/buttons/AddToCartBtn";
import StarIcon from "@/lib/svg/StarIcon";
import StoreIcon from "@/lib/svg/StoreIcon";
import TagIcon from "@/lib/svg/TagIcon";
import type { ProductsType } from "@/lib/types/types";

export default function SingleProductPage({
  product,
}: {
  product: ProductsType;
}) {
  const { category, creator, description, imageurl, price, title, updatedAt } =
    product;

  const starCount = Math.random() < 0.5 ? 4 : 5;
  const reviewsCount = Math.floor(Math.random() * 151) + 50;

  const productWithId = {
    ...product,
    id: product.id || "",
  };

  return (
    <main className="mt-32 dark:text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-8">
            <img
              src={imageurl}
              alt={title}
              className="w-2/3 mx-auto md:w-full h-auto rounded-lg shadow-md mb-4"
              loading="lazy"
            />
          </div>
          <div className="w-full md:w-1/2 px-4">
            <h2 className="text-3xl font-bold mb-2">{title}</h2>
            <section className="mb-4">
              <span className="text-2xl font-bold mr-2">${price}</span>
              <span className="text-gray-500 dark:text-white line-through">
                ${price + 100}
              </span>
            </section>
            <section className="flex items-center mb-4">
              {Array.from({ length: starCount }, (_, index) => (
                <StarIcon key={index} index={index} />
              ))}
              <span className="ml-2 text-gray-600 dark:text-white">
                {starCount}.0 ({reviewsCount} reviews)
              </span>
            </section>
            <p className="text-gray-700 mb-6 dark:text-white">{description}</p>
            <section className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Color:</h3>
              <div className="flex space-x-2">
                <button className="w-8 h-8 bg-black rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"></button>
                <button className="w-8 h-8 bg-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"></button>
                <button className="w-8 h-8 bg-blue-500 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"></button>
              </div>
            </section>
            <section className="mb-6">
              <h2 className="text-lg font-semibold mb-1 flex justify-start items-start gap-1">
                <TagIcon />
                {category}
              </h2>
            </section>
            <section className="mb-6">
              <h2 className="text-lg font-semibold mb-1 flex justify-start items-start gap-1">
                <StoreIcon />
                {creator}
              </h2>
            </section>
            <AddToCartBtn product={productWithId} />
          </div>
        </div>
      </div>
    </main>
  );
}
