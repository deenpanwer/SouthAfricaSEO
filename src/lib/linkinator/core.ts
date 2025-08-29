// src/lib/linkinator/core.ts
import { Linkinator } from 'linkinator';
import { LinkScanOptions, LinkScanResult } from "@/types/linkinator";
import { tursoClient } from "@/lib/linkinator/db";

export async function performLinkScan(scanId: string, initialUrl: string, options: LinkScanOptions): Promise<LinkScanResult[]> {
  const results: LinkScanResult[] = [];

  const linkinatorOptions: any = {
    concurrency: 10, // Number of concurrent checks
    timeout: 10000, // 10 seconds timeout per request
    userAgent: options.userAgent || 'LinkinatorBot/1.0',
    // Linkinator's depth option is for how many levels deep it will crawl.
    // Our 'depth' option is 1-based, Linkinator's is 0-based (0 = only initial URL, 1 = initial + links on initial, etc.)
    // So, if our depth is 1, Linkinator's should be 0. If our depth is 2, Linkinator's should be 1.
    // We'll cap it at a reasonable number to prevent excessively long scans.
    depth: (options.depth && options.depth > 0) ? options.depth - 1 : 0,
    // Linkinator's skip option takes an array of regular expressions
    skip: options.ignorePatterns?.map(pattern => new RegExp(pattern)) || [],
    // Linkinator also has 'recursive' and 'strict' options, but we'll stick to what's mapped from LinkScanOptions
  };

  // If includeSubdomains is false, we need to ensure Linkinator doesn't follow subdomains.
  // Linkinator doesn't have a direct 'includeSubdomains' option. We might need to filter results or use 'skip' more aggressively.
  // For now, we'll rely on the default behavior and filter results if necessary.

  const checker = new Linkinator(linkinatorOptions);

  // Linkinator emits events for each link checked
  checker.on('link', (link) => {
    let status: LinkScanResult["status"];
    let errorMessage: string | undefined;

    if (link.state === 'OK') {
      status = 'OK';
    } else if (link.state === 'BROKEN') {
      status = 'Broken';
      errorMessage = link.failureReason || 'Unknown broken link reason';
    } else if (link.state === 'REDIRECTED') {
      status = 'Redirected';
    } else if (link.state === 'TIMEOUT') {
      status = 'Timeout';
      errorMessage = 'Request timed out.';
    } else {
      status = 'Broken'; // Default to broken for other states
      errorMessage = `Unexpected state: ${link.state}`;
    }

    results.push({
      link: link.url,
      status,
      statusCode: link.status,
      redirectedTo: link.redirectedTo,
      type: link.isInternal ? 'internal' : 'external', // Linkinator provides isInternal
      responseTimeMs: link.responseTime,
      sourcePage: link.parentUrl, // Linkinator provides parentUrl
      errorMessage,
    });
  });

  try {
    // Linkinator's check method returns a promise that resolves when the scan is complete
    await checker.check({ path: initialUrl });
    console.log(`Linkinator scan completed for ${initialUrl}. Total links: ${results.length}`);
  } catch (error: any) {
    console.error(`Linkinator scan failed for ${initialUrl}:`, error);
    // If the checker.check() throws an error, it means the scan itself failed to start or encountered a critical issue.
    // We should update the scan status to 'failed' in the DB.
    await tursoClient.execute({
      sql: `UPDATE link_scans SET status = ?, error_message = ?, completed_at = ? WHERE id = ?`,
      args: ["failed", error.message || "Linkinator scan failed unexpectedly", Math.floor(Date.now() / 1000), scanId],
    });
    throw error; // Re-throw to propagate the error to the QStash webhook handler
  }

  // After scan, update the database with final results and status
  // This part is now only reached if checker.check() completes without throwing.
  await tursoClient.execute({
    sql: `UPDATE link_scans SET status = ?, results = ?, completed_at = ? WHERE id = ?`,
    args: ["completed", JSON.stringify(results), Math.floor(Date.now() / 1000), scanId],
  });

  return results;
}

// The following helper functions are no longer needed as Linkinator handles them internally
// function isInternalLink(...) { ... }
// function shouldIgnoreLink(...) { ... }