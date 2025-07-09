
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/Button';
import { projectsData } from '../data/projects';

export function ProjectsShowcase() {
  const featuredProjects = projectsData.slice(0, 2);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-enviro-green">Our Recent Work</h2>
          <p className="text-lg text-enviro-text/80 mt-4">A glimpse into the transformations we've created for our happy clients.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <div key={index} className="group overflow-hidden rounded-2xl shadow-soft">
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
              <div className="p-6 bg-white">
                <p className="text-sm font-semibold text-enviro-pink uppercase tracking-wider">{project.category}</p>
                <h3 className="text-2xl font-bold text-enviro-green mt-1">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
         <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link href="/enviropainting/projects">
              View All Projects
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
