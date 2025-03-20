import { deleteProduct } from "@/app/_actions/products/delete-product";
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/app/_components/ui/alert-dialog";
import { useAction } from "next-safe-action/hooks";
import { toast } from "sonner";

interface DeleteDialogContentProps {
  productId: string;
}

const DeleteDialogContent = ({ productId }: DeleteDialogContentProps) => {
  const { execute: executeDeleteProduct } = useAction(deleteProduct, {
    onError: () => {
      toast.error("Ocorreu um erro ao excluir o produto.");
    },
    onSuccess: () => {
      toast.success("Produto excluído com sucesso.");
    },
  });

  const handleContinueclick = () => executeDeleteProduct({ id: productId });
  return (
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Você tem certeza?</AlertDialogTitle>
        <AlertDialogDescription>
          Você está prestes a excluir este produto. Essa ação não pode ser
          desfeita. Deseja continuar?
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel className="border-none bg-gray-100">
          Cancelar
        </AlertDialogCancel>
        <AlertDialogAction
          className="bg-customGreen"
          onClick={handleContinueclick}
        >
          Continuar
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  );
};

export default DeleteDialogContent;
