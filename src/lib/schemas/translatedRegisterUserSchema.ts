import { z } from "zod";

export const translatedRegisterUserSchema = (t: (key: string) => string) =>
  z
    .object({
      name: z.string().min(1, { message: t("nameRequired") }),
      email: z.string().email({ message: t("invalidEmail") }),
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
  ReturnType<typeof translatedRegisterUserSchema>
>;
