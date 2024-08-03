import MoneyBillAltIcon from "@/lib/svg/MoneyBillAltIcon";
import StoreIcon from "@/lib/svg/StoreIcon";
import TagIcon from "@/lib/svg/TagIcon";
import type { ProductsType } from "@/lib/types/types";
import { Link } from "@/navigation";
import AddToCartBtn from "../buttons/AddToCartBtn";
import LinkIcon from "@/lib/svg/LinkIcon";
import { getTranslations } from "next-intl/server";

export default async function ProductCard({
  product,
}: {
  product: ProductsType;
}) {
  const { _id, imageurl, title, description, category, price, creator } =
    product;

  const discount = Math.floor(Math.random() * 11);
  const t = await getTranslations("ProductsPage");

  const productWithId = {
    ...product,
    id: _id,
    rating: product.rating || 0,
    quantity: product.quantity || 1,
  };

  return (
    <main className="relative block rounded-tr-3xl border border-gray-600 rounded-md shadow-xl">
      <span className="absolute -right-px -top-px rounded-bl-3xl rounded-tr-3xl bg-rose-600 px-6 py-4 font-medium uppercase tracking-widest text-white">
        {t("Save")} {discount}%
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
        <div className="flex justify-center items-center gap-2 mt-4">
          <Link
            href={`/products/${_id}`}
            className="flex justify-center items-center gap-1 rounded-md border  bg-indigo-600 px-2 py-[5px] text-sm font-medium uppercase tracking-widest text-white duration-300 transition-colors hover:bg-indigo-700"
          >
            <LinkIcon />
          </Link>
          <AddToCartBtn product={productWithId} />
        </div>
      </div>
    </main>
  );
}
