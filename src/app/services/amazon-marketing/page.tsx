
import { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle, TrendingUp, Search, BarChart2, Zap, ArrowRight, Star } from 'lucide-react';
import { APP_NAME } from '@/lib/constants';
import React from 'react';

export const metadata: Metadata = {
  title: `Amazon Marketing Services | Win on Amazon | ${APP_NAME}`,
  description: `Don't just compete on Amazon—dominate your category. TRAC builds systematic growth flywheels to increase sales velocity, elevate rankings, and secure market leadership.`,
};

const SectionSubHeader = ({ children }: { children: React.ReactNode }) => (
  <p className="text-primary font-semibold uppercase tracking-wider text-center">{children}</p>
);

const SectionHeader = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mt-2">{children}</h2>
);

const SectionDescription = ({ children }: { children: React.ReactNode }) => (
  <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-center mt-4">{children}</p>
);

export default function AmazonMarketingPage() {
  return (
    <div className="bg-gray-50 dark:bg-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground !leading-tight mb-6">
            Stop Competing on Amazon.
            <br />
            <span className="text-primary">Start Dominating.</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Winning on Amazon isn't about running ads. It's about building a self-sustaining growth engine. We build that engine for you.
          </p>
          <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg text-lg px-8 py-6">
            <Link href="/contact?service=Amazon+Marketing">Build Your Amazon Flywheel</Link>
          </Button>
        </div>
        <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] dark:bg-bottom dark:border-b dark:border-slate-100/5 [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
      </section>

      {/* The Problem Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionSubHeader>The Flaw in Conventional Strategy</SectionSubHeader>
          <SectionHeader>Are You Just Another Listing?</SectionHeader>
          <SectionDescription>
            Most sellers treat Amazon like a simple storefront—they upload products, buy some ads, and hope for the best. This is a recipe for wasted ad spend, stagnant rankings, and being drowned out by savvier competitors.
          </SectionDescription>
        </div>
      </section>
      
      {/* The Flywheel Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionSubHeader>Our First-Principles Approach</SectionSubHeader>
          <SectionHeader>The Amazon Flywheel</SectionHeader>
          <SectionDescription>
            We don't just manage your account; we build a system. Each part of our strategy energizes the next, creating a powerful, self-reinforcing cycle of growth that's incredibly difficult for competitors to stop.
          </SectionDescription>
          <div className="relative mt-12 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-2 md:space-x-4">
              {['Traffic', 'Conversions', 'Velocity', 'Rankings'].map((item, index) => (
                <React.Fragment key={item}>
                  <div className="text-center">
                    <div className="p-4 bg-background rounded-full shadow-lg border">
                      <Zap className="h-8 w-8 text-primary mx-auto" />
                    </div>
                    <p className="mt-2 text-sm font-semibold">{item}</p>
                  </div>
                  {index < 3 && <ArrowRight className="h-6 w-6 text-muted-foreground flex-shrink-0" />}
                </React.Fragment>
              ))}
            </div>
            <div className="absolute inset-0 flex items-center justify-center -z-10">
                <div className="w-full h-24 bg-primary/5 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionSubHeader>How We Build It</SectionSubHeader>
          <SectionHeader>A System for Dominance</SectionHeader>
          <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="inline-block p-4 bg-primary/10 text-primary rounded-full mb-4">
                <Search className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-foreground">1. Total Listing Optimization</h3>
              <p className="text-muted-foreground mt-2">We transform your product pages into conversion machines with keyword-rich titles, benefit-driven copy, and stunning A+ Content.</p>
            </div>
            <div className="p-6">
              <div className="inline-block p-4 bg-primary/10 text-primary rounded-full mb-4">
                <TrendingUp className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-foreground">2. Profit-Driven Advertising</h3>
              <p className="text-muted-foreground mt-2">Your ad spend is an investment. We build data-driven PPC campaigns that target high-intent keywords to fuel the flywheel with profitable sales.</p>
            </div>
            <div className="p-6">
              <div className="inline-block p-4 bg-primary/10 text-primary rounded-full mb-4">
                <BarChart2 className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-foreground">3. Continuous Optimization</h3>
              <p className="text-muted-foreground mt-2">We use analytics to harvest converting keywords, refine bids, manage inventory strategy, and keep the growth engine accelerating.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
       <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="bg-background rounded-lg p-8 md:p-12 shadow-xl border text-center">
            <div className="flex justify-center text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-6 w-6 fill-current" />)}
            </div>
            <blockquote className="text-xl md:text-2xl font-medium text-foreground">
              &ldquo;TRAC's Amazon strategy was a game-changer. They didn't just increase our sales; they gave us a dominant position in our category. Their systematic approach is unmatched.&rdquo;
            </blockquote>
            <footer className="mt-6">
              <p className="font-semibold text-foreground">Jessica Miller</p>
              <p className="text-muted-foreground">Founder, EcoHome Goods</p>
            </footer>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-6">
            Ready to Build Your Amazon Empire?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Stop fighting for scraps. Let's build a system that puts you in control of your category.
          </p>
          <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg text-lg px-8 py-6">
            <Link href="/contact?service=Amazon+Marketing">Schedule a Strategy Call</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

// Minimalist background grid component
const GridBg = () => (
  <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
    <div className="absolute left-0 right-0 top-0 -z-10 h-full w-full bg-gradient-to-b from-white to-transparent"></div>
  </div>
);
