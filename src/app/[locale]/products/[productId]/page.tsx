import Notfound from "@/app/not-found";
import { getAllProductIds } from "@/lib/helpers/getAllProductIds";
import { getProductById } from "@/lib/helpers/getProductById";
import SingleProductPage from "@/pages/SingleProductPage";
import type { Metadata } from "next";

type Props = {
  params: { productId: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const ProductId = params.productId;
  const product = await getProductById(ProductId);

  if (!product) {
    return {
      title: "Product Not Found",
      description: "The product you are looking for does not exist.",
    };
  }

  const baseUrl = "https://www.yourwebsite.com";

  return {
    title: product.title,
    description: product.description,
    openGraph: {
      title: product.title,
      description: product.description,
      url: `${baseUrl}/products/${ProductId}`,
      siteName: "Your Site Name",
      images: [
        {
          url: product.imageurl || `${baseUrl}/default-image.jpg`,
          width: 800,
          height: 600,
          alt: product.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: product.title,
      description: product.description,
      images: product.imageurl || `${baseUrl}/default-image.jpg`,
    },
  };
}

export async function generateStaticParams(): Promise<
  {
    productId: string;
  }[]
> {
  const productIds = await getAllProductIds();

  return productIds.map((id) => ({
    productId: id,
  }));
}

export default async function Product({ params }: Props) {
  const ProductId = params.productId;
  const product = await getProductById(ProductId);

  if (!product) Notfound();

  return <SingleProductPage product={product} />;
}
