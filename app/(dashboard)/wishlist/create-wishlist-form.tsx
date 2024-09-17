import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import { useAction } from "next-safe-action/hooks";
import { createWishlist } from "./actions";

const schema = z.object({
  name: z.string().min(1),
});

type WishlistSchema = z.infer<typeof schema>;

export function CreateWishlistForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<WishlistSchema>({
    resolver: zodResolver(schema),
  });

  const { execute } = useAction(createWishlist);

  const onSubmit: SubmitHandler<WishlistSchema> = (data) => {
    execute({ name: data.name });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
      <Input {...register("name", { required: true })} />
      {errors.name && (
        <span className="text-red-500 text-sm">This field is required</span>
      )}
      <div className="flex justify-end">
        <Button type="submit">Create</Button>
      </div>
    </form>
  );
}
