// src/lib/schemas/registerUserSchema.ts
import { z } from "zod";

export const registerUserSchema = z
  .object({
    name: z.string().min(1),
    email: z.string().email(),
    password: z.string().min(8),
    confirmPassword: z.string().min(8),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type RegisterFormInputs = z.infer<typeof registerUserSchema>;
