// src/lib/linkinator/core.ts
import * as cheerio from "cheerio";
import { LinkScanOptions, LinkScanResult } from "@/types/linkinator";
import { tursoClient } from "@/lib/linkinator/db";

// A simple in-memory cache to avoid re-fetching the same URL multiple times in a single scan
const fetchedUrls = new Set<string>();

export async function performLinkScan(scanId: string, initialUrl: string, options: LinkScanOptions): Promise<LinkScanResult[]> {
  fetchedUrls.clear(); // Clear cache for new scan
  const results: LinkScanResult[] = [];
  const queue: { url: string; sourcePage?: string; depth: number }[] = [{ url: initialUrl, depth: 0 }];

  while (queue.length > 0) {
    const { url: currentUrl, sourcePage, depth } = queue.shift()!;

    if (fetchedUrls.has(currentUrl) || depth > (options.depth || 1)) {
      continue;
    }

    fetchedUrls.add(currentUrl);

    let response: Response | undefined;
    let status: LinkScanResult["status"] = "Broken";
    let statusCode: number | undefined;
    let redirectedTo: string | undefined;
    let responseTimeMs: number | undefined;
    let errorMessage: string | undefined;

    const startTime = Date.now();
    try {
      response = await fetch(currentUrl, {
        redirect: "follow", // Follow redirects
        headers: { "User-Agent": options.userAgent || "LinkinatorBot/1.0" },
        signal: AbortSignal.timeout(10000) // 10 second timeout
      });
      responseTimeMs = Date.now() - startTime;

      // Only process response if it's defined (i.e., fetch didn't throw an error)
      if (response) {
        statusCode = response.status;
        if (response.ok) {
          status = "OK";
        } else if (statusCode >= 300 && statusCode < 400) {
          status = "Redirected";
          redirectedTo = response.url; // Final URL after redirects
        } else {
          status = "Broken";
        }
      }
    } catch (e: any) {
      responseTimeMs = Date.now() - startTime;
      if (e.name === 'AbortError') {
        status = "Timeout";
        errorMessage = "Request timed out.";
      } else {
        status = "Network Error";
        errorMessage = e.message;
      }
    }

    results.push({
      link: currentUrl,
      status,
      statusCode,
      redirectedTo,
      type: isInternalLink(currentUrl, initialUrl, options.includeSubdomains) ? "internal" : "external",
      responseTimeMs,
      sourcePage,
      errorMessage,
    });

    // If it's an HTML page and we need to crawl deeper
    if (status === "OK" && response && response.headers.get("content-type")?.includes("text/html") && depth < (options.depth || 1)) {
      const html = await response.text();
      const $ = cheerio.load(html);

      $("a[href], img[src], link[href], script[src]").each((_, element) => {
        const href = $(element).attr("href");
        const src = $(element).attr("src");
        const link = href || src;

        if (link) {
          try {
            const absoluteLink = new URL(link, currentUrl).href;
            if (!shouldIgnoreLink(absoluteLink, options.ignorePatterns)) {
              queue.push({ url: absoluteLink, sourcePage: currentUrl, depth: depth + 1 });
            }
          } catch (e) {
            // Handle malformed URLs
            results.push({
              link: link,
              status: "Broken",
              statusCode: undefined,
              type: "external", // Assume external if malformed
              sourcePage: currentUrl,
              errorMessage: "Malformed URL"
            });
          }
        }
      });
    }

    // Update DB periodically or after a certain number of links processed
    // For simplicity, we'll update at the end of the scan in this example.
    // For very large scans, consider batching updates.
  }

  // After scan, update the database with final results and status
  await tursoClient.execute({
    sql: `UPDATE link_scans SET status = ?, results = ?, completed_at = ? WHERE id = ?`,
    args: ["completed", JSON.stringify(results), Math.floor(Date.now() / 1000), scanId],
  });

  return results;
}

function isInternalLink(link: string, baseUrl: string, includeSubdomains?: boolean): boolean {
  try {
    const linkUrl = new URL(link);
    const baseUrlObj = new URL(baseUrl);

    if (includeSubdomains) {
      return linkUrl.hostname.endsWith(baseUrlObj.hostname);
    } else {
      return linkUrl.hostname === baseUrlObj.hostname;
    }
  } catch (e) {
    return false; // Malformed URL
  }
}

function shouldIgnoreLink(link: string, ignorePatterns?: string[]): boolean {
  if (!ignorePatterns || ignorePatterns.length === 0) {
    return false;
  }
  return ignorePatterns.some(pattern => {
    try {
      // Simple glob to regex conversion for now
      const regexPattern = pattern.replace(/\./g, '\\.\\').replace(/\*/g, '.*');
      return new RegExp(regexPattern).test(link);
    } catch (e) {
      console.warn(`Invalid ignore pattern regex: ${pattern}`, e);
      return false; // Don't ignore if pattern is invalid
    }
  });
}
