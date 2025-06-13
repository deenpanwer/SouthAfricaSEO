
import { Metadata } from 'next';
import Link from 'next/link';
import { CITIES_DATA } from '@/lib/cityConstants';
import { LANDSCAPING_STATES_DATA } from '@/lib/landscapingStateConstants';
import { VETERINARY_STATES_DATA } from '@/lib/veterinaryStateConstants';
import { AUTO_DEALER_STATES_DATA } from '@/lib/autoDealerStateConstants';
import { AUTO_REPAIR_STATES_DATA } from '@/lib/autoRepairStateConstants';
import { SALON_STATES_DATA } from '@/lib/salonStateConstants';
import { GYM_STATES_DATA } from '@/lib/gymStateConstants';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Sprout, Stethoscope, Car, Wrench, Scissors, Dumbbell } from 'lucide-react';
import { APP_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Service Locations | ${APP_NAME}`,
  description: `Explore all cities and states where ${APP_NAME} offers expert SEO services for general businesses, landscaping, veterinary, auto dealers, auto repair, salons, and gyms. Find your local SEO expert today.`,
};

interface LocationGroupProps {
  title: string;
  description: string;
  icon: React.ElementType;
  items: { slug: string; name: string; linkPrefix: string; linkSuffix: string; }[];
  iconColor?: string;
}

const LocationGroup: React.FC<LocationGroupProps> = ({ title, description, icon: Icon, items, iconColor = "text-primary" }) => (
  <Card className="shadow-lg flex flex-col">
    <CardHeader>
      <div className="flex items-center space-x-3">
        <Icon className={`h-8 w-8 ${iconColor}`} />
        <CardTitle className="text-2xl">{title}</CardTitle>
      </div>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent className="flex-grow">
      {items.length > 0 ? (
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-3">
          {items.sort((a,b) => a.name.localeCompare(b.name)).map((item) => (
            <li key={item.slug}>
              <Link href={`/${item.linkPrefix}${item.slug}${item.linkSuffix}`} className={`text-foreground hover:${iconColor} hover:underline transition-colors`}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-muted-foreground">No locations currently listed for this service.</p>
      )}
    </CardContent>
  </Card>
);

export default function LocationsPage() {
  const locationGroups: LocationGroupProps[] = [
    {
      title: "City SEO Service Locations",
      description: "Targeted SEO strategies for businesses in major metropolitan areas.",
      icon: MapPin,
      items: CITIES_DATA.map(city => ({ slug: city.slug, name: city.cityName, linkPrefix: "", linkSuffix: "-seo-service-agency" })),
      iconColor: "text-primary",
    },
    {
      title: "Landscaping SEO Service States",
      description: "Specialized SEO to help landscaping businesses grow across these states.",
      icon: Sprout,
      items: LANDSCAPING_STATES_DATA.map(state => ({ slug: state.slug, name: state.stateName, linkPrefix: "", linkSuffix: "-landscaping-seo-company" })),
      iconColor: "text-green-600",
    },
    {
      title: "Veterinary SEO Service States",
      description: "Helping veterinary clinics attract more pet owners in these states.",
      icon: Stethoscope,
      items: VETERINARY_STATES_DATA.map(state => ({ slug: state.slug, name: state.stateName, linkPrefix: "veterinary-seo/", linkSuffix: "-veterinary-seo-clinic" })), // Note linkPrefix
      iconColor: "text-blue-600",
    },
    {
      title: "Auto Dealer SEO Service States",
      description: "Driving more car buyers to dealerships in these states.",
      icon: Car,
      items: AUTO_DEALER_STATES_DATA.map(state => ({ slug: state.slug, name: state.stateName, linkPrefix: "auto-dealer-seo/", linkSuffix: "-auto-dealer-seo-marketing" })),
      iconColor: "text-red-600",
    },
    {
      title: "Auto Repair SEO Service States",
      description: "Connecting auto repair shops with customers needing service in these states.",
      icon: Wrench,
      items: AUTO_REPAIR_STATES_DATA.map(state => ({ slug: state.slug, name: state.stateName, linkPrefix: "auto-repair-seo/", linkSuffix: "-auto-repair-seo-shop" })),
      iconColor: "text-orange-600",
    },
    {
      title: "Salon & Spa SEO Service States",
      description: "Boosting bookings for salons and spas across these states.",
      icon: Scissors,
      items: SALON_STATES_DATA.map(state => ({ slug: state.slug, name: state.stateName, linkPrefix: "salon-seo/", linkSuffix: "-salon-seo-services" })),
      iconColor: "text-pink-600",
    },
    {
      title: "Gym & Fitness SEO Service States",
      description: "Increasing memberships for gyms and fitness centers in these states.",
      icon: Dumbbell,
      items: GYM_STATES_DATA.map(state => ({ slug: state.slug, name: state.stateName, linkPrefix: "gym-seo/", linkSuffix: "-gym-seo-strategies" })),
      iconColor: "text-purple-600",
    },
  ];


  return (
    <div className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <section className="text-center mb-12 md:mb-16">
          <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-6">
            Our Service Locations
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            {APP_NAME} provides expert SEO services across a wide range of cities and states for general businesses and specialized industries. Find your targeted area below.
          </p>
        </section>

        <div className="grid lg:grid-cols-2 gap-8 xl:gap-12">
          {locationGroups.map(group => (
            <LocationGroup key={group.title} {...group} />
          ))}
        </div>
      </div>
    </div>
  );
}
