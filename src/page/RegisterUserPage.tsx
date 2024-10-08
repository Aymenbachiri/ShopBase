import RegisterUserForm from "@/components/forms/RegisterUserForm";
import LoginCheck from "@/lib/helpers/LoginCheck";
import { ServerTranslation } from "@/lib/helpers/ServerTranslation";

export default async function RegisterUserPage() {
  const { t } = await ServerTranslation("RegisterUserPage");

  return (
    <LoginCheck>
      <main className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <section className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl mb-4">
            {t("heading")}
          </h1>
          <p className="text-gray-600 mb-8">{t("subheading")}</p>
        </section>
        <RegisterUserForm />
      </main>
    </LoginCheck>
  );
}
