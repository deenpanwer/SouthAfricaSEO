// src/components/linkinator/EmbeddableWidget.tsx
"use client";

import { useState, useEffect } from "react";
import { LinkScan, LinkScanOptions } from "@/types/linkinator";
import { useLinkinatorScan } from "@/hooks/useLinkinatorScan";
import { LinkInputForm } from "@/app/linkinator/components/LinkInputForm";
import { ScanResultsDisplay } from "@/app/linkinator/components/ScanResultsDisplay";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface EmbeddableWidgetProps {
  initialUrl?: string;
}

export function EmbeddableWidget({ initialUrl }: EmbeddableWidgetProps) {
  const [url, setUrl] = useState(initialUrl || "");
  const [options, setOptions] = useState<LinkScanOptions>({
    depth: 1,
    includeSubdomains: false,
    ignorePatterns: [],
    userAgent: "LinkinatorBot/1.0",
  });

  const { scan, startScan, loading, error } = useLinkinatorScan();

  useEffect(() => {
    if (initialUrl) {
      setUrl(initialUrl);
    }
  }, [initialUrl]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (url) {
      await startScan(url, options);
    }
  };

  return (
    <div className="linkinator-embed-container p-4 bg-white rounded-lg shadow-md h-full flex flex-col">
      <h2 className="linkinator-embed-title text-2xl font-bold text-center mb-4 text-primary-orange">Linkinator</h2>
      <p className="linkinator-embed-description text-center text-gray-600 mb-6">
        Check your website for broken links.
      </p>

      <Card className="mb-4 flex-shrink-0">
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <LinkInputForm url={url} setUrl={setUrl} loading={loading} />
            {/* Advanced options are simplified or removed for embed to keep it compact */}
            <Button type="submit" className="w-full bg-primary-orange hover:bg-primary-orange/90 text-white" disabled={loading}>
              {loading ? "Scanning..." : "Start Scan"}
            </Button>
          </form>
          {error && <p className="text-error-red mt-2 text-center text-sm">{error}</p>}
        </CardContent>
      </Card>

      <div className="flex-grow overflow-y-auto">
        {scan && <ScanResultsDisplay scan={scan} loading={loading} />}
      </div>

      <Separator className="my-4 flex-shrink-0" />

      {/* Branding - visible only on embed */}
      <div className="linkinator-embed-branding text-center text-sm text-gray-500 flex-shrink-0">
        Powered by <span className="font-semibold text-primary-orange">Your Company Name</span>
      </div>
    </div>
  );
}
