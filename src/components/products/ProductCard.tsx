import MoneyBillAltIcon from "@/lib/svg/MoneyBillAltIcon";
import StoreIcon from "@/lib/svg/StoreIcon";
import TagIcon from "@/lib/svg/TagIcon";
import type { ProductsType } from "@/lib/types/types";
import { Link } from "@/navigation";

export default function ProductCard({ product }: { product: ProductsType }) {
  const { _id, imageurl, title, description, category, price, creator } =
    product;

  return (
    <Link
      key={_id}
      href={`/products/${_id}`}
      aria-label="View Item"
      className="inline-block overflow-hidden duration-300 transform bg-white dark:bg-gray-800 rounded shadow-sm hover:-translate-y-2"
    >
      <div className="flex flex-col h-full">
        <img
          src={imageurl}
          className="object-cover w-full h-48"
          alt={title}
          loading="lazy"
        />
        <div className="flex-grow border border-t-0 rounded-b bg-gray-100 dark:bg-gray-900">
          <section className="p-5">
            <h6 className="mb-2 text-xl font-semibold leading-5 text-gray-900 dark:text-gray-100">
              {title}
            </h6>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              {description}
            </p>
            <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
              <TagIcon />
              <span className="text-sm">{category}</span>
            </div>
            <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
              <MoneyBillAltIcon />
              <span className="text-sm">${price}</span>
            </div>
            <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
              <StoreIcon />
              <span className="text-sm">{creator}</span>
            </div>
          </section>
        </div>
      </div>
    </Link>
  );
}
