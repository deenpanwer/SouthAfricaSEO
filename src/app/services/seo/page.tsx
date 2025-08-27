
import { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Search, TrendingUp, Lightbulb } from 'lucide-react';
import { APP_NAME } from '@/lib/constants';
import { Breadcrumb } from '@/components/layout/Breadcrumb';

export const metadata: Metadata = {
  title: `Search Engine Optimization (SEO) Services | ${APP_NAME}`,
  description: `Drive sustainable, organic growth with our first-principles approach to SEO. We focus on user intent, authority building, and technical excellence, not just algorithm tricks.`,
};

export default function SEOPage() {
  const breadcrumbItems = [
    { name: 'TRAC', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'SEO', href: '/services/seo' },
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
              "name": "Search Engine Optimization (SEO) Services",
              "item": `${process.env.WEBSITE_URL || 'https://www.traconomics.com'}/services/seo`
            }
          ]
        }) }}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <header className="text-center mb-12 md:mb-16">
          <Search className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground">
            SEO as a Product, Not a Service
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            We build your website into the best, most authoritative answer for what your customers are searching for. The rankings are just a byproduct of that obsession.
          </p>
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none text-foreground/90 prose-headings:text-foreground prose-headings:font-semibold prose-a:text-primary hover:prose-a:text-primary/80">
          
          <h2 className="text-2xl font-bold">The Flaw in Conventional SEO</h2>
          <p>
            Most SEO agencies are in the business of chasing Google. They react to algorithm updates, build links on low-quality sites, and stuff keywords into content, hoping to trick a system that gets smarter every day. This is a fragile, short-term game. It treats SEO as a list of technical chores rather than a fundamental part of your product.
          </p>
          <p>
            The result is a website that might rank for a few weeks but provides a poor user experience, fails to build trust, and is vulnerable to the next algorithm update. It’s a house of cards.
          </p>

          <h2 className="text-2xl font-bold mt-8">A First-Principles Approach: User Intent is Everything</h2>
          <p>
            We operate on a simple, durable principle: Google’s ultimate goal is to provide its users with the best possible answer to their query. Therefore, our goal is not to "optimize for Google" but to make your website the single best answer for a specific set of queries. When you are genuinely the best resource, Google has no choice but to rank you.
          </p>
          <p>This means we focus on three pillars:</p>
          <ul>
            <li><strong>Technical Excellence:</strong> Your website must be fast, secure, and perfectly crawlable. A user (and a search engine) should be able to navigate it effortlessly. This is the foundation.</li>
            <li><strong>Unmatched Authority:</strong> We create content that doesn’t just answer a question, but answers it so completely that the user has no need to go anywhere else. This is done by building topical clusters and providing genuine expertise.</li>
            <li><strong>Building Trust Signals:</strong> Authority is reinforced by trust. This comes from high-quality, relevant backlinks from respected sources, positive user reviews, and a clear, professional brand presence.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8">What This Looks Like in Practice</h2>
          <p>
            Instead of just "doing SEO," we integrate it into your business strategy. This involves:
          </p>
          <ul>
              <li><strong>Comprehensive Audits:</strong> We start with a deep dive into your technical setup, content, and backlink profile to identify foundational weaknesses.</li>
              <li><strong>Keyword Research as Product Research:</strong> We analyze keywords not just for volume, but for user intent. What problem is the user trying to solve? We build our strategy around those problems.</li>
              <li><strong>Content that Educates, Not Just Sells:</strong> We create pillar pages, in-depth guides, and blog posts that establish you as the go-to expert in your field.</li>
              <li><strong>Strategic Link Acquisition:</strong> We pursue backlinks from relevant, authoritative sites in your industry, treating it like digital PR, not a numbers game.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8">Who This Is For</h2>
            <p>
                Our SEO approach is for businesses that view their website as a core asset, not just a marketing expense. It’s for founders and marketers who understand that sustainable growth comes from building genuine value, not from chasing short-term hacks. If you're ready to invest in becoming the authoritative voice in your market, we're the right partner for you.
            </p>

        </div>

        <footer className="mt-12 text-center">
             <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/contact?service=SEO">Discuss Your SEO Strategy</Link>
            </Button>
        </footer>
      </div>
    </div>
  );
}
