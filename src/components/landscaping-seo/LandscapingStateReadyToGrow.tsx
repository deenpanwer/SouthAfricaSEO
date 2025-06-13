
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sprout } from 'lucide-react';

interface LandscapingStateReadyToGrowProps {
  headline: string;
  stateName: string;
  stateSlug: string;
}

export function LandscapingStateReadyToGrow({ headline, stateName, stateSlug }: LandscapingStateReadyToGrowProps) {
  return (
    <section className="py-12 md:py-16 bg-green-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">{headline}</h2>
        <p className="mb-8 max-w-xl mx-auto text-green-100">
          Partner with TRAC and let our SEO experts cultivate a winning strategy for your landscaping business in {stateName}.
        </p>
        <Button
          asChild
          variant="outline"
          size="lg"
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-10 py-6 text-lg border-white hover:border-white"
        >
          <Link href={`/landscaping-seo/${stateSlug}#contact-form`} className="flex items-center">
            <Sprout className="mr-2 h-6 w-6" /> GET FREE SEO PROPOSAL { '>>' }
          </Link>
        </Button>
      </div>
    </section>
  );
}
