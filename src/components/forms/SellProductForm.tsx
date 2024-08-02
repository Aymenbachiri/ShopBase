"use client";

import { useTranslations } from "next-intl";
import InputField from "../reusable_components/InputField";
import useSellProductForm from "@/lib/hooks/useSellProductForm";
import Recaptcha from "../reusable_components/Recaptcha";
import SellProductBtn from "../SellProductBtn";

export default function SellProductForm() {
  const { register, handleSubmit, errors, loading, captcha, setCaptcha } =
    useSellProductForm();
  const t = useTranslations("SellProductPage.SellProductForm");

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mb-0 mt-8 max-w-md space-y-4"
    >
      <InputField
        label={t("ProductTitle")}
        type="text"
        placeholder={t("ProductTitleInputPlaceholder")}
        registration={register("title")}
        error={errors.title}
      />
      <textarea
        {...register("description")}
        placeholder={t("DescriptionInputPlaceholder")}
        className="w-full p-2 mb-2 border"
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
        placeholder="Example: www.unsplash.com/photos/1352"
        registration={register("imageurl")}
        error={errors.imageurl}
      />
      <InputField
        label={t("Price")}
        type="number"
        placeholder={t("PriceInputPlaceholder")}
        registration={register("price")}
        error={errors.price}
      />
      <Recaptcha onChange={() => setCaptcha(true)} />
      <SellProductBtn
        SellProductButton={t("addProduct")}
        captcha={captcha}
        loading={loading}
      />
    </form>
  );
}
