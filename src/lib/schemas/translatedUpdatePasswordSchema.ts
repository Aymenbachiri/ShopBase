import { z } from "zod";

export const translatedUpdatePasswordSchema = (t: (key: string) => string) =>
  z
    .object({
      currentPassword: z
        .string()
        .min(8, { message: t("currentPasswordRequired") }),
      password: z.string().min(8, { message: t("passwordMinLength") }),
      confirmPassword: z
        .string()
        .min(8, { message: t("confirmPasswordMinLength") }),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: t("passwordsDoNotMatch"),
      path: ["confirmPassword"],
    });

export type RegisterFormInputs = z.infer<
  ReturnType<typeof translatedUpdatePasswordSchema>
>;
