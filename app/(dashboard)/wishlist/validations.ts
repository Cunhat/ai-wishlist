import { z } from "zod";

export const createWishlistSchema = z.object({
    name: z.string().min(1),
    emoji: z.string().emoji(),
})

export const deleteWishlistSchema = z.object({
    id: z.number().int().positive(),
})

export const updateWishlistSchema = z.object({
    id: z.number().int().positive(),
    name: z.string().min(1),
    emoji: z.string().emoji(),
})

export const WishlistSchema = z.object({
    id: z.number().int().positive(),
    name: z.string().min(1),
    emoji: z.string().emoji(),
    url: z.string().url(),
})

export type Wishlist = z.infer<typeof WishlistSchema>;