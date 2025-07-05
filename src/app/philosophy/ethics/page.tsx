
import { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Ethical Approach | TRAC',
  description: 'We believe in honesty, integrity, and sustainable growth. Discover our philosophy on avoiding short-term hacks and building long-term value for our clients.',
};

export default function EthicsPage() {
  return (
    <div className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <header className="text-center mb-12 md:mb-16">
          <ShieldCheck className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground">
            We Are Honest & Ethical
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Our foundation is built on transparency and a commitment to our clients' long-term success. We don't sell services you don't need.
          </p>
        </header>

        <div className="grid md:grid-cols-5 gap-8 lg:gap-12">
          <div className="md:col-span-3 prose prose-lg dark:prose-invert max-w-none text-foreground/90 prose-headings:text-foreground prose-headings:font-semibold prose-a:text-primary hover:prose-a:text-primary/80">
            <h2 className="text-2xl font-bold">The Dangers of Short-Term Thinking</h2>
            <p>
              The digital marketing world is filled with promises of quick wins and "secret hacks." These approaches are tempting because they offer the illusion of rapid progress. However, they are often built on shaky foundations—exploiting temporary loopholes in algorithms or using tactics that violate platform guidelines.
            </p>
            <p>
              This short-term thinking is a liability. A strategy that relies on tricks is fragile; it breaks the moment an algorithm is updated. Worse, it can lead to penalties that erase years of hard work overnight. True growth is not about finding shortcuts; it's about building a durable asset that appreciates over time.
            </p>

            <h2 className="text-2xl font-bold mt-8">Building a Castle of Brick, Not Cards</h2>
            <p>
              Our philosophy is to build your online presence like a castle of brick, not a house of cards. This means focusing on fundamentals that have enduring value:
            </p>
            <ul>
              <li><strong>White-Hat Practices:</strong> We adhere strictly to the guidelines set by search engines and other platforms. This protects your brand and ensures your growth is sustainable.</li>
              <li><strong>Transparency in Action:</strong> You will always know what we are doing and why we are doing it. We provide clear, honest reports that explain our strategies, our actions, and the results.</li>
              <li><strong>Honest Recommendations:</strong> We will never recommend a service or tactic that we do not genuinely believe will contribute to your goals. If a particular channel isn't right for you, we will tell you. Our success is tied to yours.</li>
              <li><strong>Educating Our Clients:</strong> We believe an informed client is the best partner. We take the time to explain the 'why' behind our strategies, empowering you to make better business decisions.</li>
            </ul>
            <p>
              This ethical approach isn't just about playing by the rules. It's about recognizing that trust—from customers and search engines alike—is the most valuable currency online. By building a trustworthy and authoritative presence, we create a competitive advantage that is incredibly difficult for others to replicate.
            </p>
          </div>
          <aside className="md:col-span-2">
            <div className="sticky top-24">
              <div className="relative aspect-square w-full rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://images.pexels.com/photos/8353802/pexels-photo-8353802.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="A compass pointing true north, symbolizing integrity"
                  layout="fill"
                  objectFit="cover"
                  data-ai-hint="compass ethics direction"
                />
              </div>
              <div className="mt-6 text-center">
                 <Button size="lg" asChild variant="outline">
                    <Link href="/contact">Speak With Our Team</Link>
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
