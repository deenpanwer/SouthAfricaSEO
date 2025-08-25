
import { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Edit3, Lightbulb, BookOpen } from 'lucide-react';
import { APP_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Content Writing Services | ${APP_NAME}`,
  description: `Content is the engine of trust and authority. We write content that educates, persuades, and converts, establishing you as the definitive expert in your field.`,
};

export default function ContentWritingPage() {
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
              "name": "Content Writing Services",
              "item": `${process.env.WEBSITE_URL || 'https://www.traconomics.com'}/services/content-writing`
            }
          ]
        }) }}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <header className="text-center mb-12 md:mb-16">
          <Edit3 className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground">
            Content as an Asset, Not a Commodity
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            We write to build your authority and win the trust of your audience. The goal isn't to produce words; it's to produce clarity and conviction.
          </p>
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none text-foreground/90 prose-headings:text-foreground prose-headings:font-semibold prose-a:text-primary hover:prose-a:text-primary/80">
          
          <h2 className="text-2xl font-bold">The Flaw in Conventional Content Writing</h2>
          <p>
            Most content marketing is driven by volume. Agencies use AI writers and junior staff to churn out generic, low-cost articles stuffed with keywords. The goal is to "feed the algorithm." This content is often poorly researched, unoriginal, and provides little to no real value to the reader.
          </p>
          <p>
            This is a race to the bottom. It pollutes the internet with noise, erodes reader trust, and fails to build a lasting brand asset. It’s the content equivalent of junk mail.
          </p>

          <h2 className="text-2xl font-bold mt-8">A First-Principles Approach: Become the Primary Source</h2>
          <p>
            Our philosophy is that the only content worth creating is content that aims to be the definitive resource on a given topic. Your blog post or landing page should be so clear, insightful, and comprehensive that your reader feels they’ve found the final answer they were looking for.
          </p>
          <p>This means our writing process is built on:</p>
          <ul>
            <li><strong>Deep Research:</strong> We don't just skim the top search results. We dive into primary sources, interview subject matter experts (including you), and analyze data to find unique insights.</li>
            <li><strong>Clarity of Thought:</strong> Before we write a single word, we clarify the core argument. What is the one key takeaway we want the reader to have? The writing is structured to deliver that point with maximum impact.</li>
            <li><strong>Writing for Humans, Optimizing for Search:</strong> We write for intelligent human readers first. We use simple language, logical flow, and compelling storytelling. SEO is then layered on top—not the other way around. Keywords fit naturally because the content is genuinely relevant.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8">What This Looks Like in Practice</h2>
          <p>
            We don't just take a list of keywords and produce articles. We build a content strategy.
          </p>
          <ul>
              <li><strong>Topical Authority Mapping:</strong> We identify the core topics your business needs to own and create a plan to build a "moat" of content around them.</li>
              <li><strong>Pillar Pages and Content Clusters:</strong> We create long-form pillar pages that serve as a hub for a topic, supported by a cluster of more specific articles that link back to it.</li>
              <li><strong>Conversion-Oriented Copywriting:</strong> From landing pages to product descriptions, every word is chosen to guide the user towards taking action, addressing their objections and highlighting value.</li>
              <li><strong>Repurposing and Distribution:</strong> Great content is a valuable asset. We help you repurpose it into different formats (social media posts, videos, email newsletters) to maximize its reach.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8">Who This Is For</h2>
          <p>
            Our content writing services are for businesses that want to be seen as leaders in their field. If you believe that educating your audience is the best way to earn their trust and their business, and you're tired of generic content that fails to make an impact, we are the right partner to help you build your library of authoritative content.
          </p>

        </div>

        <footer className="mt-12 text-center">
             <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/contact?service=Content+Writing">Develop Your Content Strategy</Link>
            </Button>
        </footer>
      </div>
    </div>
  );
}
