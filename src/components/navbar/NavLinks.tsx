import { getTranslations } from "next-intl/server";

export default async function getNavLinks() {
  const t = await getTranslations("NavLinks");

  return [
    { href: "/", label: t("Home") },
    { href: "/products", label: t("Products") },
    { href: "/sell", label: t("Sell") },
    { href: "/about", label: t("About") },
  ];
}
