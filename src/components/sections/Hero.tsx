import MyImage from "@/components/reusable_components/MyImage";
import img from "/public/assets/images/shopping.jpg";
import { ServerTranslation } from "@/lib/helpers/ServerTranslation";
import { Link } from "@/navigation";

export default async function Hero() {
  const { t } = await ServerTranslation("HomePage");

  return (
    <main className="px-8 py-12 mt-[10%] md:mt-[6%] mx-auto md:px-12 lg:px-32 max-w-7xl">
      <div className="grid items-center grid-cols-1 gap-4 list-none lg:grid-cols-2 lg:gap-24">
        <aside>
          <span className="text-xs font-bold tracking-wide text-gray-500 uppercase">
            {t("welcome")}
          </span>
          <p className="mt-8 text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-400 text-balance">
            {t("headline")}
          </p>
          <p className="mt-4 text-base font-medium text-gray-500">
            {t("description")}
          </p>
          <Link
            href="/products"
            className="inline-flex mt-5 items-center justify-center w-full h-12 gap-3 px-5 py-3 font-medium text-white duration-200 bg-gray-900 md:w-auto rounded-xl hover:bg-gray-800 focus:ring-2 focus:ring-offset-2 focus:ring-black"
            aria-label="Shop Now"
          >
            {t("primaryButton")}
          </Link>
        </aside>
        <section className="p-2 border bg-gray-50 rounded-3xl">
          <div className="h-full overflow-hidden bg-white border shadow-lg rounded-3xl">
            <MyImage
              alt={t("imageAlt")}
              className="relative w-full rounded-2xl drop-shadow-2xl"
              src={img}
              width={300}
              height={100}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              placeholder="blur"
              priority={true}
            />
          </div>
        </section>
      </div>
    </main>
  );
}
