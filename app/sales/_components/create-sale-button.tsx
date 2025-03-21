"use client";

import { Button } from "@/app/_components/ui/button";
import { Sheet, SheetTrigger } from "@/app/_components/ui/sheet";
import UpsertSalesSheetContent from "./upsert-sheet-content";
import { Product } from "@prisma/client";
import { ComboboxOption } from "@/app/_components/ui/combobox";
import { useState } from "react";
import { PlusIcon } from "lucide-react";

interface CreateSaleButtonProps {
  products: Product[];
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
        onSubmitSucces={() => setSheetIsOpen(false)}
        {...props}
      />
    </Sheet>
  );
};

export default CreateSaleButton;
