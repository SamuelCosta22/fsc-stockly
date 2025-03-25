import { FormatCurrency } from "@/app/_helpers/currency";
import { DollarSign } from "lucide-react";
import SummaryCard, {
  SummaryCardIcon,
  SummaryCardTitle,
  SummaryCardValue,
} from "./summary-card";
import { getTodayRevenue } from "@/app/_data-access/dashboard/get-today-revenue";

const TodayRevenueCard = async () => {
  const todayRevenue = await getTodayRevenue();
  return (
    <SummaryCard>
      <SummaryCardIcon>
        <DollarSign />
      </SummaryCardIcon>
      <SummaryCardTitle>Receita Hoje</SummaryCardTitle>
      <SummaryCardValue>{FormatCurrency(todayRevenue)}</SummaryCardValue>
    </SummaryCard>
  );
};

export default TodayRevenueCard;
