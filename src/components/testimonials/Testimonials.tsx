import { ServerTranslation } from "@/lib/helpers/ServerTranslation";
import MarqueeDemo from "./MarqueeDemo";

export default async function Testimonials() {
  const { t } = await ServerTranslation("Testimonials");

  return (
    <main className="px-4 py-8 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 sm:text-4xl">
        {t("Header")}
      </h2>
      <MarqueeDemo />
    </main>
  );
}
