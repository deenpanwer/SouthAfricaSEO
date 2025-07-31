import Image from "next/image";
import { Star } from 'lucide-react';

// Helper component for star ratings
const StarRating = ({ rating, count }: { rating: number; count?: number }) => (
  <div className="flex items-center">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
    ))}
    {count && <span className="ml-2 text-sm text-gray-600">{count} Reviews</span>}
  </div>
);


export const PartnerLogosSection = () => (
  <section className="py-12 bg-green-700 text-white">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="flex flex-col items-center">
          <Image src="/home/google-reviews-stats-new.svg" alt="Google Reviews" width={150} height={50} className="mx-auto mb-2" data-ai-hint="Google logo reviews" />
          <StarRating rating={5} />
          <p className="text-sm mt-1 text-yellow-400">500+ Reviews</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/home/clutch-reviews-stats-new.svg" alt="Clutch" width={120} height={40} className="mx-auto mb-2" data-ai-hint="Clutch logo" />
           <StarRating rating={5} />
          <p className="text-sm mt-1 text-yellow-400">200+ Reviews</p>
        </div>
        <div className="flex flex-col items-center">          
          <Image src="/home/upcity-reviews-logo-new.svg" alt="UpCity" width={130} height={45} className="mx-auto mb-2" data-ai-hint="UpCity logo" />           
          <StarRating rating={5} />          
          <p className="text-sm mt-1 text-yellow-400">150+ Reviews</p>        
          </div>
      </div>
    </div>
  </section>
);