import type { ServicePackage } from '@/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight, Badge } from 'lucide-react';
import Link from 'next/link';

interface ServicePackageDisplayProps {
  packages: ServicePackage[];
}

export function ServicePackageDisplay({ packages }: ServicePackageDisplayProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-stretch">
      {packages.map((pkg, index) => (
        <Card key={pkg.name} className={`flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 ${pkg.isSpecialOffer ? 'border-primary border-2 ring-4 ring-primary/20 bg-primary/5' : ''}`}>
          <CardHeader className="pb-4 relative">
            {pkg.isSpecialOffer && (
              <div className="absolute top-0 right-0 -mt-3 -mr-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-accent text-accent-foreground shadow-lg">
                    Limited Time Offer
                  </span>
              </div>
            )}
            <div className="flex items-center space-x-3 mb-2">
              <pkg.icon className={`h-10 w-10 ${pkg.isSpecialOffer ? 'text-primary' : 'text-accent'}`} />
              <CardTitle className="text-2xl font-semibold text-foreground">{pkg.name}</CardTitle>
            </div>
            <CardDescription className="text-muted-foreground h-12">{pkg.description}</CardDescription>
            <div className="flex items-baseline space-x-2 pt-2">
              {pkg.originalPrice && <del className="text-2xl font-semibold text-muted-foreground/70">{pkg.originalPrice}</del>}
              <p className="text-3xl font-bold text-primary">{pkg.price}</p>
            </div>
          </CardHeader>
          <CardContent className="flex-grow">
            <ul className="space-y-3">
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
          <CardFooter>
            <Button asChild className={`w-full mt-4 ${pkg.isSpecialOffer ? '' : 'variant-outline'}`}>
              <Link href={`/contact?package=${encodeURIComponent(pkg.name)}`}>
                {pkg.cta} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
