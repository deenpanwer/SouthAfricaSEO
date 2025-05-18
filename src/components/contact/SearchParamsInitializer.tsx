"use client";

import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { SERVICE_PACKAGES } from '@/lib/constants';

interface SearchParamsInitializerProps {
  onParamsInitialized: (preselectedPackage: string) => void;
}

export function SearchParamsInitializer({ onParamsInitialized }: SearchParamsInitializerProps) {
  const searchParams = useSearchParams();

  useEffect(() => {
    const serviceFromQuery = searchParams.get('package');
    const preselectedPackage = serviceFromQuery
      ? SERVICE_PACKAGES.find(pkg => pkg.name === serviceFromQuery)?.name || "General Inquiry"
      : SERVICE_PACKAGES[0]?.name || "General Inquiry";

    onParamsInitialized(preselectedPackage);
  }, [searchParams, onParamsInitialized]);

  // This component doesn't render anything visually
  return null;
}