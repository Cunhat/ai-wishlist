import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../../components/ui/sheet";
import { PlusSquare } from "lucide-react";
import { CreateWishlistForm } from "./create-wishlist-form";

export default function CreateWishlist() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button className="flex h-7 w-full items-center gap-2.5 overflow-hidden rounded-md px-1.5 text-left text-xs ring-ring transition-all hover:bg-muted focus-visible:outline-none focus-visible:ring-2">
          <PlusSquare className="h-4 w-4 shrink-0 translate-x-0.5 text-muted-foreground" />
          <div className="line-clamp-1 overflow-hidden font-medium text-muted-foreground text-sm">
            Add Wishlist
          </div>
        </button>
      </SheetTrigger>
      <SheetContent className="flex flex-col gap-4">
        <SheetHeader>
          <SheetTitle>Create a new wishlist</SheetTitle>
          <SheetDescription>
            Create a new wishlist to start tracking your wishes.
          </SheetDescription>
        </SheetHeader>
        <CreateWishlistForm setOpen={setOpen} />
      </SheetContent>
    </Sheet>
  );
}
