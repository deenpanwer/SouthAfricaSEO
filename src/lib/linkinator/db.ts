// src/lib/linkinator/db.ts
import { createClient } from "@libsql/client";

export const tursoClient = createClient({
  url: process.env.DATABASE_URL!,
  authToken: process.env.DATABASE_AUTH_TOKEN!,
});

// Function to initialize database schema (create link_scans table)
export async function initializeDbSchema() {
  await tursoClient.execute(`
    CREATE TABLE IF NOT EXISTS link_scans (
      id TEXT PRIMARY KEY NOT NULL,
      url TEXT NOT NULL,
      status TEXT NOT NULL,
      options TEXT,
      results TEXT,
      created_at INTEGER DEFAULT (strftime('%s', 'now')),
      completed_at INTEGER,
      ip_address TEXT,
      error_message TEXT
    );
  `);
  console.log("Link scans table ensured.");
}
