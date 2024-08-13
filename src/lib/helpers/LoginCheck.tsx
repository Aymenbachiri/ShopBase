import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import LogoutBtn from "@/components/auth/LogoutBtn";
import { Link } from "@/navigation";
import { getServerSession } from "next-auth";
import { ServerTranslation } from "./ServerTranslation";

export default async function LoginCheck({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  const { t } = await ServerTranslation("LoginCheck");

  if (session) {
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
          <LogoutBtn />
        </section>
      </main>
    );
  }

  return <>{children}</>;
}
