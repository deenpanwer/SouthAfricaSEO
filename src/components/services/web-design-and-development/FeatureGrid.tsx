
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureItem {
  title: string;
  description: string;
  icon: LucideIcon; // LucideIcon component
}

interface FeatureGridProps {
  headline: string;
  description: string;
  features: FeatureItem[];
}

export function FeatureGrid({ headline, description, features }: FeatureGridProps) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          {headline}
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          {description}
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="mb-4">
                <feature.icon className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
