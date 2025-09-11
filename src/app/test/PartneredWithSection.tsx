import Image from 'next/image';
import { PARTNER_LOGOS } from '@/lib/constants.tsx';

export function PartneredWithSection() {
  if (!PARTNER_LOGOS || PARTNER_LOGOS.length === 0) {
    return null;
  }

  return (
    <section className="py-12 md:py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-semibold text-foreground mb-8">
          Partnered With
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {PARTNER_LOGOS.map((logo, index) => (
            <div key={`partner-${index}`} className="flex-shrink-0 w-auto h-16">
              <Image
                src={logo.imageUrl}
                alt={`${logo.name} logo`}
                width={150}
                height={64}
                className="object-contain h-full w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}