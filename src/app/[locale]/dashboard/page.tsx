import MySuspense from "@/components/reusable_components/MySuspense";
import ProtectedRoute from "@/lib/helpers/ProtectedRoute";
import { ServerTranslation } from "@/lib/helpers/ServerTranslation";
import DashboardPage from "@/page/DashboardPage";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await ServerTranslation("DashboardPage");

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

export default function Dashboard() {
  return (
    <ProtectedRoute>
      <MySuspense>
        <DashboardPage />
      </MySuspense>
    </ProtectedRoute>
  );
}
