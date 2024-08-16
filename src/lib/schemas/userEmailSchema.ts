import { z } from "zod";

export const userEmailSchema = z.object({
  userEmail: z.string().email().min(1, "user email is required"),
});
