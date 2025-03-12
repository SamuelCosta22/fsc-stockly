import { db } from "@/app/_lib/prisma";
import { Button } from "../_components/ui/button";
import { PlusIcon } from "lucide-react";
import { DataTable } from "../_components/ui/data-table";
import { productTableColumns } from "./_components/table-columns";

const ProductsPage = async () => {
  const products = await db.product.findMany({});

  return (
    <div className="w-full space-y-8 p-8">
      <div className="flex w-full items-center justify-between">
        <div className="space-y-1">
          <span className="text-customGreen text-xs font-semibold">
            Produtos
          </span>
          <h2 className="text-xl font-semibold">Gestão de Produtos</h2>
        </div>
        <Button className="bg-customGreen gap-2">
          <PlusIcon size={20} />
          Novo produto
        </Button>
      </div>

      <DataTable columns={productTableColumns} data={products} />
    </div>
  );
};

export default ProductsPage;
