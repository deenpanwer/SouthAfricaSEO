
import Image from 'next/image';
import type { LandscapingStateAwardData } from '@/types';

interface LandscapingStateAwardsProps {
  clutchAward: LandscapingStateAwardData;
  upcityAward: LandscapingStateAwardData;
  stateName: string; 
}

const clutchAwardImageData = {
  src: '/home/Top-SEO-Agencies-2025-by-Clutch.webp',
  alt: 'Clutch Award Logo for SEO Excellence',
};
const upcityAwardImageData = {
  src: '/home/Trac-National-Excellence-Awards-2025-in-United-States-UpCity.webp',
  alt: 'UpCity National Excellence Award Logo for SEO',
}
const AWARD_BADGES_STRIP_IMAGE = 'https://thriveagency.com/files/awardimage2020.jpg';
const AWARD_BADGES_STRIP_ALT = 'Various digital marketing and SEO awards recognitions';

const clutchCategories = [
  'Landscaping SEO Services',
  'Local SEO for Green Industry',
  'Content Marketing for Landscapers',
  'Lead Generation for Outdoor Services',
];

export function LandscapingStateAwards({ clutchAward, upcityAward, stateName }: LandscapingStateAwardsProps) {
  return (
    <section className="py-12 md:py-16 bg-white text-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 md:gap-16">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">
            <div className="flex-shrink-0 mx-auto md:mx-0">
              <Image
                src={clutchAwardImageData.src}
                alt={clutchAwardImageData.alt}
                width={200}
                height={200}
                className="w-auto h-auto"
                data-ai-hint="award logo seo"
              />
            </div>
            <div className="flex-grow text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">{clutchAward.headline.replace('[StateName]', stateName)}</h3>
              <p className="text-gray-700 leading-relaxed mb-4">{clutchAward.text.replace('[StateName]', stateName)}</p>
              <ul className="list-disc list-inside text-gray-600 text-sm mb-4">
                {clutchCategories.map((category, index) => (
                  <li key={index}>{category}</li>
                ))}
              </ul>
              <p className="mb-4 leading-relaxed">
                Agencies are chosen for this distinction based on overall market presence and client feedback for SEO services. TRAC maintains a top rating on Clutch for {stateName} landscaping SEO. Check out the <a href="https://clutch.co/profile/traconomics" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">reviews</a>.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">
            <div className="flex-shrink-0 mx-auto md:mx-0">
              <Image
                src={upcityAwardImageData.src}
                alt={upcityAwardImageData.alt}
                width={200}
                height={200}
                className="w-auto h-auto"
                data-ai-hint="excellence award badge seo"
              />
            </div>
            <div className="flex-grow text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">{upcityAward.headline.replace('[StateName]', stateName)}</h3>
              <p className="text-gray-700 leading-relaxed mb-4">{upcityAward.text.replace('[StateName]', stateName)}</p>
              <p className="leading-relaxed">
                TRAC is proud of its 5.0 rating on UpCity for landscaping SEO services in {stateName}. See our <a href="https://upcity.com/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">client reviews</a>.
              </p>
            </div>
          </div>

          <div className="mt-8 md:mt-12 text-center">
            <Image src={AWARD_BADGES_STRIP_IMAGE} alt={AWARD_BADGES_STRIP_ALT} width={800} height={100}
              className="mx-auto w-full h-auto object-contain"
              data-ai-hint="collection award badges"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
