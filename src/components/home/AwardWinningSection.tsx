
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

export const AwardWinningSection = () => {
 return (
  <><section className="py-16 bg-gray-50">
     <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
       <h2 className="text-3xl font-bold text-gray-800 mb-4">An Award-Winning Digital Marketing Agency</h2>
       <p className="text-gray-600 max-w-2xl mx-auto mb-4">
         Awards are a byproduct of results. Our recognition from industry leaders like Clutch and UpCity isn't just about trophies; it's third-party validation that our first-principles approach works. It confirms that our focus on transparent, ROI-driven strategies creates measurable value for our clients.
       </p>
       <p className="text-gray-600 max-w-2xl mx-auto mb-8">
        We are honored by accolades such as the <strong>Global SEO Excellence Award (2023)</strong>, the <strong>National Excellence Award from UpCity</strong>, and consistent recognition as a <strong>Top B2B Company by Clutch</strong>. These awards reflect our unwavering commitment to client success.
       </p>
     </div>
   </section><section className="py-8 bg-white">
       <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
         <Image
           src="https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/awardimage2020.jpg"
           alt="Award Strip"
           width={1000}
           height={50}
           className="mx-auto" />
       </div>
     </section></>
 );
};
