import { ServerTranslation } from "@/lib/helpers/ServerTranslation";
import { FaqList } from "../FaqList";

export default async function Faq() {
  const { t } = await ServerTranslation("Faq");

  return (
    <main className="max-w-7xl mx-auto divide-y divide-slate-200 dark:divide-slate-700 rounded mt-[7%]">
      {FaqList.map((item) => (
        <details key={item.Answer} className="group p-4">
          <summary className="relative flex cursor-pointer list-none gap-4 pr-8 font-medium text-slate-700 dark:text-slate-300 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900 dark:group-hover:text-slate-100 [&::-webkit-details-marker]:hidden">
            {item.Icon}
            {t(item.Question)}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-slate-700 dark:stroke-slate-300 transition duration-300 group-open:rotate-45"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-labelledby="title-ac06 desc-ac06"
            >
              <title id="title-ac06">Open icon</title>
              <desc id="desc-ac06">
                Icon that represents the state of the summary
              </desc>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </summary>
          <p className="mt-4 text-slate-500 dark:text-slate-400">
            {t(item.Answer)}
          </p>
        </details>
      ))}
    </main>
  );
}
