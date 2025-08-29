// src/app/api/linkinator/scan/route.ts
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import { tursoClient, initializeDbSchema } from "@/lib/linkinator/db";
import { publishScanJob } from "@/lib/linkinator/qstash";
import { checkRateLimit } from "@/lib/linkinator/redis";
import { LinkScanOptions } from "@/types/linkinator";

export async function POST(req: Request) {
  console.log("--- Initiating Link Scan API Call ---");
  console.log("Environment Variables Check:");
  console.log("DATABASE_URL: ", process.env.DATABASE_URL ? "Set" : "Not Set");
  console.log("UPSTASH_REDIS_REST_URL: ", process.env.UPSTASH_REDIS_REST_URL ? "Set" : "Not Set");
  console.log("UPSTASH_REDIS_REST_TOKEN: ", process.env.UPSTASH_REDIS_REST_TOKEN ? "Set" : "Not Set");
  console.log("QSTASH_TOKEN: ", process.env.QSTASH_TOKEN ? "Set" : "Not Set");
  console.log("NEXT_PUBLIC_BASE_URL: ", process.env.NEXT_PUBLIC_BASE_URL ? "Set" : "Not Set");

  try {
    console.log("Attempting to initialize DB schema...");
    await initializeDbSchema(); // Ensure table exists on first run
    console.log("DB schema initialized successfully.");
  } catch (dbError) {
    console.error("Error initializing DB schema:", dbError);
    return NextResponse.json({ error: "Database initialization failed." }, { status: 500 });
  }

  const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "127.0.0.1";
  console.log("Client IP:", ip);

  try {
    console.log("Checking rate limit...");
    const isRateLimited = await checkRateLimit(ip, 10, 60); // 10 requests per minute
    if (!isRateLimited) {
      console.warn("Rate limit exceeded for IP:", ip);
      return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
    }
    console.log("Rate limit check passed.");
  } catch (rateLimitError) {
    console.error("Error checking rate limit:", rateLimitError);
    return NextResponse.json({ error: "Rate limit service unavailable." }, { status: 500 });
  }

  const { url, ...options }: { url: string } & LinkScanOptions = await req.json();
  console.log("Received URL:", url);
  console.log("Received Options:", options);

  if (!url) {
    console.error("URL is missing from request.");
    return NextResponse.json({ error: "URL is required." }, { status: 400 });
  }

  // Basic URL validation
  try {
    new URL(url);
  } catch (e) {
    console.error("Invalid URL format:", url, e);
    return NextResponse.json({ error: "Invalid URL format." }, { status: 400 });
  }

  const scanId = uuidv4();
  const createdAt = Math.floor(Date.now() / 1000); // Unix timestamp
  console.log("Generated Scan ID:", scanId);

  try {
    console.log("Attempting to insert scan into DB...");
    await tursoClient.execute({
      sql: `INSERT INTO link_scans (id, url, status, options, created_at, ip_address) VALUES (?, ?, ?, ?, ?, ?) `,
      args: [scanId, url, "queued", JSON.stringify(options), createdAt, ip],
    });
    console.log("Scan inserted into DB successfully.");

    console.log("Attempting to publish scan job to QStash...");
    await publishScanJob(scanId, url, options);
    console.log("Scan job published to QStash successfully.");

    return NextResponse.json({
      scanId,
      status: "queued",
      message: "Scan initiated successfully. Use GET /api/linkinator/scan/{scanId} to check status.",
    }, { status: 202 });
  } catch (error) {
    console.error("Failed to initiate scan (DB insert or QStash publish):", error);
    return NextResponse.json({ error: "Failed to initiate scan." }, { status: 500 });
  }
}

