
import { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Users, Heart, MessageCircle } from 'lucide-react';
import { APP_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Social Media Marketing Services | ${APP_NAME}`,
  description: `Build a community, not just an audience. Our social media strategies focus on authentic engagement and creating brand advocates who drive real business value.`,
};

export default function SocialMediaPage() {
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
              "name": "Social Media Marketing Services",
              "item": `${process.env.WEBSITE_URL || 'https://www.traconomics.com'}/services/social-media-marketing`
            }
          ]
        }) }}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <header className="text-center mb-12 md:mb-16">
          <Users className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground">
            Building a Community, Not Just an Audience
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            We use social media to foster genuine connection and turn passive followers into active brand advocates.
          </p>
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none text-foreground/90 prose-headings:text-foreground prose-headings:font-semibold prose-a:text-primary hover:prose-a:text-primary/80">
          
          <h2 className="text-2xl font-bold">The Flaw in Conventional Social Media Marketing</h2>
          <p>
            Most social media marketing is about noise. It’s a relentless churn of content designed to maximize "engagement" metrics—likes, shares, comments. Agencies often sell this as success. But what is the actual business value of a like from someone who will never be a customer? 
          </p>
          <p>
            This approach treats social media as a broadcast channel for pushing out marketing messages. It’s transactional, impersonal, and ultimately, ineffective at building lasting brand equity. It creates an audience of spectators, not a community of participants.
          </p>

          <h2 className="text-2xl font-bold mt-8">A First-Principles Approach: From Attention to Advocacy</h2>
          <p>
            Our philosophy is that social media's true power lies in its ability to build community. A community is not just a group of people who follow you; it's a group of people who feel a sense of belonging and shared identity around your brand. 
          </p>
          <p>This requires a shift in focus from broadcasting to conversing, and from accumulating followers to cultivating relationships. Our strategy is built on:</p>
          <ul>
            <li><strong>Authenticity:</strong> We help you find and project a genuine brand voice. People connect with people, not corporate-speak.</li>
            <li><strong>Value Exchange:</strong> Every post, story, or video must provide value to the community—whether it's education, entertainment, or a sense of connection. We don't just ask for attention; we earn it.</li>
            <li><strong>Participation, Not Promotion:</strong> We create opportunities for your community to participate—through conversations, user-generated content, and exclusive access. We make them part of the story.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8">What This Looks Like in Practice</h2>
          <p>
            We develop a content strategy that feels less like a marketing calendar and more like a community engagement plan.
          </p>
          <ul>
              <li><strong>Platform-Native Content:</strong> We create content specifically for the platform it's on. What works on LinkedIn is different from what works on TikTok.</li>
              <li><strong>Two-Way Communication:</strong> We don't just post and ghost. We actively engage in comments, DMs, and conversations, acting as a community manager.</li>
              <li><strong>Showcasing Your Community:</strong> We highlight your customers and their stories, making them the heroes. This is far more powerful than any ad.</li>
              <li><strong>Data-Informed Content Pillars:</strong> We use analytics to understand what your community cares about and create content pillars around those topics, ensuring relevance and sustained interest.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8">Who This Is For</h2>
          <p>
            Our social media services are for brands that want to build something durable. It’s for businesses that understand that a loyal community is a more valuable asset than a large but passive audience. If you're ready to stop shouting into the void and start building meaningful connections that drive long-term loyalty and word-of-mouth growth, we are the right partner.
          </p>

        </div>

        <footer className="mt-12 text-center">
             <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/contact?service=Social+Media">Build Your Community</Link>
            </Button>
        </footer>
      </div>
    </div>
  );
}
