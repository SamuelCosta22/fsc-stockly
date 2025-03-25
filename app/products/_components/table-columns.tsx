"use client";

import ProductStatusBadge from "@/app/_components/product-status-badge";
import { ProductsDTO } from "@/app/_data-access/product/get-product";
import { ColumnDef } from "@tanstack/react-table";
import ProducTableDropdownMenu from "./table-dropdown-menu";

export const productTableColumns: ColumnDef<ProductsDTO>[] = [
  {
    accessorKey: "name",
    header: "Produto",
  },
  {
    accessorKey: "price",
    header: "Valor unitário",
    cell: (row) => {
      const product = row.row.original;
      return Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(Number(product.price));
    },
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
      return <ProductStatusBadge status={product.status} />;
    },
  },
  {
    accessorKey: "actions",
    header: "Ações",
    cell: (row) => <ProducTableDropdownMenu product={row.row.original} />,
  },
];
