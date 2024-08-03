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
            <section className="flex space-x-4 mb-6">
              <button className="bg-indigo-600 flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
                Add to Cart
              </button>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
