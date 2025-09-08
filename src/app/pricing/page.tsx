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
  title: 'Growth Marketing for Startups | TRAC',
  description: `Fuel your startup's growth with TRAC's data-driven marketing services. We help you acquire users, increase conversions, and achieve scalable growth.`,
};

// Helper function to map group titles to service page URLs
const getServicePageUrl = (groupTitle: string): string => {
  const servicePageMap: { [key: string]: string } = {
    "SEO Packages": "/services/seo",
    "Technical SEO Packages": "/services/technical-seo",
    "On-Page SEO Packages": "/services/on-page-seo",
    "Off-Page SEO & Link Building Packages": "/services/off-page-seo",
    "Schema Markup Packages": "/services/schema-markup",
    "Local SEO Packages": "/services/local-seo",
    "SEO Audit Packages": "/services/seo-audits",
    "Content Marketing for SEO Packages": "/services/content-marketing-for-seo",
    "PPC Management Packages": "/services/ppc",
    "Social Media Packages": "/services/social-media-marketing",
    "Content Writing Packages": "/services/content-writing",
    "Email Marketing Packages": "/services/email-marketing",
    "eCommerce Optimization Packages": "/services/ecommerce-optimization",
  };
  return servicePageMap[groupTitle] || '/services'; // Default to general services page if not found
};

export default function PricingPage() {
  const breadcrumbItems = [
    { name: 'TRAC', href: '/' },
    { name: 'Growth Services', href: '/services' },
  ];

  const offerCatalogSchema = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    "name": "Digital Marketing Service Plans",
    "description": `Explore transparent, affordable pricing for TRAC's expert digital marketing services. Find the perfect SEO, PPC, or web design plan for your US business and start growing today.`,
    "url": `${process.env.WEBSITE_URL || 'https://www.traconomics.com'}/pricing`,
    "itemListElement": SERVICE_PACKAGE_GROUPS.flatMap(group =>
      group.packages.flatMap(pkg => {
        const priceNumeric = pkg.price.replace(/[^0-9.]/g, '');
        const servicePageUrl = getServicePageUrl(group.title);

        // Only include offers with numeric prices
        if (!priceNumeric) return []; 

        return {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": pkg.name,
            "url": `${process.env.WEBSITE_URL || 'https://www.traconomics.com'}${servicePageUrl}`,
          },
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": priceNumeric,
            "priceCurrency": "USD",
            "valueAddedTaxIncluded": false,
          },
          "url": `${process.env.WEBSITE_URL || 'https://www.traconomics.com'}/pricing`, // Link to pricing page
        };
      })
    ),
  };

  return (
    <div className="py-12 md:py-20 bg-gradient-to-b from-background to-secondary/20">
      {/* <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerCatalogSchema) }}
      /> */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={breadcrumbItems} />
        <section className="text-center mb-16 md:mb-20">
          <BarChart className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-6">
            Growth Marketing for Ambitious Startups
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            We partner with startups to build and execute marketing strategies that drive user acquisition, engagement, and retention. Let's build your growth engine.
          </p>
        </section>

        {/* New: First 3 Weeks Free Offer Section */}
        {/* <section className="mb-16 md:mb-20 bg-gradient-to-r from-green-500 to-green-700 text-white p-8 rounded-lg shadow-xl">
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
              <Link href="/contact?package=3-weeks-free">Claim Your Free Trial Now</Link>
            </Button>
          </div>
        </section> */}

        {/* Special Offer Section (retained, but can be removed if redundant) */}
        <section className="mb-16 md:mb-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground">
              Startup Growth Kit: Free Landing Page Audit
            </h2>
            <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
              Get a free, actionable audit of your most critical landing page. We'll identify opportunities to boost your conversion rates and accelerate growth.
            </p>
          </div>
          {/* <div className="flex justify-center">
            <ServicePackageDisplay packages={[SPECIAL_OFFER_PACKAGE]} />
          </div> */}
        </section>

        {/* Core Packages Section */}
        <section className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">
              Our Growth Marketing Services
            </h2>
            <p className="mt-2 text-muted-foreground">
              Find the right growth lever for your startup, from user acquisition to conversion rate optimization.
            </p>
          </div>
          {/* <PricingAccordions /> */}
        </section>

        <section className="mt-16 md:mt-20 p-8 bg-muted rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">
            Why Partner with TRAC for Growth?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <CheckSquare className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Data-Driven Strategies
              </h3>
              <p className="text-muted-foreground">
                We make decisions based on data, not guesses. We track, measure, and optimize for what matters most: your growth.
              </p>
            </div>
            <div>
              <BarChart className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Lean & Agile Approach
              </h3>
              <p className="text-muted-foreground">
                We work in sprints, iterating quickly to find what works. No long-term contracts, just a focus on results.
              </p>
            </div>
            <div>
              <MessageCircle className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Your Extended Growth Team
              </h3>
              <p className="text-muted-foreground">
                We integrate with your team, acting as a dedicated partner in your startup's journey.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Ready to Scale Your Startup?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Book a free strategy call with our growth experts. We'll discuss your goals and build a custom growth plan for your startup.
          </p>
          <Button
            size="lg"
            asChild
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            <Link href="/contact">Book a Free Strategy Call</Link>
          </Button>
        </section>
      </div>
    </div>
  );
}