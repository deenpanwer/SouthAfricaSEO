
"use client";

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useFormContext } from 'react-hook-form'; // If needed for deep integration
import { ContactForm } from './ContactForm';
import { SERVICE_PACKAGES } from '@/lib/constants.tsx';
import type { ContactFormValues } from '@/types';


// This wrapper can handle client-side logic like reading URL params
// without making ContactForm itself a full "use client" boundary if it didn't need to be.
// However, ContactForm is already "use client" due to react-hook-form.
// So this wrapper primarily helps with Suspense or specific client hooks if needed.

export function ContactFormWrapper() {
  const searchParams = useSearchParams();
  const serviceFromQuery = searchParams.get('package'); // Match param from ServicePackageDisplay
  
  // Determine preselectedService. This logic could be more complex.
  // For now, if 'package' param exists and matches a known package name, use it.
  // Otherwise, default or use a generic "Custom Solution" if param is present but not matched.
  let preselectedServiceValue = "General Inquiry";
  if (serviceFromQuery) {
    if (SERVICE_PACKAGES.some(pkg => pkg.name === serviceFromQuery)) {
      preselectedServiceValue = serviceFromQuery;
    } else {
      // If a package name is in query but not an exact match from list,
      // it might imply interest in a custom solution or a typo.
      // Defaulting to "Custom Solution" could be an option.
      // For now, let's keep it simple and let ContactForm default or handle it.
      // Or, explicitly set to Custom if param exists but no match
      preselectedServiceValue = "Custom Solution";
    }
  }


  return (
    // Pass the determined preselectedService value to ContactForm
    // ContactForm's own useEffect for searchParams is removed as this wrapper handles it.
    <ContactForm key={preselectedServiceValue} preselectedService={preselectedServiceValue} />
  );
}
