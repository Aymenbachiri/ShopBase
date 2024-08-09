import { useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { EditProductFormData } from "../schemas/editProductSchema";
import { useTranslations } from "next-intl";
import { TranslationFunctionWithStringFallback } from "../types/types";
import { translatedEditProductSchema } from "../schemas/translatedEditProductSchema";

export const useEditProductForm = (initialData: EditProductFormData) => {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const tRaw = useTranslations("EditProductPage.EditProductForm");
  const t = tRaw as unknown as TranslationFunctionWithStringFallback;
  const editSchema = translatedEditProductSchema(t);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<EditProductFormData>({
    resolver: zodResolver(editSchema),
    defaultValues: initialData,
  });

  const onSubmit = useCallback(
    async (data: EditProductFormData) => {
      console.log(`/api/products/${initialData.id}`);
      try {
        setLoading(true);
        setErr(null);

        const editProduct = async () => {
          const res = await fetch(`/api/products/${initialData?.id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });

          if (!res.ok) {
            const errorData = await res.json();
            throw new Error(errorData.message || "Failed to edit product");
          }
        };

        await toast.promise(editProduct(), {
          loading: t("updateProduct"),
          success: () => {
            reset();
            return t("productUpdatedSuccessfully");
          },
          error: (err) => err.message || t("failedToUpdateProduct"),
        });
      } catch (error) {
        if (error instanceof Error) {
          setErr(error.message);
          toast.error(error.message);
        } else {
          setErr("An unknown error occurred");
          toast.error(t("unexpectedError"));
        }
      } finally {
        setLoading(false);
      }
    },
    [reset, t]
  );

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    loading,
    err,
  };
};
