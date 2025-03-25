import { ShoppingBasketIcon } from "lucide-react";
import { Suspense } from "react";
import Header, {
  HeaderLeft,
  HeaderSubtitle,
  HeaderTitle,
} from "../_components/header";
import { getDashboardData } from "../_data-access/dashboard/get-dahsboard-data";
import { getLast14DaysRevenue } from "../_data-access/dashboard/get-last-14-days-revenue";
import { getMostSoldProducts } from "../_data-access/dashboard/get-most-sold-products";
import MostSoldProductsItem from "./_components/most-sold-products-item";
import RevenueChart from "./_components/revenue-chart";
import SummaryCard, {
  SummaryCardIcon,
  SummaryCardSkeleton,
  SummaryCardTitle,
  SummaryCardValue,
} from "./_components/summary-card";
import TodayRevenueCard from "./_components/today-revenue-card";
import TotalRevenueCard from "./_components/total-revenue-card";
import TotalSalesCard from "./_components/total-sales-card";
import TotalInStockCard from "./_components/total-stock-card";

const Home = async () => {
  const { totalProducts } = await getDashboardData();

  const totalLast14DaysRevenue = await getLast14DaysRevenue();
  const mostSoldProducts = await getMostSoldProducts();

  return (
    <div className="flex w-full flex-col space-y-4 p-8">
      <Header>
        <HeaderLeft>
          <HeaderSubtitle>Visão geral</HeaderSubtitle>
          <HeaderTitle>Dashboard</HeaderTitle>
        </HeaderLeft>
      </Header>

      <div className="grid grid-cols-2 gap-6">
        <Suspense fallback={<SummaryCardSkeleton />}>
          <TotalRevenueCard />
        </Suspense>

        <Suspense fallback={<SummaryCardSkeleton />}>
          <TodayRevenueCard />
        </Suspense>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <Suspense fallback={<SummaryCardSkeleton className="w-[10%]" />}>
          <TotalSalesCard />
        </Suspense>

        <Suspense fallback={<SummaryCardSkeleton className="w-[15%]" />}>
          <TotalInStockCard />
        </Suspense>

        <SummaryCard>
          <SummaryCardIcon>
            <ShoppingBasketIcon />
          </SummaryCardIcon>
          <SummaryCardTitle>Produtos</SummaryCardTitle>
          <SummaryCardValue>{totalProducts}</SummaryCardValue>
        </SummaryCard>
      </div>

      <div className="grid min-h-0 grid-cols-3 gap-4">
        <div className="col-span-2 flex h-full flex-col overflow-hidden rounded-xl bg-white p-6">
          <p className="text-lg font-semibold text-slate-900">Receita</p>
          <p className="text-sm text-slate-400">Últimos 14 dias</p>
          <RevenueChart data={totalLast14DaysRevenue} />
        </div>

        <div className="= flex h-full flex-col overflow-hidden rounded-xl bg-white">
          <p className="p-6 text-lg font-semibold text-slate-900">
            Produtos mais vendidos
          </p>
          <div className="space-y-4 overflow-y-auto px-6 pb-6">
            {mostSoldProducts.map((product) => (
              <MostSoldProductsItem key={product.productId} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
