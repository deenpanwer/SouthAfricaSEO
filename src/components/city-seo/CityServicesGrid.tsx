import type { CityServiceItem } from '@/types';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'; // Re-import Card components

interface CityServicesGridProps {
  headline: string;
  subheadline: string;
  services: CityServiceItem[];
}

export function CityServicesGrid({ headline, subheadline, services }: CityServicesGridProps) {
  return (
    <section className="py-12 md:py-16 bg-white text-gray-800"> {/* Removed background pattern classes */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">{headline}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{subheadline}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            service.url ? (
              <Link href={service.url} key={service.title} className="block hover:-translate-y-2 transition-transform duration-300 rounded-lg">
                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0 p-3 rounded-full bg-green-100">
                        {service.icon && <service.icon className="h-8 w-8 text-orange-500" />}
                      </div>
                      {/* Title for linked cards: white text, orange on hover */}
                      <CardTitle className="text-white hover:text-orange-500">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
                    {/* Removed "Learn More" span */}
                  </CardContent>
                </Card>
              </Link>
            ) : (
              <div key={service.title} className="block hover:-translate-y-2 transition-transform duration-300 rounded-lg"> {/* Animation on all cards */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0 p-3 rounded-full bg-green-100">
                        {service.icon && <service.icon className="h-8 w-8 text-orange-500" />}
                      </div>
                      {/* Title for unlinked cards: default text-gray-800, orange on hover */}
                      <CardTitle className="text-gray-800 hover:text-orange-500">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
                    {/* Removed "Learn More" span */}
                  </CardContent>
                </Card>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
}