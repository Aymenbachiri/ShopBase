"use client";

import AlgeriaFlag from "@/lib/svg/AlgeriaFlag";
import FranceFlag from "@/lib/svg/FranceFlag";
import LocaleMenuBtnIcon from "@/lib/svg/LocaleMenuBtnIcon";
import UsaFlag from "@/lib/svg/UsaFlag";
import { useLocale } from "next-intl";

export default function LocaleMenuButton({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  const Locale = useLocale();
  const DisplayFlags = () => {
    if (Locale === "ar") return <AlgeriaFlag />;
    else if (Locale === "en") return <UsaFlag />;
    else return <FranceFlag />;
  };

  return (
    <button
      type="button"
      onClick={() => setIsOpen(!isOpen)}
      className="inline-flex items-center gap-3 px-4 text-sm font-medium text-gray-900 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:text-white dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:focus:ring-blue-500"
    >
      <DisplayFlags />
      {Locale}
      <LocaleMenuBtnIcon isOpen={isOpen} />
    </button>
  );
}
