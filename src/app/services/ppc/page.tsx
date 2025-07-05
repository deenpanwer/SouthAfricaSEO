import { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Target, BarChart2, DollarSign } from 'lucide-react';
import { APP_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Pay-Per-Click (PPC) Management Services | ${APP_NAME}`,
  description: `Drive immediate, high-intent traffic with our data-driven PPC management. We treat ad spend as an investment, focusing on profitable campaigns, not just clicks.`,
};

export default function PPCPage() {
  return (
    <div className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <header className="text-center mb-12 md:mb-16">
          <Target className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground">
            PPC as an Investment, Not an Expense
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            We build and manage paid campaigns that are engineered to be profitable from day one. Clicks are a cost; customers are a return.
          </p>
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none text-foreground/90 prose-headings:text-foreground prose-headings:font-semibold prose-a:text-primary hover:prose-a:text-primary/80">
          
          <h2 className="text-2xl font-bold">The Flaw in Conventional PPC Management</h2>
          <p>
            Many agencies manage PPC campaigns by focusing on vanity metrics like impressions, click-through rates (CTR), and cost-per-click (CPC). While these metrics are useful diagnostics, they are not the goal. A high CTR on an unprofitable keyword is a fast way to burn money. A low CPC that brings in unqualified traffic is a waste. 
          </p>
          <p>
            This approach mistakes activity for progress. It treats advertising as a cost center to be minimized rather than an investment engine to be optimized for maximum return.
          </p>

          <h2 className="text-2xl font-bold mt-8">A First-Principles Approach: ROI is the Only Thing That Matters</h2>
          <p>
            Our PPC philosophy is built on a single, unwavering foundation: your ad spend must generate more revenue than it costs. Every decision—from keyword selection to ad copy and landing page design—is made through the lens of profitability.
          </p>
          <p>This means we are relentlessly focused on:</p>
          <ul>
            <li><strong>Economic Modeling First:</strong> Before we launch a campaign, we model the economics. We work with you to understand your customer lifetime value (CLV) and acceptable cost-per-acquisition (CPA). This defines our bidding strategy.</li>
            <li><strong>Targeting High-Intent Keywords:</strong> We aggressively target keywords that signal commercial intent—the queries people use when they are ready to buy, not just browse. We actively use negative keywords to filter out unqualified traffic.</li>
            <li><strong>Congruence from Click to Conversion:</strong> The user's experience must be seamless. The promise made in the ad must be perfectly fulfilled on the landing page. We optimize landing pages relentlessly to reduce friction and increase conversion rates.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8">What This Looks Like in Practice</h2>
          <p>
            Our PPC management is a continuous cycle of testing, learning, and optimizing.
          </p>
          <ul>
              <li><strong>Deep Audience Research:</strong> We use audience signals from Google, Meta, and LinkedIn to build profiles of your ideal customers and target them with precision.</li>
              <li><strong>Compelling Ad Copywriting:</strong> Our ads focus on benefits, not just features, and include strong, clear calls to action.</li>
              <li><strong>A/B Testing:</strong> We constantly test ad variations, headlines, landing page layouts, and offers to find the combinations that produce the highest return on ad spend (ROAS).</li>
              <li><strong>Transparent Reporting:</strong> Our reports don't just show you clicks and impressions. They show you leads, sales, cost-per-lead, and ROAS. You will always know exactly how your investment is performing.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8">Who This Is For</h2>
          <p>
            Our PPC services are for businesses that are ready to treat paid advertising as a predictable system for customer acquisition. If you are tired of ambiguous reports and campaigns that don't seem to impact your bottom line, and you're ready for a strategic partner focused on profitability, we're the right fit.
          </p>

        </div>

        <footer className="mt-12 text-center">
             <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/contact?service=PPC">Launch a Profitable PPC Campaign</Link>
            </Button>
        </footer>
      </div>
    </div>
  );
}
