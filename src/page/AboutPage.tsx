import MyImage from "@/components/reusable_components/MyImage";
import img from "/public/assets/images/company.jpg";
import { ServerTranslation } from "@/lib/helpers/ServerTranslation";

export default async function AboutPage() {
  const { t } = await ServerTranslation("AboutPage");

  return (
    <main className="mt-[3.5%]">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
          <section className="max-w-lg">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-300 sm:text-4xl">
              {t("Title")}
            </h2>
            <p className="mt-4 text-gray-800 dark:text-gray-400 text-lg">
              {t("Description")}
            </p>
          </section>
          <section className="mt-12 lg:mt-0">
            <MyImage
              priority={true}
              src={img}
              width={600}
              height={400}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              placeholder="blur"
              alt={t("ImageAlt")}
              className="object-cover rounded-lg shadow-md"
            />
          </section>
        </div>
      </div>
    </main>
  );
}
