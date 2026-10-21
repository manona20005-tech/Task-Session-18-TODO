import { pgTable, serial, varchar,timestamp ,text,boolean } from "drizzle-orm/pg-core";

export const todos = pgTable("todos",{
id : serial("id").primaryKey(),
title : varchar("title",{length :225}).notNull(),
body : text("body").notNull(),
created_at : timestamp("created_at").defaultNow().notNull(),
done : boolean("done").default(false)
})










