import { db } from "@/app/_lib/prisma";
import { cache } from "react";

export interface SalesDTO {
  id: string;
  productNames: string;
  totalProducts: number;
  totalAmount: number;
  date: Date;
}

export const getSales = async (): Promise<SalesDTO[]> => {
  const sales = await db.sale.findMany({
    include: { products: { include: { product: true } } },
  });

  return sales.map(
    (sale): SalesDTO => ({
      id: sale.id,
      date: sale.date,
      productNames: sale.products
        .map((saleProduct) => saleProduct.product.name)
        .join(" • "),
      totalProducts: sale.products.reduce(
        (acc, product) => acc + product.quantity,
        0,
      ),
      totalAmount: sale.products.reduce(
        (acc, product) => acc + product.quantity * Number(product.unitPrice),
        0,
      ),
    }),
  );
};

export const cachedGetSales = cache(getSales);
