import { ServerTranslation } from "@/lib/helpers/ServerTranslation";

export default async function Location() {
  const { t } = await ServerTranslation("Location");
  return (
    <main className="container mx-auto max-w-7xl">
      <h1 className="text-center text-4xl font-bold py-4">{t("Header")}</h1>
      <section className="text-gray-600 body-font relative py-10">
        <div className="bg-gray-300 w-full">
          <iframe
            className="w-full h-[500px]"
            width="100%"
            height="100%"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            title="map"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Bou+Saada%20City&ie=UTF8&t=&z=14&iwloc=B&output=embed"
          />
        </div>
      </section>
    </main>
  );
}
