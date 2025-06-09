import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

export const AwardWinningSection = () => {
 return (
  <><section className="py-16 bg-gray-50">
     <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
       <h2 className="text-3xl font-bold text-gray-800 mb-4">Award-Winning SEO Agency.</h2>
       <p className="text-gray-600 max-w-2xl mx-auto mb-4">
         Trac is a national web design, seo, mdigital marketing company. We are a full-service digital marketing agency that provides everything to take a business from concept to launch.
       </p>
       <Link href="#" className="text-orange-500 font-semibold hover:text-orange-600">Read More <ChevronRight className="inline w-4 h-4" /></Link>
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