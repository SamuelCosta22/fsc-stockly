import ProductStatusBadge from "@/app/_components/product-status-badge";
import { MostSoldProductDTO } from "@/app/_data-access/dashboard/get-most-sold-products";
import { FormatCurrency } from "@/app/_helpers/currency";

interface MostSoldProductsItemProps {
  product: MostSoldProductDTO;
}

const MostSoldProductsItem = ({ product }: MostSoldProductsItemProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="space-y-[6px]">
        <ProductStatusBadge status={product.status} />
        <p className="font-semibold text-sm">{product.name}</p>
        <p className="font-medium text-slate-500 text-sm">
          {FormatCurrency(Number(product.price))}
        </p>
      </div>
      <div>
        <p className="text-xs font-semibold">{product.totalSold} vendidos</p>
      </div>
    </div>
  );
};

export default MostSoldProductsItem;
