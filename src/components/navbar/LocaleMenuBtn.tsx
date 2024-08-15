import AlgeriaFlag from "@/lib/svg/AlgeriaFlag";
import FranceFlag from "@/lib/svg/FranceFlag";
import ArrowIcon from "@/lib/svg/ArrowIcon";
import UsaFlag from "@/lib/svg/UsaFlag";
import { useLocale } from "next-intl";

export default function LocaleMenuButton() {
  const locale = useLocale();

  const DisplayFlags = () => {
    if (locale === "ar") return <AlgeriaFlag />;
    else if (locale === "en") return <UsaFlag />;
    else return <FranceFlag />;
  };

  return (
    <button
      type="button"
      className="inline-flex items-center gap-3 px-4 text-sm font-medium text-gray-900 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:text-white dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:focus:ring-blue-500"
    >
      <DisplayFlags />
      {locale}
      <ArrowIcon />
    </button>
  );
}
