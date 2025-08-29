// src/app/linkinator/components/LinkInputForm.tsx
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface LinkInputFormProps {
  url: string;
  setUrl: (url: string) => void;
  loading: boolean;
}

export function LinkInputForm({ url, setUrl, loading }: LinkInputFormProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor="url-input" className="text-lg">Website URL</Label>
      <Input
        id="url-input"
        type="url"
        placeholder="https://yourwebsite.com"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        required
        disabled={loading}
        className="text-base p-3 border-gray-300 focus:border-primary-orange focus:ring-primary-orange"
      />
    </div>
  );
}
