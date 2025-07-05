
import { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Customer-Centric Approach | TRAC',
  description: 'We believe our clients are partners. Learn how our process is built around collaboration, shared goals, and the principle that your success is our success.',
};

export default function CustomerCentricPage() {
  return (
    <div className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <header className="text-center mb-12 md:mb-16">
          <Users className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground">
            We Put Customers First
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Many agencies view clients as accounts to be managed. We see them as partners in a shared mission. Your success is the only metric that truly matters.
          </p>
        </header>

        <div className="grid md:grid-cols-5 gap-8 lg:gap-12">
          <div className="md:col-span-3 prose prose-lg dark:prose-invert max-w-none text-foreground/90 prose-headings:text-foreground prose-headings:font-semibold prose-a:text-primary hover:prose-a:text-primary/80">
            <h2 className="text-2xl font-bold">The Agency-Client Disconnect</h2>
            <p>
              The traditional agency model often creates a disconnect. Agencies work "for" a client, delivering reports and executing tasks. The client is a passive recipient. This model is inefficient and leads to misalignment. The agency may focus on its own deliverables (e.g., "we delivered 5 blog posts"), while the client is focused on their business outcomes (e.g., "we need more sales").
            </p>
            <p>
              This structure incentivizes activity over impact. It creates a relationship based on transactions rather than shared purpose.
            </p>

            <h2 className="text-2xl font-bold mt-8">Our Model: Radical Alignment</h2>
            <p>
              We operate on a principle of radical alignment. We are not just a service provider; we are an extension of your team. This philosophy shapes every part of our process.
            </p>
            <ul>
              <li><strong>Shared Goals, Shared Success:</strong> Before we begin, we work with you to define what success looks like in clear, business-centric terms. These are our shared goals, and they form the basis of our strategy.</li>
              <li><strong>Proactive Communication:</strong> You shouldn't have to ask for an update. We provide regular, scheduled reports and ad-hoc communication whenever there's something important to share. We believe in being proactive, not reactive.</li>
              <li><strong>A Feedback-Rich Environment:</strong> Our strategies are not set in stone. We build tight feedback loops, incorporating your industry knowledge and customer insights into our plans. Your expertise is a critical asset.</li>
              <li><strong>Long-Term Perspective:</strong> We are looking to build partnerships that last for years, not months. This means we make decisions that benefit your business in the long run, even if it means forgoing a short-term gain.</li>
            </ul>
            <p>
              When an agency's success is defined by its client's success, the entire dynamic shifts. The relationship becomes a true partnership. Incentives align, communication becomes more honest, and the work becomes more effective. We don't succeed unless you do. It's as simple as that.
            </p>
          </div>
          <aside className="md:col-span-2">
            <div className="sticky top-24">
              <div className="relative aspect-square w-full rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="A diverse team working together collaboratively"
                  layout="fill"
                  objectFit="cover"
                  data-ai-hint="teamwork collaboration partnership"
                />
              </div>
              <div className="mt-6 text-center">
                 <Button size="lg" asChild>
                    <Link href="/contact">Become a Partner</Link>
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
