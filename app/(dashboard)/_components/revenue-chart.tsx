"use client";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/app/_components/ui/chart";
import { DayTotalRevenueDTO } from "@/app/_data-access/dashboard/get-last-14-days-revenue";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

const chartConfig: ChartConfig = {
  totalRevenue: {
    label: "Receita",
  },
} satisfies ChartConfig;

interface RevenueChartProps {
  data: DayTotalRevenueDTO[];
}

const RevenueChart = ({ data }: RevenueChartProps) => {
  return (
    <ChartContainer config={chartConfig} className="min-h-0 w-full">
      <BarChart accessibilityLayer data={data}>
        <CartesianGrid vertical={false} />
        <YAxis
          dataKey="totalRevenue"
          tickLine={false}
          axisLine={false}
          tickMargin={10}
          tickFormatter={(value) => `R$${value}`}
        />
        <XAxis
          dataKey="day"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="totalRevenue" radius={4} className="fill-customGreen" />
      </BarChart>
    </ChartContainer>
  );
};

export default RevenueChart;
