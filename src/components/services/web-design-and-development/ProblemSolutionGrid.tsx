
import React from 'react';
import { IconType } from 'react-icons'; // Assuming react-icons for icons, or similar
import { XCircle, CheckCircle } from 'lucide-react'; // Example icons

interface ProblemSolutionItem {
  problem: string;
  solution: string;
  problemIcon?: IconType; // Optional icon for problem
  solutionIcon?: IconType; // Optional icon for solution
}

interface ProblemSolutionGridProps {
  headline: string;
  description: string;
  items: ProblemSolutionItem[];
}

export function ProblemSolutionGrid({ headline, description, items }: ProblemSolutionGridProps) {
  return (
    <section className="py-16 md:py-24 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          {headline}
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          {description}
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="flex items-center justify-center space-x-4 mb-6">
                {item.problemIcon && <item.problemIcon className="h-10 w-10 text-red-500" />}
                <h3 className="text-xl font-semibold text-gray-800">{item.problem}</h3>
              </div>
              <p className="text-gray-600 mb-6">{item.solution}</p>
              <div className="flex items-center justify-center space-x-2 text-green-600 font-medium">
                <CheckCircle className="h-5 w-5" />
                <span>Our Solution</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
