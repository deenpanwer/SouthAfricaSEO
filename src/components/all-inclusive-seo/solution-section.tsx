"use client";

import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card"; // Assuming this is the correct path for WobbleCard
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const SolutionSection = () => {
  return (
    <section className="w-full bg-black py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
          <TextGenerateEffect
              words="The Solution: Your SEO on Autopilot."
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 max-w-4xl mx-auto"
          />
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Experience unparalleled SEO power with our AI-driven strategies.
            Transform your online presence effortlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full">
          <WobbleCard
            containerClassName="col-span-1 lg:col-span-2 min-h-[400px] bg-pink-800" // Example color, can be adjusted
            className=""
          >
            <div className="max-w-xs md:max-w-sm">
              <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                AI Drives Unmatched Efficiency & Speed
              </h2>
              <p className="mt-4 text-left text-base/6 text-neutral-200">
                Automate tedious tasks like keyword research, content optimization, and
                competitor analysis to free up your valuable time for strategic growth.
              </p>
            </div>
            {/* You can add an image here like src="/linear.webp" */}
          </WobbleCard>

          <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-blue-700"> {/* Example color */}
            <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Predictive AI for Smarter Growth Strategies
            </h2>
            <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
              Our platform analyzes market trends and predicts keyword performance,
              giving you a competitive edge and rapid ranking improvements.
            </p>
          </WobbleCard>

          <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-indigo-900 min-h-[500px] lg:min-h-[300px]"> {/* Example color */}
            <div className="max-w-sm md:max-w-lg">
              <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                All-Inclusive & Transparent: Simplified SEO Management
              </h2>
              <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
                No hidden fees, no complex dashboards. Get clear, actionable insights
                and a complete suite of SEO tools for one predictable monthly price.
              </p>
            </div>
            {/* You can add an image here like src="/linear.webp" */}
          </WobbleCard>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
