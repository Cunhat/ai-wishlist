"use server"

import { db } from "@/db"
import { wishlist } from "@/db/schema"
import { authenticatedActionClient } from "@/lib/safe-action"
import { createWishlistSchema } from "./validations"



export const createWishlist = authenticatedActionClient.schema(createWishlistSchema).action(
    async ({parsedInput: {name}, ctx: {user}}) => {

       console.log("USER", user.id)
        // const test = await db.insert(wishlist).values({
        //     name,
        //     userId: user.id,
        // })
    }
)