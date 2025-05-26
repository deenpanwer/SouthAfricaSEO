
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, TrendingUp, Target as TargetIcon } from 'lucide-react';
import { APP_NAME, HERO_HEADLINE, COMPANY_MOTTO } from '@/lib/constants.tsx';
import Image from 'next/image';
import { TracLeadForm } from './TracLeadForm'; // Import the new lead form

export function HeroSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-background via-secondary/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground !leading-tight mb-6 font-poppins">
              {HERO_HEADLINE}
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              {COMPANY_MOTTO}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <Button size="lg" asChild className="shadow-lg hover:shadow-xl transition-shadow bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/services">
                  Explore Our Solutions <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="shadow-lg hover:shadow-xl transition-shadow border-primary text-primary hover:bg-primary/10">
                <Link href="/about">
                  Learn More About Us
                </Link>
              </Button>
            </div>
             <div className="text-sm text-muted-foreground space-y-2 max-w-md mx-auto lg:mx-0">
              <p className="flex items-center justify-center lg:justify-start">
                <TrendingUp className="h-5 w-5 text-accent mr-2 flex-shrink-0" />
                Drive measurable growth and ROI.
              </p>
              <p className="flex items-center justify-center lg:justify-start">
                <TargetIcon className="h-5 w-5 text-accent mr-2 flex-shrink-0" />
                Tailored strategies for your unique business needs.
              </p>
              <p className="flex items-center justify-center lg:justify-start">
                <CheckCircle className="h-5 w-5 text-accent mr-2 flex-shrink-0" />
                Expert consultants ready to assist you.
              </p>
            </div>
          </div>

          {/* Lead Form Content */}
          <div className="w-full">
            <TracLeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}
