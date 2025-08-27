
import { Metadata } from 'next';
import {
  SERVICE_PACKAGE_GROUPS,
  APP_NAME,
  SPECIAL_OFFER_PACKAGE,
} from '@/lib/constants.tsx';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { BarChart, CheckSquare, MessageCircle, Star } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ServicePackageDisplay } from '@/components/services/ServicePackageDisplay';
import { Breadcrumb } from '@/components/layout/Breadcrumb';

export const metadata: Metadata = {
  title: 'Pricing & Plans',
  description: `Explore ${APP_NAME}'s tailored pricing plans for SEO, PPC, Social Media, and more. Find the perfect fit for your growth.`,
};

export default function PricingPage() {
  const breadcrumbItems = [
    { name: 'TRAC', href: '/' },
    { name: 'Pricing & Plans', href: '/pricing' },
  ];

  return (
    <div className="py-12 md:py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={breadcrumbItems} />
        <section className="text-center mb-16 md:mb-20">
          <BarChart className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-6">
            Transparent Pricing for Real Results
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose a plan that scales with your business. No hidden fees, no
            long-term contracts—just clear, value-driven pricing designed for
            your growth.
          </p>
        </section>

        {/* Special Offer Section */}
        <section className="mb-16 md:mb-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground">
              Limited Time: Free Website Offer
            </h2>
            <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
              Get a professional, conversion-focused website built by our team,
              completely free when you sign up for any Pro or Enterprise plan.
            </p>
          </div>
          <div className="flex justify-center">
            <ServicePackageDisplay packages={[SPECIAL_OFFER_PACKAGE]} />
          </div>
        </section>

        {/* Core Packages Section */}
        <section className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">
              Core Growth Packages
            </h2>
            <p className="mt-2 text-muted-foreground">
              Find the right plan for each of our specialized services.
            </p>
          </div>
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="SEO Packages"
          >
            {SERVICE_PACKAGE_GROUPS.map((group) => (
              <AccordionItem key={group.title} value={group.title}>
                <AccordionTrigger className="text-2xl font-semibold hover:no-underline">
                  <div className="flex items-center gap-3">
                    <group.icon className="h-8 w-8 text-primary" />
                    {group.title}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-6">
                  <p className="text-center text-muted-foreground mb-8">
                    {group.description}
                  </p>
                  <ServicePackageDisplay packages={group.packages} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <section className="mt-16 md:mt-20 p-8 bg-muted rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">
            Why Choose Our Service Plans?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <CheckSquare className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Tailored for Your Market
              </h3>
              <p className="text-muted-foreground">
                Strategies specifically designed for unique market dynamics and
                consumer behavior.
              </p>
            </div>
            <div>
              <BarChart className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Transparent Reporting
              </h3>
              <p className="text-muted-foreground">
                Clear, detailed monthly reports so you can track your progress
                and ROI effectively.
              </p>
            </div>
            <div>
              <MessageCircle className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Dedicated Support
              </h3>
              <p className="text-muted-foreground">
                Expert guidance and support from our experienced professionals
                throughout your engagement.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Not Sure Which Plan is Right for You?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Let's talk! We can help you choose the best plan for your business
            goals or create a custom solution.
          </p>
          <Button
            size="lg"
            asChild
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            <Link href="/contact">Get a Free Consultation</Link>
          </Button>
        </section>
      </div>
    </div>
  );
}
