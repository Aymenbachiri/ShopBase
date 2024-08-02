import { z } from "zod";

export const translatedLoginSchema = (t: (key: string) => string) =>
  z.object({
    email: z.string().email({ message: t("invalidEmail") }),
    password: z.string().min(8, { message: t("passwordMinLength") }),
  });

export type LoginFormInputs = z.infer<ReturnType<typeof translatedLoginSchema>>;
