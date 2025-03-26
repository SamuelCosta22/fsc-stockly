"use client";

import { Button } from "@/app/_components/ui/button";
import { ComboboxOption } from "@/app/_components/ui/combobox";
import { Sheet, SheetTrigger } from "@/app/_components/ui/sheet";
import { ProductsDTO } from "@/app/_data-access/product/get-product";
import { PlusIcon } from "lucide-react";
import { useState } from "react";
import UpsertSalesSheetContent from "./upsert-sheet-content";

interface CreateSaleButtonProps {
  products: ProductsDTO[];
  productOptions: ComboboxOption[];
}

const CreateSaleButton = (props: CreateSaleButtonProps) => {
  const [shetIsOpen, setSheetIsOpen] = useState(false);
  return (
    <Sheet open={shetIsOpen} onOpenChange={setSheetIsOpen}>
      <SheetTrigger asChild>
        <Button className="bg-customGreen">
          <PlusIcon size={20} />
          Adicionar Venda
        </Button>
      </SheetTrigger>
      <UpsertSalesSheetContent
        isOpen={shetIsOpen}
        setSheetIsOpen={setSheetIsOpen}
        {...props}
      />
    </Sheet>
  );
};

export default CreateSaleButton;
