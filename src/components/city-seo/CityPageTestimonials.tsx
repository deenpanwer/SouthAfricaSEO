
import Image from 'next/image';
import type { Testimonial } from '@/types';

interface CityPageTestimonialsProps {
  testimonials: Testimonial[]; // Using existing Testimonial type
}

export function CityPageTestimonials({ testimonials }: CityPageTestimonialsProps) {
  // Using the first 3 testimonials for display, matching the image layout
  const displayTestimonials = testimonials.slice(0, 3);

  return (
    <section className="py-12 md:py-16 bg-gray-50 text-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-2">But Don’t Take Our Word For It</h2>
        <p className="text-center text-gray-600 mb-10 max-w-xl mx-auto">
          Hear directly from clients who have experienced growth with TRAC.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {displayTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md text-center">
              <Image
                src={testimonial.avatarUrl}
                alt={testimonial.name}
                width={80}
                height={80}
                className="rounded-full mx-auto mb-4 border-2 border-yellow-400"
                data-ai-hint={testimonial.dataAiHint || "client photo"}
              />
              <h3 className="font-semibold text-lg mb-0.5">{testimonial.name}</h3>
              <p className="text-xs text-gray-500 mb-3">{testimonial.company}</p>
              <blockquote className="text-gray-600 italic text-sm leading-relaxed mb-3">
                "{testimonial.quote}"
              </blockquote>
              <div className="mt-auto pt-3 border-t border-gray-200">
                <span className="text-xs bg-yellow-300 px-2 py-1 rounded text-gray-700 font-medium">
                  "{testimonial.quote.split(' ').slice(0, 5).join(' ')}..." {/* Highlight first few words */}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
