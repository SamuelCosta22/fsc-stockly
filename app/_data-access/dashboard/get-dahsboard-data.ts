"server-only";

import { db } from "@/app/_lib/prisma";

interface DashboardDTO {
  totalStock: number;
  totalProducts: number;
}

export const getDashboardData = async (): Promise<DashboardDTO> => {
  const totalStockPromise = db.product.aggregate({
    _sum: {
      stock: true,
    },
  });

  const totalProductsPromise = db.product.count();

  const [totalStock, totalProducts] = await Promise.all([
    totalStockPromise,
    totalProductsPromise,
  ]);

  return {
    totalStock: Number(totalStock._sum.stock),
    totalProducts,
  };
};
