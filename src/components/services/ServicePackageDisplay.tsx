import type { ServicePackage } from '@/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface ServicePackageDisplayProps {
  packages: ServicePackage[];
}

export function ServicePackageDisplay({ packages }: ServicePackageDisplayProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
      {packages.map((pkg, index) => (
        <Card key={pkg.name} className={`flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 ${index === 2 ? 'border-primary border-2 scale-105 z-10 bg-primary/5' : ''}`}>
          <CardHeader className="pb-4">
            <div className="flex items-center space-x-3 mb-2">
              <pkg.icon className={`h-10 w-10 ${index === 2 ? 'text-primary' : 'text-accent'}`} />
              <CardTitle className="text-2xl font-semibold text-foreground">{pkg.name}</CardTitle>
            </div>
            <CardDescription className="text-muted-foreground h-12">{pkg.description}</CardDescription>
            <p className="text-3xl font-bold text-primary pt-2">{pkg.price}</p>
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
            <Button asChild className={`w-full mt-4 ${index === 2 ? '' : 'variant-outline'}`}>
              <Link href="/contact?package=">
                {pkg.cta} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
