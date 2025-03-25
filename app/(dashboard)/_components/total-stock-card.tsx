import { getTotalInStock } from "@/app/_data-access/dashboard/get-total-stock";
import { PackageIcon } from "lucide-react";
import SummaryCard, {
  SummaryCardIcon,
  SummaryCardTitle,
  SummaryCardValue,
} from "./summary-card";

const TotalInStockCard = () => {
  const totalStock = getTotalInStock();
  return (
    <SummaryCard>
      <SummaryCardIcon>
        <PackageIcon />
      </SummaryCardIcon>
      <SummaryCardTitle>Total em Estoque</SummaryCardTitle>
      <SummaryCardValue>{totalStock}</SummaryCardValue>
    </SummaryCard>
  );
};

export default TotalInStockCard;
