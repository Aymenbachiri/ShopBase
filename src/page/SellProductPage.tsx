import SellProductForm from "@/components/forms/SellProductForm";
import ProtectedRoute from "@/lib/helpers/ProtectedRoute";
import { ServerTranslation } from "@/lib/helpers/ServerTranslation";

export default async function SellProductPage() {
  const { t } = await ServerTranslation("SellProductPage");

  return (
    <ProtectedRoute>
      <main className="min-h-screen text-gray-800 dark:text-gray-200">
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
