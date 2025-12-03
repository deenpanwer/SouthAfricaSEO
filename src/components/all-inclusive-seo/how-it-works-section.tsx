"use client";

import React from "react";
import { FocusCards } from "@/components/ui/focus-cards"; // Assuming this is the correct path
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const HowItWorksSection = () => {
  const cards = [
    {
      title: "1. Connect Your Site",
      content: (
        <p className="text-sm text-gray-700">
          Securely link your website to our platform. Our AI immediately begins to
          crawl and understand your site's structure, content, and existing SEO profile.
        </p>
      ),
    },
    {
      title: "2. AI Analyzes & Strategizes",
      content: (
        <p className="text-sm text-gray-700">
          Our advanced AI performs in-depth keyword research, competitor analysis,
          and identifies optimal content opportunities tailored to your niche.
        </p>
      ),
    },
    {
      title: "3. Content is Deployed",
      content: (
        <p className="text-sm text-gray-700">
          AI-generated, SEO-optimized content briefs and articles are crafted, then
          seamlessly deployed to your site, ensuring maximum impact and relevance.
        </p>
      ),
    },
    {
      title: "4. Track Your Growth",
      content: (
        <p className="text-sm text-gray-700">
          Monitor your progress with real-time dashboards showing ranking improvements,
          traffic increases, and ROI. Our AI continuously refines strategies for ongoing success.
        </p>
      ),
    },
  ];

  return (
    <section className="w-full bg-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <TextGenerateEffect
            words="How Our AI SEO Works in 4 Simple Steps"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 max-w-4xl mx-auto"
          />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our automated process ensures continuous optimization and measurable results.
          </p>
        </div>
        <FocusCards cards={cards.map(card => ({
            title: card.title,
            content: card.content
        }))} />
      </div>
    </section>
  );
};

export default HowItWorksSection;
