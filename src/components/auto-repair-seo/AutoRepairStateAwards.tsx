
import Image from 'next/image';
import type { AutoRepairStateAwardData } from '@/types';

interface AutoRepairStateAwardsProps {
  clutchAward: AutoRepairStateAwardData;
  upcityAward: AutoRepairStateAwardData;
  stateName: string;
}

const clutchAwardImageData = {
  src: 'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/Top-Digital-Marketing-Agencies-2021-by-Clutch.png',
  alt: 'Clutch Award Logo for Auto Repair SEO',
};
const upcityAwardImageData = {
  src: 'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/Thrive-National-Excellence-Awards-2021-in-United-States-761x761.png',
  alt: 'UpCity National Excellence Award Logo for Auto Repair SEO',
}
const AWARD_BADGES_STRIP_IMAGE = 'https://thriveagency.com/files/awardimage2020.jpg';
const AWARD_BADGES_STRIP_ALT = 'Various digital marketing and auto repair SEO awards';

const clutchCategories = [
  'Auto Repair Shop SEO',
  'Local SEO for Mechanics',
  'Automotive Service Marketing',
  'Lead Generation for Garages',
];

export function AutoRepairStateAwards({ clutchAward, upcityAward, stateName }: AutoRepairStateAwardsProps) {
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
                data-ai-hint="award logo auto repair"
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
                TRAC is consistently recognized on Clutch for top-tier {stateName} auto repair SEO. View <a href="https://clutch.co/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">client reviews</a>.
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
                data-ai-hint="excellence award badge auto repair"
              />
            </div>
            <div className="flex-grow text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-3">{upcityAward.headline.replace('[StateName]', stateName)}</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">{upcityAward.text.replace('[StateName]', stateName)}</p>
              <p className="leading-relaxed text-muted-foreground">
                UpCity honors TRAC for its leading auto repair SEO services in {stateName}. Discover <a href="https://upcity.com/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">our achievements</a>.
              </p>
            </div>
          </div>

          <div className="mt-8 md:mt-12 text-center">
            <Image src={AWARD_BADGES_STRIP_IMAGE} alt={AWARD_BADGES_STRIP_ALT} width={800} height={100}
              className="mx-auto w-full h-auto object-contain"
              data-ai-hint="collection award badges auto repair"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
