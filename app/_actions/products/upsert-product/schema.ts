import { z } from "zod";

export const upsertProductSchema = z.object({
  id: z.string().uuid().optional(),
  name: z
    .string()
    .min(2, {
      message: "O nome do produto é obrigatório!",
    })
    .trim(),
  price: z.number().min(0.01, {
    message: "O preço do produto é obrigatório!",
  }),
  stock: z.coerce.number().int().min(0, {
    message: "A quantidade em estoque é obrigatória!",
  }),
});

export type UpsertProductSchema = z.infer<typeof upsertProductSchema>;
