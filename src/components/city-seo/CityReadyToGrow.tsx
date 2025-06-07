
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react';

interface CityReadyToGrowProps {
  headline: string;
  cityName: string;
}

export function CityReadyToGrow({ headline, cityName }: CityReadyToGrowProps) {
  return (
    <section className="py-12 md:py-16 bg-green-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">{headline}</h2>
        <p className="mb-8 max-w-xl mx-auto text-green-100">
          Partner with TRAC and let our experts craft a winning digital marketing strategy tailored for your {cityName} business.
        </p>
        <Button
          asChild
          variant="outline"
          size="lg"
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-10 py-6 text-lg border-white hover:border-white"
        >
          {/* This could link to the bottom form on the same page or the main contact page */}
          <Link href={`/city/${cityName.toLowerCase()}#contact-form`} className="flex items-center">
            <MessageSquare className="mr-2 h-6 w-6" /> GET FREE PROPOSAL { '>>' }
          </Link>
        </Button>
      </div>
    </section>
  );
}
