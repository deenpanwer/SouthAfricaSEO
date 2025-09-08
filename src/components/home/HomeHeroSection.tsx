'use client'

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button"; // Keep if still used elsewhere, otherwise remove

import { useForm, type SubmitHandler, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Send } from 'lucide-react';
import { useState } from 'react';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import logoStripHome from '../../../public/home/logostriphome.png';
import amitCro from '../../../public/home/amit-cro.png';

// Define the type for form values
interface HeroLeadFormValues {
  website?: string;
  phoneNumber: string;
}

// E.164 basic validation.
const e164Regex = /^\+[1-9]\d{1,14}$/;

const heroLeadFormSchema = z.object({
 website: z.string().optional(),
  phoneNumber: z.string({ required_error: "Phone number is required." })
    .min(1, "Please enter your phone number.")
    .regex(e164Regex, { message: "Please enter a valid phone number, including country code." }),
});

// Function to submit data to SheetDB
async function submitHeroLead(data: HeroLeadFormValues): Promise<{ success: boolean; message: string }> {
  try {
    const submissionData = {
      "Name": '', // Hero form doesn't have name
      "Email Address": '', // Hero form doesn't have email
      "Company Name": '', // Hero form doesn't have company
      "Phone Number": data.phoneNumber || '', // Map to 'Phone Number' column
      "Website URL": data.website || '', // Map to 'Website URL' column
      "Service of Interest": '', // Hero form doesn't have service
      "Your Message": '', // Hero form doesn't have message
      "Form Type": "Hero Lead Form", // Identifier
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

export const HomeHeroSection = () => {
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
      const response = await submitHeroLead(data);
      if (response.success) {
        toast({
          title: "Information Received!",
          description: response.message,
          variant: "default",
        });
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

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-700 leading-tight mb-6">
            <span className="text-green-600">Unlock Your Fortune.</span> <span className="text-orange-600">We Handle The How.</span>
            </h1>
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
                            // Clean the input: remove non-digits except for a leading '+'
                            const cleanedPhone = phone.replace(/[^0-9+]/g, '');
                            // Ensure the '+' is only at the very beginning
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
                  <Button type="submit" className="w-full bg-orange-500 text-white font-semibold py-3 px-6 rounded-md hover:bg-orange-600 transition-colors" size="lg" disabled={isLoading}>
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
              </form>
            </Form>
            <div className="mt-8"> {/* Added margin top for spacing */}
              <Image src={logoStripHome} alt="Client Badges" width={670} height={60} data-ai-hint="award badges" />
            </div>
          </div>
          <div className="relative">
            <Image
              src="/home/amit-cro.png"
              alt="Amit Sharma"
              width={450}
              height={500}
              className="rounded-lg shadow-xl object-cover mx-auto"
              data-ai-hint="person portrait"
            />
          </div>
        </div>
      </div>
    </section>
  );
};