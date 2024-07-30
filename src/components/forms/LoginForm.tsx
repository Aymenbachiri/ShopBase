"use client";

import { Link } from "@/navigation";
import InputField from "../reusable_components/InputField";
import Recaptcha from "../reusable_components/Recaptcha";
import LoginBtn from "../auth/LoginBtn";
import useLoginForm from "@/lib/hooks/useLoginForm";
import { useTranslations } from "next-intl";

export default function LoginForm() {
  const { register, handleSubmit, errors, loading, setCaptcha, captcha } =
    useLoginForm();

  const t = useTranslations("LoginPage.Form");

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mb-0 mt-8 max-w-md space-y-4"
    >
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
      <Recaptcha onChange={() => setCaptcha(true)} />
      <section className="flex items-center justify-between">
        <p className="text-sm text-gray-500">
          No account?
          <Link href="/register" className="underline mx-1">
            Sign Up
          </Link>
        </p>
        <LoginBtn
          LoginButton={t("submitButton")}
          loading={loading}
          captcha={captcha}
        />
      </section>
    </form>
  );
}
