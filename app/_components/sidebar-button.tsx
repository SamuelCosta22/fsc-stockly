import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { Button } from "./ui/button";
import clsx from "clsx";

interface SidebarButtonProps {
  children: ReactNode;
  href: string;
}

const SidebarButton = ({ children, href }: SidebarButtonProps) => {
  const pathname = usePathname();
  return (
    <Button
      className={clsx(
        "justify-start gap-2 text-base",
        pathname === href ? "font-semibold text-[#00a180]" : "text-slate-500",
      )}
      variant={pathname === `${href}` ? "secondary" : "ghost"}
      asChild
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
};

export default SidebarButton;
