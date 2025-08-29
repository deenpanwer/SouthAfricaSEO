// src/app/linkinator/embed/widget/page.tsx
"use client";

import { EmbeddableWidget } from "@/components/linkinator/EmbeddableWidget";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function LinkinatorEmbedWidgetPage() {
  const searchParams = useSearchParams();
  const initialUrlFromParam = searchParams.get('initialUrl');
  const [initialUrl, setInitialUrl] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (initialUrlFromParam) {
      setInitialUrl(initialUrlFromParam);
    }
  }, [initialUrlFromParam]);

  return (
    <div className="w-full h-full flex flex-col">
      <EmbeddableWidget initialUrl={initialUrl} />
    </div>
  );
}
