"use client";

import { Combobox, ComboboxOption } from "@/app/_components/ui/combobox";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/app/_components/ui/form";
import { Input } from "@/app/_components/ui/input";
import {
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from "@/app/_components/ui/sheet";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  productId: z.string().uuid(),
  quantity: z.number().int().positive(),
});

type FormSchema = z.infer<typeof formSchema>;

interface UpsertSalesSheetContentProps {
  productOptions: ComboboxOption[];
}

const UpsertSalesSheetContent = ({
  productOptions,
}: UpsertSalesSheetContentProps) => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      productId: "",
      quantity: 1,
    },
  });

  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Adicionar venda</SheetTitle>
        <SheetDescription>
          Insira as informações da venda abaixo
        </SheetDescription>
      </SheetHeader>

      <Form {...form}>
        <form className="space-y-4 py-6">
          <FormField
            control={form.control}
            name="productId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Produtos</FormLabel>
                <FormControl>
                  <Combobox
                    {...field}
                    placeholder="Selecione um produto"
                    options={productOptions}
                    value={field.value}
                    onChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="quantity"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Quantidade</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Digite a quantidade"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </SheetContent>
  );
};

export default UpsertSalesSheetContent;
