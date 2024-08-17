import { getProductById } from "@/lib/helpers/getProductById";
import { ServerTranslation } from "@/lib/helpers/ServerTranslation";
import type { EditProductPageProps, ProductsType } from "@/lib/types/types";
import EditProductPage from "@/page/EditProductPage";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: EditProductPageProps): Promise<Metadata> {
  const product = await getProductById(params.productId);
  const { title, description, imageurl } = product;
  const { t } = await ServerTranslation("EditProductPage");

  const pageUrl = `https://shopbase.com/editProduct/${params.productId}`;

  return {
    title: t("metaTitle", { title }),
    description: t("metaDescription", { title, description }),
    openGraph: {
      title: t("ogTitle", { title }),
      description: t("ogDescription", { title, description }),
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
      title: t("twitterTitle", { title }),
      description: t("twitterDescription", { title, description }),
      images: [imageurl],
    },
  };
}


export default function EditProduct({
  params,
}: {
  params: { productId: string };
}) {
  return <EditProductPage params={params} />;
}
