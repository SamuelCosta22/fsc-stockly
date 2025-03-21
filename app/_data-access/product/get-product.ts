import { db } from "@/app/_lib/prisma";
import { Product } from "@prisma/client";
import { cache } from "react";

export interface ProductsDTO extends Product {
  status: "IN_STOCK" | "OUT_OF_STOCK";
}

export const getProducts = async (): Promise<ProductsDTO[]> => {
  const products = await db.product.findMany({});
  return products.map((product) => ({
    ...product,
    status: product.stock > 0 ? "IN_STOCK" : "OUT_OF_STOCK",
  }));
};

export const cachedGetProducts = cache(getProducts);
