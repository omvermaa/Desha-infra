import { pgTable, text, serial, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description").notNull(),
  heroImage: text("hero_image").notNull(),
  location: text("location").notNull(),
  completionDate: text("completion_date").notNull(),
  stats: jsonb("stats").$type<{ label: string; value: string }[]>(),
  content: text("content").notNull(),
  gallery: jsonb("gallery").$type<string[]>(),
});

export const insertProjectSchema = createInsertSchema(projects).omit({ id: true });

export type InsertProject = z.infer<typeof insertProjectSchema>;
export type Project = typeof projects.$inferSelect;