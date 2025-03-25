import { getTotalRevenue } from "@/app/_data-access/dashboard/get-total-revenue";
import SummaryCard, {
  SummaryCardIcon,
  SummaryCardTitle,
  SummaryCardValue,
} from "./summary-card";
import { FormatCurrency } from "@/app/_helpers/currency";
import { DollarSign } from "lucide-react";

const TotalRevenueCard = async () => {
  const totalRevenue = await getTotalRevenue();
  return (
    <SummaryCard>
      <SummaryCardIcon>
        <DollarSign />
      </SummaryCardIcon>
      <SummaryCardTitle>Receita Total</SummaryCardTitle>
      <SummaryCardValue>{FormatCurrency(totalRevenue)}</SummaryCardValue>
    </SummaryCard>
  );
};

export default TotalRevenueCard;
