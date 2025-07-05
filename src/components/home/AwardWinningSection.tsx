
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

export const AwardWinningSection = () => {
 return (
  <><section className="py-16 bg-gray-50">
     <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
       <h2 className="text-3xl font-bold text-gray-800 mb-4">An Award-Winning Digital Marketing Agency</h2>
       <p className="text-gray-600 max-w-2xl mx-auto mb-4">
         TRAC isn't just another agency. We are a full-service digital marketing partner recognized for our commitment to excellence and innovation. Our strategies are consistently honored by leading industry bodies for their effectiveness and impact on client growth.
       </p>
       <p className="text-gray-600 max-w-2xl mx-auto mb-8">
         We are proud recipients of accolades such as the <strong>Global SEO Excellence Award (2023)</strong>, <strong>National Excellence Award from UpCity</strong>, and consistent recognition as a <strong>Top B2B Company by Clutch</strong>. These awards reflect our dedication to driving real, measurable results through strategic, data-driven marketing.
       </p>
       {/* "Read More" link is removed as the content is now more comprehensive. */}
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
