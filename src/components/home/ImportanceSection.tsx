
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import { IMPORTANCE_OF_STRATEGY } from '@/lib/constants.tsx'; // Updated constant name

export function ImportanceSection() {
  const { title, points, imageUrl, dataAiHint } = IMPORTANCE_OF_STRATEGY; // Using IMPORTANCE_OF_STRATEGY

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="md:col-span-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              {title}
            </h2>
            <ul className="space-y-6">
              {points.map((point, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0">
                    <point.icon className="h-8 w-8 text-primary mr-4 mt-1" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">{point.title}</h3>
                    <p className="text-muted-foreground">{point.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
