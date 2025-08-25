
import { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Mail, MessageCircle, Heart } from 'lucide-react';
import { APP_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Email Marketing Services | ${APP_NAME}`,
  description: `Email is your most valuable owned channel. We help you build a direct, profitable relationship with your audience through value-driven email marketing, not just promotional blasts.`,
};

export default function EmailMarketingPage() {
  return (
    <div className="py-12 md:py-20 bg-background">
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
              "name": "Email Marketing Services",
              "item": `${process.env.WEBSITE_URL || 'https://www.traconomics.com'}/services/email-marketing`
            }
          ]
        }) }}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <header className="text-center mb-12 md:mb-16">
          <Mail className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground">
            Email as a Conversation, Not a Bullhorn
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            We use email to build direct, profitable relationships with your most valuable asset: your audience.
          </p>
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none text-foreground/90 prose-headings:text-foreground prose-headings:font-semibold prose-a:text-primary hover:prose-a:text-primary/80">
          
          <h2 className="text-2xl font-bold">The Flaw in Conventional Email Marketing</h2>
          <p>
            For many businesses, email marketing is a synonym for "promotional blasts." It’s a numbers game focused on list size and open rates. The inbox becomes a battlefield where brands shout for attention with endless discounts and "last chance" offers.
          </p>
          <p>
            This approach inevitably leads to list fatigue, high unsubscribe rates, and a damaged brand reputation. It treats subscribers as a resource to be extracted from, not a community to be nurtured.
          </p>

          <h2 className="text-2xl font-bold mt-8">A First-Principles Approach: The Inbox is a Personal Space</h2>
          <p>
            We believe that being invited into someone's inbox is a privilege. Our email marketing philosophy is to honor that privilege by consistently delivering value. We treat every email as a one-to-one conversation, not a one-to-many broadcast.
          </p>
          <p>Our strategy is built on three pillars:</p>
          <ul>
            <li><strong>Deliver Value Before You Ask for It:</strong> The primary purpose of your emails should be to help your subscribers. Whether through education, insights, or entertainment, you must give before you can ask.</li>
            <li><strong>Segmentation and Personalization:</strong> Not all subscribers are the same. We segment your list based on behavior and interests, allowing us to send highly relevant messages that feel personal and timely.</li>
            <li><strong>Consistency Builds Trust:</strong> We help you establish a consistent, predictable email schedule. When subscribers know what to expect and when, they are more likely to open, read, and trust your messages.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8">What This Looks Like in Practice</h2>
          <p>
            We go beyond simple newsletters and build sophisticated email systems.
          </p>
          <ul>
              <li><strong>Welcome Sequences:</strong> We design automated welcome series that onboard new subscribers, build trust, and introduce them to your brand's value.</li>
              <li><strong>Nurture Campaigns:</strong> We create automated sequences that guide leads through the consideration phase, educating them and addressing common objections.</li>
              <li><strong>Behavioral Triggers:</strong> We set up emails that are triggered by user actions, such as abandoning a cart, downloading a resource, or visiting a specific page.</li>
              <li><strong>Data-Driven Optimization:</strong> We analyze open rates, click-through rates, and conversion data to continuously improve subject lines, copy, and calls-to-action.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8">Who This Is For</h2>
          <p>
            Our email marketing services are for businesses that see their email list as their most important owned asset. If you believe in building long-term relationships with your customers and want to move beyond generic promotional blasts to create an email program that people actually look forward to receiving, we are the right partner for you.
          </p>

        </div>

        <footer className="mt-12 text-center">
             <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/contact?service=Email+Marketing">Build Your Email Strategy</Link>
            </Button>
        </footer>
      </div>
    </div>
  );
}
