import Header, {
  HeaderLeft,
  HeaderRight,
  HeaderSubtitle,
  HeaderTitle,
} from "../_components/header";
import { DataTable } from "../_components/ui/data-table";
import { cachedGetProducts } from "../_data-access/product/get-product";
import CreateProductButton from "./_components/create-product-button";
import { productTableColumns } from "./_components/table-columns";

const ProductsPage = async () => {
  const products = await cachedGetProducts();

  return (
    <div className="w-full space-y-8 p-8 overflow-auto">
      <Header>
        <HeaderLeft>
          <HeaderSubtitle>Produtos</HeaderSubtitle>
          <HeaderTitle>Gestão de Produtos</HeaderTitle>
        </HeaderLeft>
        <HeaderRight>
          <CreateProductButton />
        </HeaderRight>
      </Header>

      <DataTable
        columns={productTableColumns}
        data={JSON.parse(JSON.stringify(products))}
      />
    </div>
  );
};

export default ProductsPage;
