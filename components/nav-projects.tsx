import { MoreHorizontal } from "lucide-react";
import Link from "next/link";

import DeleteWishlist from "@/app/(dashboard)/wishlist/delete-wishlist";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import CreateWishlist from "../app/(dashboard)/wishlist/create-wishlist";
import EditWishlist from "@/app/(dashboard)/wishlist/edit-wishlist";
import { Wishlist } from "@/app/(dashboard)/wishlist/validations";

export function NavProjects({
  wishlists,
  className,
}: {
  wishlists: Wishlist[];
} & React.ComponentProps<"ul">) {
  return (
    <ul className={cn("grid gap-0.5", className)}>
      {wishlists.map((item) => (
        <li
          key={item.name}
          className="has-[[data-state=open]]:bg-accent has-[[data-state=open]]:text-accent-foreground group relative rounded-md hover:bg-accent hover:text-accent-foreground"
        >
          <Link
            href={item.url}
            className="flex h-7 items-center gap-2.5 overflow-hidden rounded-md px-1.5 text-xs outline-none ring-ring transition-all hover:bg-accent hover:text-accent-foreground focus-visible:ring-2"
          >
            <p className="text-base">{item.emoji}</p>
            <div className="line-clamp-1 grow overflow-hidden pr-6 font-medium text-sm">
              {item.name}
            </div>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="peer absolute right-1 top-0.5 h-6 w-6 shrink-0 rounded-md bg-accent p-0 text-accent-foreground opacity-0 ring-ring transition-all focus-visible:ring-2 group-focus-within:opacity-100 group-hover:opacity-100 data-[state=open]:bg-accent data-[state=open]:opacity-100"
              >
                <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
                <span className="sr-only">Toggle</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent side="right" align="start" sideOffset={20}>
              <DeleteWishlist id={item.id} />
              <EditWishlist wishlist={item} />
            </DropdownMenuContent>
          </DropdownMenu>
        </li>
      ))}
      <li>
        <CreateWishlist />
      </li>
    </ul>
  );
}
