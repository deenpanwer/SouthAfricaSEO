"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

type FormValues = {
  name: string;
  email: string;
  website: string;
  message: string;
};

async function submitToSheet(data: FormValues): Promise<{ success: boolean; message: string }> {
  try {
    const response = await fetch('https://sheetdb.io/api/v1/rsdd3ypenh4uu', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "Name": data.name,
        "Email Address": data.email,
        "Website URL": data.website,
        "Your Message": data.message,
        "Form Type": "All Inclusive SEO Bottom Form",
        "Timestamp": new Date().toISOString()
      }),
    });

    if (response.ok) {
      return { success: true, message: "Thanks! We'll be in touch soon." };
    } else {
      const errorText = await response.text();
      console.error("SheetDB submission failed:", response.status, errorText);
      return { success: false, message: `Submission failed. Status: ${response.status}.` };
    }
  } catch (error) {
    console.error("Error submitting to SheetDB:", error);
    return { success: false, message: "An unexpected error occurred." };
  }
}

const CallToActionSection = ({ onFormSuccess }: { onFormSuccess: () => void }) => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, reset } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    const response = await submitToSheet(data);
    setIsLoading(false);

    if (response.success) {
      toast({
        title: "Success!",
        description: response.message,
        variant: "default",
      });
      reset();
      onFormSuccess(); // Trigger Calendly modal
    } else {
      toast({
        title: "Error",
        description: response.message,
        variant: "destructive",
      });
    }
  };

  return (
    <section className="relative py-20 bg-white text-black overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700/80">
            Get a <span className="text-blue-500">FREE</span> SEO Audit & Growth Plan!
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl leading-relaxed tracking-tight text-gray-700 max-w-2xl mx-auto">
            Unlock your website's full potential. No obligation, just actionable insights to boost your rankings and revenue.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 w-full max-w-screen-sm mx-auto">
             <div className="bg-gray-200 rounded-[2rem] p-1">
               <div className="w-full bg-gray-50 border border-gray-200 rounded-[1.75rem] p-8 shadow-lg space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900">Get Your Free SEO Analysis</h3>
                    <p className="text-gray-600 mt-2">
                      Enter your website URL to get started.
                    </p>
                  </div>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 text-gray-900">
                    <div>
                      <Label htmlFor="name" className="text-left block text-lg font-medium text-gray-700 mb-2">Your Name</Label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        {...register("name")}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white text-black"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-left block text-lg font-medium text-gray-700 mb-2">Your Email</Label>
                      <Input
                        id="email"
                        placeholder="john.doe@example.com"
                        {...register("email")}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white text-black"
                      />
                    </div>
                    <div>
                      <Label htmlFor="website" className="text-left block text-lg font-medium text-gray-700 mb-2">Your Website</Label>
                      <Input
                        id="website"
                        placeholder="https://www.yourwebsite.com"
                        {...register("website")}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white text-black"
                      />
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-left block text-lg font-medium text-gray-700 mb-2">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your SEO goals..."
                        {...register("message")}
                        rows={4}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white text-black"
                      />
                    </div>
                  <div
                    className="inline-block group relative bg-gradient-to-b from-black/5 to-white/5 p-px rounded-2xl w-full"
                  >
                    <Button type="submit" size="lg" className="w-full rounded-[1.15rem] px-8 py-5 text-lg font-semibold
                      bg-white/80 hover:bg-white/100 text-black transition-all duration-300 group-hover:-translate-y-0.5
                      border border-black/10 hover:shadow-md" disabled={isLoading}>
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <span className="opacity-90 group-hover:opacity-100 transition-opacity">
                            Get My Free Audit!
                          </span>
                          <span
                              className="ml-3 opacity-70 group-hover:opacity-100 group-hover:translate-x-1.5
                              transition-all duration-300"
                          >
                              →
                          </span>
                        </>
                      )}
                    </Button>
                  </div>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
  );
};

export default CallToActionSection;