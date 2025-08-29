
import Image from 'next/image';
import type { AutoDealerStateAwardData } from '@/types';

interface AutoDealerStateAwardsProps {
  clutchAward: AutoDealerStateAwardData;
  upcityAward: AutoDealerStateAwardData;
  stateName: string;
}

const clutchAwardImageData = {
  src: '/home/Top-SEO-Agencies-2025-by-Clutch.webp',
  alt: 'Clutch Award Logo for Automotive SEO Excellence',
};
const upcityAwardImageData = {
  src: '/home/Trac-National-Excellence-Awards-2025-in-United-States-UpCity.webp',
  alt: 'UpCity National Excellence Award Logo for Auto Dealer SEO',
}
const AWARD_BADGES_STRIP_IMAGE = 'https://thriveagency.com/files/awardimage2020.jpg';
const AWARD_BADGES_STRIP_ALT = 'Various digital marketing and automotive SEO awards recognitions';

const clutchCategories = [
  'Auto Dealer SEO Services',
  'Local SEO for Car Dealerships',
  'Automotive Digital Marketing',
  'Lead Generation for Auto Sales',
];

export function AutoDealerStateAwards({ clutchAward, upcityAward, stateName }: AutoDealerStateAwardsProps) {
  return (
    <section className="py-12 md:py-16 bg-background text-foreground">
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
                data-ai-hint="award logo auto seo"
              />
            </div>
            <div className="flex-grow text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-3">{clutchAward.headline.replace('[StateName]', stateName)}</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">{clutchAward.text.replace('[StateName]', stateName)}</p>
              <ul className="list-disc list-inside text-muted-foreground text-sm mb-4">
                {clutchCategories.map((category, index) => (
                  <li key={index}>{category}</li>
                ))}
              </ul>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                TRAC consistently earns top ratings on Clutch for {stateName} auto dealer SEO. Check out <a href="https://clutch.co/profile/traconomics" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">our reviews</a>.
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
                data-ai-hint="excellence award badge auto seo"
              />
            </div>
            <div className="flex-grow text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-3">{upcityAward.headline.replace('[StateName]', stateName)}</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">{upcityAward.text.replace('[StateName]', stateName)}</p>
              <p className="leading-relaxed text-muted-foreground">
                TRAC is honored for automotive SEO leadership in {stateName} by UpCity. See our <a href="https://upcity.com/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">client success stories</a>.
              </p>
            </div>
          </div>

          <div className="mt-8 md:mt-12 text-center">
            <Image src={AWARD_BADGES_STRIP_IMAGE} alt={AWARD_BADGES_STRIP_ALT} width={800} height={100}
              className="mx-auto w-full h-auto object-contain"
              data-ai-hint="collection award badges auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
