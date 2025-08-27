
import { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ShieldCheck, Star, MessageSquare } from 'lucide-react';
import { APP_NAME } from '@/lib/constants';
import { Breadcrumb } from '@/components/layout/Breadcrumb';

export const metadata: Metadata = {
  title: `Online Reputation Management Services | ${APP_NAME}`,
  description: `Your reputation is your most valuable asset. We help you build and protect it by proactively managing reviews, monitoring brand mentions, and promoting positive stories.`,
};

export default function ReputationManagementPage() {
  const breadcrumbItems = [
    { name: 'TRAC', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Reputation Management', href: '/services/reputation-management' },
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
              "name": "Online Reputation Management Services",
              "item": `${process.env.WEBSITE_URL || 'https://www.traconomics.com'}/services/reputation-management`
            }
          ]
        }) }}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <header className="text-center mb-12 md:mb-16">
          <ShieldCheck className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground">
            Reputation as a Strategic Asset
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            In the digital age, trust is your most important currency. We help you build, manage, and protect it at scale.
          </p>
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none text-foreground/90 prose-headings:text-foreground prose-headings:font-semibold prose-a:text-primary hover:prose-a:text-primary/80">
          
          <h2 className="text-2xl font-bold">The Flaw in Conventional Reputation Management</h2>
          <p>
            Most reputation management is reactive. It’s a fire-fighting exercise that kicks in only after a negative review or a PR crisis has already done damage. The focus is on damage control—trying to bury negative results or responding defensively to criticism.
          </p>
          <p>
            This approach is fundamentally flawed because it treats reputation as something to be defended rather than something to be actively built. It cedes control of your brand's narrative to anonymous reviewers and random events.
          </p>

          <h2 className="text-2xl font-bold mt-8">A First-Principles Approach: Proactive Narrative Building</h2>
          <p>
            We believe the best defense is a good offense. Our approach to reputation management is about proactively building such a strong and positive digital presence that isolated negative comments become insignificant outliers. 
          </p>
          <p>Our strategy is built on three core pillars:</p>
          <ul>
            <li><strong>Systematic Review Generation:</strong> We help you implement systems to consistently generate positive reviews from your happy customers. A steady stream of authentic, positive feedback is the most powerful antidote to negativity.</li>
            <li><strong>Own Your Search Results:</strong> We work to ensure that when someone searches for your brand, the first page of Google is dominated by properties you control: your website, your social media profiles, positive press mentions, and other brand-owned assets.</li>
            <li><strong>Active Brand Monitoring:</strong> We use tools to monitor mentions of your brand across the web, allowing us to identify and address potential issues before they escalate and to amplify positive stories.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8">What This Looks Like in Practice</h2>
          <p>
            We build a resilient "digital fortress" around your brand name.
          </p>
          <ul>
              <li><strong>Review Funnel Implementation:</strong> We help you set up automated email and SMS sequences to request reviews from satisfied customers on the platforms that matter most (Google, Yelp, industry-specific sites).</li>
              <li><strong>Branded SERP Optimization:</strong> We optimize your existing digital assets and create new ones (like profiles on key social or professional sites) to control your brand's search engine results page.</li>
              <li><strong>Response Strategy and Training:</strong> We develop a clear, professional strategy for responding to both positive and negative reviews, and can train your team on best practices.</li>
              <li><strong>Content that Builds Authority:</strong> We create and promote content (like case studies, awards, and team spotlights) that reinforces your brand's positive attributes and expertise.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8">Who This Is For</h2>
          <p>
            Our reputation management services are for businesses that understand their online brand is a critical asset. It’s for companies that want to take control of their own narrative rather than leaving it to chance. If you're ready to move from a reactive, defensive posture to a proactive strategy of building and protecting your brand's good name, we are the right partner for you.
          </p>

        </div>

        <footer className="mt-12 text-center">
             <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/contact?service=Reputation+Management">Protect Your Brand Reputation</Link>
            </Button>
        </footer>
      </div>
    </div>
  );
}
