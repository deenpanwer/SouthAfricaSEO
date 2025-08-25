
import { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Target } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Results-Driven Philosophy | TRAC',
  description: 'Learn why we treat marketing as an investment, not an expense. Our methodology focuses on tangible ROI, transparent KPIs, and sustainable business growth.',
};

export default function ResultsDrivenPage() {
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
              "name": "Philosophy",
              "item": `${process.env.WEBSITE_URL || 'https://www.traconomics.com'}/philosophy`
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Our Results-Driven Philosophy",
              "item": `${process.env.WEBSITE_URL || 'https://www.traconomics.com'}/philosophy/results-driven`
            }
          ]
        }) }}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <header className="text-center mb-12 md:mb-16">
          <Target className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground">
            We Drive Real Results
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Our guiding principle is simple: marketing is an investment, not an expense. Every action we take is designed to produce a measurable, positive return for your business.
          </p>
        </header>

        <div className="grid md:grid-cols-5 gap-8 lg:gap-12">
          <div className="md:col-span-3 prose prose-lg dark:prose-invert max-w-none text-foreground/90 prose-headings:text-foreground prose-headings:font-semibold prose-a:text-primary hover:prose-a:text-primary/80">
            <h2 className="text-2xl font-bold">The Problem with Vanity Metrics</h2>
            <p>
              Many agencies celebrate "vanity metrics"—impressions, clicks, even rankings for irrelevant keywords. These numbers look good on a chart but often fail to impact the bottom line. A #1 ranking is worthless if it doesn't attract customers who are ready to buy. Clicks are a cost if they don't lead to conversions.
            </p>
            <p>
              This focus on superficial numbers stems from a misunderstanding of marketing's fundamental purpose. The goal isn't just to be seen; it's to be chosen. It's to build a system that reliably turns strangers into customers, and customers into advocates.
            </p>

            <h2 className="text-2xl font-bold mt-8">Our Approach: A System for Growth</h2>
            <p>
              We treat your marketing budget like a venture capitalist treats an investment. We expect a return. To achieve this, we build marketing systems, not just campaigns. A system is a cohesive set of processes that work together to achieve a specific outcome—in this case, sustainable growth.
            </p>
            <ul>
              <li><strong>Focus on High-Intent Keywords:</strong> We start by identifying the search terms that signal a user is close to making a purchase decision, not just browsing.</li>
              <li><strong>Optimize the Entire Funnel:</strong> Ranking is just the first step. We analyze and optimize the user's journey from their first click to the final conversion, removing friction at every stage.</li>
              <li><strong>Measure What Matters:</strong> We track metrics that directly correlate with revenue: qualified leads, cost per acquisition (CPA), customer lifetime value (CLV), and return on investment (ROI).</li>
              <li><strong>Iterate Relentlessly:</strong> Markets change. We use data to continuously test, learn, and refine our approach, ensuring your strategy evolves and improves over time.</li>
            </ul>
            <p>
              By focusing on results, we create a clear line of sight between our work and your business growth. It's not about chasing fleeting trends; it's about building a durable, predictable engine for customer acquisition.
            </p>
          </div>
          <aside className="md:col-span-2">
            <div className="sticky top-24">
              <div className="relative aspect-square w-full rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="A graph showing positive business results"
                  layout="fill"
                  objectFit="cover"
                  data-ai-hint="business graph results"
                />
              </div>
              <div className="mt-6 text-center">
                 <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Link href="/case-studies">See Our Results in Action</Link>
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
