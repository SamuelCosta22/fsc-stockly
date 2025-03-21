import { db } from "@/app/_lib/prisma";
import { cache } from "react";

interface SaleProductDTO {
  productId: string;
  quantity: number;
  unitPrice: number;
  productName: string;
}

export interface SalesDTO {
  id: string;
  productNames: string;
  totalProducts: number;
  totalAmount: number;
  date: Date;
  saleProducts: SaleProductDTO[];
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
      saleProducts: sale.products.map(
        (saleProduct): SaleProductDTO => ({
          productId: saleProduct.productId,
          productName: saleProduct.product.name,
          quantity: saleProduct.quantity,
          unitPrice: Number(saleProduct.unitPrice),
        }),
      ),
    }),
  );
};

export const cachedGetSales = cache(getSales);
