"use client";
import { ClientTranslation } from "@/lib/helpers/ClientTranslation";
import { signOut } from "next-auth/react";

export default function LogoutBtn() {
  const { t } = ClientTranslation("LoginCheck");
  return (
    <button className="underline" onClick={() => signOut()}>
      {t("LogoutBtn")}
    </button>
  );
}
