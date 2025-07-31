
import Image from 'next/image';
import type { CityAwardData } from '@/types';

interface CityAwardsProps {
  clutchAward: Omit<CityAwardData, 'logoUrl' | 'logoAlt'>;
  upcityAward: Omit<CityAwardData, 'logoUrl' | 'logoAlt'>;
  cityName: string; // For dynamic text if needed, though mostly handled in cityConstants
}

const clutchAwardImageData = {
  src: '/home/Top-SEO-Agencies-2025-by-Clutch.webp',
  alt: 'Top SEO Agencies 2025 by Clutch',
};
const upcityAwardImageData = {
  src: '/home/Trac-National-Excellence-Awards-2025-in-United-States-UpCity.webp',
  alt: 'Trac National Excellence Awards 2025 in United States by UpCity',
}

const AWARD_BADGES_STRIP_IMAGE = '/home/awardimage2025.webp';
const AWARD_BADGES_STRIP_ALT = 'Various digital marketing awards and recognitions';

// Hardcoded categories for Clutch award
const clutchCategories = [
  'Digital Marketing Agency',
  'SEO Agency',
  'PPC Agency',
  'Social Media Agency',
  'Web Design Agency',
];

export function CityAwards({ clutchAward, upcityAward, cityName }: CityAwardsProps) {
  return (
    <section className="py-12 md:py-16 bg-white text-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 md:gap-16"> {/* Container for both awards */}
          {/* Clutch Award */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10"> {/* Flex container for Clutch award */}
            <div className="flex-shrink-0 mx-auto md:mx-0"> {/* Added mx-auto for centering on small screens */}
              <Image
                src={clutchAwardImageData.src}
                alt={clutchAwardImageData.alt}
                width={200} // Adjusted width based on screenshot
                height={200} // Adjusted height based on screenshot
                className="w-auto h-auto" // Use auto for responsiveness
                data-ai-hint="award logo"
              />
            </div>
            <div className="flex-grow text-center md:text-left"> {/* Text content for Clutch award */}
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">{clutchAward.headline}</h3> {/* Increased font size and weight */}
              <p className="text-gray-700 leading-relaxed mb-4">{clutchAward.text}</p> {/* Slightly darker text, added margin */}
              <ul className="list-disc list-inside text-gray-600 text-sm mb-4"> {/* Added list with spacing */}
                {clutchCategories.map((category, index) => (
                  <li key={index}>{category}</li>
                ))}
              </ul>
              {/* Final Paragraphs with Links */}
              <p className="mb-4 leading-relaxed">
                Agencies are chosen for this distinction based off of several factors, including overall market presence and, most importantly, client feedback. Thrive has a 5.0 rating on Clutch. Check out the <a href="https://clutch.co/" className="text-blue-600 hover:underline">reviews</a>.
              </p>
              {/* Placeholder for "Check out the reviews" link */}
              {/* <p className="text-sm text-gray-600">Thrive has a 5.0 rating on Clutch. Check out the <a href="#" className="text-blue-600 hover:underline">reviews</a>.</p> */}
            </div>
          </div>

          {/* UpCity Award */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10"> {/* Flex container for UpCity award */}
            <div className="flex-shrink-0 mx-auto md:mx-0"> {/* Added mx-auto for centering on small screens */}
              <Image
                src={upcityAwardImageData.src}
                alt={upcityAwardImageData.alt}
                width={200} // Adjusted width based on screenshot
                height={200} // Adjusted height based on screenshot
                className="w-auto h-auto" // Use auto for responsiveness
                data-ai-hint="excellence award badge"
              />
            </div>
            <div className="flex-grow text-center md:text-left"> {/* Text content for UpCity award */}
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">{upcityAward.headline}</h3> {/* Increased font size and weight */}
              <p className="text-gray-700 leading-relaxed mb-4">{upcityAward.text}</p> {/* Slightly darker text, added margin */}
              <p className="leading-relaxed">
                {/* Final Paragraphs with Links */}
                Thrive has a 5.0 rating on UpCity. Check out the <a href="https://upcity.com/" className="text-blue-600 hover:underline">reviews</a>.
              </p>
              {/* Placeholder for quote */}
              {/* <blockquote className="text-gray-600 italic mb-4">
                "The strength of our marketplace is built on the credibility of truly excellent providers like Thrive Internet Marketing," said Dan Olson, CEO of UpCity. "We are pleased to honor Thrive with a National Excellence Award in Portland."
              </blockquote> */}
              {/* Placeholder for "Check out the reviews" link */}
              {/* <p className="text-sm text-gray-600">Thrive has a 5.0 rating on UpCity. Check out the <a href="#" className="text-blue-600 hover:underline">reviews</a>.</p> */}
            </div>
          </div>

          {/* Award Badges Strip */}
          <div className="mt-8 md:mt-12 text-center"> {/* Added top margin */}
            <Image src={AWARD_BADGES_STRIP_IMAGE} alt={AWARD_BADGES_STRIP_ALT} width={800} // Example width, adjust as needed
 height={100} // Example height, adjust as needed
              className="mx-auto w-full h-auto object-contain" // Center and maintain aspect ratio
              data-ai-hint="collection of award badges"
            />
          {/* No extra div needed for centering the image if parent is text-center and image is mx-auto w-full */}
          </div>
        </div>
      </div>
    </section>
  );
}
