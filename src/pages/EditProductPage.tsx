import EditProductForm from "@/components/forms/EditProductForm";
import { getProductById } from "@/lib/helpers/getProductById";
import ProtectedRoute from "@/lib/helpers/ProtectedRoute";
import LoadingSpinner from "@/lib/svg/LoadingSpinner";
import type { EditProductPageProps } from "@/lib/types/types";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Suspense } from "react";

export async function generateMetadata({
  params,
}: EditProductPageProps): Promise<Metadata> {
  const product = await getProductById(params.productId);
  const { title, description, imageurl } = product;

  const pageUrl = `https://shopbase.com/editProduct/${params.productId}`;

  return {
    title: `Edit ${title}`,
    description: `Edit the product details for ${title}. ${description}`,
    openGraph: {
      title: `Edit ${title}`,
      description: `Edit the product details for ${title}. ${description}`,
      type: "website",
      url: pageUrl,
      images: [
        {
          url: imageurl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `Edit ${title}`,
      description: `Edit the product details for ${title}. ${description}`,
      images: [imageurl],
    },
  };
}

export default async function EditProductPage({
  params,
}: EditProductPageProps) {
  const product = await getProductById(params.productId);
  const t = await getTranslations("EditProductPage");

  return (
    <ProtectedRoute>
      <main className="max-w-md mx-auto mt-40 bg-white shadow-lg rounded-lg overflow-hidden">
        <h1 className="text-2xl py-4 px-6 bg-orange-600 text-white text-center font-bold uppercase">
          {t("Header")}
        </h1>
        <Suspense fallback={<LoadingSpinner />}>
          <EditProductForm product={product} />
        </Suspense>
      </main>
    </ProtectedRoute>
  );
}
