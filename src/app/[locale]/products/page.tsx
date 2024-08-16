import MySuspense from "@/components/reusable_components/MySuspense";
import { ServerTranslation } from "@/lib/helpers/ServerTranslation";
import DotsIcon from "@/lib/svg/DotsIcon";
import ProductsPage from "@/page/ProductsPage";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await ServerTranslation("ProductsPage");

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      type: "website",
      url: "https://shopbase.com/sell-product",
      images: [
        {
          url: "https://shopbase.com/images/sell-product-og.jpg",
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
      images: ["https://shopbase.com/images/sell-product-twitter.jpg"],
    },
  };
}

export default async function Products() {
  const { t } = await ServerTranslation("ProductsPage");

  return (
    <main className="px-4 py-8 sm:px-6 lg:px-8">
      <section className="max-w-xl mb-10 sm:text-center lg:max-w-2xl md:mt-24 md:mx-auto md:mb-12">
        <h2 className="max-w-lg mb-6 mt-10 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <DotsIcon />
          </span>{" "}
          <span className="relative sm:mt-20 md:mt-0">{t("header")}</span>
        </h2>
        <p className="text-base text-gray-700 dark:text-gray-300 md:text-lg">
          {t("subHeader")}
        </p>
      </section>
      <MySuspense>
        <ProductsPage />
      </MySuspense>
    </main>
  );
}
