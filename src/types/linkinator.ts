// src/types/linkinator.ts
export type LinkScanOptions = {
  depth?: number;
  includeSubdomains?: boolean;
  ignorePatterns?: string[];
  userAgent?: string;
};

export type LinkScanResult = {
  link: string;
  status: "OK" | "Broken" | "Redirected" | "Timeout" | "Network Error";
  statusCode?: number;
  redirectedTo?: string;
  type: "internal" | "external";
  responseTimeMs?: number;
  sourcePage?: string; // The page where this link was found
  errorMessage?: string; // Added for malformed URLs or other errors
};

export type LinkScanSummary = {
  totalLinks: number;
  brokenLinks: number;
  redirects: number;
  validLinks: number;
};

export type LinkScan = {
  id: string;
  url: string;
  status: "queued" | "in_progress" | "completed" | "failed";
  options: LinkScanOptions;
  results?: LinkScanResult[];
  summary?: LinkScanSummary;
  createdAt: number; // Unix timestamp
  completedAt?: number; // Unix timestamp
  ipAddress?: string;
  errorMessage?: string;
};
