import type { ServicePackage } from '@/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight, Badge } from 'lucide-react';
import Link from 'next/link';
import { toSlug } from '@/lib/constants'; // Import toSlug utility

interface ServicePackageDisplayProps {
  packages: ServicePackage[];
  groupTitle?: string; // New prop
}

export function ServicePackageDisplay({ packages, groupTitle }: ServicePackageDisplayProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
      {packages.map((pkg, index) => (
        <Card key={pkg.name} className={`flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 ${pkg.isSpecialOffer ? 'border-primary border-2 ring-4 ring-primary/20 bg-primary/5' : ''}`}>
          <CardHeader className="p-6 pb-4 relative"> {/* Increased padding */}
            {pkg.isSpecialOffer && (
              <div className="absolute top-0 right-0 -mt-3 -mr-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-accent text-accent-foreground shadow-lg">
                    Limited Time Offer
                  </span>
              </div>
            )}
            {pkg.freeTrialOffer && (
              <div className="absolute top-0 left-0 -mt-3 -ml-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-green-500 text-white shadow-lg">
                    {pkg.freeTrialOffer}
                  </span>
              </div>
            )}
            <div className="flex items-center space-x-3 mb-3"> {/* Adjusted margin */}
              <pkg.icon className={`h-10 w-10 ${pkg.isSpecialOffer ? 'text-primary' : 'text-accent'}`} />
              <CardTitle className="text-2xl font-semibold text-foreground">{pkg.name}</CardTitle>
            </div>
            <CardDescription className="text-muted-foreground h-12 mb-4">{pkg.description}</CardDescription> {/* Added margin */}
            <div className="flex items-baseline space-x-2 pt-2">
              {pkg.originalPrice && <del className="text-2xl font-semibold text-muted-foreground/70">{pkg.originalPrice}</del>}
              <p className="text-3xl font-bold text-primary">{pkg.price}</p>
            </div>
          </CardHeader>
          <CardContent className="flex-grow p-6 pt-0"> {/* Adjusted padding */}
            <ul className="space-y-3"> {/* Consistent spacing */}
              {pkg.features.map((feature) => (
                <li key={feature.name} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-foreground/90">{feature.name}:</span>
                    <span className="text-sm text-muted-foreground ml-1">{feature.description}</span>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter className="p-6 pt-4 flex-col"> {/* Adjusted pt-0 to pt-4 for better spacing from content */}
            <div className="flex flex-col w-full gap-2"> {/* Changed mt-2 to gap-2 for consistent spacing */}
              <Button className={`w-full ${pkg.isSpecialOffer ? '' : 'variant-outline'}`}>
                <Link href={`/contact?package=${encodeURIComponent(pkg.name)}`} className="flex items-center justify-center"> {/* Added flex and alignment classes */}
                  {pkg.cta} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" className="w-full text-primary hover:bg-primary/10">
                <Link href={getServicePageUrl(pkg.name, groupTitle)} className="flex items-center justify-center">
                  More Details <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

const getServicePageUrl = (packageName: string, groupTitle?: string) => {
  const baseServicePageMap: { [key: string]: string } = {
    "SEO Packages": "/services/seo",
    "PPC Management Packages": "/services/ppc",
    "Social Media Packages": "/services/social-media-marketing",
    "Content Writing Packages": "/services/content-writing",
    "Email Marketing Packages": "/services/email-marketing",
    "eCommerce Optimization Packages": "/services/ecommerce-optimization",
    "Technical SEO Packages": "/services/technical-seo",
    "On-Page SEO Packages": "/services/on-page-seo",
    "Off-Page SEO & Link Building Packages": "/services/off-page-seo",
    "Schema Markup Packages": "/services/schema-markup",
    "Local SEO Packages": "/services/local-seo",
    "SEO Audit Packages": "/services/seo-audits",
    "Content Marketing for SEO Packages": "/services/content-marketing-for-seo",
  };

  if (groupTitle && baseServicePageMap[groupTitle]) {
    return baseServicePageMap[groupTitle];
  }

  // Fallback for any other case, or if groupTitle is undefined
  // This should ideally not be hit if all groups are correctly mapped.
  // For SPECIAL_OFFER_PACKAGE, its Link href is handled separately in page.tsx.
  return '/services'; // Default to general services page
};
