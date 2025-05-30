"use client";

import Image from "next/image";
import Link from 'next/link';
import { Star } from 'lucide-react';

const StarRating = ({ rating, count }: { rating: number; count?: number }) => (
  <div className="flex items-center">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
    ))}
    {count && <span className="ml-2 text-sm text-gray-600">{count} Reviews</span>}
  </div>
);

export const TestimonialsSection = () => {
  const testimonials = [
    { name: "Marco Montemayor", company: "Director - Almond Tree Clinic", quote: "They hit everything they told me.", highlighted: "They hit everything they told me.", imageUrl: "https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/desktop/optimized/rev-d6d7292/thriveagency.com/files/marci-wiersma" },
    { name: "Whitney Wells Lewis", company: "Air Integrity A/C - HVAC Company", quote: "Thrive is transparent.", highlighted: "Thrive is transparent.", imageUrl: "https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/whitney-wells-lewis.jpg" },
    { name: "Chad Montgomery", company: "CEO - Accurate Leak and Line", quote: "Informative and transparent.", highlighted: "Informative and transparent.", imageUrl: "https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/chad-montgomery.jpg" },

  ];

  const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      {testimonial.imageUrl && (
        <Image
          src={testimonial.imageUrl}
          alt={`Photo of ${testimonial.name}`}
          width={100} // Adjust width and height as needed
          height={100} // Adjust width and height as needed
          className="rounded-full mx-auto mb-4"
          data-ai-hint={`Photo of ${testimonial.name}`}
        />
      )}
      <p className="text-gray-600 italic">"{testimonial.quote}"</p>
      <div className="mt-4">
        <p className="font-semibold text-gray-800">{testimonial.name}</p>
        <p className="text-sm text-gray-500">{testimonial.company}</p>
      </div>
      <div className="mt-3 pt-3 border-t border-gray-200">
        <span className="text-sm bg-yellow-300 px-2 py-1 rounded text-gray-800">{testimonial.highlighted}</span>
      </div>
    </div>
  )
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">What Our Clients Are Saying</h2>
        <p className="text-center text-gray-600 mb-12 max-w-xl mx-auto">
          Our testimonials speak for themselves. Every day, we work diligently to ensure our clients are satisfied and remain an integral part of our growth.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};