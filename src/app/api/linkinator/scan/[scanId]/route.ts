// src/app/api/linkinator/scan/[scanId]/route.ts
import { NextResponse } from "next/server";
import { tursoClient } from "@/lib/linkinator/db";
import { LinkScan, LinkScanSummary } from "@/types/linkinator";

export async function GET(req: Request, { params }: { params: { scanId: string } }) {
  const { scanId } = params;

  try {
    const result = await tursoClient.execute({
      sql: `SELECT * FROM link_scans WHERE id = ?`,
      args: [scanId],
    });

    if (result.rows.length === 0) {
      return NextResponse.json({ error: "Scan not found." }, { status: 404 });
    }

    const scanData = result.rows[0];
    const scan: LinkScan = {
      id: scanData.id as string,
      url: scanData.url as string,
      status: scanData.status as LinkScan["status"],
      options: JSON.parse(scanData.options as string || "{}"),
      results: scanData.results ? JSON.parse(scanData.results as string) : undefined,
      summary: scanData.results ? calculateSummary(JSON.parse(scanData.results as string)) : undefined,
      createdAt: scanData.created_at as number,
      completedAt: scanData.completed_at as number | undefined,
      ipAddress: scanData.ip_address as string | undefined,
      errorMessage: scanData.error_message as string | undefined,
    };

    return NextResponse.json(scan, { status: 200 });
  } catch (error) {
    console.error("Failed to retrieve scan:", error);
    return NextResponse.json({ error: "Failed to retrieve scan." }, { status: 500 });
  }
}

// Helper function to calculate summary from results
function calculateSummary(results: LinkScan["results"]): LinkScanSummary {
  if (!results) return { totalLinks: 0, brokenLinks: 0, redirects: 0, validLinks: 0 };
  return {
    totalLinks: results.length,
    brokenLinks: results.filter(r => r.status === "Broken" || r.status === "Timeout" || r.status === "Network Error").length,
    redirects: results.filter(r => r.status === "Redirected").length,
    validLinks: results.filter(r => r.status === "OK").length,
  };
}
