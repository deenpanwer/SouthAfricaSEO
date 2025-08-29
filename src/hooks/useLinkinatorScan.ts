// src/hooks/useLinkinatorScan.ts
import { useState, useEffect, useCallback } from "react";
import { LinkScan, LinkScanOptions } from "@/types/linkinator";
import { useToast } from "@/hooks/use-toast"; // Assuming shadcn/ui toast

export function useLinkinatorScan() {
  const [scan, setScan] = useState<LinkScan | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const startScan = useCallback(async (url: string, options: LinkScanOptions) => {
    setLoading(true);
    setError(null);
    setScan(null); // Clear previous scan results

    try {
      const response = await fetch("/api/linkinator/scan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, ...options }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Failed to start scan.");
        toast({
          title: "Scan Failed",
          description: data.error || "Could not initiate scan.",
          variant: "destructive",
        });
        setLoading(false);
        return;
      }

      setScan(data);
      toast({
        title: "Scan Initiated",
        description: "Your scan is in progress. Results will appear shortly.",
      });

      // Start polling for results
      const pollInterval = setInterval(async () => {
        const pollResponse = await fetch(`/api/linkinator/scan/${data.scanId}`);
        const pollData = await pollResponse.json();

        if (pollResponse.ok && pollData.status !== "queued" && pollData.status !== "in_progress") {
          setScan(pollData);
          setLoading(false);
          clearInterval(pollInterval);
          if (pollData.status === "completed") {
            toast({
              title: "Scan Complete",
              description: "Your link scan has finished.",
              variant: "success",
            });
          } else if (pollData.status === "failed") {
            toast({
              title: "Scan Failed",
              description: pollData.errorMessage || "The scan could not be completed.",
              variant: "destructive",
            });
          }
        } else if (!pollResponse.ok) {
          setError(pollData.error || "Failed to fetch scan status.");
          setLoading(false);
          clearInterval(pollInterval);
        }
      }, 3000); // Poll every 3 seconds

    } catch (err: any) {
      setError(err.message || "An unexpected error occurred.");
      toast({
        title: "Error",
        description: err.message || "An unexpected error occurred.",
        variant: "destructive",
      });
      setLoading(false);
    }
  }, [toast]);

  return { scan, startScan, loading, error };
}
