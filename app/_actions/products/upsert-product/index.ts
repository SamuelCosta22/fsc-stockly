"use server";

import { db } from "@/app/_lib/prisma";
import { actionClient } from "@/app/_lib/safe-action";
import { revalidatePath } from "next/cache";
import { upsertProductSchema } from "./schema";

export const upsertProduct = actionClient
  .schema(upsertProductSchema)
  .action(async ({ parsedInput: { id, ...data } }) => {
    upsertProductSchema.parse(data);
    await db.product.upsert({
      where: { id: id ?? "" },
      update: {
        name: data.name,
        price: data.price,
        stock: data.stock,
      },
      create: {
        name: data.name,
        price: data.price,
        stock: data.stock,
      },
    });
    revalidatePath("/products");
    revalidatePath("/");
  });
