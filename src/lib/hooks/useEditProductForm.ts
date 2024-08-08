import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import {
  EditProductFormData,
  editProductSchema,
} from "../schemas/editProductSchema";

export const useEditProductForm = (initialData: EditProductFormData) => {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditProductFormData>({
    resolver: zodResolver(editProductSchema),
    defaultValues: initialData,
  });

  const onSubmit = async (data: EditProductFormData) => {
    try {
      setLoading(true);
      setErr(null);

      // Validate form data using Zod schema
      const validationResult = editProductSchema.safeParse(data);

      if (!validationResult.success) {
        setErr(
          "Validation Error: " +
            validationResult.error.errors.map((e) => e.message).join(", ")
        );
        toast.error(
          "Validation Error: " +
            validationResult.error.errors.map((e) => e.message).join(", ")
        );
        return;
      }

      const res = await fetch(`/api/products/${data?.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(validationResult.data),
      });

      if (res.ok) {
        toast.success("Product edited successfully");
      } else {
        const errorData = await res.json();
        setErr(errorData.message || "Failed to edit product");
        toast.error(errorData.message || "Failed to edit product");
      }
    } catch (error) {
      if (error instanceof Error) {
        setErr(error.message);
        toast.error(error.message);
      } else {
        setErr("An unknown error occurred");
        toast.error("An unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  };
  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    loading,
    err,
  };
};
