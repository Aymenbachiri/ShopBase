import { z } from "zod";

export const updatePasswordSchema = z
  .object({
    currentPassword: z.string().min(8),
    password: z.string().min(8),
    confirmPassword: z.string().min(8),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type UpdateFormInputs = z.infer<typeof updatePasswordSchema>;
