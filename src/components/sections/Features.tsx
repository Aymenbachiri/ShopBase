import { ServerTranslation } from "@/lib/helpers/ServerTranslation";
import { FeaturesList } from "../FeaturesList";

export default async function Features() {
  const { t } = await ServerTranslation("Features");

  return (
    <main className="my-[110px] grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 px-4 md:px-8 lg:px-16">
      {FeaturesList.map((feature, index) => (
        <div
          key={index}
          className="flex flex-col items-center gap-4 text-center"
        >
          <div className="flex items-center rounded-full bg-emerald-500 p-4 text-white">
            {feature.icon}
          </div>
          <section className="flex w-full min-w-0 flex-col items-center justify-center gap-0 text-base">
            <h3 className="mb-2 py-2 text-lg font-semibold leading-6 text-slate-700 dark:text-slate-200">
              {t(feature.label)}
            </h3>
            <p className="text-slate-500 dark:text-slate-400">
              {t(feature.description)}
            </p>
          </section>
        </div>
      ))}
    </main>
  );
}
