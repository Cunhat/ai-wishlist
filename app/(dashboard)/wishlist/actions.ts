"use server"

import { db } from "@/db"
import { wishlist } from "@/db/schema"
import { authenticatedActionClient } from "@/lib/safe-action"
import { createWishlistSchema } from "./validations"

import { revalidatePath } from "next/cache"



export const createWishlist = authenticatedActionClient.schema(createWishlistSchema).action(
    async ({parsedInput: {name, emoji}, ctx: {user}}) => {
         await db.insert(wishlist).values({
            name,
            emoji,
            userId: user.id,
        })

        revalidatePath("/")
    }
)