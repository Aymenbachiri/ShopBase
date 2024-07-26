import useChangeLanguage from "@/lib/hooks/useChangeLocale";
import type { LocaleMenuProps } from "@/lib/types/types";
import { useEffect, useRef, useState } from "react";

export default function LocaleMenu({ buttonText }: LocaleMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const changeLocale = useChangeLanguage();

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <main
      className="md:relative"
      ref={menuRef}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:text-white dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:focus:ring-blue-500"
      >
        {buttonText}
        <svg
          className={`w-5 h-5 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 48 48"
        >
          <path
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={4}
            d="M36 18L24 30L12 18"
          ></path>
        </svg>
      </button>
      {isOpen && (
        <div className="md:absolute mx-auto md:right-0 w-48 md:origin-top-right bg-white divide-y divide-gray-100 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-gray-800 dark:divide-gray-700">
          <ul className="py-2">
            <li
              onClick={() => changeLocale("en")}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              English (US)
            </li>
            <li
              onClick={() => changeLocale("fr")}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              French
            </li>
            <li
              onClick={() => changeLocale("ar")}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Arab
            </li>
          </ul>
        </div>
      )}
    </main>
  );
}
