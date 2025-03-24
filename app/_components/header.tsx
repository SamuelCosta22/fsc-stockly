import { ReactNode } from "react";
import { cn } from "../_lib/utils";

export const HeaderTitle = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <h2 className={cn("text-xl font-semibold", className)}>{children}</h2>;
};

export const HeaderSubtitle = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <span className={cn("text-xs font-semibold text-customGreen", className)}>
      {children}
    </span>
  );
};

export const HeaderLeft = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <div className={cn("space-y-1", className)}>{children}</div>;
};

export const HeaderRight = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <div className={className}>{children}</div>;
};

const Header = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full items-center justify-between", className)}>
      {children}
    </div>
  );
};

export default Header;
