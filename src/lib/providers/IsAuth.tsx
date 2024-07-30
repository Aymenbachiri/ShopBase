"use client";

import { useSession } from "next-auth/react";
import LogInIcon from "../svg/LogInIcon";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

export default function IsAuth({ children }: { children: React.ReactNode }) {
  const session = useSession();
  const t = useTranslations("LoginPage.Form");

  if (session.status === "authenticated") {
    return <>{children}</>;
  }
  return (
    <Link
      href="/login"
      className="flex justify-center items-center gap-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition-colors duration-300 hover:cursor-pointer dark:bg-blue-700 dark:hover:bg-blue-800 dark:text-gray-200"
    >
      {t("submitButton")}
      <LogInIcon />
    </Link>
  );
}
