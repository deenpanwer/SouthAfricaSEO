
import { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ShoppingCart, BarChart2, Lightbulb } from 'lucide-react';
import { APP_NAME } from '@/lib/constants';
import { Breadcrumb } from '@/components/layout/Breadcrumb';

// Placeholder for ShoppingBagIcon if not available in lucide-react default export
const ShoppingBagIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
    <line x1="3" y1="6" x2="21" y2="6"/>
    <path d="M16 10a4 4 0 0 1-8 0"/>
  </svg>
);

export const metadata: Metadata = {
  title: `eCommerce Optimization Services | ${APP_NAME}`,
  description: `We turn your eCommerce store into a high-performance selling machine. Our approach combines data-driven CRO, technical SEO, and persuasive copywriting to maximize revenue per visitor.`,
};

export default function EcommercePage() {
  const breadcrumbItems = [
    { name: 'TRAC', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'eCommerce Optimization', href: '/services/ecommerce-optimization' },
  ];

  return (
    <div className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Breadcrumb items={breadcrumbItems} />
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": `${process.env.WEBSITE_URL || 'https://www.traconomics.com'}/`
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Services",
              "item": `${process.env.WEBSITE_URL || 'https://www.traconomics.com'}/services`
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "eCommerce Optimization Services",
              "item": `${process.env.WEBSITE_URL || 'https://www.traconomics.com'}/services/ecommerce-optimization`
            }
          ]
        }) }}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <header className="text-center mb-12 md:mb-16">
          <ShoppingCart className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground">
            eCommerce as a Science
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            We build and optimize online stores not just to attract traffic, but to systematically convert that traffic into revenue.
          </p>
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none text-foreground/90 prose-headings:text-foreground prose-headings:font-semibold prose-a:text-primary hover:prose-a:text-primary/80">
          
          <h2 className="text-2xl font-bold">The Flaw in Conventional eCommerce Marketing</h2>
          <p>
            Most eCommerce marketing focuses on one thing: traffic. Agencies will sell you on SEO and PPC campaigns designed to drive as many people to your site as possible. But traffic is useless if those visitors don't buy.
          </p>
          <p>
            This approach ignores the most critical part of the equation: the on-site experience. It treats the store as a static backdrop for ads, rather than a dynamic environment that can be engineered for conversion. It leads to high ad spend, low conversion rates, and abandoned carts.
          </p>

          <h2 className="text-2xl font-bold mt-8">A First-Principles Approach: Maximize Revenue Per Visitor</h2>
          <p>
            Our eCommerce philosophy is to focus on a single metric: Revenue Per Visitor (RPV). This metric forces a holistic view. To increase RPV, you must not only attract qualified traffic but also increase your conversion rate and average order value (AOV).
          </p>
          <p>Our strategy is built on a continuous optimization loop:</p>
          <ul>
            <li><strong>Data-Driven Diagnostics:</strong> We use analytics, heatmaps, and user session recordings to identify points of friction in your conversion funnel. Where are users dropping off? What's causing confusion?</li>
            <li><strong>Hypothesis-Led Testing:</strong> Based on the data, we form clear hypotheses. For example: "We believe changing the product image gallery to a video will increase add-to-cart rate by 10%." We then use A/B testing to validate these hypotheses.</li>
            <li><strong>Persuasive Architecture:</strong> We optimize every element of your product pages and checkout process—from copywriting and social proof to trust signals and upsell offers—to guide the user towards a purchase.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8">What This Looks Like in Practice</h2>
          <p>
            We become an extension of your eCommerce team, focused on systematic growth.
          </p>
          <ul>
              <li><strong>eCommerce SEO:</strong> We optimize your category and product pages to attract high-intent search traffic, focusing on keywords that lead to sales.</li>
              <li><strong>Conversion Rate Optimization (CRO):</strong> We conduct rigorous A/B and multivariate testing on your product pages, cart, and checkout to incrementally increase conversion rates.</li>
              <li><strong>Average Order Value (AOV) Enhancement:</strong> We implement strategies like product bundling, post-purchase upsells, and volume discounts to increase the value of each transaction.</li>
              <li><strong>Lifecycle Email Marketing:</strong> We build automated email flows for cart abandonment, welcome series, and post-purchase follow-ups to maximize customer lifetime value.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8">Who This Is For</h2>
          <p>
            Our eCommerce services are for store owners who are serious about growth and understand that their website is their most important salesperson. If you're tired of running expensive ad campaigns with little to show for it and you're ready to build a high-performance selling machine, we are the right partner for you.
          </p>

        </div>

        <footer className="mt-12 text-center">
             <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/contact?service=eCommerce+Optimization">Optimize Your Online Store</Link>
            </Button>
        </footer>
      </div>
    </div>
  );
}
