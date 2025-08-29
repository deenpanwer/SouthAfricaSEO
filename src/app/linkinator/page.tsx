// src/app/linkinator/page.tsx
"use client"; // This page will be a client component

import { useState } from "react";
import { LinkScan, LinkScanOptions } from "@/types/linkinator";
import { useLinkinatorScan } from "@/hooks/useLinkinatorScan";
import { LinkInputForm } from "@/app/linkinator/components/LinkInputForm";
import { AdvancedOptionsDropdown } from "@/app/linkinator/components/AdvancedOptionsDropdown";
import { ScanResultsDisplay } from "@/app/linkinator/components/ScanResultsDisplay";
import { EmbedCallout } from "@/app/linkinator/components/EmbedCallout";
import { Button } from "@/components/ui/button"; // Assuming shadcn/ui button
import { Input } from "@/components/ui/input"; // Assuming shadcn/ui input
import { Label } from "@/components/ui/label"; // Assuming shadcn/ui label
import { Separator } from "@/components/ui/separator"; // Assuming shadcn/ui separator
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Assuming shadcn/ui card

export default function LinkinatorPage() {
  const [url, setUrl] = useState("");
  const [options, setOptions] = useState<LinkScanOptions>({
    depth: 1,
    includeSubdomains: false,
    ignorePatterns: [],
    userAgent: "LinkinatorBot/1.0",
  });

  const { scan, startScan, loading, error } = useLinkinatorScan();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (url) {
      await startScan(url, options);
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-primary-orange">Linkinator</h1>
      <p className="text-center text-lg text-gray-700 mb-12">
        Effortlessly check your website for broken links, redirects, and more.
      </p>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Scan Your Website</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <LinkInputForm url={url} setUrl={setUrl} loading={loading} />
            <AdvancedOptionsDropdown options={options} setOptions={setOptions} />
            <Button type="submit" className="w-full bg-primary-orange hover:bg-primary-orange/90 text-white" disabled={loading}>
              {loading ? "Scanning..." : "Start Scan"}
            </Button>
          </form>
          {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
        </CardContent>
      </Card>

      {scan && <ScanResultsDisplay scan={scan} loading={loading} />}

      <Separator className="my-12" />

      <EmbedCallout />
    </div>
  );
}
