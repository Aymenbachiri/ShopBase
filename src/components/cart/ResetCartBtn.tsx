"use client";

import { ClientTranslation } from "@/lib/helpers/ClientTranslation";
import useCart from "@/lib/hooks/useCart";

export default function ResetCartBtn() {
  const { handleResetCart } = useCart();
  const { t } = ClientTranslation("CartPage");

  return (
    <button
      onClick={handleResetCart}
      type="button"
      className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
    >
      {t("Reset")}
    </button>
  );
}
