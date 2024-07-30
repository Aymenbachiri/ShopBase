"use client";

import { Link } from "@/navigation";
import { signOut, useSession } from "next-auth/react";
import { useTranslations } from "next-intl";

export default function LoginCheck({
  children,
}: {
  children: React.ReactNode;
}) {
  const { status } = useSession();
  const t = useTranslations("LoginCheck");

  if (status === "loading") {
    return;
  }

  if (status === "authenticated") {
    return (
      <main className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <section className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">{t("Header")}</h1>
          <p className="mt-4 text-gray-500">
            {t("SubHeader")}{" "}
            <Link href="/dashboard" className="underline mx-1">
              {t("DashboardLink")}
            </Link>
            {t("Or")}
          </p>
          <button className="underline" onClick={() => signOut()}>
            {t("LogoutBtn")}
          </button>
        </section>
      </main>
    );
  }
  return <>{children}</>;
}
