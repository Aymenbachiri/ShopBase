"use client";

import DashboardIcon from "@/lib/svg/DashboardIcon";
import LogoutIcon from "@/lib/svg/LogoutIcon";
import SellProductIcon from "@/lib/svg/SellProductIcon";
import SettingsIcon from "@/lib/svg/SettingsIcon";
import UserIcon from "@/lib/svg/UserIcon";
import { Link } from "@/navigation";
import { signOut } from "next-auth/react";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function ProfileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("ProfileMenu");

  return (
    <main className="relative inline-block text-left">
      <section
        className="flex items-center gap-1 cursor-pointer"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <UserIcon />
        <span className="text-gray-700 dark:text-gray-200">{t("Profile")}</span>
      </section>

      {isOpen && (
        <ul
          className="absolute -right-20 w-48 origin-top-right bg-white border border-gray-200 rounded-md shadow-lg outline-none dark:bg-gray-800 dark:border-gray-700"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <li className="flex justify-between items-center gap-1 hover:cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 px-4 py-2 text-gray-700 dark:text-gray-200">
            <Link
              href="/dashboard"
              className="flex justify-between items-center gap-1 w-full"
            >
              <DashboardIcon />
              {t("Dashboard")}
            </Link>
          </li>
          <li className="flex justify-between items-center gap-1 hover:cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 px-4 py-2 text-gray-700 dark:text-gray-200">
            <Link
              href="/settings"
              className="flex justify-between items-center gap-1 w-full"
            >
              <SettingsIcon />
              {t("Settings")}
            </Link>
          </li>
          <li className="flex justify-between items-center gap-1 hover:cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 px-4 py-2 text-gray-700 dark:text-gray-200">
            <Link
              href="/sell"
              className="flex justify-between items-center gap-1 w-full"
            >
              <SellProductIcon />
              {t("SellProduct")}
            </Link>
          </li>
          <li className="flex justify-between items-center gap-1 w-full text-red-700 hover:bg-gray-100 dark:hover:bg-gray-700 px-4 py-2">
            <button
              onClick={() => signOut()}
              className="text-red-700 dark:text-red-700 flex justify-between items-center gap-1 w-full"
            >
              <LogoutIcon />
              {t("LogOut")}
            </button>
          </li>
        </ul>
      )}
    </main>
  );
}
