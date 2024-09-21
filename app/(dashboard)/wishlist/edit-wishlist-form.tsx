import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import { useAction } from "next-safe-action/hooks";
import { createWishlist, updateWishlist } from "./actions";
import { Loader2 } from "lucide-react";
import { Label } from "@/components/ui/label";
import { createWishlistSchema, Wishlist } from "./validations";

type WishlistSchema = z.infer<typeof createWishlistSchema>;

type CreateWishlistFormProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  wishlist: Wishlist;
};

export function EditWishlistForm({
  setOpen,
  wishlist,
}: CreateWishlistFormProps): React.ReactElement {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<WishlistSchema>({
    resolver: zodResolver(createWishlistSchema),
    defaultValues: {
      name: wishlist.name,
      emoji: wishlist.emoji,
    },
  });

  const { execute, isExecuting } = useAction(updateWishlist, {
    onSuccess: () => {
      setOpen(false);
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const onSubmit: SubmitHandler<WishlistSchema> = async (data) => {
    execute({ id: wishlist.id, name: data.name, emoji: data.emoji });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
      <div className="flex flex-col gap-2">
        <Label htmlFor="name">Name</Label>
        <Input {...register("name", { required: true })} />
        {errors.name && (
          <span className="text-red-500 text-sm">{errors.name.message}</span>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="emoji">Emoji</Label>
        <Input {...register("emoji", { required: true })} />
        {errors.emoji && (
          <span className="text-red-500 text-sm">{errors.emoji.message}</span>
        )}
      </div>
      <div className="flex justify-end">
        <Button type="submit" disabled={isExecuting}>
          {isExecuting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Updating...
            </>
          ) : (
            "Update"
          )}
        </Button>
      </div>
    </form>
  );
}
