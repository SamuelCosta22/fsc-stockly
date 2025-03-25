"server-only";

import { db } from "@/app/_lib/prisma";

interface DashboardDTO {
  totalSales: number;
  totalStock: number;
  totalProducts: number;
}

export const getDashboardData = async (): Promise<DashboardDTO> => {
  const totalSalesPromise = db.sale.count();

  const totalStockPromise = db.product.aggregate({
    _sum: {
      stock: true,
    },
  });

  const totalProductsPromise = db.product.count();

  const [totalSales, totalStock, totalProducts] = await Promise.all([
    totalSalesPromise,
    totalStockPromise,
    totalProductsPromise,
  ]);

  return {
    totalSales,
    totalStock: Number(totalStock._sum.stock),
    totalProducts,
  };
};
