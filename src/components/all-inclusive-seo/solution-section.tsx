"use client";

import React from "react";
import { motion } from "framer-motion";
import { WobbleCard } from "@/components/ui/wobble-card"; // Assuming this is the correct path for WobbleCard
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const SolutionSection = () => {
  return (
    <section className="w-full bg-black py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16 bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto"
        >
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 max-w-4xl mx-auto"
          >
            The Ultimate SEO Deal. One Flat Fee. All-Inclusive.
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            We've eliminated the risk and complexity. This is the straightforward, results-driven SEO solution you've been looking for.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="col-span-1 lg:col-span-2 min-h-[400px]"
          >
            <WobbleCard containerClassName="h-full bg-blue-600">
              <div className="max-w-xs md:max-w-sm">
                <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                  Total Transparency. Zero Risk.
                </h2>
                <p className="mt-4 text-left text-base/6 text-neutral-200">
                  We are so confident in our service that we offer a no-questions-asked, 2-month money-back guarantee. If you are not satisfied with our process, communication, and the initial results, we’ll refund your investment in full.
                </p>
              </div>
            </WobbleCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
             className="col-span-1 min-h-[300px]"
          >
            <WobbleCard containerClassName="h-full bg-indigo-700">
              <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Every Service You Need. Included.
              </h2>
              <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
                Stop paying for a dozen different tools and services. Our one flat-rate plan includes the full breadth of SEO services – from technical audits and content creation to link building and strategy. No tiers. No add-ons.
              </p>
            </WobbleCard>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, amount: 0.3 }}
             transition={{ duration: 0.5, delay: 0.3 }}
             className="col-span-1 lg:col-span-3 min-h-[500px] lg:min-h-[300px]"
          >
            <WobbleCard containerClassName="h-full bg-green-700">
              <div className="max-w-sm md:max-w-lg">
                <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                  Results You Can Actually See.
                </h2>
                <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
                  We replace confusing reports with a real-time dashboard showing your progress. Our process is built for speed, so you'll see meaningful activity and a clear path to ROI from the very beginning.
                </p>
              </div>
            </WobbleCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
