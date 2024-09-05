import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import { z } from 'zod';
import { category, item, pocket, wishlist } from '../db/schema';

// Wishlist Schemas
export const insertWishlistSchema = createInsertSchema(wishlist);
export type InsertWishlist = z.infer<typeof insertWishlistSchema>;

export const selectWishlistSchema = createSelectSchema(wishlist);
export type SelectWishlist = z.infer<typeof selectWishlistSchema>;

// Category Schemas
export const insertCategorySchema = createInsertSchema(category);
export type InsertCategory = z.infer<typeof insertCategorySchema>;

export const selectCategorySchema = createSelectSchema(category);
export type SelectCategory = z.infer<typeof selectCategorySchema>;

// Item Schemas
export const insertItemSchema = createInsertSchema(item);
export type InsertItem = z.infer<typeof insertItemSchema>;

export const selectItemSchema = createSelectSchema(item);
export type SelectItem = z.infer<typeof selectItemSchema>;

// Pocket Schemas
export const insertPocketSchema = createInsertSchema(pocket);
export type InsertPocket = z.infer<typeof insertPocketSchema>;

export const selectPocketSchema = createSelectSchema(pocket);
export type SelectPocket = z.infer<typeof selectPocketSchema>;