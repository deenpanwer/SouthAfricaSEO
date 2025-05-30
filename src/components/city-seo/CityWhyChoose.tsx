
import type { CityWhyChooseItem } from '@/types';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface CityWhyChooseProps {
  headline: string;
  intro: string;
  points: CityWhyChooseItem[];
  cityName: string;
}

export function CityWhyChoose({ headline, intro, points, cityName }: CityWhyChooseProps) {
  return (
    <section className="py-12 md:py-16 bg-gray-50 text-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">{headline}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{intro}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {points.map((point) => (
            <div key={point.title} className="text-center p-4">
              <div className="flex justify-center mb-3">
                <point.icon className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-1">{point.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
           <p className="text-gray-600 mb-4">Meet Our Team | Our Ethos and Values</p>
          <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold">
            <Link href="/about">GET TO KNOW US</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
