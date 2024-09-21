import { db } from "@/db";
import { wishlist } from "@/db/schema";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { eq, and } from "drizzle-orm";

export default async function Wishlist({ params }: { params: { id: string } }) {
  const user = await currentUser();

  if (!user) {
    redirect("/sign-in");
  }

  const wishlistId = parseInt(params.id);

  const getWishlist = await db
    .selectDistinct()
    .from(wishlist)
    .where(and(eq(wishlist.id, wishlistId), eq(wishlist.userId, user.id)));

  console.log(getWishlist);

  return (
    <div className="flex-1">
      <div className="flex items-center gap-2">
        <p className="text-3xl">{getWishlist[0].emoji}</p>
        <h1 className="text-2xl">{getWishlist[0].name}</h1>
      </div>
    </div>
  );
}
