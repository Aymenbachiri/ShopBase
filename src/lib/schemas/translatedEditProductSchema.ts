import { z } from "zod";

const categoryEnum = ["men", "women", "electronics", "jewelery"] as const;

export const translatedEditProductSchema = (t: (key: string) => string) =>
  z.object({
    title: z.string().min(1, { message: t("TitleRequired") }),
    description: z.string().min(1, { message: t("DescriptionRequired") }),
    category: z.enum(categoryEnum, {
      errorMap: () => ({ message: t("invalidCategory") }),
    }),
    imageurl: z.string().url({ message: t("InvalidURL") }),
    price: z.number().positive({
      message: t("PriceMustBePositiveNumber"),
    }),
  });

export type RegisterFormInputs = z.infer<
  ReturnType<typeof translatedEditProductSchema>
>;
