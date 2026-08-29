// src/db/schema.ts
import {
  pgTable,
  uuid,
  varchar,
  text,
  integer,
  boolean,
  timestamp,
} from "drizzle-orm/pg-core";

export const projects = pgTable("projects", {
  id: uuid("id").primaryKey().defaultRandom(),

  slug: varchar("slug", { length: 100 }).notNull().unique(),
  title: varchar("title", { length: 120 }).notNull(),
  description: text("description").notNull(),

  imageUrl: text("image_url").notNull(),
  liveUrl: text("live_url").notNull(),
  repoUrl: text("repo_url"),

  displayOrder: integer("display_order").notNull().default(0),
  isPublished: boolean("published").notNull().default(true),

  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
});

export type Project = typeof projects.$inferSelect;
export type NewProject = typeof projects.$inferInsert;
