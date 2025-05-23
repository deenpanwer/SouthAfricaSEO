
import Image from 'next/image';
import { CLIENT_LOGOS } from '@/lib/constants.tsx';

export function ClientLogosSection() {
  if (!CLIENT_LOGOS || CLIENT_LOGOS.length === 0) {
    return null;
  }

  // Duplicate logos for seamless infinite scroll effect
  const duplicatedLogos = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section className="py-12 md:py-16 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-semibold text-foreground mb-2">
          Trusted by Leading Businesses
        </h2>
        <p className="text-center text-muted-foreground mb-10">
          We're proud to have partnered with innovative companies of all sizes.
        </p>
        <div className="overflow-hidden space-y-6">
          {/* Row 1: Scrolls Left to Right */}
          <div className="relative w-full h-20 group">
            <div className="absolute inset-0 flex items-center animate-scroll-left group-hover:[animation-play-state:paused]">
              {duplicatedLogos.map((logo, index) => (
                <div key={`ltr-${index}`} className="flex-shrink-0 w-auto h-12 mx-6 md:mx-10 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                  <Image
                    src={logo.imageUrl}
                    alt={`${logo.name} logo`}
                    width={120} 
                    height={48} 
                    data-ai-hint={logo.dataAiHint}
                    className="object-contain h-full w-auto"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Scrolls Right to Left */}
          <div className="relative w-full h-20 group">
            <div className="absolute inset-0 flex items-center animate-scroll-right group-hover:[animation-play-state:paused]">
              {duplicatedLogos.map((logo, index) => (
                <div key={`rtl-${index}`} className="flex-shrink-0 w-auto h-12 mx-6 md:mx-10 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                  <Image
                    src={logo.imageUrl}
                    alt={`${logo.name} logo`}
                    width={120}
                    height={48}
                    data-ai-hint={logo.dataAiHint}
                    className="object-contain h-full w-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
