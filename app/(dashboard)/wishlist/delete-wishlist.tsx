import { Loader2 } from "lucide-react";

import { deleteWishlist } from "@/app/(dashboard)/wishlist/actions";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { useAction } from "next-safe-action/hooks";

export default function DeleteWishlist({ id }: { id: number }) {
  const { execute, isExecuting } = useAction(deleteWishlist, {
    // onSuccess: () => {
    //   setOpen(false);
    // },
    // onError: (error) => {
    //   console.error(error);
    // },
  });

  return (
    <DropdownMenuItem
      onSelect={(e) => {
        e.preventDefault();
      }}
    >
      <AlertDialog>
        <AlertDialogTrigger className="w-full flex justify-start">
          Delete
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              wishlist and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => execute({ id: id })}
              disabled={isExecuting}
            >
              {isExecuting && <Loader2 className="animate-spin" />}
              Confirm
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </DropdownMenuItem>
  );
}
