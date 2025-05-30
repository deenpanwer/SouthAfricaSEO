
import Image from 'next/image';

interface CityResultsHighlightsProps {
  headline: string;
}

// Data based on the image
const resultsData = [
  { percentage: "+664%", label: "Organic Traffic", imageUrl: "https://placehold.co/600x400.png?text=Client+A", videoId: "VIDEO_ID_1", clientDescription: "Company A marketing results" },
  { percentage: "+360%", label: "Conversion Rate", imageUrl: "https://placehold.co/600x400.png?text=Client+B", videoId: "VIDEO_ID_2", clientDescription: "Company B sales growth" },
  // The image shows two main blocks, each with two percentages.
  // To simplify, I'm treating each major block as one client with two key metrics.
  // Alternatively, each percentage could be its own card.
  // For now, two main blocks.
];
const secondaryResultsData = [
    { percentage: "+800%", label: "Client Leads", imageUrl: "https://placehold.co/600x400.png?text=Client+C", videoId: "VIDEO_ID_3", clientDescription: "Company C lead generation"},
    { percentage: "+640%", label: "Customer Base", imageUrl: "https://placehold.co/600x400.png?text=Client+D", videoId: "VIDEO_ID_4", clientDescription: "Company D customer increase"},
]


export function CityResultsHighlights({ headline }: CityResultsHighlightsProps) {
  // In a real scenario, you might pass video IDs or click handlers.
  // For now, clicking the image will just be visual.

  return (
    <section className="py-12 md:py-16 bg-white text-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-10">{headline}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* First Client Block */}
          <div className="border border-gray-200 rounded-lg shadow-md overflow-hidden">
            <div className="relative aspect-[16/7] cursor-pointer group"> {/* Adjusted aspect ratio */}
              <Image
                src={resultsData[0].imageUrl}
                alt={resultsData[0].clientDescription}
                layout="fill"
                objectFit="cover"
                data-ai-hint="business results graph"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 flex items-center justify-center transition-opacity">
                 {/* You can add a play icon here if it's a video thumbnail */}
              </div>
            </div>
            <div className="bg-yellow-400 p-3">
              <h3 className="font-semibold text-gray-800 text-center text-sm">"The results speak for themselves"</h3>
            </div>
            <div className="p-6 grid grid-cols-2 gap-4 text-center">
              <div>
                <p className="text-4xl font-bold text-green-600">{resultsData[0].percentage}</p>
                <p className="text-sm text-gray-600 uppercase">{resultsData[0].label}</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-green-600">{resultsData[1].percentage}</p>
                <p className="text-sm text-gray-600 uppercase">{resultsData[1].label}</p>
              </div>
            </div>
          </div>

          {/* Second Client Block */}
           <div className="border border-gray-200 rounded-lg shadow-md overflow-hidden">
            <div className="relative aspect-[16/7] cursor-pointer group"> {/* Adjusted aspect ratio */}
              <Image
                src={secondaryResultsData[0].imageUrl}
                alt={secondaryResultsData[0].clientDescription}
                layout="fill"
                objectFit="cover"
                data-ai-hint="marketing success chart"
              />
               <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 flex items-center justify-center transition-opacity">
                 {/* You can add a play icon here if it's a video thumbnail */}
              </div>
            </div>
            <div className="bg-yellow-400 p-3">
              <h3 className="font-semibold text-gray-800 text-center text-sm">"TRAC goes above and beyond"</h3>
            </div>
            <div className="p-6 grid grid-cols-2 gap-4 text-center">
              <div>
                <p className="text-4xl font-bold text-green-600">{secondaryResultsData[0].percentage}</p>
                <p className="text-sm text-gray-600 uppercase">{secondaryResultsData[0].label}</p>
              </div>
               <div>
                <p className="text-4xl font-bold text-green-600">{secondaryResultsData[1].percentage}</p>
                <p className="text-sm text-gray-600 uppercase">{secondaryResultsData[1].label}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
