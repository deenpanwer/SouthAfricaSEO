
import type { CityServiceItem } from '@/types';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'; // Can reuse ShadCN card for structure

interface CityServicesGridProps {
  headline: string;
  subheadline: string;
  services: CityServiceItem[];
}

export function CityServicesGrid({ headline, subheadline, services }: CityServicesGridProps) {
  return (
    <section className="py-12 md:py-16 bg-white text-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">{headline}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{subheadline}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link href={service.url} key={service.title} className="block hover:shadow-lg transition-shadow duration-300 rounded-lg">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <service.icon className="h-8 w-8 text-orange-500" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
