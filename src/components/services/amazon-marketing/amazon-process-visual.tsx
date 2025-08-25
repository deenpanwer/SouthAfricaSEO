
// src/components/services/amazon-marketing/amazon-process-visual.tsx
import React from 'react';
import { Lightbulb, Rocket, ChartLine, CheckCircle } from 'lucide-react';

export const AmazonProcessVisual = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Proven 4-Step Amazon Growth Process
        </h2>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-1/2 top-0 h-full w-0.5 bg-primary/20 -translate-x-1/2" />

          <div className="flex flex-col gap-y-12">
            {/* Step 1 */}
            <div className="flex items-center w-full">
              <div className="w-1/2 pr-8 text-right">
                <h3 className="font-bold text-lg">1. Discovery & Strategy</h3>
                <p className="text-muted-foreground text-sm">We deep-dive into your brand, products, and competition to craft a tailored Amazon strategy.</p>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 bg-primary/20 p-2 rounded-full border-2 border-primary z-10">
                <Lightbulb className="h-6 w-6 text-primary" />
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-center w-full">
              <div className="w-1/2 pl-8 text-left ml-auto">
                <h3 className="font-bold text-lg">2. Optimization & Launch</h3>
                <p className="text-muted-foreground text-sm">From listing optimization to PPC setup, we prepare your products for maximum impact.</p>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 bg-primary/20 p-2 rounded-full border-2 border-primary z-10">
                <Rocket className="h-6 w-6 text-primary" />
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-center w-full">
              <div className="w-1/2 pr-8 text-right">
                <h3 className="font-bold text-lg">3. Growth & Management</h3>
                <p className="text-muted-foreground text-sm">Continuous monitoring, optimization, and adaptation to Amazon's ever-changing landscape.</p>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 bg-primary/20 p-2 rounded-full border-2 border-primary z-10">
                <ChartLine className="h-6 w-6 text-primary" />
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex items-center w-full">
              <div className="w-1/2 pl-8 text-left ml-auto">
                <h3 className="font-bold text-lg">4. Reporting & Refinement</h3>
                <p className="text-muted-foreground text-sm">Transparent reporting and strategic adjustments to ensure sustained growth and profitability.</p>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 bg-primary/20 p-2 rounded-full border-2 border-primary z-10">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
