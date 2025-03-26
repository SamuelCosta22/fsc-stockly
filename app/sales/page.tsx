import { ComboboxOption } from "../_components/ui/combobox";
import { DataTable } from "../_components/ui/data-table";
import { getProducts } from "../_data-access/product/get-product";
import { getSales } from "../_data-access/sales/get-sales";
import CreateSaleButton from "./_components/create-sale-button";
import { saleTableColumns } from "./_components/table-columns";
import Header, {
  HeaderLeft,
  HeaderRight,
  HeaderSubtitle,
  HeaderTitle,
} from "../_components/header";

const SalesPage = async () => {
  const products = await getProducts();
  const productOptions: ComboboxOption[] = products.map((product) => ({
    label: product.name,
    value: product.id,
  }));

  const sales = await getSales();
  const dataTable = sales.map((sale) => ({
    ...sale,
    products,
    productOptions,
  }));

  return (
    <div className="w-full space-y-8 p-8 overflow-auto">
      <Header>
        <HeaderLeft>
          <HeaderSubtitle>Vendas</HeaderSubtitle>
          <HeaderTitle>Gestão de Vendas</HeaderTitle>
        </HeaderLeft>
        <HeaderRight>
          <CreateSaleButton
            productOptions={productOptions}
            products={JSON.parse(JSON.stringify(products))}
          />
        </HeaderRight>
      </Header>

      <DataTable
        columns={saleTableColumns}
        data={JSON.parse(JSON.stringify(dataTable))}
      />
    </div>
  );
};

export default SalesPage;
