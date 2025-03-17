"use client";

import { PlusIcon } from "lucide-react";
import { Button } from "../../_components/ui/button";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../_components/ui/dialog";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { NumericFormat } from "react-number-format";

import { Input } from "@/app/_components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../_components/ui/form";

const formSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "O nome do produto é obrigatório!",
    })
    .trim(),
  price: z.number().min(0.01, {
    message: "O preço do produto é obrigatório!",
  }),
  stock: z.coerce
    .number()
    .positive({ message: "A quantidade precisa ser positiva!" })
    .int()
    .min(0, {
      message: "A quantidade em estoque é obrigatória!",
    }),
});

type FormSchema = z.infer<typeof formSchema>;

const AddProductButton = () => {
  const form = useForm<FormSchema>({
    shouldUnregister: true,
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormSchema) => {
    console.log({ data });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="gap-2 bg-customGreen">
          <PlusIcon size={20} />
          Novo produto
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-80">
        <Form {...form}>
          <DialogHeader>
            <DialogTitle>Cadastrar produto</DialogTitle>
            <DialogDescription>Insira as informações abaixo</DialogDescription>
          </DialogHeader>

          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome do produto</FormLabel>
                  <FormControl>
                    <Input placeholder="Nome do produto" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Valor unitário</FormLabel>
                  <FormControl>
                    <NumericFormat
                      placeholder="Valor unitário"
                      thousandSeparator="."
                      decimalSeparator=","
                      fixedDecimalScale
                      decimalScale={2}
                      prefix="R$ "
                      allowNegative={false}
                      customInput={Input}
                      onValueChange={(values) =>
                        field.onChange(values.floatValue)
                      }
                      {...field}
                      onChange={() => {}}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="stock"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Estoque</FormLabel>
                  <FormControl>
                    <Input placeholder="Estoque" type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <DialogClose asChild>
                <Button type="reset" variant="secondary" className="flex-1">
                  Cancelar
                </Button>
              </DialogClose>
              <Button type="submit" className="flex-1 bg-customGreen">
                Criar produto
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddProductButton;
