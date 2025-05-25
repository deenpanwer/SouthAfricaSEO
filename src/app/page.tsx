import { HeroSection } from '@/components/home/HeroSection';
import { ClientLogosSection } from '@/components/home/ClientLogosSection'; // New
import { PartneredWithSection } from '@/components/home/PartneredWithSection'; // New
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { BenefitsSection } from '@/components/home/BenefitsSection';
import { StatsSection } from '@/components/home/StatsSection'; // New
import { ImportanceSection } from '@/components/home/ImportanceSection';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { APP_NAME } from '@/lib/constants';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PartneredWithSection />
      <ClientLogosSection />
      <BenefitsSection />
      <StatsSection />
      <TestimonialsSection />
      <ImportanceSection />

      {/* Final Call to Action Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Amplify Your Business Performance?
          </h2>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how {APP_NAME} can help your business achieve its online goals. Get your free, no-obligation consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild className="shadow-lg hover:shadow-xl transition-shadow">
              <Link href="/services">
                Explore Our Service Plans
              </Link>
            </Button>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-xl transition-shadow" asChild>
              <Link href="/contact">
                Request a Free Quote
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}