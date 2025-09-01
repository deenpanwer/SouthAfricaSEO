import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, CreditCard, Banknote, Wallet, Mail, Phone, Copy } from 'lucide-react';
import { APP_NAME } from '@/lib/constants';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import PayOptionsCreative from './components/PayOptionsCreative';

export const metadata: Metadata = {
  title: `How to Pay Us | Payment Methods for Digital Marketing Services | ${APP_NAME}`,
  description: `Learn how to pay for your digital marketing and SEO services. We offer secure credit card payments, bank transfers (ACH/Wire), and PayPal for our USA clients.`,
};

export default function HowToPayPage() {
  const breadcrumbItems = [
    { name: APP_NAME, href: '/' },
    { name: 'Pay', href: '/pay' },
  ];

  return (
    <div className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      {/* Schema Markup for HowTo */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": "How to Pay TRAC Digital Marketing Agency",
          "description": "Learn about the convenient payment methods for your digital marketing and SEO services.",
          "step": [
            {
              "@type": "HowToStep",
              "text": "Review your service agreement and invoice.",
              "url": "https://www.traconomics.com/how-to-pay#agreement"
            },
            {
              "@type": "HowToStep",
              "text": "Select your preferred secure payment method.",
              "url": "https://www.traconomics.com/how-to-pay#payment-method"
            },
            {
              "@type": "HowToStep",
              "text": "Complete your payment with instant confirmation.",
              "url": "https://www.traconomics.com/how-to-pay#confirmation"
            },
            {
              "@type": "HowToStep",
              "text": "Witness the immediate commencement of your digital marketing services.",
              "url": "https://www.traconomics.com/how-to-pay#service-commencement"
            }
          ]
        }) }}
      />

      {/* Schema Markup for BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": APP_NAME,
              "item": "https://www.traconomics.com/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "How to Pay",
              "item": "https://www.traconomics.com/pay"
            }
          ]
        }) }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Hero Section */}
        <header className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground">
            Seamless Payments, Immediate Results: Your Path to Digital Growth
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            As a professional digital marketing agency, we've streamlined our payment process to be as efficient and secure as our services. Choose the method that best suits your business, and let's accelerate your growth.
          </p>
        </header>
        {/* Payment Method Details will be rendered by PayOptions component */}
        <PayOptionsCreative />
      </div>
    </div>
  );
}
