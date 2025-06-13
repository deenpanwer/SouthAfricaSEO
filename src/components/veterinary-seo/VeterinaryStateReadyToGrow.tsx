
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Stethoscope } from 'lucide-react'; // Icon suitable for veterinary

interface VeterinaryStateReadyToGrowProps {
  headline: string;
  stateName: string;
  stateSlug: string;
}

export function VeterinaryStateReadyToGrow({ headline, stateName, stateSlug }: VeterinaryStateReadyToGrowProps) {
  return (
    <section className="py-12 md:py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">{headline.replace('[StateName]', stateName)}</h2>
        <p className="mb-8 max-w-xl mx-auto text-primary-foreground/90">
          Partner with TRAC and let our SEO experts craft a winning strategy to attract more pet owners to your {stateName} veterinary clinic.
        </p>
        <Button
          asChild
          variant="secondary" // Or a suitable variant for a primary background
          size="lg"
          className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-10 py-6 text-lg"
        >
          <Link href={`/veterinary-seo/${stateSlug}#contact-form`} className="flex items-center">
            <Stethoscope className="mr-2 h-6 w-6" /> GET FREE SEO PROPOSAL { '>>' }
          </Link>
        </Button>
      </div>
    </section>
  );
}
