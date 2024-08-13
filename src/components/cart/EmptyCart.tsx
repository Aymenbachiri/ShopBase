"use client";

import { Link } from "@/navigation";
import Image from "next/image";
import Img from "/public/assets/images/empty-cart.webp";
import { ClientTranslation } from "@/lib/helpers/ClientTranslation";

export default function EmptyCart() {
  const { t } = ClientTranslation("CartPage");

  return (
    <main className="flex-col md:flex md:flex-row justify-center items-center my-[110px]">
      <section className="flex justify-center px-2">
        <Image
          src={Img}
          loading="lazy"
          alt="empty cart"
          className="rounded-full"
          placeholder="blur"
        />
      </section>
      <aside className="max-w-[500px] p-4 py-8  flex flex-col gap-4 items-center rounded-md shadow-lg">
        <h1 className="text-xl font-bold uppercase">{t("emptyCartTitle")}</h1>
        <p className="text-sm text-center px-10 -mt-2">
          {t("emptyCartDescription")}
        </p>
        <Link
          href="/products"
          className=" rounded-md cursor-pointer hover:bg-black active:bg-gray-900 px-8 py-2 font-semibold text-lg hover:text-white duration-300"
        >
          {t("continueShopping")}
        </Link>
      </aside>
    </main>
  );
}
