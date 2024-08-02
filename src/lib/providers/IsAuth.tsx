import { getTranslations } from "next-intl/server";
import LogInIcon from "../svg/LogInIcon";
import { Link } from "@/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function IsAuth({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  const t = await getTranslations("LoginPage.Form");

  if (!session) {
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
  return <>{children}</>;
}
