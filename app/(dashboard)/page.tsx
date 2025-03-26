import { Suspense } from "react";
import Header, {
  HeaderLeft,
  HeaderSubtitle,
  HeaderTitle,
} from "../_components/header";
import { Skeleton } from "../_components/ui/skeleton";
import Last14DaysRevenueChartCard from "./_components/last-14-days-revenue-chart-card";
import { SummaryCardSkeleton } from "./_components/summary-card";
import TodayRevenueCard from "./_components/today-revenue-card";
import TotalProductsCard from "./_components/total-products-card";
import TotalRevenueCard from "./_components/total-revenue-card";
import TotalSalesCard from "./_components/total-sales-card";
import TotalInStockCard from "./_components/total-stock-card";
import MostSoldProductsCard from "./_components/most-sold-products.card";
import MostSoldProductsSkeleton from "./_components/most-sold-products-skeleton";

const Home = async () => {
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

        <Suspense fallback={<SummaryCardSkeleton className="w-[15%]" />}>
          <TotalProductsCard />
        </Suspense>
      </div>

      <div className="grid min-h-0 grid-cols-3 gap-4">
        <Suspense
          fallback={
            <Skeleton className="bg-white p-4">
              <div className="space-y-2">
                <Skeleton className="h-7 w-24" />
                <Skeleton className="h-5 w-48" />
              </div>
            </Skeleton>
          }
        >
          <Last14DaysRevenueChartCard />
        </Suspense>

        <Suspense fallback={<MostSoldProductsSkeleton />}>
          <MostSoldProductsCard />
        </Suspense>
      </div>
    </div>
  );
};

export default Home;
