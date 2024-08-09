import { z } from "zod";

export const editProductSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  category: z.enum(["men", "women", "electronics", "jewelery"]),
  imageurl: z.string().url({ message: "Please enter a valid URL" }),
  price: z.number().positive({ message: "Price must be a positive number" }),
});

export type EditProductFormData = z.infer<typeof editProductSchema> & {
  id: string;
};
