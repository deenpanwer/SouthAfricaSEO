"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconSearch,
  IconCode,
  IconWriting,
  IconArrowsRandom,
  IconBrain,
  IconChartBar,
  IconUsers,
  IconMapPin,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

export function AllInclusiveFeatures() {
  return (
    <div className="py-20 bg-gray-50 dark:bg-black">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-4">
        Everything You Need to Dominate Search. All in One Package.
      </h2>
      <p className="text-lg text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
        This isn't a "basic" plan. Our all-inclusive service gives you the full arsenal of SEO tools and strategies from day one for a single flat fee.
      </p>
      <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[20rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={cn("[&>p:text-lg]", item.className)}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

const SkeletonAiCitations = () => {
  const variants = {
    initial: { backgroundPosition: "0 50%" },
    animate: { backgroundPosition: ["0, 50%", "100% 50%", "0 50%"] },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
      className="flex flex-1 w-full h-full min-h-[6rem] rounded-lg flex-col items-center justify-center p-4"
      style={{
        background: "linear-gradient(-45deg, #10b981, #3b82f6, #8b5cf6, #ec4899)",
        backgroundSize: "400% 400%",
      }}
    >
      <div className="flex flex-wrap items-center justify-center gap-4">
        <img src="/gemini.svg" alt="Gemini" className="w-12 h-12 filter grayscale brightness-0 invert" />
        <img src="/grok.svg" alt="Grok" className="w-12 h-12 filter grayscale brightness-0 invert" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" alt="ChatGPT" className="w-12 h-12 filter grayscale brightness-0 invert" />
      </div>
      <p className="text-white text-center font-semibold mt-4">Get Cited by the World's Leading AI</p>
    </motion.div>
  );
};

const SkeletonContent = () => {
  const variants = {
    initial: { width: 0 },
    animate: { width: "100%", transition: { duration: 0.2 } },
    hover: { width: ["0%", "100%"], transition: { duration: 2 } },
  };
  const arr = new Array(6).fill(0);
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2 p-4"
    >
      {arr.map((_, i) => (
        <motion.div
          key={"skeleton-content-" + i}
          variants={variants}
          style={{ maxWidth: Math.random() * (100 - 40) + 40 + "%" }}
          className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-neutral-100 dark:bg-black w-full h-4"
        ></motion.div>
      ))}
    </motion.div>
  );
};

const SkeletonReporting = () => {
  const variants = {
    initial: { height: "20%" },
    hover: { height: "100%", transition: { duration: 0.3 } },
  };
  const arr = [0.25, 0.5, 0.3, 0.8];
  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row items-end space-x-2 p-4"
    >
      {arr.map((height, i) => (
        <motion.div
          key={"skeleton-reporting-" + i}
          variants={variants}
          style={{ height: `${height * 100}%`}}
          className="w-1/4 bg-blue-500 rounded-t-md"
        ></motion.div>
      ))}
    </motion.div>
  );
};

const SkeletonLinks = () => {
    return (
        <div className="relative flex items-center justify-center h-full w-full">
            <svg width="100%" height="100%" viewBox="0 0 100 100" className="absolute inset-0">
                <motion.line x1="50" y1="50" x2="20" y2="20" stroke="rgba(156, 163, 175, 0.5)" strokeWidth="1"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5, delay: 0.2, type: "spring" }} />
                <motion.line x1="50" y1="50" x2="80" y2="20" stroke="rgba(156, 163, 175, 0.5)" strokeWidth="1" 
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5, delay: 0.4, type: "spring" }}/>
                <motion.line x1="50" y1="50" x2="20" y2="80" stroke="rgba(156, 163, 175, 0.5)" strokeWidth="1"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5, delay: 0.6, type: "spring" }} />
                <motion.line x1="50" y1="50" x2="80" y2="80" stroke="rgba(156, 163, 175, 0.5)" strokeWidth="1"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5, delay: 0.8, type: "spring" }} />
            </svg>
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.3, delay: 0.1 }} className="h-8 w-8 rounded-full bg-blue-500 z-10" />
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.3, delay: 0.3 }} className="absolute top-[20%] left-[20%] h-6 w-6 rounded-full bg-green-500" />
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.3, delay: 0.5 }} className="absolute top-[20%] right-[20%] h-6 w-6 rounded-full bg-green-500" />
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.3, delay: 0.7 }} className="absolute bottom-[20%] left-[20%] h-6 w-6 rounded-full bg-green-500" />
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.3, delay: 0.9 }} className="absolute bottom-[20%] right-[20%] h-6 w-6 rounded-full bg-green-500" />
        </div>
    );
};

const SkeletonCompetitors = () => {
    const first = { initial: { x: 20, rotate: -5 }, hover: { x: 0, rotate: 0 } };
    const second = { initial: { x: -20, rotate: 5 }, hover: { x: 0, rotate: 0 } };
    return (
      <motion.div
        initial="initial"
        animate="animate"
        whileHover="hover"
        className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2 p-4"
      >
        <motion.div variants={first} className="h-full w-1/2 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
            <div className="w-full h-1/3 bg-red-500 rounded-t-lg" />
            <div className="w-full h-2/3 bg-gray-100 dark:bg-gray-800 rounded-b-lg" />
        </motion.div>
        <motion.div variants={second} className="h-full w-1/2 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
            <div className="w-full h-1/2 bg-green-500 rounded-t-lg" />
            <div className="w-full h-1/2 bg-gray-100 dark:bg-gray-800 rounded-b-lg" />
        </motion.div>
      </motion.div>
    );
  };

const items = [
  {
    title: "Strategic Keyword Targeting",
    description: "We find the money-making keywords that your ideal customers are searching for right now.",
    header: <SkeletonReporting />,
    className: "md:col-span-1",
    icon: <IconSearch className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Total On-Page & Technical Optimization",
    description: "We handle all the technical stuff—site speed, mobile optimization, schema, meta tags—so you're perfectly positioned to rank.",
    header: <SkeletonContent />,
    className: "md:col-span-1",
    icon: <IconCode className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "High-Impact Content That Ranks",
    description: "We create valuable content (articles, case studies, landing pages) that attracts, engages, and converts.",
    header: <SkeletonContent />,
    className: "md:col-span-1",
    icon: <IconWriting className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Authority-Building Backlinks",
    description: "We earn high-quality, relevant backlinks that build your site's credibility and search engine authority.",
    header: <SkeletonLinks />,
    className: "md:col-span-1",
    icon: <IconArrowsRandom className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Local SEO Domination",
    description: "We put your business on the map, literally. We optimize your presence to dominate local search and the Google Map Pack.",
    header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl items-center justify-center dark:bg-dot-white/[0.2] bg-dot-black/[0.2] border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"><IconMapPin className="h-12 w-12 text-neutral-500" /></div>,
    className: "md:col-span-1",
    icon: <IconMapPin className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Proactive Competitor Analysis",
    description: "We keep a close eye on your competition, identifying their weaknesses and turning them into your strengths.",
    header: <SkeletonCompetitors />,
    className: "md:col-span-1",
    icon: <IconUsers className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Future-Proof AI Engine Presence",
    description: "We get your brand and services cited by leading AI platforms (like Gemini, ChatGPT, etc.), ensuring you're visible in the next generation of search.",
    header: <SkeletonAiCitations />,
    className: "md:col-span-2",
    icon: <IconBrain className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Real-Time, Transparent Reporting",
    description: "A live, easy-to-understand dashboard that shows your progress on the metrics that actually matter.",