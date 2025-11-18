"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import styles from "./ResultsDisplay.module.css"; // Import the CSS module

const ShimmerText = ({ children }: { children: React.ReactNode }) => {
  return <span className={cn("relative inline-block", styles["shimmer-container"])}>{children}</span>;
};

const ProgressBar = ({ progress }: { progress: number }) => {
  return (
    <div className="w-full h-4 border-2 border-black bg-white relative overflow-hidden">
      <div
        className="h-full bg-black transition-all duration-500 ease-out"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

interface ChainOfThoughtStep {
  id: number;
  text: string;
  status: "pending" | "active" | "completed";
}

const ChainOfThought = ({ steps }: { steps: ChainOfThoughtStep[] }) => {
  return (
    <div className="space-y-3 text-sm md:text-base">
      {steps.map((step) => (
        <div key={step.id} className="flex items-start gap-3 border border-black p-3 bg-white">
          <div className="flex-shrink-0 pt-1">
            {step.status === "completed" && <span className="text-green-600">✓</span>}
            {step.status === "active" && (
              <span className="text-black animate-spin-slow">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v4" /><path d="M12 18v4" /><path d="M4.93 4.93l2.83 2.83" /><path d="M16.24 16.24l2.83 2.83" /><path d="M2 12h4" /><path d="M18 12h4" /><path d="M4.93 19.07l2.83-2.83" /><path d="M16.24 7.76l2.83-2.83" />
                </svg>
              </span>
            )}
            {step.status === "pending" && <span className="text-gray-400">○</span>}
          </div>
          <span className={cn(
            "flex-grow",
            step.status === "pending" && "text-gray-500 italic"
          )}>
            {step.status === "active" ? <ShimmerText>{step.text}</ShimmerText> : step.text}
          </span>
        </div>
      ))}
    </div>
  );
};

// Placeholder for the Metrics Display (will be implemented in Chunk 4)
interface MetricsDisplayProps {
  websitesVisited: number;
  peopleVetted: number;
}

const MetricsDisplay = ({ websitesVisited, peopleVetted }: MetricsDisplayProps) => {
  return (
    <div className="grid grid-cols-2 gap-4 mt-4">
      <div className="border border-black p-4 text-center">
        <p className="text-sm text-gray-700">Websites Visited</p>
        <p className="text-2xl font-bold text-black"><ShimmerText>{websitesVisited.toLocaleString()}</ShimmerText></p>
      </div>
      <div className="border border-black p-4 text-center">
        <p className="text-sm text-gray-700">People Vetted</p>
        <p className="text-2xl font-bold text-black"><ShimmerText>{peopleVetted.toLocaleString()}</ShimmerText></p>
      </div>
    </div>
  );
};


export const ResultsDisplay = () => {
  const [progress, setProgress] = useState(0);
  const [websitesVisited, setWebsitesVisited] = useState(0);
  const [peopleVetted, setPeopleVetted] = useState(0);
  const [chainOfThoughtSteps, setChainOfThoughtSteps] = useState<ChainOfThoughtStep[]>([]);

  useEffect(() => {
    // Initial high values for metrics
    setWebsitesVisited(50000);
    setPeopleVetted(5000);

    // Simulate progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 95) { // Slow down progress near the end
          clearInterval(progressInterval);
          return 95; // Max out at 95% for a sense of anticipation
        }
        return Math.min(prev + Math.random() * 5, 95); // Smaller increments
      });
    }, 1500);

    // Simulate metrics
    const metricsInterval = setInterval(() => {
      setWebsitesVisited((prev) => prev + Math.floor(Math.random() * 1000) + 500); // Larger increments
      setPeopleVetted((prev) => prev + Math.floor(Math.random() * 100) + 50); // Larger increments
    }, 1000);

    // Simulate chain of thought
    const allSteps: ChainOfThoughtStep[] = [
      { id: 1, text: "Parsing problem statement and extracting core requirements...", status: "active" },
      { id: 2, text: "Identifying key expertise domains and relevant industries...", status: "pending" },
      { id: 3, text: "Formulating advanced semantic search queries across multiple engines...", status: "pending" },
      { id: 4, text: "Crawling and indexing specialized academic databases and research papers...", status: "pending" },
      { id: 5, text: "Analyzing professional networking platforms (e.g., LinkedIn, industry-specific forums)...", status: "pending" },
      { id: 6, text: "Cross-referencing open-source contributions and public code repositories (e.g., GitHub)...", status: "pending" },
      { id: 7, text: "Evaluating portfolio relevance, project impact, and demonstrable skills...", status: "pending" },
      { id: 8, text: "Conducting sentiment analysis on public reviews, testimonials, and peer endorsements...", status: "pending" },
      { id: 9, text: "Synthesizing comprehensive candidate profiles from disparate data sources...", status: "pending" },
      { id: 10, text: "Applying proprietary algorithms to rank candidates by problem-solving fit and experience depth...", status: "pending" },
      { id: 11, text: "Generating a detailed, actionable report of top-tier expert recommendations...", status: "pending" },
      { id: 12, text: "Finalizing expert profiles and preparing for presentation...", status: "pending" },
    ];
    setChainOfThoughtSteps(allSteps);

    let currentStepIndex = 0;
    const chainInterval = setInterval(() => {
      setChainOfThoughtSteps((prevSteps) => {
        const newSteps = [...prevSteps];

        if (currentStepIndex < newSteps.length) {
          if (currentStepIndex > 0) {
            newSteps[currentStepIndex - 1].status = "completed";
          }
          newSteps[currentStepIndex].status = "active";
          currentStepIndex++;
        } else {
          // All steps completed, mark the last one as completed
          newSteps[newSteps.length - 1].status = "completed";
          clearInterval(chainInterval);
        }
        return newSteps;
      });
    }, 2500); // Faster progression for steps


    return () => {
      clearInterval(progressInterval);
      clearInterval(metricsInterval);
      clearInterval(chainInterval);
    };
  }, []);

  return (
    <div className="relative flex flex-col min-h-screen bg-white animate-fade-in p-4 md:p-8">
      <h1 className="absolute top-4 left-4 font-serif text-3xl md:text-4xl text-black">
        TRAC
      </h1>

      <div className="flex-grow flex items-center justify-center">
        <div className="w-full max-w-2xl space-y-6">
          <h2 className="text-xl md:text-2xl font-bold text-black text-center">
            TRAC AI Agent is actively searching for your ideal expert...
          </h2>

          <ProgressBar progress={progress} />

          <MetricsDisplay websitesVisited={websitesVisited} peopleVetted={peopleVetted} />

          <h3 className="text-lg font-semibold text-black mt-8">Agent's Chain of Thought:</h3>
          <ChainOfThought steps={chainOfThoughtSteps} />
        </div>
      </div>
    </div>
  );
};