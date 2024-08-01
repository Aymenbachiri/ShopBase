// RegisterUserForm.tsx
"use client";

import { useTranslations } from "next-intl";
import RegisterBtn from "../auth/RegisterBtn";
import InputField from "../reusable_components/InputField";
import Recaptcha from "../reusable_components/Recaptcha";
import useRegisterUserForm from "@/lib/hooks/useRegisterUserForm";

export default function RegisterUserForm() {
  const { register, handleSubmit, errors, loading, captcha, setCaptcha } =
    useRegisterUserForm();

  const t = useTranslations("RegisterUserPage.Form");

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mb-0 mt-8 max-w-md space-y-4"
    >
      <InputField
        label={t("nameInput")}
        type="text"
        placeholder={t("nameInputPlaceholder")}
        registration={register("name")}
        error={errors.name}
      />
      <InputField
        label={t("emailInput")}
        type="email"
        placeholder={t("emailInputPlaceholder")}
        registration={register("email")}
        error={errors.email}
      />
      <InputField
        label={t("passwordInput")}
        type="password"
        placeholder={t("passwordInputPlaceholder")}
        registration={register("password")}
        error={errors.password}
      />
      <InputField
        label={t("confirmPasswordInput")}
        type="password"
        placeholder={t("confirmPasswordInputPlaceholder")}
        registration={register("confirmPassword")}
        error={errors.confirmPassword}
      />
      <Recaptcha onChange={() => setCaptcha(true)} />
      <RegisterBtn
        RegisterButton={t("submitButton")}
        loading={loading}
        captcha={captcha}
      />
    </form>
  );
}
