"server-only";

import { db } from "@/app/_lib/prisma";

interface DashboardDTO {
  todayRevenue: number;
  totalSales: number;
  totalStock: number;
  totalProducts: number;
}

export const getDashboardData = async (): Promise<DashboardDTO> => {
  const todayRevenuePromise = db.saleProduct.aggregate({
    _sum: {
      unitPrice: true,
    },
    where: {
      createdAt: {
        gte: new Date(new Date().setHours(0, 0, 0, 0)),
        lte: new Date(new Date().setHours(23, 59, 59, 999)),
      },
    },
  });

  const totalSalesPromise = db.sale.count();

  const totalStockPromise = db.product.aggregate({
    _sum: {
      stock: true,
    },
  });

  const totalProductsPromise = db.product.count();

  const [todayRevenue, totalSales, totalStock, totalProducts] =
    await Promise.all([
      todayRevenuePromise,
      totalSalesPromise,
      totalStockPromise,
      totalProductsPromise,
    ]);

  return {
    todayRevenue: Number(todayRevenue._sum.unitPrice),
    totalSales,
    totalStock: Number(totalStock._sum.stock),
    totalProducts,
  };
};
