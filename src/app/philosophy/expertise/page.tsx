
import { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Lightbulb } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Digital Marketing Expertise | TRAC',
  description: 'We focus on the first principles of digital marketing—understanding user behavior, search engine mechanics, and the unchanging laws of value exchange.',
};

export default function ExpertisePage() {
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
              "name": "Our Digital Marketing Expertise",
              "item": `${process.env.WEBSITE_URL || 'https://www.traconomics.com'}/philosophy/expertise`
            }
          ]
        }) }}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <header className="text-center mb-12 md:mb-16">
          <Lightbulb className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground">
            We Know Digital Marketing
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            True expertise isn't about knowing the latest tricks. It's about understanding the fundamental principles that never change.
          </p>
        </header>

        <div className="grid md:grid-cols-5 gap-8 lg:gap-12">
          <div className="md:col-span-3 prose prose-lg dark:prose-invert max-w-none text-foreground/90 prose-headings:text-foreground prose-headings:font-semibold prose-a:text-primary hover:prose-a:text-primary/80">
            <h2 className="text-2xl font-bold">The Fallacy of Chasing Algorithms</h2>
            <p>
              Many agencies spend their time chasing algorithm updates. They react to changes, trying to reverse-engineer what a platform like Google wants. This is a defensive, and ultimately losing, strategy. It’s like trying to navigate by watching the waves instead of the stars.
            </p>
            <p>
              The algorithms are merely a proxy for what the platform's users want. Google's goal is to provide the most helpful, relevant, and trustworthy answer to a user's query. Social media platforms want to show users content that keeps them engaged. These underlying goals are remarkably stable.
            </p>

            <h2 className="text-2xl font-bold mt-8">A First-Principles Approach</h2>
            <p>
              Our expertise comes from focusing on the first principles of digital marketing—the foundational truths that dictate success, regardless of the latest update.
            </p>
            <ul>
              <li><strong>User Intent is Everything:</strong> We obsess over understanding why a person is searching for a particular term. Are they looking for information, comparing options, or ready to buy? The content and experience we create must perfectly match that intent.</li>
              <li><strong>Value is the Price of Attention:</strong> To earn a user's time and a search engine's ranking, you must provide exceptional value. Your content must be more helpful, your website easier to use, and your solution clearer than anyone else's.</li>
              <li><strong>Authority is Built, Not Claimed:</strong> Trust is earned through consistent demonstration of expertise. We build your authority by creating comprehensive resources, securing credible endorsements (backlinks), and ensuring your technical foundation is flawless.</li>
              <li><strong>Clarity Trumps Persuasion:</strong> In a world of noise, clarity is the most persuasive tool. We focus on making your message, your value proposition, and your calls-to-action as clear and simple as possible.</li>
            </ul>
            <p>
              By focusing on these fundamentals, we build strategies that are naturally aligned with what search engines want to reward. We aren't trying to "game the system." We are building the best possible resource for the user, which is precisely what the system is designed to find and elevate. This makes our strategies resilient, effective, and sustainable.
            </p>
          </div>
          <aside className="md:col-span-2">
            <div className="sticky top-24">
              <div className="relative aspect-square w-full rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="A team whiteboarding a complex strategy"
                  layout="fill"
                  objectFit="cover"
                  data-ai-hint="strategy whiteboard plan"
                />
              </div>
              <div className="mt-6 text-center">
                 <Button size="lg" asChild>
                    <Link href="/blog">Explore Our Insights</Link>
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
