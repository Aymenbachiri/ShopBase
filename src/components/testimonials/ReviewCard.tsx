import { ServerTranslation } from "@/lib/helpers/ServerTranslation";
import { cn } from "@/lib/utils/utils";

export const ReviewCard = async ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: any;
}) => {
  const { t } = await ServerTranslation("Testimonials");

  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full h-10 w-10" alt="" src={img} />
        <section className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </section>
      </div>
      <blockquote className="mt-2 text-sm">{t(body)}</blockquote>
    </figure>
  );
};
