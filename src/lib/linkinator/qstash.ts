// src/lib/linkinator/qstash.ts
import { Client } from "@upstash/qstash";

export const qstashClient = new Client({
  token: process.env.QSTASH_TOKEN!,
});

// Function to publish a message to QStash
export async function publishScanJob(scanId: string, url: string, options: any) {
  await qstashClient.publish({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/qstash/link-scan-webhook`, // Direct webhook URL
    body: JSON.stringify({ scanId, url, options }),
  });
}
