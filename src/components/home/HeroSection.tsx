import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { APP_NAME, HERO_HEADLINE, COMPANY_MOTTO } from '@/lib/constants.tsx';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6">
              {HERO_HEADLINE}
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl mx-auto md:mx-0">
              {COMPANY_MOTTO}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
              <Button size="lg" asChild className="shadow-lg hover:shadow-xl transition-shadow">
                <Link href="/services">
                  View Service Packages <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="shadow-lg hover:shadow-xl transition-shadow">
                <Link href="/contact">
                  Contact Us Today
                </Link>
              </Button>
            </div>
            <div className="text-sm text-muted-foreground space-y-2">
              <p className="flex items-center justify-center md:justify-start">
                <CheckCircle className="h-4 w-4 text-primary mr-2" />
                Proven strategies for the South African market.
              </p>
              <p className="flex items-center justify-center md:justify-start">
                <CheckCircle className="h-4 w-4 text-primary mr-2" />
                Dedicated to your business growth.
              </p>
            </div>
          </div>

          {/* Image Content */}
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="https://placehold.co/800x600.png"
              alt="SEO Growth Chart for South African Business"
              data-ai-hint="business growth chart"
              layout="fill"
              objectFit="cover"
              priority
            />
             <div className="absolute inset-0 bg-primary/20"></div>
          </div>
        </div>
        
        {/* Brief Company Intro */}
        <div className="mt-16 md:mt-24 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Your Trusted SEO Partner in South Africa
          </h2>
          <p className="text-muted-foreground">
            At {APP_NAME}, we're not just another SEO agency. We are specialists in navigating the unique digital landscape of South Africa. Our mission is to empower local businesses like yours to achieve top search engine rankings, attract high-quality leads, and significantly boost your return on investment. With a deep understanding of local market trends and consumer behavior, we craft bespoke SEO strategies that deliver real, measurable results.
          </p>
        </div>
      </div>
    </section>
  );
}
