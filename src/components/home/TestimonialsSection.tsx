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
    { id: '1', name: "Marci Wiersma", company: "Broker – About Roatan Real Estate", quote: "Trac is a much-needed blessing and exceeded our expectations in every way. They are honest, straightforward, they take care of ALL your needs quickly, they are reliable, you can count on them and most of all, they do everything they say they will do, no BS.", highlightedQuote: "They do everything they say...no BS", avatarUrl: "/home/marci-wiersma.webp", dataAiHint: "Marci Wiersma photo", rating: 5 },
    { id: '2', name: "Whitney Wells Lewis", company: "Practice Manager – PARC Urology", quote: "These guys are incredible. They've helped us to grow our business and now the biggest problem we seem to come across is having too much business - which is the ideal problem to have. We are right where we wanted to be and Trac made that possible. Thanks guys!", highlightedQuote: "These guys are incredible", avatarUrl: "/home/whitney-wells-lewis.webp", dataAiHint: "Whitney Wells Lewis photo", rating: 5 },
    { id: '3', name: "Chad Montgomery", company: "CEO – Accurate Leak and Line", quote: "Working with the Trac team has been a most pleasant experience! Their dedication and passion for what they do is exemplified by their unrivaled customer support and attentiveness to the specific needs of our business. We look forward to a long-lasting and prosperous relationship!", highlightedQuote: "Unrivaled customer support", avatarUrl: "/home/chad-montgomery.webp", dataAiHint: "Chad Montgomery photo", rating: 5 },
  ];


  const TestimonialCard = ({ testimonial }: { testimonial: (typeof testimonials)[0] }) => (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
      {testimonial.avatarUrl && (
        <Image
          src={testimonial.avatarUrl}
          alt={`Photo of ${testimonial.name}`}
          width={100} // Adjust width and height as needed
          height={100} // Adjust width and height as needed
          className="rounded-full mx-auto mb-4 border-2 border-yellow-400"
          data-ai-hint={`Photo of ${testimonial.name}`}
        />
      )}
      <div className="mt-4">
        <p className="font-semibold text-gray-800">{testimonial.name}</p>
        <p className="text-sm text-gray-500">{testimonial.company}</p>
      </div>
      <div className="mt-3 pt-3 border-t border-gray-200">
        {/* Highlighted Quote */}
        <div className="bg-yellow-400 p-2 rounded-md mb-3">
          <p className="text-gray-800 italic font-semibold text-sm">"{testimonial.highlightedQuote}"</p>
        </div>
        <blockquote className="text-gray-600 italic text-sm leading-relaxed mb-3">
          "{testimonial.quote}"
        </blockquote>
      </div>
    </div>
  )

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Hear How Our SEO Strategies Transformed Businesses.</h2>
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