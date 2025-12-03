"use client";

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import PointingArrow from '@/components/ui/pointing-arrow';
import FloatingPaths from '@/components/ui/floating-paths';
import Image from "next/image";
 // Add this import

import { useForm, type SubmitHandler, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from 'lucide-react';
import { useState } from 'react';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import logoStripHome from '../../../public/home/logostriphome.png';
import { Button } from '../ui/button';

declare const fbq: any; // Assuming fbq is globally available as in the HomeHeroSection

// Define the type for form values
interface HeroLeadFormValues {
  website?: string;
  phoneNumber: string;
}

// E.164 basic validation.
const e164Regex = /^\+[1-9]\d{1,14}$/;

const heroLeadFormSchema = z.object({
 website: z.string().optional(),
 phoneNumber: z.string(),
}).refine(data => data.phoneNumber.length > 0, {
  message: "Phone number is required.",
  path: ["phoneNumber"],
});

// Function to submit data to SheetDB
async function submitHeroLead(data: HeroLeadFormValues, formType: string): Promise<{ success: boolean; message: string }> {
  try {
    const submissionData = {
      "Name": '', // Hero form doesn't have name
      "Email Address": '', // Hero form doesn't have email
      "Company Name": '', // Hero form doesn't have company
      "Phone Number": data.phoneNumber || '', // Map to 'Phone Number' column
      "Website URL": data.website || '', // Map to 'Website URL' column
      "Service of Interest": '', // Hero form doesn't have service
      "Your Message": '', // Hero form doesn't have message
      "Form Type": formType, // Identifier
      "Timestamp": new Date().toISOString() // Timestamp
    };

    const response = await fetch('https://sheetdb.io/api/v1/rsdd3ypenh4uu', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(submissionData),
    });

    if (response.ok) {
 return { success: true, message: "Thanks! Our experts will reach out to you ASAP." };
    } else {
      const errorText = await response.text();
      console.error("SheetDB submission failed:", response.status, errorText);
      return { success: false, message: `Could not submit your information. Status: ${response.status}. Please try again.` };
    }

  } catch (error) {
    console.error("Error submitting form to SheetDB:", error);
    return { success: false, message: "An unexpected error occurred. Please try again later." };
  }
}

function Hero() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<HeroLeadFormValues>({
    resolver: zodResolver(heroLeadFormSchema),
    defaultValues: {
      website: "",
      phoneNumber: "",
    },
  });

  const onSubmit: SubmitHandler<HeroLeadFormValues> = async (data) => {
    setIsLoading(true);
    try {
      const response = await submitHeroLead(data, "All Inclusive SEO Hero Lead Form"); // Pass form type
      if (response.success) {
        toast({
          title: "Information Received!",
          description: response.message,
          variant: "default",
        });
        if (typeof fbq === 'function') {
            fbq('track', 'Lead');
        }
        form.reset();
      } else {
        toast({
          title: "Submission Failed",
          description: response.message || "Could not submit your information. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  const title = "Your SEO, Now on Autopilot.";
  const words = title.split(" ");
  const formButtonRef = useRef<HTMLButtonElement>(null);

  return (

    <div className="w-full bg-white text-black py-16 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
          <FloatingPaths position={1} />
          <FloatingPaths position={-1} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* Centered Text Content */}
        <div className="flex flex-col items-center text-center gap-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tight">
              {words.map((word, wordIndex) => (
                  <span
                      key={wordIndex}
                      className="inline-block mr-3 last:mr-0"
                  >
                      {word.split("").map((letter, letterIndex) => (
                          <motion.span
                              key={`${wordIndex}-${letterIndex}`}
                              initial={{ y: 50, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{
                                  delay: wordIndex * 0.1 + letterIndex * 0.03,
                                  type: "spring",
                                  stiffness: 120,
                                  damping: 20,
                              }}
                              className="inline-block text-transparent bg-clip-text 
                              bg-gradient-to-r from-neutral-900 to-neutral-700/80"
                          >
                              {letter}
                          </motion.span>
                      ))}
                  </span>
              ))}
          </h1>
          <motion.p 
            className="text-lg leading-relaxed tracking-tight text-gray-700 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            Our all-inclusive AI-powered SEO service handles everything from
            keyword research to content creation, so you can focus on your
            business. Plans start at just $300/month.
          </motion.p>
        </div>

        {/* Form Container Below Text */}
        <motion.div 
            className="mt-12 w-full max-w-screen-sm mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.5 }}
        >
           <div className="bg-gray-200 rounded-[2rem] p-1">
             <div className="w-full bg-gray-50 border border-gray-200 rounded-[1.75rem] p-8 shadow-lg space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900">Get Your Free SEO Analysis</h3>
                  <p className="text-gray-600 mt-2">
                    Enter your website URL to get started.
                  </p>
                </div>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <FormField
                        control={form.control}
                        name="website"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel htmlFor="hero-website" className="sr-only">Your Website URL</FormLabel>
                            <FormControl>
                              <Input id="hero-website" placeholder="Enter Your Website URL" {...field} disabled={isLoading} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phoneNumber"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel htmlFor="hero-phoneNumber" className="sr-only">Phone Number</FormLabel>
                            <FormControl>
                              <PhoneInput
                                defaultCountry="us"
                                value={field.value}
                                onChange={(phone) => {
                                  const cleanedPhone = phone.replace(/[^0-9+]/g, '');
                                  const finalCleanedPhone = cleanedPhone.startsWith('+') ? '+' + cleanedPhone.replace(/\+/g, '') : cleanedPhone.replace(/\+/g, '');
                                  field.onChange(finalCleanedPhone);
                                }}
                                disabled={isLoading}
                                inputClassName="w-full"
                                countrySelectorStyleProps={{
                                  buttonClassName: "!border-input",
                                }}
                                inputStyle={{ width: '100%' }}
                                style={{ '--react-international-phone-border-radius': '0.375rem', '--react-international-phone-border-color': 'hsl(var(--input))' } as React.CSSProperties}
                              />
                            </FormControl>
                            <FormDescription>Please include your country code (e.g., +1 for USA).</FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <div>
                        <Button ref={formButtonRef} type="submit" className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-blue-700 transition-colors" size="lg" disabled={isLoading}>
                          {isLoading ? (
                            <>
                              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                              Submitting...
                            </>
                          ) : (
                            "GET MY FREE PROPOSAL"
                          )}
                        </Button>
                      </div>
                      {/* Logo Strip */}
                      <div className="mt-8">
                        <Image src={logoStripHome} alt="Client Badges" width={670} height={60} data-ai-hint="award badges" className="mx-auto" />
                      </div>
                    </form>
                  </Form>
              </div>
          </div>
        </motion.div>
        <PointingArrow targetRef={formButtonRef} />
      </div>
    </div>
  );
}

export { Hero };
