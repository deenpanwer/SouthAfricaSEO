
"use client";

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useFormContext } from 'react-hook-form'; // If needed for deep integration
import { ContactForm } from './ContactForm';
import { SERVICE_PACKAGES } from '@/lib/constants.tsx';
import type { ContactFormValues } from '@/types';

export const GENERAL_INQUIRY_VALUE = "general_inquiry_not_specified";
export const CUSTOM_SOLUTION_VALUE = "Custom Solution";


// This wrapper can handle client-side logic like reading URL params
// without making ContactForm itself a full "use client" boundary if it didn't need to be.
// However, ContactForm is already "use client" due to react-hook-form.
// So this wrapper primarily helps with Suspense or specific client hooks if needed.

export function ContactFormWrapper() {
  const searchParams = useSearchParams();
  const serviceFromQuery = searchParams.get('package'); // Match param from ServicePackageDisplay
  
  let preselectedServiceActualValue = GENERAL_INQUIRY_VALUE;

  if (serviceFromQuery) {
    if (SERVICE_PACKAGES.some(pkg => pkg.name === serviceFromQuery)) {
      preselectedServiceActualValue = serviceFromQuery;
    } else if (serviceFromQuery === CUSTOM_SOLUTION_VALUE) {
      // Allows "Custom Solution" to be passed directly if needed, though pkg.name should usually cover it
      preselectedServiceActualValue = CUSTOM_SOLUTION_VALUE;
    }
    // If serviceFromQuery is present but doesn't match known packages or "Custom Solution",
    // it will default to GENERAL_INQUIRY_VALUE.
    // Alternatively, you could map unknown query params to "Custom Solution" here if desired:
    // else { preselectedServiceActualValue = CUSTOM_SOLUTION_VALUE; }
  }


  return (
    // Pass the determined preselectedService value to ContactForm
    // ContactForm's own useEffect for searchParams is removed as this wrapper handles it.
    <ContactForm key={preselectedServiceActualValue} preselectedService={preselectedServiceActualValue} />
  );
}

