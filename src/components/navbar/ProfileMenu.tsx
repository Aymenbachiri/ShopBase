import ArrowIcon from "@/lib/svg/ArrowIcon";
import UserIcon from "@/lib/svg/UserIcon";
import { ProfileMenuList } from "./ProfileMenuList";
import { ServerTranslation } from "@/lib/helpers/ServerTranslation";

export default async function ProfileMenu() {
  const { t } = await ServerTranslation("ProfileMenu");

  return (
    <main className="relative inline-block text-left group">
      <section className="flex items-center gap-1 cursor-pointer">
        <UserIcon />
        <span className="text-gray-300 md:text-gray-700 dark:text-gray-200">
          {t("Profile")}
        </span>
        <ArrowIcon />
      </section>

      <ul className="absolute z-20 -right-8 md:-right-10 w-52 md:w-48 origin-top-right bg-white border border-gray-200 divide-y-2 rounded-md shadow-lg outline-none dark:bg-gray-800 dark:border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
        <ProfileMenuList />
      </ul>
    </main>
  );
}
