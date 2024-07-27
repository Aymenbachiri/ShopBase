import { z } from "zod";

const envSchema = z.object({
  NEXTAUTH_SECRET: z.string().min(1, "NEXTAUTH_SECRET is required"),
  NEXTAUTH_URL: z.string().url("NEXTAUTH_URL must be a valid URL"),
  NEXTAUTH_URL_INTERNAL: z
    .string()
    .url("NEXTAUTH_URL_INTERNAL must be a valid URL"),
  JWT_SECRET: z.string().min(1, "JWT_SECRET is required"),
  MONGODB_URL: z.string().min(1, "MongoDB is required"),
  API_URL: z.string().url("API_URL must be a valid URL"),
  NEXT_PUBLIC_RECAPTCHA_SITE_KEY: z
    .string()
    .min(1, "NEXT_PUBLIC_RECAPTCHA_SITE_KEY is required"),
  NEXT_PUBLIC_SECRET_KEY: z
    .string()
    .min(1, "NEXT_PUBLIC_SECRET_KEY is required"),
});

export const parsedEnv = envSchema.parse(process.env);
