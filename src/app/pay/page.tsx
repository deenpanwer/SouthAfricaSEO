import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { APP_NAME } from '@/lib/constants';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import GeneralPaymentGuide from './components/GeneralPaymentGuide';
import PayOptionsCreative from './components/PayOptionsCreative';

export const metadata: Metadata = {
  title: `How to Pay for Digital Marketing Services: A Guide | ${APP_NAME}`,
  description: `A complete guide on how to pay for digital marketing and SEO services in the USA. Learn about common payment methods, security, and reviewing invoices.`,
};

export default function HowToPayPage() {
  const breadcrumbItems = [
    { name: APP_NAME, href: '/' },
    { name: 'Pay', href: '/pay' },
  ];

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Pay for Digital Marketing Services",
    "description": "A step-by-step guide to understanding and paying invoices for digital marketing and SEO services in the USA.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Step 1: Carefully Review Your Service Agreement & Invoice",
        "text": "Before making any payment, thoroughly review the service agreement and the invoice provided by your digital marketing agency. Ensure the services listed, costs, and payment terms match your understanding. Look for clarity on deliverables, timelines, and any recurring charges.",
        "url": "https://www.traconomics.com/pay#step-1"
      },
      {
        "@type": "HowToStep",
        "name": "Step 2: Understand Common Payment Methods in the USA",
        "text": "Agencies in the USA typically offer several payment options. Credit/Debit cards offer convenience and speed. Bank Transfers (ACH/Wire) are common for larger or recurring payments and are highly secure. Digital wallets like PayPal provide an additional layer of security and ease of use.",
        "url": "https://www.traconomics.com/pay#step-2"
      },
      {
        "@type": "HowToStep",
        "name": "Step 3: Ensure a Secure Transaction",
        "text": "Always use a secure method to pay. Reputable agencies will provide a secure payment portal for card transactions. Never send your full credit card details over email. For bank transfers, double-check the account details provided by the agency before initiating the payment.",
        "url": "https://www.traconomics.com/pay#step-3"
      },
      {
        "@type": "HowToStep",
        "name": "Step 4: Confirm Payment & Retain Records",
        "text": "After completing the payment, you should receive an immediate confirmation receipt. Keep a copy of this receipt and the original invoice for your financial records. This documentation is crucial for accounting and serves as proof of payment.",
        "url": "https://www.traconomics.com/pay#step-4"
      }
    ]
  };

  return (
    <div className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      {/* Schema Markup for HowTo */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Section 1: General SEO Guide */}
        <header className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground">
            A Complete Guide: How to Pay for Digital Marketing Services
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Navigating payments for SEO and digital marketing services can be simple. Here’s a step-by-step guide to ensure your transactions are smooth, secure, and transparent.
          </p>
        </header>
        <GeneralPaymentGuide />

        {/* Section 2: The TRAC Digital Way */}
        <section className="mt-20 pt-16 border-t">
          <header className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Our Seamless Payment Process
            </h2>
            <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
              We practice what we preach. Our process is designed to be as transparent and efficient as the services we provide.
            </p>
          </header>
          <PayOptionsCreative />
        </section>

        {/* Section 3: Call to Action */}
        <section className="mt-20 text-center">
            <div className="bg-card p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Get Started?</h2>
                <p className="text-muted-foreground mb-6 max-w-xl mx-auto">Explore our transparent pricing and find the right SEO package to accelerate your business growth.</p>
                <Button asChild size="lg">
                    <Link href="/pricing">Explore Our SEO Packages</Link>
                </Button>
            </div>
        </section>

      </div>
    </div>
  );
}