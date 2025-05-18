import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import { IMPORTANCE_OF_SEO_SA } from '@/lib/constants.tsx';

export function ImportanceSection() {
  const { title, points, imageUrl, dataAiHint } = IMPORTANCE_OF_SEO_SA;

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
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
          <div className="relative aspect-square rounded-xl overflow-hidden shadow-xl order-first md:order-last">
            <Image
              src={imageUrl}
              alt="Importance of SEO in South Africa"
              data-ai-hint={dataAiHint || "business strategy"}
              layout="fill"
              objectFit="cover"
            />
             <div className="absolute inset-0 bg-primary/10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
