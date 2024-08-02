import { z } from "zod";

const categoryEnum = ["men", "women", "electronics", "jewelery"] as const;

export const translatedSellProductSchema = (t: (key: string) => string) =>
  z.object({
    title: z.string().min(1, { message: t("TitleRequired") }),
    description: z.string().min(1, { message: t("DescriptionRequired") }),
    category: z.enum(categoryEnum, {
      errorMap: () => ({ message: t("invalidCategory") }),
    }),
    imageurl: z.string().url({ message: t("InvalidURL") }),
    price: z
      .string()
      .min(1, { message: t("PriceRequired") })
      .transform((val) => {
        const parsed = parseFloat(val);
        if (isNaN(parsed)) {
          throw new Error(t("PriceMustBeNumber"));
        }
        return parsed;
      })
      .refine((val) => val > 0, {
        message: t("PriceMustBePositiveNumber"),
      }),
  });

export type RegisterFormInputs = z.infer<
  ReturnType<typeof translatedSellProductSchema>
>;
