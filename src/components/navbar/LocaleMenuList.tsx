"use client";

import useLocaleMenu from "@/lib/hooks/useLocaleMenu";
import useChangeLanguage from "@/lib/hooks/useChangeLanguage";
import UsaFlag from "@/lib/svg/UsaFlag";
import FranceFlag from "@/lib/svg/FranceFlag";
import AlgeriaFlag from "@/lib/svg/AlgeriaFlag";
import { useTranslations } from "next-intl";
import { ClientTranslation } from "@/lib/helpers/ClientTranslation";

export default function LocaleMenuList({
  setIsOpen,
}: {
  setIsOpen: (isOpen: boolean) => void;
}) {
  const { menuRef } = useLocaleMenu();
  const changeLanguage = useChangeLanguage();
  const { t } = ClientTranslation("Languages");

  const Languages = [
    { code: "ar", name: t("Arabic"), flag: <AlgeriaFlag /> },
    { code: "en", name: t("English"), flag: <UsaFlag /> },
    { code: "fr", name: t("French"), flag: <FranceFlag /> },
  ];

  return (
    <div
      className="md:absolute mx-auto md:right-0 w-48 md:origin-top-right bg-white divide-y divide-gray-100 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-gray-800 dark:divide-gray-700"
      ref={menuRef}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <ul className="py-2">
        {Languages.map((langauge) => (
          <li
            key={langauge.code}
            onClick={() => changeLanguage(langauge.code)}
            className="flex justify-center items-center gap-6 w-full px-4 py-2 text-sm text-gray-700 hover:cursor-pointer hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            {langauge.flag}
            {langauge.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
