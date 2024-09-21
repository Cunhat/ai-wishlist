"use server"

import { db } from "@/db"
import { wishlist } from "@/db/schema"
import { authenticatedActionClient } from "@/lib/safe-action"
import { createWishlistSchema, deleteWishlistSchema, updateWishlistSchema } from "./validations"

import { revalidatePath } from "next/cache"
import { eq, and } from "drizzle-orm"
import { redirect } from "next/navigation"



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

export const deleteWishlist = authenticatedActionClient.schema(deleteWishlistSchema).action(
    async ({parsedInput: {id}, ctx: {user}}) => {
        await db.delete(wishlist).where(and(eq(wishlist.id, id), eq(wishlist.userId, user.id)))
        redirect("/")
    }
)

export const updateWishlist = authenticatedActionClient.schema(updateWishlistSchema).action(
    async ({parsedInput: {id, name, emoji}, ctx: {user}}) => {
        await db.update(wishlist).set({name, emoji}).where(and(eq(wishlist.id, id), eq(wishlist.userId, user.id)))
        revalidatePath("/")
    }
)
