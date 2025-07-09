
import { servicesData } from '../data/services';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from './ui/Button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function ServicesPreview() {
  const featuredServices = servicesData.slice(0, 3);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
           <h2 className="text-3xl md:text-4xl font-bold text-enviro-green">Our Services</h2>
           <p className="text-lg text-enviro-text/80 mt-4">We offer a full range of eco-friendly painting services to bring beauty and new life to your space.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredServices.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.title} className="bg-enviro-background rounded-2xl shadow-soft hover:shadow-lg transition-all duration-300 flex flex-col p-8">
                <CardHeader className="p-0">
                  <div className="w-16 h-16 bg-enviro-green/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-enviro-green" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-enviro-green mb-2">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0 flex-grow">
                  <p className="text-enviro-text/70">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link href="/test3/services">
              View All Services
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
