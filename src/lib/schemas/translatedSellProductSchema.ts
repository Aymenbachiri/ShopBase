import { z } from "zod";

const categoryEnum = ["men", "women", "electronics", "jewelery"] as const;

export const translatedSellProductSchema = (t: (key: string) => string) =>
  z.object({
    title: z.string().min(1, { message: t("Title is required") }),
    description: z.string().min(1, { message: t("Description is required") }),
    category: z.enum(categoryEnum, {
      errorMap: () => ({ message: t("invalidCategory") }),
    }),
    imageurl: z.string().url({ message: t("Please enter a valid URL") }),
    price: z
      .number()
      .positive({ message: t("Price must be a positive number") }),
  });

export type RegisterFormInputs = z.infer<
  ReturnType<typeof translatedSellProductSchema>
>;
