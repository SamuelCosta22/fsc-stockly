import "server-only";

import { db } from "@/app/_lib/prisma";

export const getTotalSales = async (): Promise<number> => {
  await new Promise((resolve) => setTimeout(resolve, 4000));
  return db.sale.count();
};