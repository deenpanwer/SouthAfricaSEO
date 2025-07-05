
import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronRight, Search, TrendingUp, Users, Settings, Briefcase, Mail, Award, BarChart2 } from 'lucide-react';
import React from 'react';
import { APP_NAME } from '@/lib/constants';

// Placeholder for ShoppingBagIcon if not available in lucide-react default export
const ShoppingBagIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
    <line x1="3" y1="6" x2="21" y2="6"/>
    <path d="M16 10a4 4 0 0 1-8 0"/>
  </svg>
);


export const metadata: Metadata = {
  title: `Digital Marketing Services | ${APP_NAME}`,
  description: `Explore our full suite of digital marketing services, from SEO and PPC to content writing and web development. Discover how we build data-driven systems for sustainable business growth.`,
};

const services = [
  { title: "SEO", href: "/services/seo", icon: Search, description: "Build a durable, organic growth engine by becoming the best answer for what your customers are searching for." },
  { title: "PPC Management", href: "/services/ppc", icon: TrendingUp, description: "Treat ad spend as a high-return investment with campaigns engineered for profitability, not just clicks." },
  { title: "Social Media Marketing", href: "/services/social-media-marketing", icon: Users, description: "Cultivate a loyal community of brand advocates, not just a passive audience of followers." },
  { title: "Web Design & Development", href: "/services/web-design-and-development", icon: Settings, description: "Develop your website as a high-performance growth engine, not a static digital brochure." },
  { title: "Content Writing", href: "/services/content-writing", icon: Briefcase, description: "Create content that builds authority and wins trust, establishing you as the definitive expert in your field." },
  { title: "Email Marketing", href: "/services/email-marketing", icon: Mail, description: "Build a direct, profitable relationship with your most valuable audience through value-driven conversations." },
  { title: "Reputation Management", href: "/services/reputation-management", icon: Award, description: "Proactively build and protect your most valuable asset—your brand's reputation and the trust it commands." },
  { title: "eCommerce Optimization", href: "/services/ecommerce-optimization", icon: BarChart2, description: "Turn your online store into a high-performance selling machine, scientifically optimized for revenue per visitor." },
  { title: "Amazon Marketing (AMS)", href: "/services/amazon-marketing", icon: ShoppingBagIcon, description: "Implement a data-driven system to increase sales velocity, improve rankings, and win on the world's largest marketplace." },
];

export default function ServicesPage() {
  return (
    <div className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground">
            Our Services
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            We don't just "do marketing." We build integrated systems for growth. Each service is designed to be a durable asset that delivers a measurable return on your investment.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <service.icon className="h-10 w-10 text-primary" />
                  <CardTitle className="text-2xl font-semibold">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
              <CardFooter>
                 <Button asChild variant="link" className="p-0 h-auto text-primary">
                  <Link href={service.href}>
                    Learn More <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </section>

        <footer className="mt-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Ready to build your growth engine?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Let's discuss how these services can be integrated into a cohesive strategy for your business.
          </p>
          <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/contact">Get Your Free Proposal</Link>
          </Button>
        </footer>
      </div>
    </div>
  );
}
