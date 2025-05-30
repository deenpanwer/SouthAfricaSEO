
import Image from 'next/image';
import type { CityAwardData } from '@/types';

interface CityAwardsProps {
  clutchAward: CityAwardData;
  upcityAward: CityAwardData;
  cityName: string; // For dynamic text if needed, though mostly handled in cityConstants
}

export function CityAwards({ clutchAward, upcityAward, cityName }: CityAwardsProps) {
  return (
    <section className="py-12 md:py-16 bg-white text-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Clutch Award */}
          <div className="text-center md:text-left">
            {clutchAward.logoUrl && (
              <Image 
                src={clutchAward.logoUrl} 
                alt={clutchAward.logoAlt || "Clutch Award Logo"} 
                width={150} 
                height={50} 
                className="mb-4 mx-auto md:mx-0"
                data-ai-hint="award logo" 
              />
            )}
            <h3 className="text-2xl font-semibold mb-2">{clutchAward.headline}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{clutchAward.text}</p>
            {/* Additional details if any, e.g., link to profile */}
          </div>

          {/* UpCity Award */}
          <div className="text-center md:text-left">
             {upcityAward.logoUrl && (
              <div className="flex justify-center md:justify-start mb-4">
                <Image 
                  src={upcityAward.logoUrl} // Assuming a placeholder if no specific logo
                  alt={upcityAward.logoAlt || "UpCity Award Logo"} 
                  width={180} // Example, adjust as needed
                  height={60}  // Example, adjust as needed
                  className="mb-4 mx-auto md:mx-0"
                  data-ai-hint="excellence award badge"
                />
              </div>
            )}
            <h3 className="text-2xl font-semibold mb-2">{upcityAward.headline}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{upcityAward.text}</p>
            {/* Additional details */}
          </div>
        </div>
      </div>
    </section>
  );
}
