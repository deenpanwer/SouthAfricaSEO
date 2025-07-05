import { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ShoppingBag, Search, BarChart2 } from 'lucide-react';
import { APP_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Amazon Marketing Services (AMS) | ${APP_NAME}`,
  description: `Dominate the world's largest marketplace. We provide strategic Amazon SEO, PPC, and listing optimization to increase your sales velocity and win the Buy Box.`,
};

export default function AmazonMarketingPage() {
  return (
    <div className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <header className="text-center mb-12 md:mb-16">
          <ShoppingBag className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground">
            Winning on Amazon is a System, Not a Secret
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            We use a data-driven system to increase your sales velocity, improve your rankings, and dominate your product category on the world's largest marketplace.
          </p>
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none text-foreground/90 prose-headings:text-foreground prose-headings:font-semibold prose-a:text-primary hover:prose-a:text-primary/80">
          
          <h2 className="text-2xl font-bold">The Flaw in Conventional Amazon Management</h2>
          <p>
            Many sellers approach Amazon reactively. They launch a product, run some basic ads, and hope for the best. They might tweak keywords based on guesswork or copy what their competitors are doing. This approach is unpredictable and rarely leads to sustainable success.
          </p>
          <p>
            The Amazon marketplace is a complex ecosystem. Treating it like a simple sales channel, without understanding its unique search algorithm (A9), advertising platform, and flywheel effect, is a recipe for wasted ad spend and stagnant growth.
          </p>

          <h2 className="text-2xl font-bold mt-8">A First-Principles Approach: The Amazon Flywheel</h2>
          <p>
            Our entire Amazon strategy is built around a single, powerful concept: the Amazon Flywheel. The principle is simple: traffic and conversions lead to higher sales velocity. Higher sales velocity leads to more reviews and a better sales history. More reviews and a better sales history lead to higher organic rankings. Higher organic rankings lead to more traffic. And the wheel spins faster.
          </p>
          <p>Our job is to apply force to every part of that flywheel, simultaneously:</p>
          <ul>
            <li><strong>Optimized Product Listings (Conversion):</strong> Your product detail page must be a conversion machine. This means high-quality images, benefit-driven copy, and comprehensive A+ Content.</li>
            <li><strong>Targeted Amazon PPC (Traffic):</strong> We use Amazon Ads to drive targeted traffic to your listings, focusing on profitable keywords that kickstart sales velocity.</li>
            <li><strong>Amazon SEO (Organic Traffic):</strong> We optimize your titles, bullet points, and backend keywords to align with how Amazon's A9 algorithm ranks products, capturing high-intent organic traffic.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8">What This Looks Like in Practice</h2>
          <p>
            We manage your Amazon presence as a holistic system for growth.
          </p>
          <ul>
              <li><strong>Comprehensive Listing Optimization:</strong> We conduct a full audit and rewrite of your product listings, including keyword research, compelling copywriting, and creating enhanced A+ Content and Brand Stores.</li>
              <li><strong>Data-Driven PPC Campaign Management:</strong> We structure your campaigns logically (e.g., auto, research, proven), systematically harvest converting keywords, and optimize bids to achieve your target Advertising Cost of Sale (ACoS).</li>
              <li><strong>Inventory and Review Management Strategy:</strong> We advise on inventory levels to avoid stockouts (which kill sales velocity) and help implement strategies for ethically generating product reviews.</li>
              <li><strong>Competitive Analysis:</strong> We constantly monitor your competitors' pricing, keywords, and advertising strategies to identify opportunities and threats.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8">Who This Is For</h2>
          <p>
            Our Amazon Marketing Services are for brands that are serious about winning their category. It's for sellers who are ready to move beyond guesswork and implement a professional, data-driven system for growth on the platform. If you want a strategic partner to help you navigate the complexities of Amazon and build a dominant presence, we are the right fit.
          </p>

        </div>

        <footer className="mt-12 text-center">
             <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/contact?service=Amazon+Marketing">Dominate the Amazon Marketplace</Link>
            </Button>
        </footer>
      </div>
    </div>
  );
}
