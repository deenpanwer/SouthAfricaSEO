"use client";

import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useFormContext } from 'react-hook-form'; // If needed for deep integration
import { ContactForm } from './ContactForm';
import { SERVICE_PACKAGE_GROUPS } from '@/lib/packages';
import type { ContactFormValues } from '@/types';
import { ContactFormSkeleton } from './ContactFormSkeleton';

export const GENERAL_INQUIRY_VALUE = "general_inquiry_not_specified";
export const CUSTOM_SOLUTION_VALUE = "Custom Solution";


// This wrapper can handle client-side logic like reading URL params
// without making ContactForm itself a full "use client" boundary if it didn't need to be.
// However, ContactForm is already "use client" due to react-hook-form.
// So this wrapper primarily helps with Suspense or specific client hooks if needed.

export function ContactFormWrapper() {
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const packageFromQuery = searchParams.get('package'); // Match param from ServicePackageDisplay
  
  let preselectedServiceActualValue = GENERAL_INQUIRY_VALUE;

  const allPackages = SERVICE_PACKAGE_GROUPS.flatMap(group => group.packages);

  if (packageFromQuery) {
    if (allPackages.some(pkg => pkg.name === packageFromQuery)) {
      preselectedServiceActualValue = packageFromQuery;
    } else if (packageFromQuery === CUSTOM_SOLUTION_VALUE) {
      preselectedServiceActualValue = CUSTOM_SOLUTION_VALUE;
    } else if (packageFromQuery === '3-weeks-free') {
      preselectedServiceActualValue = '3 Weeks Free Trial';
    } else if (packageFromQuery === 'free-website-offer') {
      preselectedServiceActualValue = 'Free Website Offer';
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 100); // Simulate a loading time

    return () => clearTimeout(timer);
  }, []);


  if (loading) {
    return <ContactFormSkeleton />;
  }


  return (
    // Pass the determined preselectedService value to ContactForm
    // ContactForm's own useEffect for searchParams is removed as this wrapper handles it.
    <ContactForm key={preselectedServiceActualValue} preselectedService={preselectedServiceActualValue} />
  );
}
