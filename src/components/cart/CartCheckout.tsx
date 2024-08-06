import { Link } from "@/navigation";
import ResetCartBtn from "./ResetCartBtn";
import CartTotalPrice from "./CartTotalPrice";
import { getTranslations } from "next-intl/server";

export default async function CartCheckout() {
  const t = await getTranslations("CartPage");
  return (
    <main>
      <div className="mt-6 border-t border-b py-2">
        <section className="flex items-center justify-between">
          <p className="text-sm text-gray-400">{t("Subtotal")}</p>
          <p className="text-lg font-semibold text-gray-900">
            $<CartTotalPrice />
          </p>
        </section>
        <section className="flex items-center justify-between">
          <p className="text-sm text-gray-400">{t("Shipping")}</p>
          <p className="text-lg font-semibold text-gray-900">{t("Free")}</p>
        </section>
      </div>
      <section className="mt-6 border-b flex items-center justify-between">
        <p className="text-sm font-medium text-gray-900">{t("Total")}</p>
        <p className="text-2xl font-semibold text-gray-900">
          <span className="text-xs font-normal text-gray-400">USD</span>{" "}
          <CartTotalPrice />
        </p>
      </section>
      <section className="mt-8  flex items-center justify-between">
        <ResetCartBtn />
      </section>
      <section className="mt-6 text-center flex items-center gap-4">
        <button
          type="button"
          className="group inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
        >
          {t("Checkout")}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="group-hover:ml-8 ml-4 h-6 w-6 transition-all"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </button>
        <Link href="/products">
          {t("continueShopping")}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="group-hover:ml-8 ml-4 h-6 w-6 transition-all"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </Link>
      </section>
    </main>
  );
}
