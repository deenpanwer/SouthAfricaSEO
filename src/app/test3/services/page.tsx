
import { servicesData } from '../data/services';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '../components/ui/Button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Explore EnviroPainting\'s full range of eco-friendly painting and finishing services, from interior and exterior painting to cabinet refinishing and wallpaper installation.',
};

export default function ServicesPage() {
  return (
    <div className="bg-enviro-background text-enviro-text">
      <div className="container mx-auto px-6 py-16 md:py-24">
        
        <section className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-enviro-green mb-4">Our Painting Services</h1>
          <p className="text-lg text-enviro-text/80">
            We offer a comprehensive range of professional, eco-friendly painting services to bring your vision to life. Quality craftsmanship and sustainable practices are at the heart of everything we do.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.title} className="bg-white rounded-2xl shadow-soft hover:shadow-lg transition-all duration-300 flex flex-col p-8">
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
        </section>

        <section className="mt-20 text-center bg-enviro-green text-white py-16 px-8 rounded-2xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Let's discuss how we can transform your space with a fresh, eco-friendly coat of paint.
          </p>
          <Button variant="secondary" asChild>
            <Link href="/test3/contact">
              Get Your Free Quote <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </section>
      </div>
    </div>
  );
}
