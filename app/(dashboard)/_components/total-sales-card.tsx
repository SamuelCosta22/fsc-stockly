import { getTotalSales } from "@/app/_data-access/dashboard/get-total-sales";
import SummaryCard, {
  SummaryCardIcon,
  SummaryCardTitle,
  SummaryCardValue,
} from "./summary-card";
import { CircleDollarSign } from "lucide-react";

const TotalSalesCard = () => {
  const totalSales = getTotalSales();
  return (
    <SummaryCard>
      <SummaryCardIcon>
        <CircleDollarSign />
      </SummaryCardIcon>
      <SummaryCardTitle>Vendas Totais</SummaryCardTitle>
      <SummaryCardValue>{totalSales}</SummaryCardValue>
    </SummaryCard>
  );
};

export default TotalSalesCard;
