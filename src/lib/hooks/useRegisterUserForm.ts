import { useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterFormInputs } from "../schemas/registerUserSchema";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useTranslations } from "next-intl";
import { z } from "zod";

const useRegisterUserForm = () => {
  const [loading, setLoading] = useState(false);
  const [captcha, setCaptcha] = useState(false);
  const router = useRouter();
  const t = useTranslations("RegisterUserPage.RegisterUserSchemaErrors");

  const registerSchema = z
    .object({
      name: z.string().min(1, { message: t("nameRequired") }),
      email: z.string().email({ message: t("invalidEmail") }),
      password: z.string().min(8, { message: t("passwordMinLength") }),
      confirmPassword: z
        .string()
        .min(8, { message: t("confirmPasswordMinLength") }),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: t("passwordsDoNotMatch"),
      path: ["confirmPassword"],
    });

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
      if (res.status === 409) {
        throw new Error("Email is already in use");
      } else {
        throw new Error(errorData.error || "Failed to register");
      }
    }
  };

  const onSubmit = useCallback(
    async (data: RegisterFormInputs) => {
      if (!captcha) {
        toast.error(t("captchaFailed"));
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
