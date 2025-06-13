
import Image from 'next/image';
import type { VeterinaryStateAwardData } from '@/types'; // Assuming this type exists or is adapted

interface VeterinaryStateAwardsProps {
  clutchAward: VeterinaryStateAwardData;
  upcityAward: VeterinaryStateAwardData;
  stateName: string;
}

const clutchAwardImageData = {
  src: 'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/Top-Digital-Marketing-Agencies-2021-by-Clutch.png',
  alt: 'Clutch Award Logo for SEO Excellence',
};
const upcityAwardImageData = {
  src: 'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/Thrive-National-Excellence-Awards-2021-in-United-States-761x761.png',
  alt: 'UpCity National Excellence Award Logo for SEO',
}
const AWARD_BADGES_STRIP_IMAGE = 'https://thriveagency.com/files/awardimage2020.jpg';
const AWARD_BADGES_STRIP_ALT = 'Various digital marketing and SEO awards recognitions';

const clutchCategories = [ // General categories, can be customized if needed
  'Veterinary SEO Services',
  'Local SEO for Animal Clinics',
  'Healthcare Marketing for Vets',
  'Lead Generation for Pet Services',
];

export function VeterinaryStateAwards({ clutchAward, upcityAward, stateName }: VeterinaryStateAwardsProps) {
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
                data-ai-hint="award logo vet seo"
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
                TRAC maintains a top rating on Clutch for {stateName} veterinary SEO. Check out the <a href="https://clutch.co/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">reviews</a>.
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
                data-ai-hint="excellence award badge vet seo"
              />
            </div>
            <div className="flex-grow text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-3">{upcityAward.headline.replace('[StateName]', stateName)}</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">{upcityAward.text.replace('[StateName]', stateName)}</p>
              <p className="leading-relaxed text-muted-foreground">
                TRAC is proud of its excellent rating on UpCity for veterinary SEO services in {stateName}. See our <a href="https://upcity.com/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">client reviews</a>.
              </p>
            </div>
          </div>

          <div className="mt-8 md:mt-12 text-center">
            <Image src={AWARD_BADGES_STRIP_IMAGE} alt={AWARD_BADGES_STRIP_ALT} width={800} height={100}
              className="mx-auto w-full h-auto object-contain"
              data-ai-hint="collection award badges vet"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
