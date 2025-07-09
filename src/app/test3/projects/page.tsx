
import Image from 'next/image';
import { projectsData } from '../data/projects';
import type { Metadata } from 'next';
import { Button } from '../components/ui/Button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Projects',
  description: 'Browse the portfolio of EnviroPainting\'s completed projects. See our commitment to quality craftsmanship in residential and commercial painting.',
};

export default function ProjectsPage() {
  return (
    <div className="bg-enviro-background text-enviro-text">
      <div className="container mx-auto px-6 py-16 md:py-24">
        
        <section className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-enviro-green mb-4">Our Work</h1>
          <p className="text-lg text-enviro-text/80">
            We take pride in every project, big or small. Explore our gallery of recently completed residential and commercial painting projects to see the quality and care we bring to every space.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projectsData.map((project, index) => (
            <div key={index} className="group overflow-hidden rounded-2xl bg-white shadow-soft">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={project.dataAiHint}
                />
              </div>
              <div className="p-6">
                <p className="text-sm font-semibold text-enviro-pink uppercase tracking-wider">{project.category}</p>
                <h2 className="text-2xl font-bold text-enviro-green mt-1">{project.title}</h2>
                <p className="text-enviro-text/70 mt-2">{project.description}</p>
              </div>
            </div>
          ))}
        </section>

        <section className="mt-20 text-center">
            <h2 className="text-3xl font-bold text-enviro-green mb-4">Inspired to start your own transformation?</h2>
            <Button variant="primary" asChild size="lg">
                <Link href="/test3/contact">Let's Talk About Your Project</Link>
            </Button>
        </section>

      </div>
    </div>
  );
}
