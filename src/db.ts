import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from "./shared/schema";

if (!process.env.DATABASE_URL) {
  console.warn("DATABASE_URL not set. Database features will fail.");
}

export const queryClient = postgres(process.env.DATABASE_URL || "postgres://postgres:postgres@localhost:5432/desha_infra");
export const db = drizzle(queryClient, { schema });