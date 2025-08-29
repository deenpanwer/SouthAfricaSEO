// src/app/api/qstash/link-scan-webhook/route.ts
import { NextRequest, NextResponse } from "next/server";
import { verifySignature } from "@upstash/qstash/dist/nextjs";
import { performLinkScan } from "@/lib/linkinator/core";
import { tursoClient } from "@/lib/linkinator/db";
import { LinkScanOptions } from "@/types/linkinator";

export const runtime = 'nodejs'; // Ensure this runs in Node.js environment

async function handler(req: NextRequest) {
  try {
    const { scanId, url, options }: { scanId: string; url: string; options: LinkScanOptions } = await req.json();

    console.log(`Processing scan job for scanId: ${scanId}, URL: ${url}`);

    // Update scan status to in_progress
    await tursoClient.execute({
      sql: `UPDATE link_scans SET status = ? WHERE id = ?`,
      args: ["in_progress", scanId],
    });

    try {
      const results = await performLinkScan(scanId, url, options);
      console.log(`Scan completed for scanId: ${scanId}. Found ${results.length} links.`);
      // Results are updated within performLinkScan, but we can re-confirm status here
    } catch (scanError: any) {
      console.error(`Scan failed for scanId: ${scanId}:`, scanError);
      await tursoClient.execute({
        sql: `UPDATE link_scans SET status = ?, error_message = ?, completed_at = ? WHERE id = ?`,
        args: ["failed", scanError.message || "Unknown error during scan", Math.floor(Date.now() / 1000), scanId],
      });
      return NextResponse.json({ error: "Scan processing failed." }, { status: 500 });
    }

    return NextResponse.json({ message: "Scan job processed successfully." }, { status: 200 });
  } catch (error: any) {
    console.error("Error in QStash webhook:", error);
    return NextResponse.json({ error: "Internal Server Error." }, { status: 500 });
  }
}

// Wrap the handler with QStash signature verification
export const POST = verifySignature(handler);
