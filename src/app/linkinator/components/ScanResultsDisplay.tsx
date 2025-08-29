// src/app/linkinator/components/ScanResultsDisplay.tsx
import { LinkScan, LinkScanResult } from "@/types/linkinator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress"; // Assuming shadcn/ui progress
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"; // Assuming shadcn/ui tabs

interface ScanResultsDisplayProps {
  scan: LinkScan;
  loading: boolean;
}

export function ScanResultsDisplay({ scan, loading }: ScanResultsDisplayProps) {
  if (!scan || (!scan.results && !loading)) {
    return null;
  }

  const getStatusBadgeVariant = (status: LinkScanResult["status"]) => {
    switch (status) {
      case "OK": return "success"; // Custom variant
      case "Broken": return "destructive";
      case "Redirected": return "warning"; // Custom variant
      case "Timeout":
      case "Network Error": return "destructive";
      default: return "secondary";
    }
  };

  const getStatusBadgeColor = (status: LinkScanResult["status"]) => {
    switch (status) {
      case "OK": return "bg-success-green text-white";
      case "Broken": return "bg-error-red text-white";
      case "Redirected": return "bg-warning-yellow text-black";
      case "Timeout":
      case "Network Error": return "bg-error-red text-white";
      default: return "bg-gray-200 text-gray-800";
    }
  };

  const renderResultsTable = (results: LinkScanResult[]) => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Link</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Code</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Source Page</TableHead>
          <TableHead>Response Time (ms)</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {results.map((result, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium break-all">
              <a href={result.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                {result.link}
              </a>
              {result.redirectedTo && (
                <p className="text-sm text-gray-500">{"-> "}{result.redirectedTo}</p>
              )}
            </TableCell>
            <TableCell>
              <Badge className={getStatusBadgeColor(result.status)}>
                {result.status}
              </Badge>
            </TableCell>
            <TableCell>{result.statusCode || "-"}</TableCell>
            <TableCell>{result.type}</TableCell>
            <TableCell className="break-all text-sm text-gray-600">{result.sourcePage || "N/A"}</TableCell>
            <TableCell>{result.responseTimeMs || "-"}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-primary-orange">Scan Results for {scan.url}</CardTitle>
      </CardHeader>
      <CardContent>
        {loading && scan.status !== "completed" && scan.status !== "failed" ? (
          <div className="text-center py-8">
            <p className="text-lg mb-4">Scan in progress...</p>
            <Progress value={scan.results ? (scan.results.length / (scan.summary?.totalLinks || 1)) * 100 : 0} className="w-full" />
            <p className="text-sm text-gray-500 mt-2">This may take a few moments depending on the website size.</p>
          </div>
        ) : scan.status === "failed" ? (
          <div className="text-center py-8 text-error-red">
            <p className="text-lg font-semibold">Scan Failed!</p>
            <p className="text-sm">{scan.errorMessage || "An unexpected error occurred during the scan."}</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6 text-center">
              <div className="p-4 border rounded-md">
                <p className="text-sm text-gray-500">Total Links</p>
                <p className="text-2xl font-bold text-primary-orange">{scan.summary?.totalLinks || 0}</p>
              </div>
              <div className="p-4 border rounded-md">
                <p className="text-sm text-gray-500">Broken Links</p>
                <p className="text-2xl font-bold text-error-red">{scan.summary?.brokenLinks || 0}</p>
              </div>
              <div className="p-4 border rounded-md">
                <p className="text-sm text-gray-500">Redirects</p>
                <p className="text-2xl font-bold text-warning-yellow">{scan.summary?.redirects || 0}</p>
              </div>
              <div className="p-4 border rounded-md">
                <p className="text-sm text-gray-500">Valid Links</p>
                <p className="text-2xl font-bold text-success-green">{scan.summary?.validLinks || 0}</p>
              </div>
            </div>

            <Separator className="my-6" />

            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="all">All ({scan.results?.length || 0})</TabsTrigger>
                <TabsTrigger value="broken">Broken ({scan.summary?.brokenLinks || 0})</TabsTrigger>
                <TabsTrigger value="redirects">Redirects ({scan.summary?.redirects || 0})</TabsTrigger>
                <TabsTrigger value="valid">Valid ({scan.summary?.validLinks || 0})</TabsTrigger>
              </TabsList>
              <TabsContent value="all">
                {scan.results && scan.results.length > 0 ? renderResultsTable(scan.results) : <p className="text-center py-4">No links found.</p>}
              </TabsContent>
              <TabsContent value="broken">
                {scan.results && scan.results.filter(r => r.status === "Broken" || r.status === "Timeout" || r.status === "Network Error").length > 0 ?
                  renderResultsTable(scan.results.filter(r => r.status === "Broken" || r.status === "Timeout" || r.status === "Network Error")) :
                  <p className="text-center py-4">No broken links found.</p>}
              </TabsContent>
              <TabsContent value="redirects">
                {scan.results && scan.results.filter(r => r.status === "Redirected").length > 0 ?
                  renderResultsTable(scan.results.filter(r => r.status === "Redirected")) :
                  <p className="text-center py-4">No redirects found.</p>}
              </TabsContent>
              <TabsContent value="valid">
                {scan.results && scan.results.filter(r => r.status === "OK").length > 0 ?
                  renderResultsTable(scan.results.filter(r => r.status === "OK")) :
                  <p className="text-center py-4">No valid links found.</p>}
              </TabsContent>
            </Tabs>
          </>
        )}
      </CardContent>
    </Card>
  );
}
