"use client";

import { useTranslations } from "next-intl";
import useUpdatePassword from "@/lib/hooks/useUpdatePassword";
import InputField from "../reusable_components/InputField";
import Recaptcha from "../reusable_components/Recaptcha";
import UpdatePasswordBtn from "../auth/UpdatePasswordBtn";

export default function UpdatePasswordForm() {
  const { register, handleSubmit, errors, loading, setCaptcha, captcha } =
    useUpdatePassword();

  const t = useTranslations("SettingsPage.UpdatePasswordSchemaErrors");

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mb-0 mt-8 max-w-md space-y-4"
    >
      <InputField
        label={t("currentPasswordRequired")}
        type="password"
        placeholder={t("currentPasswordInputPlaceholder")}
        registration={register("currentPassword")}
        error={errors.currentPassword}
      />
      <InputField
        label={t("passwordMinLength")}
        type="password"
        placeholder={t("passwordInputPlaceholder")}
        registration={register("password")}
        error={errors.password}
      />
      <InputField
        label={t("confirmPasswordMinLength")}
        type="password"
        placeholder={t("confirmPasswordInputPlaceholder")}
        registration={register("confirmPassword")}
        error={errors.confirmPassword}
      />
      <Recaptcha onChange={() => setCaptcha(true)} />
      <section className="flex items-center justify-between">
        <UpdatePasswordBtn
          UpdatePasswordButton={t("UpdatePasswordButton")}
          loading={loading}
          captcha={captcha}
        />
      </section>
    </form>
  );
}
