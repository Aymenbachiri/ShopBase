import { z } from "zod";

export const querySchema = z.object({
  creator: z.string().min(1, "creator is required"),
});

export const idSchema = z.object({
  id: z.string().min(1, "id is required"),
});
