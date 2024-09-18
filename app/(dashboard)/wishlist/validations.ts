import { z } from "zod";

export const createWishlistSchema = z.object({
    name: z.string().min(1),
    emoji: z.string().emoji().length(2),
})