
import React from 'react';
import Image from 'next/image';
// Assuming a carousel component exists or will be created, e.g., from shadcn/ui or a custom one
// import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

interface ProjectItem {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl?: string; // Link to the live project or case study
}

interface ProjectShowcaseCarouselProps {
  headline: string;
  description: string;
  projects: ProjectItem[];
}

export function ProjectShowcaseCarousel({ headline, description, projects }: ProjectShowcaseCarouselProps) {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          {headline}
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          {description}
        </p>
        {/* Placeholder for Carousel Component */}
        <div className="relative w-full max-w-5xl mx-auto">
          {/* This is where your actual carousel implementation would go */}
          <div className="flex overflow-x-auto snap-x snap-mandatory space-x-4 pb-4">
            {projects.map((project, index) => (
              <div key={index} className="flex-shrink-0 w-80 snap-center bg-white rounded-lg shadow-md overflow-hidden">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={320}
                  height={200} // Adjust height as needed
                  objectFit="cover"
                  className="w-full h-48"
                />
                <div className="p-4 text-left">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm">{project.description}</p>
                  {project.projectUrl && (
                    <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline mt-2 inline-block text-sm">
                      View Project
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
          {/* Navigation buttons for carousel would go here */}
        </div>
      </div>
    </section>
  );
}
