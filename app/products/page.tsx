import { PlusIcon } from "lucide-react";
import { Button } from "../_components/ui/button";
import { DataTable } from "../_components/ui/data-table";
import { productTableColumns } from "./_components/table-columns";

const ProductsPage = async () => {
  const response = await fetch("http://localhost:3000/api/products");
  const { products, randomNumber } = await response.json();

  return (
    <div className="w-full space-y-8 p-8">
      <div className="flex w-full items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-xs font-medium">
            Random number from API: {randomNumber}
          </h1>
          <span className="text-xs font-semibold text-customGreen">
            Produtos
          </span>
          <h2 className="text-xl font-semibold">Gestão de Produtos</h2>
        </div>
        <Button className="gap-2 bg-customGreen">
          <PlusIcon size={20} />
          Novo produto
        </Button>
      </div>

      {/* <ProductList products={products} /> */}
      <DataTable
        columns={productTableColumns}
        data={JSON.parse(JSON.stringify(products))}
      />
    </div>
  );
};

export default ProductsPage;
