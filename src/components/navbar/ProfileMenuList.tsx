"use client";

import { ClientTranslation } from "@/lib/helpers/ClientTranslation";
import { useNavbar } from "@/lib/providers/NavbarProvider";
import DashboardIcon from "@/lib/svg/DashboardIcon";
import LogoutIcon from "@/lib/svg/LogoutIcon";
import SellProductIcon from "@/lib/svg/SellProductIcon";
import SettingsIcon from "@/lib/svg/SettingsIcon";
import { Link } from "@/navigation";
import { signOut } from "next-auth/react";

export function ProfileMenuList() {
  const { t } = ClientTranslation("ProfileMenu");
  const { handleNav } = useNavbar();

  const MenuList = [
    { label: t("Dashboard"), icon: <DashboardIcon />, href: "/dashboard" },
    { label: t("Settings"), icon: <SettingsIcon />, href: "/settings" },
    { label: t("SellProduct"), icon: <SellProductIcon />, href: "/sell" },
  ];

  return (
    <>
      <li className="flex justify-between items-center gap-1 divide-y-2 flex-col hover:cursor-pointer ">
        {MenuList.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex justify-between items-center gap-1 w-full hover:bg-gray-100 dark:hover:bg-gray-700 px-4 py-2 text-gray-700 dark:text-gray-200"
            onClick={handleNav}
          >
            {item.icon}
            {item.label}
          </Link>
        ))}
      </li>
      <li className="flex justify-between items-center gap-1 w-full text-red-700 hover:bg-gray-100 dark:hover:bg-gray-700 px-4 py-2">
        <button
          onClick={() => {
            signOut();
            handleNav();
          }}
          className="text-red-700 dark:text-red-700 flex justify-between items-center gap-1 w-full"
        >
          <LogoutIcon />
          {t("LogOut")}
        </button>
      </li>
    </>
  );
}
