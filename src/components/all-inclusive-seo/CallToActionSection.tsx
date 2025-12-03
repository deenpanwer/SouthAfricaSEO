// src/components/all-inclusive-seo/CallToActionSection.tsx
"use client";

import React, { useState } from 'react';
import { SpotlightBackground } from '@/components/ui/spotlight-background'; // Assuming this is the correct path
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

const CallToActionSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Thank you for your submission! We will be in touch shortly.');
    setFormData({ name: '', email: '', website: '', message: '' }); // Clear form
  };

  return (
    <section className="relative py-20 bg-white text-black overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700/80">
            Get a <span className="text-blue-500">FREE</span> SEO Audit & Growth Plan!
          </h2>
          <p className="text-lg sm:text-xl leading-relaxed tracking-tight text-gray-700 max-w-2xl mx-auto">
            Unlock your website's full potential. No obligation, just actionable insights to boost your rankings and revenue.
          </p>

          <div className="mt-12 w-full max-w-screen-sm mx-auto">
             <div className="bg-gray-200 rounded-[2rem] p-1">
               <div className="w-full bg-gray-50 border border-gray-200 rounded-[1.75rem] p-8 shadow-lg space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900">Get Your Free SEO Analysis</h3>
                    <p className="text-gray-600 mt-2">
                      Enter your website URL to get started.
                    </p>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-6 text-gray-900">
                    <div>
                      <Label htmlFor="name" className="text-left block text-lg font-medium text-gray-700 mb-2">Your Name</Label>
                      <Input
                        type="text"
                        id="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white text-black"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-left block text-lg font-medium text-gray-700 mb-2">Your Email</Label>
                      <Input
                        type="email"
                        id="email"
                        placeholder="john.doe@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white text-black"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="website" className="text-left block text-lg font-medium text-gray-700 mb-2">Your Website (Optional)</Label>
                      <Input
                        type="url"
                        id="website"
                        placeholder="https://www.yourwebsite.com"
                        value={formData.website}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white text-black"
                      />
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-left block text-lg font-medium text-gray-700 mb-2">Message (Optional)</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your SEO goals..."
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white text-black"
                      />
                    </div>
                  {/* Stylized Button Container */}
                  <div
                    className="inline-block group relative bg-gradient-to-b from-black/5 to-white/5 p-px rounded-2xl w-full"
                  >
                    <Button type="submit" size="lg" className="w-full rounded-[1.15rem] px-8 py-5 text-lg font-semibold
                      bg-white/80 hover:bg-white/100 text-black transition-all duration-300 group-hover:-translate-y-0.5
                      border border-black/10 hover:shadow-md">
                      <span className="opacity-90 group-hover:opacity-100 transition-opacity">
                        Get My Free Audit!
                      </span>
                      <span
                          className="ml-3 opacity-70 group-hover:opacity-100 group-hover:translate-x-1.5
                          transition-all duration-300"
                      >
                          →
                      </span>
                    </Button>
                  </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
  );
};

export default CallToActionSection;
