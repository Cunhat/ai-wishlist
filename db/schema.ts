import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";

// export const todos = sqliteTable("todos", {
//   id: integer("id", {
//     mode: "number",
//   }).primaryKey({ autoIncrement: true }),
//   description: text("description").notNull(),
//   completed: integer("completed", { mode: "boolean" }).notNull().default(false),
// });

export const user = sqliteTable("user", {
  id: integer("id", {
    mode: "number",
  }).primaryKey({ autoIncrement: true }),
  email: text("email").notNull(),
  name: text("name").notNull()
});

