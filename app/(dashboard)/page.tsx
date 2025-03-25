import {
  CircleDollarSign,
  DollarSign,
  PackageIcon,
  ShoppingBasketIcon,
} from "lucide-react";
import Header, {
  HeaderLeft,
  HeaderSubtitle,
  HeaderTitle,
} from "../_components/header";
import { getDashboardData } from "../_data-access/dashboard/get-dahsboard-data";
import { getLast14DaysRevenue } from "../_data-access/dashboard/get-last-14-days-revenue";
import { getMostSoldProducts } from "../_data-access/dashboard/get-most-sold-products";
import { FormatCurrency } from "../_helpers/currency";
import MostSoldProductsItem from "./_components/most-sold-products-item";
import RevenueChart from "./_components/revenue-chart";
import SummaryCard, {
  SummaryCardIcon,
  SummaryCardTitle,
  SummaryCardValue,
} from "./_components/summary-card";
import TotalRevenueCard from "./_components/total-revenue-card";
import { Suspense } from "react";
import { Skeleton } from "../_components/ui/skeleton";

const Home = async () => {
  const { todayRevenue, totalSales, totalStock, totalProducts } =
    await getDashboardData();

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
        <Suspense
          fallback={<Skeleton className="rounded-xl bg-white bg-opacity-75" />}
        >
          <TotalRevenueCard />
        </Suspense>

        <SummaryCard>
          <SummaryCardIcon>
            <DollarSign />
          </SummaryCardIcon>
          <SummaryCardTitle>Receita Hoje</SummaryCardTitle>
          <SummaryCardValue>{FormatCurrency(todayRevenue)}</SummaryCardValue>
        </SummaryCard>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <SummaryCard>
          <SummaryCardIcon>
            <CircleDollarSign />
          </SummaryCardIcon>
          <SummaryCardTitle>Vendas Totais</SummaryCardTitle>
          <SummaryCardValue>{totalSales}</SummaryCardValue>
        </SummaryCard>

        <SummaryCard>
          <SummaryCardIcon>
            <PackageIcon />
          </SummaryCardIcon>
          <SummaryCardTitle>Total em Estoque</SummaryCardTitle>
          <SummaryCardValue>{totalStock}</SummaryCardValue>
        </SummaryCard>

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
