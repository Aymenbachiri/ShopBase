import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email format" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
  confirmPassword: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .refine((data: any) => data.password === data.confirmPassword, {
      message: "Passwords don't match",
      path: ["confirmPassword"],
    }),
});

export type RegisterFormInputs = z.infer<typeof registerSchema>;
