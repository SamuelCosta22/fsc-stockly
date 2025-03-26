import { getMostSoldProducts } from "@/app/_data-access/dashboard/get-most-sold-products";
import MostSoldProductsItem from "./most-sold-products-item";

const MostSoldProductsCard = async () => {
  const mostSoldProducts = await getMostSoldProducts();

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl bg-white">
      <p className="p-6 text-lg font-semibold text-slate-900">
        Produtos mais vendidos
      </p>
      <div className="space-y-4 overflow-y-auto px-6 pb-6">
        {mostSoldProducts.map((product) => (
          <MostSoldProductsItem key={product.productId} product={product} />
        ))}
      </div>
    </div>
  );
};

export default MostSoldProductsCard;
