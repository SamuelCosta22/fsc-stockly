import clsx from "clsx";
import { Badge } from "./ui/badge";
import { CircleIcon } from "lucide-react";
import { ProductStatusDTO } from "../_data-access/product/get-product";

interface ProductStatusBadgeProps {
  status: ProductStatusDTO;
}
const getStatusLabel = (status: string) => {
  if (status === "IN_STOCK") {
    return "Em estoque";
  }
  return "Fora de estoque";
};

const ProductStatusBadge = ({ status }: ProductStatusBadgeProps) => {
  const label = getStatusLabel(status);

  return (
    <Badge
      className={clsx(
        "gap-1 font-semibold",
        label === "Em estoque"
          ? "bg-green-50 text-customGreen"
          : "bg-slate-100 text-slate-500",
      )}
      variant="outline"
    >
      <CircleIcon
        size={12}
        className={clsx(
          "rounded-full",
          label === "Em estoque" ? "bg-customGreen" : "bg-slate-500",
        )}
      />
      {label}
    </Badge>
  );
};

export default ProductStatusBadge;
