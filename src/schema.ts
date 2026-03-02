import { pgTable, text, serial, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
// import { z } from "zod";

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description").notNull(),
  heroImage: text("hero_image").notNull(),
  location: text("location").notNull(),
  completionDate: text("completion_date").notNull(),
  stats: jsonb("stats").$type<{ label: string; value: string }[]>().notNull(),
  content: text("content").notNull(),
  gallery: jsonb("gallery").$type<string[]>().notNull(),
});

export const insertProjectSchema = createInsertSchema(projects);

export type Project = typeof projects.$inferSelect;
export type InsertProject = typeof projects.$inferInsert;