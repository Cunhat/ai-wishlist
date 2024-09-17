import { z } from "zod";

export const createWishlistSchema = z.object({
    name: z.string().min(1),
})