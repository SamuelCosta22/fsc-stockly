import { cn } from "@/app/_lib/utils";
import { ReactNode } from "react";

export const SummaryCardIcon = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "mb-2 flex h-9 w-9 items-center justify-center rounded-md bg-emerald-500 bg-opacity-10 text-emerald-500",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const SummaryCardTitle = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <p className={cn("text-sm font-medium text-slate-500", className)}>
      {children}
    </p>
  );
};

export const SummaryCardValue = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <p className={cn("text-2xl font-semibold text-slate-900", className)}>
      {children}
    </p>
  );
};

const SummaryCard = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("rounded-xl bg-white p-6", className)}>{children}</div>
  );
};

export default SummaryCard;
