
import { Metadata } from 'next';
import Link from 'next/link';
import { CITIES_DATA } from '@/lib/cityConstants';
import { LANDSCAPING_STATES_DATA } from '@/lib/landscapingStateConstants';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Sprout } from 'lucide-react';
import { APP_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Service Locations | ${APP_NAME}`,
  description: `Explore all cities and states where ${APP_NAME} offers expert SEO services for general businesses and landscaping companies. Find your local SEO expert today.`,
};

export default function LocationsPage() {
  return (
    <div className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <section className="text-center mb-12 md:mb-16">
          <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-6">
            Our Service Locations
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            {APP_NAME} provides expert SEO services across a wide range of cities for general businesses and specialized landscaping SEO for various states. Find your targeted area below.
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-12">
          <Card className="shadow-lg">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <MapPin className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl">City SEO Service Locations</CardTitle>
              </div>
              <CardDescription>Targeted SEO strategies for businesses in major metropolitan areas.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {CITIES_DATA.sort((a,b) => a.cityName.localeCompare(b.cityName)).map((city) => (
                  <li key={city.slug}>
                    <Link href={`/${city.slug}-seo-service-agency`} className="text-foreground hover:text-primary hover:underline transition-colors">
                      {city.cityName}
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Sprout className="h-8 w-8 text-green-600" />
                <CardTitle className="text-2xl">Landscaping SEO Service States</CardTitle>
              </div>
              <CardDescription>Specialized SEO to help landscaping businesses grow across these states.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {LANDSCAPING_STATES_DATA.sort((a,b) => a.stateName.localeCompare(b.stateName)).map((state) => (
                  <li key={state.slug}>
                    <Link href={`/${state.slug}-landscaping-seo-company`} className="text-foreground hover:text-green-600 hover:underline transition-colors">
                      {state.stateName}
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
    