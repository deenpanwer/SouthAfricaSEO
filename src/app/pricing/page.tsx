
import { Metadata } from 'next';
import { APP_NAME } from '@/lib/constants.tsx';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { BarChart, CheckSquare, MessageCircle } from 'lucide-react';
import { ServicePackageDisplay } from '@/components/services/ServicePackageDisplay';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { SERVICE_PACKAGE_GROUPS, SPECIAL_OFFER_PACKAGE } from '@/lib/packages';
import { PricingAccordions } from './components/PricingAccordions';

export const metadata: Metadata = {
  title: 'Affordable SEO, PPC & Web Design Plans | TRAC',
  description: `Explore transparent, affordable pricing for TRAC's expert digital marketing services. Find the perfect SEO, PPC, or web design plan for your US business and start growing today.`,
};

export default function PricingPage() {
  const breadcrumbItems = [
    { name: 'TRAC', href: '/' },
    { name: 'Pricing & Plans', href: '/pricing' },
  ];

  const serviceSchemas = SERVICE_PACKAGE_GROUPS.flatMap(group =>
    group.packages.map(pkg => ({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": pkg.name,
      "description": pkg.description,
      "serviceType": group.title.replace(" Packages", ""), // e.g., "SEO" from "SEO Packages"
      "provider": {
        "@type": "Organization",
        "name": APP_NAME,
        "url": process.env.WEBSITE_URL || 'https://www.traconomics.com',
      },
      "offers": {
        "@type": "Offer",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": pkg.price.replace(/[^0-9.]/g, ''), // Extract numeric part of price
          "priceCurrency": "USD",
          "valueAddedTaxIncluded": false,
        },
        "url": `${process.env.WEBSITE_URL || 'https://www.traconomics.com'}/pricing`, // Link to pricing page
        ...(pkg.freeTrialOffer && {
          "additionalProperty": {
            "@type": "PropertyValue",
            "name": "Free Trial Offer",
            "value": pkg.freeTrialOffer
          }
        })
      },
    }))
  );

  return (
    <div className="py-12 md:py-20 bg-gradient-to-b from-background to-secondary/20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchemas) }}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={breadcrumbItems} />
        <section className="text-center mb-16 md:mb-20">
          <BarChart className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-6">
            Affordable Digital Marketing Plans for US Businesses
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Unlock growth with transparent, value-driven pricing. Choose a plan that scales with your business goals, designed for real results across the United States.
          </p>
        </section>

        {/* New: First 3 Weeks Free Offer Section */}
        <section className="mb-16 md:mb-20 bg-gradient-to-r from-green-500 to-green-700 text-white p-8 rounded-lg shadow-xl">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold mb-4">
              Start Your Growth Journey: First 3 Weeks FREE!
            </h2>
            <p className="text-xl mb-6 max-w-3xl mx-auto">
              Experience our top-tier SEO, PPC, and Social Media services with no commitment for the first three weeks. See the results for yourself!
            </p>
            <Button
              size="lg"
              asChild
              className="bg-white text-green-700 hover:bg-gray-100 hover:text-green-800 transition-colors duration-300"
            >
              <Link href="/contact?offer=3-weeks-free">Claim Your Free Trial Now</Link>
            </Button>
          </div>
        </section>

        {/* Special Offer Section (retained, but can be removed if redundant) */}
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
          <PricingAccordions />
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
