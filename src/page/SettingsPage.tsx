import UpdatePasswordForm from "@/components/forms/UpdatePasswordForm";
import ProtectedRoute from "@/lib/helpers/ProtectedRoute";
import { ServerTranslation } from "@/lib/helpers/ServerTranslation";

export default async function SettingsPage() {
  const { t } = await ServerTranslation("SettingsPage");

  return (
    <ProtectedRoute>
      <main className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <section className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl mb-4">
            {t("heading")}
          </h1>
          <p className="text-gray-400 mb-8">{t("subheading")}</p>
        </section>
        <UpdatePasswordForm />
      </main>
    </ProtectedRoute>
  );
}
