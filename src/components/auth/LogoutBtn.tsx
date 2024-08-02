"use client";
import { signOut } from "next-auth/react";
import { useTranslations } from "next-intl";

export default function LogoutBtn() {
  const t = useTranslations("LoginCheck");
  return (
    <button className="underline" onClick={() => signOut()}>
      {t("LogoutBtn")}
    </button>
  );
}
