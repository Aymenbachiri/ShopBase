import EditProductForm from "@/components/forms/EditProductForm";
import MySuspense from "@/components/reusable_components/MySuspense";
import { getProductById } from "@/lib/helpers/getProductById";
import ProtectedRoute from "@/lib/helpers/ProtectedRoute";
import { ServerTranslation } from "@/lib/helpers/ServerTranslation";
import type { EditProductPageProps } from "@/lib/types/types";

export default async function EditProductPage({
  params,
}: EditProductPageProps) {
  const product = await getProductById(params.productId);
  const { t } = await ServerTranslation("EditProductPage");

  return (
    <ProtectedRoute>
      <main className="max-w-md mx-auto mt-40 bg-white shadow-lg rounded-lg overflow-hidden">
        <h1 className="text-2xl py-4 px-6 bg-orange-600 text-white text-center font-bold uppercase">
          {t("Header")}
        </h1>
        <MySuspense>
          <EditProductForm product={product} />
        </MySuspense>
      </main>
    </ProtectedRoute>
  );
}
