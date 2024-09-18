import { text, integer, sqliteTable, real } from "drizzle-orm/sqlite-core";


export const pocket = sqliteTable("pocket", {
  id: integer("id", {
    mode: "number",
  }).primaryKey({ autoIncrement: true }),
  userId: text("user_id").notNull(),
  name: text("name").notNull(),
  amount: real("amount").notNull(),
});

export const wishlist = sqliteTable("wishlist", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  userId: text("user_id").notNull(),
  name: text("name").notNull(),
  emoji: text("emoji").notNull(),
});

export const category = sqliteTable("category", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  icon: text("icon").notNull(),
  color: text("color").notNull(),
  userId: text("user_id").notNull(),
  wishlistId: integer("wishlist_id").references(() => wishlist.id).notNull(),
});

export const item = sqliteTable("item", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  price: real("price").notNull(),
  wishlistId: integer("wishlist_id").references(() => wishlist.id).notNull(),
  categoryId: integer("category_id").references(() => category.id),
});

