"use client";

import { useEditProductForm } from "@/lib/hooks/useEditProductForm";
import type { EditProductFormProps } from "@/lib/types/types";
import { useSession } from "next-auth/react";
import UpdateProductBtn from "../buttons/UpdateProductBtn";
import InputField from "../reusable_components/InputField";
import { useTranslations } from "next-intl";

export default function EditProductForm({ product }: EditProductFormProps) {
  const session = useSession();
  const initialData = {
    id: product._id,
    title: product.title,
    description: product.description,
    category: product.category,
    imageurl: product.imageurl,
    price: product.price,
    creator: session?.data?.user?.name as string,
  };

  const { register, handleSubmit, errors, loading, err } =
    useEditProductForm(initialData);
  const t = useTranslations("SellProductPage.SellProductForm");

  return (
    <form onSubmit={handleSubmit} className="py-4 px-6 divide-y-8">
      <InputField
        label={t("ProductTitle")}
        type="text"
        placeholder={""}
        registration={register("title")}
        error={errors.title}
      />
      <textarea
        {...register("description")}
        className="w-full p-2 mb-2 border mt-4"
      />
      {errors.description ? (
        <p className="text-red-500">{errors.description.message}</p>
      ) : null}
      <select {...register("category")} className="w-full p-2 mb-2 border">
        <option value="" disabled>
          {t("SelectCategory")}
        </option>
        <option value="men">{t("men")}</option>
        <option value="women">{t("women")}</option>
        <option value="electronics">{t("electronics")}</option>
        <option value="jewelery">{t("jewelery")}</option>
      </select>
      {errors.category && (
        <p className="text-red-500">{errors.category.message}</p>
      )}
      <InputField
        label={t("ImageUrl")}
        type="text"
        placeholder=""
        registration={register("imageurl")}
        error={errors.imageurl}
      />
      <InputField
        label={t("Price")}
        type="number"
        placeholder={""}
        registration={register("price")}
        error={errors.price}
      />

      <UpdateProductBtn loading={loading} />
      {err && <p className="text-red-500 text-center">{err}</p>}
    </form>
  );
}
