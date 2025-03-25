"server-only";

import { db } from "@/app/_lib/prisma";

interface DashboardDTO {
  totalProducts: number;
}

export const getDashboardData = async (): Promise<DashboardDTO> => {
  const totalProductsPromise = db.product.count();

  const [totalProducts] = await Promise.all([
    totalProductsPromise,
  ]);

  return {
    totalProducts,
  };
};
