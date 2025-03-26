import { Suspense } from "react";
import Header, {
  HeaderLeft,
  HeaderSubtitle,
  HeaderTitle,
} from "../_components/header";
import { getMostSoldProducts } from "../_data-access/dashboard/get-most-sold-products";
import Last14DaysRevenueChartCard from "./_components/last-14-days-revenue-chart-card";
import MostSoldProductsItem from "./_components/most-sold-products-item";
import { SummaryCardSkeleton } from "./_components/summary-card";
import TodayRevenueCard from "./_components/today-revenue-card";
import TotalProductsCard from "./_components/total-products-card";
import TotalRevenueCard from "./_components/total-revenue-card";
import TotalSalesCard from "./_components/total-sales-card";
import TotalInStockCard from "./_components/total-stock-card";
import { Skeleton } from "../_components/ui/skeleton";
const Home = async () => {
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
      </div>
    </div>
  );
};

export default Home;
