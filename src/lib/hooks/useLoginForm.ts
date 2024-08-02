import { useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { LoginFormInputs, loginSchema } from "../schemas/LoginSchema";
import { useTranslations } from "next-intl";
import type { TranslationFunctionWithStringFallback } from "../types/types";
import { translatedLoginSchema } from "../schemas/translatedLoginSchema";
import { useRouter } from "@/navigation";

const useLoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [captcha, setCaptcha] = useState(false);
  const router = useRouter();
  const tRaw = useTranslations("LoginPage.LoginSchemaErrors");
  const t = tRaw as unknown as TranslationFunctionWithStringFallback;
  const loginSchema = translatedLoginSchema(t);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  });

  const loginUser = async (data: LoginFormInputs): Promise<void> => {
    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (!res || !res.ok) {
      switch (res?.error) {
        case "Wrong Credentials":
          throw new Error(t("wrongCredentials"));
        case "User not found":
          throw new Error(t("userNotFound"));
        default:
          throw new Error(t("loginFailed"));
      }
    }
  };

  const onSubmit = useCallback(
    async (data: LoginFormInputs) => {
      if (!captcha) {
        toast.error(t("captchaFailed"));
        return;
      }

      setLoading(true);

      try {
        await toast.promise(loginUser(data), {
          loading: t("loggingIn"),
          success: () => {
            reset();
            setCaptcha(false);
            return t("loginSuccess");
          },
          error: (err) => err.message || t("loginFailed"),
        });

        setCaptcha(false);
        router.refresh();
      } catch (error) {
        console.error("Login error:", error);
        toast.error(t("unexpectedError"));
      } finally {
        setLoading(false);
      }
    },
    [captcha, reset, t]
  );

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    loading,
    setCaptcha,
    captcha,
  };
};

export default useLoginForm;
