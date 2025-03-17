"use client";

import { Badge } from "@/app/_components/ui/badge";
import { Product } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import clsx from "clsx";
import { CircleIcon } from "lucide-react";

const getStatusLabel = (status: string) => {
  if (status === "IN_STOCK") {
    return "Em estoque";
  }
  return "Fora de estoque";
};

export const productTableColumns: ColumnDef<Product>[] = [
  {
    accessorKey: "name",
    header: "Produto",
  },
  {
    accessorKey: "price",
    header: "Valor unitário",
  },
  {
    accessorKey: "stock",
    header: "Estoque",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: (row) => {
      const product = row.row.original;
      const label = getStatusLabel(product.status);
      return (
        <Badge
          className={clsx(
            "gap-1 font-semibold",
            label === "Em estoque"
              ? "bg-green-50 text-customGreen"
              : "bg-slate-100 text-slate-500",
          )}
          variant="outline"
        >
          <CircleIcon
            size={12}
            className={clsx(
              "rounded-full",
              label === "Em estoque" ? "bg-customGreen" : "bg-slate-500",
            )}
          />
          {label}
        </Badge>
      );
    },
  },
];
