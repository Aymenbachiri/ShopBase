import { useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterFormInputs } from "../schemas/registerUserSchema";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useTranslations } from "next-intl";
import { translatedRegisterUserSchema } from "../schemas/translatedRegisterUserSchema";
import type { TranslationFunctionWithStringFallback } from "../types/types";

const useRegisterUserForm = () => {
  const [loading, setLoading] = useState(false);
  const [captcha, setCaptcha] = useState(false);
  const router = useRouter();
  const tRaw = useTranslations("RegisterUserPage.RegisterUserSchemaErrors");
  const t = tRaw as unknown as TranslationFunctionWithStringFallback;
  const registerSchema = translatedRegisterUserSchema(t);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegisterFormInputs>({
    resolver: zodResolver(registerSchema),
  });

  const registerUser = async (data: RegisterFormInputs): Promise<void> => {
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const errorData = await res.json();
      let errorMessage: string;

      if (res.status === 409) {
        errorMessage = t("emailIsAlreadyUsed");
      } else {
        errorMessage = errorData.error || t("failedToRegister");
      }

      throw new Error(errorMessage);
    }
  };

  const onSubmit = useCallback(
    async (data: RegisterFormInputs) => {
      if (!captcha) {
        toast.error(t(""));
        return;
      }

      setLoading(true);

      try {
        await toast.promise(registerUser(data), {
          loading: t("registration"),
          success: t("loginSuccess"),
          error: (err) => err.message,
        });

        reset();
        setCaptcha(false);
        router.push("/dashboard");
      } catch (error) {
        console.error("Registration error:", error);
      } finally {
        setLoading(false);
      }
    },
    [captcha, reset, router, t]
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

export default useRegisterUserForm;
