import Location from "@/components/sections/Location";
import { ServerTranslation } from "@/lib/helpers/ServerTranslation";
import AboutPage from "@/page/AboutPage";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await ServerTranslation("AboutPage");

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      type: "website",
      url: "https://shopbase.com/about",
      images: [
        {
          url: "https://shopbase.com/images/about-og.jpg",
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
      images: ["https://shopbase.com/images/about-twitter.jpg"],
    },
  };
}

export default function About() {
  return (
    <>
      <AboutPage />
      <Location />
    </>
  );
}
