import { PlusIcon } from "lucide-react";
import { Button } from "../_components/ui/button";
import { DataTable } from "../_components/ui/data-table";
import { cachedGetProducts } from "../_data-access/product/get-product";
import { productTableColumns } from "./_components/table-columns";

const ProductsPage = async () => {
  const products = await cachedGetProducts();

  return (
    <div className="w-full space-y-8 p-8">
      <div className="flex w-full items-center justify-between">
        <div className="space-y-1">
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
