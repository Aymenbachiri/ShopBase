import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Link } from "@/navigation";
import { getServerSession } from "next-auth";
import { getTranslations } from "next-intl/server";

export default async function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  const t = await getTranslations("ProtectedRoute");

  if (!session) {
    return (
      <main className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <section className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">
            {t("LoginRequired")}
          </h1>
          <p className="mt-4 text-gray-500">{t("message")}</p>
          <Link className="underline text-blue-500" href="/login">
            {t("loginLink")}
          </Link>
        </section>
      </main>
    );
  }
  return <>{children}</>;
}
