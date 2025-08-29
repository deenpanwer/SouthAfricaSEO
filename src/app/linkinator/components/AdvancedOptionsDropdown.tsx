// src/app/linkinator/components/AdvancedOptionsDropdown.tsx
import { LinkScanOptions } from "@/types/linkinator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";

interface AdvancedOptionsDropdownProps {
  options: LinkScanOptions;
  setOptions: (options: LinkScanOptions) => void;
}

export function AdvancedOptionsDropdown({ options, setOptions }: AdvancedOptionsDropdownProps) {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="advanced-options">
        <AccordionTrigger className="text-lg text-primary-orange hover:no-underline">Advanced Options</AccordionTrigger>
        <AccordionContent className="space-y-4 p-4 border border-gray-200 rounded-md mt-2">
          <div>
            <Label htmlFor="depth-input">Scan Depth</Label>
            <Input
              id="depth-input"
              type="number"
              min="1"
              value={options.depth || 1}
              onChange={(e) => setOptions({ ...options, depth: parseInt(e.target.value) })}
              className="w-24"
            />
            <p className="text-sm text-gray-500 mt-1">Number of pages to crawl from the starting URL.</p>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="include-subdomains"
              checked={options.includeSubdomains}
              onCheckedChange={(checked) => setOptions({ ...options, includeSubdomains: !!checked })}
            />
            <Label htmlFor="include-subdomains">Include Subdomains</Label>
          </div>

          <div>
            <Label htmlFor="ignore-patterns">Ignore Patterns (comma-separated)</Label>
            <Textarea
              id="ignore-patterns"
              placeholder="e.g., *.pdf, /archive/*"
              value={options.ignorePatterns?.join(", ") || ""}
              onChange={(e) => setOptions({ ...options, ignorePatterns: e.target.value.split(",").map(p => p.trim()).filter(Boolean) })}
            />
            <p className="text-sm text-gray-500 mt-1">URLs matching these patterns will be ignored.</p>
          </div>

          <div>
            <Label htmlFor="user-agent">Custom User Agent</Label>
            <Input
              id="user-agent"
              type="text"
              placeholder="LinkinatorBot/1.0"
              value={options.userAgent || "LinkinatorBot/1.0"}
              onChange={(e) => setOptions({ ...options, userAgent: e.target.value })}
            />
            <p className="text-sm text-gray-500 mt-1">Specify a custom User-Agent header for requests.</p>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
