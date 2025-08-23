
"use client";

import { motion } from "framer-motion";
import { CheckCircle, Search, BarChart2, Link2, Edit, TrendingUp } from "lucide-react";

interface RoadmapStep {
  icon: React.ElementType;
  title: string;
  description: string;
}

const roadmapData: RoadmapStep[] = [
  {
    icon: Search,
    title: "Step 1: Deep Market Analysis",
    description: "We start by analyzing the [CityName] market, identifying your top competitors and uncovering local search trends to build a data-driven foundation.",
  },
  {
    icon: CheckCircle,
    title: "Step 2: Hyper-Local Keyword Targeting",
    description: "Our experts find the high-intent keywords your [CityName] customers are using to search for your services, ensuring we attract the most qualified traffic.",
  },
  {
    icon: BarChart2,
    title: "Step 3: Google Business Profile Optimization",
    description: "We meticulously optimize your Google Business Profile to dominate the [CityName] local map pack, driving direct calls and website visits.",
  },
  {
    icon: Edit,
    title: "Step 4: On-Page & Technical SEO",
    description: "We enhance your website's structure, content, and technical health to ensure it's perfectly optimized for both search engines and user experience.",
  },
  {
    icon: Link2,
    title: "Step 5: Local Link Building & Citations",
    description: "We build your authority by acquiring high-quality backlinks from reputable [CityName] businesses and online directories, signaling trust to Google.",
  },
  {
    icon: TrendingUp,
    title: "Step 6: Transparent Reporting & Strategy Refinement",
    description: "You get clear, monthly reports showing your progress. We continually refine our strategy based on the data to maximize your ROI and keep you ahead.",
  },
];

interface CityRoadmapProps {
  cityName: string;
}

export function CityRoadmap({ cityName }: CityRoadmapProps) {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
    const itemVariantsRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Your Path to #1 in <span className="text-green-600">{cityName}</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Our proven SEO roadmap is designed to build sustainable growth and dominate the local search landscape.
          </p>
        </div>

        <div className="relative">
          {/* The vertical line */}
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-gray-300" aria-hidden="true"></div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="space-y-12"
          >
            {roadmapData.map((step, index) => {
              const isOdd = index % 2 !== 0;
              return (
                <motion.div
                  key={index}
                  variants={isOdd ? itemVariantsRight : itemVariants}
                  className={`flex items-center w-full ${isOdd ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`w-1/2 ${isOdd ? 'pl-8 md:pl-16' : 'pr-8 md:pr-16 text-right'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                      <div className={`flex items-center ${isOdd ? 'justify-start' : 'justify-end'}`}>
                        <step.icon className="h-8 w-8 text-orange-500 mb-2" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description.replace(/\[CityName\]/g, cityName)}</p>
                    </div>
                  </div>
                  
                  {/* The Node on the timeline */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-green-600 rounded-full border-4 border-white"></div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
