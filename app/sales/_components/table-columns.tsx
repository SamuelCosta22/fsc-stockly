"use client";

import { SalesDTO } from "@/app/_data-access/sales/get-sales";
import { FormatCurrency } from "@/app/_helpers/currency";
import { ColumnDef } from "@tanstack/react-table";
import SalesTableDropdownMenu from "./table-dropdown-menu";
import { ComboboxOption } from "@/app/_components/ui/combobox";
import { ProductsDTO } from "@/app/_data-access/product/get-product";

interface SaleTableColumns extends SalesDTO {
  products: ProductsDTO[];
  productOptions: ComboboxOption[];
}

export const saleTableColumns: ColumnDef<SaleTableColumns>[] = [
  {
    accessorKey: "productNames",
    header: "Produtos",
  },
  {
    accessorKey: "totalProducts",
    header: "Quantidade de Produtos",
  },
  {
    header: "Valor Total",
    cell: ({
      row: {
        original: { totalAmount },
      },
    }) => FormatCurrency(totalAmount),
  },
  {
    header: "Data",
    cell: ({
      row: {
        original: { date },
      },
    }) => new Date(date).toLocaleDateString("pt-BR"),
  },
  {
    header: "Ações",
    cell: ({ row: { original: sale } }) => (
      <SalesTableDropdownMenu
        sale={sale}
        productOptions={sale.productOptions}
        products={sale.products}
      />
    ),
  },
];
