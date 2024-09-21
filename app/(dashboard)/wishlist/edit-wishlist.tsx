"use client";
import { useState } from "react";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../../components/ui/sheet";
import { EditWishlistForm } from "./edit-wishlist-form";
import { Wishlist } from "./validations";

export default function EditWishlist({ wishlist }: { wishlist: Wishlist }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <DropdownMenuItem
        onSelect={(e) => {
          e.preventDefault();
          setOpen(true);
        }}
        className="cursor-pointer"
      >
        Edit Wishlist
      </DropdownMenuItem>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent className="flex flex-col gap-4">
          <SheetHeader>
            <SheetTitle>Edit your wishlist</SheetTitle>
            <SheetDescription>
              Edit your wishlist to start tracking your wishes.
            </SheetDescription>
          </SheetHeader>
          <EditWishlistForm setOpen={setOpen} wishlist={wishlist} />
        </SheetContent>
      </Sheet>
    </>
  );
}
