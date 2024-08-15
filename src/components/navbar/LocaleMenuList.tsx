"use client";

import useChangeLanguage from "@/lib/hooks/useChangeLanguage";
import UsaFlag from "@/lib/svg/UsaFlag";
import FranceFlag from "@/lib/svg/FranceFlag";
import AlgeriaFlag from "@/lib/svg/AlgeriaFlag";
import { ClientTranslation } from "@/lib/helpers/ClientTranslation";

export default function LocaleMenuList() {
  const changeLanguage = useChangeLanguage();
  const { t } = ClientTranslation("Languages");

  const languages = [
    { code: "ar", name: t("Arabic"), flag: <AlgeriaFlag /> },
    { code: "en", name: t("English"), flag: <UsaFlag /> },
    { code: "fr", name: t("French"), flag: <FranceFlag /> },
  ];

  return (
    <main className="absolute left-0 w-40 -mt-1 origin-top-left divide-y divide-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300 ">
      <ul className="py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200">
        {languages.map((language) => (
          <li
            key={language.code}
            onClick={() => changeLanguage(language.code)}
            className="flex justify-center items-center gap-6 w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:cursor-pointer bg-white border border-gray-200 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:text-white dark:hover:bg-gray-600"
          >
            {language.flag}
            {language.name}
          </li>
        ))}
      </ul>
    </main>
  );
}
