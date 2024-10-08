import { useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { EditProductFormData } from "../schemas/editProductSchema";
import { useTranslations } from "next-intl";
import { TranslationFunctionWithStringFallback } from "../types/types";
import { translatedEditProductSchema } from "../schemas/translatedEditProductSchema";
import { useRouter } from "@/navigation";

export const useEditProductForm = (initialData: EditProductFormData) => {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const tRaw = useTranslations("EditProductPage.EditProductForm");
  const t = tRaw as unknown as TranslationFunctionWithStringFallback;
  const editSchema = translatedEditProductSchema(t);
  const router = useRouter();

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
          success: t("productUpdatedSuccessfully"),
          error: (err) => err.message || t("failedToUpdateProduct"),
        });

        router.push("/dashboard");
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
    [initialData?.id, reset, t]
  );

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    loading,
    err,
  };
};
