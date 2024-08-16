import { useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { useTranslations } from "next-intl";
import { useRouter } from "@/navigation";
import { translatedUpdatePasswordSchema } from "../schemas/translatedUpdatePasswordSchema";
import { UpdateFormInputs } from "../schemas/updatePasswordSchema";
import { signOut } from "next-auth/react";
import type { TranslationFunctionWithStringFallback } from "../types/types";

const useUpdatePassword = () => {
  const [loading, setLoading] = useState(false);
  const [captcha, setCaptcha] = useState(false);
  const router = useRouter();
  const tRaw = useTranslations("SettingsPage.UpdatePasswordSchemaErrors");
  const t = tRaw as unknown as TranslationFunctionWithStringFallback;
  const updateSchema = translatedUpdatePasswordSchema(t);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UpdateFormInputs>({
    resolver: zodResolver(updateSchema),
  });

  const updatePass = async (data: UpdateFormInputs): Promise<void> => {
    const res = await fetch("/api/auth/updatePassword", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const errorData = await res.json();
      let errorMessage: string;

      if (res.status === 401) {
        errorMessage = t("invalidPassword");
      } else {
        errorMessage = errorData.error || t("failedToUpdate");
      }

      throw new Error(errorMessage);
    }
  };

  const onSubmit = useCallback(
    async (data: UpdateFormInputs) => {
      if (!captcha) {
        toast.error(t("captchaFailed"));
        return;
      }

      setLoading(true);

      try {
        await toast.promise(updatePass(data), {
          loading: t("updating"),
          success: t("updateSuccess"),
          error: (err) => err.message || t("updateFailed"),
        });

        reset();
        setCaptcha(false);
      } catch (error) {
        console.error("Password update error:", error);
        toast.error(t("unexpectedError"));
      } finally {
        setLoading(false);
        // Sign out the user after successful password change
        // await signOut({ redirect: false });
        // router.push("/login");
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

export default useUpdatePassword;
