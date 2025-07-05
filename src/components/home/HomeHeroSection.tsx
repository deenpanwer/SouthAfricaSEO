'use client'

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Target as TargetIcon, TrendingUp } from 'lucide-react';
import { HERO_HEADLINE, COMPANY_MOTTO } from '@/lib/constants.tsx';

export const HomeHeroSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight mb-6">
                {HERO_HEADLINE}
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
                {COMPANY_MOTTO}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <Button size="lg" asChild>
                <Link href="/services">
                  Explore Our Solutions <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/about">
                  Learn More About Us
                </Link>
              </Button>
            </div>
             <div className="text-sm text-muted-foreground space-y-2 max-w-md mx-auto lg:mx-0">
              <p className="flex items-center justify-center lg:justify-start">
                <TrendingUp className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                Drive measurable growth and ROI.
              </p>
              <p className="flex items-center justify-center lg:justify-start">
                <TargetIcon className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                Tailored strategies for your unique business needs.
              </p>
              <p className="flex items-center justify-center lg:justify-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                Expert consultants ready to assist you.
              </p>
            </div>
          </div>

          {/* Image Content */}
          <div className="relative">
            <Image
              src="https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/Amit-Cro.jpg"
              alt="Business growth strategy session"
              width={450}
              height={500}
              className="rounded-lg shadow-xl object-cover mx-auto"
              data-ai-hint="person portrait business"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};
