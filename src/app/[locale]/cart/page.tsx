import { ServerTranslation } from "@/lib/helpers/ServerTranslation";
import CartPage from "@/page/CartPage";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await ServerTranslation("CartPage");

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      type: "website",
      url: "https://shopbase.com/register",
      images: [
        {
          url: "https://shopbase.com/images/register-og.jpg",
          width: 1200,
          height: 630,
          alt: t("ogImageAlt"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("twitterTitle"),
      description: t("twitterDescription"),
      images: ["https://shopbase.com/images/register-twitter.jpg"],
    },
  };
}

export default function Cart() {
  return <CartPage />;
}
