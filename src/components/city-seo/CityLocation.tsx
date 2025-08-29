
import type { CityLocationData } from '@/types';
import Image from 'next/image';
import { MapPin, Phone, Mail } from 'lucide-react'; // Assuming using lucide icons

interface CityLocationProps {
  locationData: CityLocationData;
  cityName: string;
}

export function CityLocation({ locationData, cityName }: CityLocationProps) {
  return (
    <section className="py-12 md:py-16 bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-green-700">Visit Our {cityName} Office</h2>
            <div className="space-y-3 text-gray-700">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  {/* Display address using new structured properties */}
                  <p>{locationData.streetAddress}</p>
                  <p>{locationData.addressLocality}, {locationData.addressRegion} {locationData.postalCode}</p>
                  {/* You might want to conditionally render the country if needed */}
                  {/* <p>{locationData.addressCountry}</p> */}

                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-orange-500 mr-3" />
                <a href={`tel:${locationData.phone.replace(/\D/g, '')}`} className="hover:text-orange-600">{locationData.phone}</a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-orange-500 mr-3" />
                <a href={`mailto:${locationData.email}`} className="hover:text-orange-600">{locationData.email}</a>
              </div>
            </div>
          </div>
          {locationData.officeImageUrl && (
            <div className="rounded-lg overflow-hidden shadow-md">
              <Image
                src={locationData.officeImageUrl}
                alt={`${cityName} Office Photo`}
                width={600} // Adjust as needed for desired image size
                height={400} // Adjust as needed for desired image size
                title={`${cityName} Office Location`}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
