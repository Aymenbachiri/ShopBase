import { ServerTranslation } from "@/lib/helpers/ServerTranslation";

export default async function Footer() {
  const { t } = await ServerTranslation("Footer");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="max-w-7xl mx-auto text-slate-500 mt-[3%] pb-[3%]">
      <div className="py-4 text-sm">
        <div className="mx-auto px-6">
          <div className="grid grid-cols-4 items-center gap-6 md:grid-cols-8 lg:grid-cols-12">
            <h1 className="col-span-1 flex items-center gap-2 whitespace-nowrap text-base font-medium leading-6 focus:outline-none md:col-span-4 lg:col-span-6">
              {t("Copyright", { year: currentYear })}
            </h1>
            <section
              className="col-span-3 md:col-span-4 lg:col-span-6"
              aria-labelledby="subfooter-links-5-logo-sub"
            >
              <nav className="flex flex-wrap items-center justify-end gap-1">
                <h3>{t("ProvidedBy")}</h3>
                <a
                  href="https://www.linkedin.com/in/aymen-bachiri-9442b5287"
                  className="underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("Aymen")}
                </a>
              </nav>
            </section>
          </div>
        </div>
      </div>
    </footer>
  );
}
