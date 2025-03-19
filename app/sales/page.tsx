import { ComboboxOption } from "../_components/ui/combobox";
import { getProducts } from "../_data-access/product/get-product";
import CreateSaleButton from "./_components/create-sale-button";

const SalesPage = async () => {
  const products = await getProducts();
  const productOptions: ComboboxOption[] = products.map((product) => ({
    label: product.name,
    value: product.id,
  }));

  return (
    <div className="w-full space-y-8 p-8">
      <div className="flex w-full items-center justify-between">
        <div className="space-y-1">
          <span className="text-xs font-semibold text-customGreen">Vendas</span>
          <h2 className="text-xl font-semibold">Gestão de Vendas</h2>
        </div>

        <CreateSaleButton
          productOptions={productOptions}
          products={JSON.parse(JSON.stringify(products))}
        />
      </div>

      {/* <DataTable
        columns={productTableColumns}
        data={JSON.parse(JSON.stringify(products))}
      /> */}
    </div>
  );
};

export default SalesPage;
