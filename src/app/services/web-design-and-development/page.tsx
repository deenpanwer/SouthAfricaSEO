
import { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Code, Rocket, Palette } from 'lucide-react';
import { APP_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Web Design & Development Services | ${APP_NAME}`,
  description: `We build websites that are more than just digital brochures—they are growth engines. Our websites are fast, functional, and engineered for conversion from the ground up.`,
};

export default function WebDevPage() {
  return (
    <div className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <header className="text-center mb-12 md:mb-16">
          <Code className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground">
            Websites as Growth Engines
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Your website isn't a digital brochure. It's the most powerful tool you have for customer acquisition and conversion. We build them that way.
          </p>
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none text-foreground/90 prose-headings:text-foreground prose-headings:font-semibold prose-a:text-primary hover:prose-a:text-primary/80">
          
          <h2 className="text-2xl font-bold">The Flaw in Conventional Web Design</h2>
          <p>
            Most web design projects focus on aesthetics. They treat the website as a static piece of art. The process is slow, expensive, and results in a beautiful but ineffective digital relic. It’s a brochure that happens to be online. Once launched, it rarely changes because making updates is too complex or costly.
          </p>
          <p>
            This model is fundamentally broken in today’s agile world. A website should be a dynamic asset that evolves with your business and your customers' needs.
          </p>

          <h2 className="text-2xl font-bold mt-8">A First-Principles Approach: A Website is a Product</h2>
          <p>
            We believe a website should be treated like a software product, not a painting. It should be built to solve a problem: converting visitors into customers. This philosophy changes everything about how we design and build.
          </p>
          <p>Our development process is centered on three core principles:</p>
          <ul>
            <li><strong>Speed is a Feature:</strong> A slow website is a broken website. We build for performance from day one, using modern frameworks like Next.js and optimizing every asset. A faster site leads to better user experience, higher SEO rankings, and more conversions.</li>
            <li><strong>Clarity Over Clutter:</strong> Every element on a page must serve a purpose. We design with a relentless focus on clarity, guiding the user to their goal with a clear visual hierarchy and compelling calls-to-action. We remove everything that doesn't contribute to conversion.</li>
            <li><strong>Built for Iteration:</strong> Your business isn't static, so your website shouldn't be either. We build on flexible, component-based systems that make it easy to test new ideas, update content, and launch new landing pages without a massive development cycle.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8">What This Looks Like in Practice</h2>
          <p>
            Our web development is a strategic process, not just a technical one.
          </p>
          <ul>
              <li><strong>Conversion-Focused Wireframing:</strong> We map out user flows and page structures with the primary goal of conversion before we even think about colors or fonts.</li>
              <li><strong>Modern Tech Stack:</strong> We use React and Next.js for their performance, scalability, and excellent developer experience, which translates to a better final product for you.</li>
              <li><strong>SEO-Ready Foundation:</strong> We build websites with technical SEO best practices baked in, not bolted on as an afterthought. This includes clean code, logical site structure, and schema markup.</li>
              <li><strong>Headless CMS Integration:</strong> We empower your team to manage content easily by integrating with modern headless CMS platforms, separating your content from the presentation layer for maximum flexibility.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8">Who This Is For</h2>
          <p>
            Our web design and development services are for businesses that see their website as a critical part of their growth strategy. If you believe your website should be a lead-generating machine that you can continuously improve, rather than a static expense you update every five years, we are the right partner to build it with you.
          </p>

        </div>

        <footer className="mt-12 text-center">
             <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/contact?service=Web+Design+and+Development">Build Your Growth Engine</Link>
            </Button>
        </footer>
      </div>
    </div>
  );
}
