import MoneyBillAltIcon from "@/lib/svg/MoneyBillAltIcon";
import StoreIcon from "@/lib/svg/StoreIcon";
import TagIcon from "@/lib/svg/TagIcon";
import type { ProductsType } from "@/lib/types/types";
import { Link } from "@/navigation";

export default function ProductCard({ product }: { product: ProductsType }) {
  const { _id, imageurl, title, description, category, price, creator } =
    product;

  const discount = Math.floor(Math.random() * 11);

  return (
    <Link
      href={`/products/${_id}`}
      className="relative block rounded-tr-3xl border border-gray-100"
    >
      <span className="absolute -right-px -top-px rounded-bl-3xl rounded-tr-3xl bg-rose-600 px-6 py-4 font-medium uppercase tracking-widest text-white">
        Save {discount}%
      </span>
      <img
        src={imageurl}
        alt={title}
        className="h-80 w-full rounded-tr-3xl object-cover"
        loading="lazy"
      />
      <div className="p-4 text-center">
        <strong className="text-xl font-medium text-gray-900 dark:text-gray-500">
          {title}
        </strong>
        <p className="mt-2 text-pretty text-gray-700 dark:text-gray-500">
          {description}
        </p>
        <section className="flex justify-between items-center ">
          <h2 className="flex justify-center items-center gap-2 dark:text-gray-500">
            <TagIcon />
            {category}
          </h2>
          <h2 className="flex justify-center items-center gap-2 dark:text-gray-500">
            <MoneyBillAltIcon />
            {price}
          </h2>
        </section>
        <h2 className="flex justify-center items-center gap-2 dark:text-gray-500">
          <StoreIcon />
          {creator}
        </h2>
        <span className="mt-4 block rounded-md border border-indigo-900 bg-indigo-900 px-5 py-3 text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-indigo-900">
          Learn More
        </span>
      </div>
    </Link>
  );
}
