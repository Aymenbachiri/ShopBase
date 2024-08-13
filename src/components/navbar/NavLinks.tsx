import { ServerTranslation } from "@/lib/helpers/ServerTranslation";

export default async function getNavLinks() {
  const { t } = await ServerTranslation("NavLinks");

  return [
    { href: "/", label: t("Home") },
    { href: "/products", label: t("Products") },
    { href: "/about", label: t("About") },
  ];
}
