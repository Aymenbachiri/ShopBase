import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useState } from "react";
import { ProductFormData } from "../schemas/productSchema";
import toast from "react-hot-toast";
import { useTranslations } from "next-intl";
import type { TranslationFunctionWithStringFallback } from "../types/types";
import { translatedSellProductSchema } from "../schemas/translatedSellProductSchema";

const useSellProductForm = () => {
  const [loading, setLoading] = useState(false);
  const [captcha, setCaptcha] = useState(false);
  const tRaw = useTranslations("SellProductPage");
  const t = tRaw as unknown as TranslationFunctionWithStringFallback;
  const sellSchema = translatedSellProductSchema(t);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductFormData>({
    resolver: zodResolver(sellSchema),
  });

  const registerProduct = useCallback(
    async (data: ProductFormData): Promise<void> => {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || t("failedToAddProduct"));
      }
    },
    [t]
  );

  const onSubmit = useCallback(
    async (data: ProductFormData) => {
      if (!captcha) {
        toast.error(t("captchaFailed"));
        return;
      }

      setLoading(true);

      try {
        await toast.promise(registerProduct(data), {
          loading: t("addingProduct"),
          success: t("productAddedSuccessfully"),
          error: (err) => err.message || t("failedToAddProduct"),
        });

        setCaptcha(false);
      } catch (error) {
        console.error("Product addition error:", error);
        toast.error(t("unexpectedError"));
      } finally {
        setLoading(false);
      }
    },
    [captcha, registerProduct, t]
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

export default useSellProductForm;
