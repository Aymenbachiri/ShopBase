import SellProductForm from "@/components/forms/SellProductForm";
import ProtectedRoute from "@/lib/providers/ProtectedRoute";
import { getTranslations } from "next-intl/server";

export default async function SellProductPage() {
  const t = await getTranslations("SellProductPage");

  return (
    <ProtectedRoute>
      <main className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
        <div className="container mx-auto px-4 py-36">
          <h1 className="text-4xl font-bold mb-4 text-center">
            {t("heading")}
          </h1>
          <p className="text-lg mb-6 text-center">{t("subHeading")}</p>
          <SellProductForm />
        </div>
      </main>
    </ProtectedRoute>
  );
}
