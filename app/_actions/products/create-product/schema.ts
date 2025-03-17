import { z } from "zod";

export const createProductSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "O nome do produto é obrigatório!",
    })
    .trim(),
  price: z.number().min(0.01, {
    message: "O preço do produto é obrigatório!",
  }),
  stock: z.coerce
    .number()
    .positive({ message: "A quantidade precisa ser positiva!" })
    .int()
    .min(0, {
      message: "A quantidade em estoque é obrigatória!",
    }),
});

export type CreateProductSchema = z.infer<typeof createProductSchema>;