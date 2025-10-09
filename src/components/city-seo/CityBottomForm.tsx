
"use client";

import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button }
from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from 'lucide-react';
import { useState } from 'react';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import type { CityBottomFormValues } from '@/types';

declare const fbq: any;

const e164Regex = /^\+[1-9]\d{1,14}$/;

const cityBottomFormSchema = z.object({
 website: z.string().optional(),
  phoneNumber: z.string(),
  message: z.string().max(1000, { message: "Message cannot exceed 1000 characters." }).optional().or(z.literal('')),
  city: z.string(), // Hidden field
  formType: z.string(), // Hidden field
}).refine(data => data.phoneNumber.length > 0, {
  message: "Phone number is required.",
  path: ["phoneNumber"],
});

async function submitCityBottomForm(data: CityBottomFormValues): Promise<{ success: boolean; message: string }> {
  try {
    const submissionData = {
      "Name": '', // Simplified form
      "Email Address": '', // Simplified form
      "Company Name": '', // Simplified form
      "Phone Number": data.phoneNumber,
      "Website URL": data.website || '',
      "Service of Interest": '', // Simplified form
      "Your Message": data.message || '',
      "Form Type": `${data.formType} - ${data.city}`, // e.g., "City Bottom Contact Form - Portland"
      "Timestamp": new Date().toISOString()
    };

    const response = await fetch('https://sheetdb.io/api/v1/rsdd3ypenh4uu', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(submissionData),
    });

    if (response.ok) {
      return { success: true, message: "Thank you! We'll be in touch with your proposal shortly." };
    } else {
      const errorText = await response.text();
      console.error("SheetDB submission failed for City Bottom Form:", response.status, errorText);
      return { success: false, message: `Could not submit your proposal request. Status: ${response.status}. Please try again.` };
    }
  } catch (error) {
    console.error("Error submitting City Bottom Form to SheetDB:", error);
    return { success: false, message: "An unexpected error occurred. Please try again later." };
  }
}

interface CityBottomFormProps {
  cityName: string;
  formTitle: string;
}

export function CityBottomForm({ cityName, formTitle }: CityBottomFormProps) {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<CityBottomFormValues>({
    resolver: zodResolver(cityBottomFormSchema),
    defaultValues: {
      website: "",
      phoneNumber: "",
      message: "",
      city: cityName,
      formType: "City Bottom Contact Form",
    },
  });

  useState(() => {
    form.setValue('city', cityName);
  });

  const onSubmit: SubmitHandler<CityBottomFormValues> = async (data) => {
    setIsLoading(true);
    try {
      const augmentedData = { ...data, city: cityName, formType: "City Bottom Contact Form" };
      const response = await submitCityBottomForm(augmentedData);
      if (response.success) {
        toast({
          title: "Proposal Request Sent!",
          description: response.message,
        });
        fbq('track', 'Lead');
        form.reset();
      } else {
        toast({
          title: "Submission Failed",
          description: response.message || "Could not send your request. Please try again.",
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
    <div className="bg-gray-100 p-6 sm:p-8 rounded-lg shadow-lg max-w-lg mx-auto text-gray-800" id="contact-form">
      <h2 className="text-2xl font-bold text-center text-green-700 mb-6">{formTitle}</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="website"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor={`city-bottom-website-${cityName}`} className="text-sm font-medium text-gray-700 sr-only">Your Website URL</FormLabel>
                <FormControl>
                  <Input id={`city-bottom-website-${cityName}`} placeholder="Your Website" {...field} disabled={isLoading} className="bg-white border-gray-300 focus:border-orange-500 focus:ring-orange-500" />
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
                <FormLabel htmlFor={`city-bottom-phoneNumber-${cityName}`} className="text-sm font-medium text-gray-700 sr-only">Phone Number*</FormLabel>
                <FormControl>
                  <PhoneInput
                    defaultCountry="us"
                    value={field.value}
                    onChange={(phone) => {
                      // Clean the phone number: remove non-digits and keep the leading '+'
                      const cleanedPhone = phone.replace(/[^+\d]/g, '');
                      field.onChange(cleanedPhone);
                    }}
                    disabled={isLoading}
                    placeholder="Your Phone Number*"
                    inputClassName="w-full bg-white !border-gray-300 placeholder:text-gray-500 focus:!border-orange-500 focus:!ring-orange-500"
                    countrySelectorStyleProps={{
                      buttonClassName: "!border-gray-300 !bg-white hover:!bg-gray-50",
                    }}
                    inputStyle={{ width: '100%' }}
                    style={{ '--react-international-phone-border-radius': '0.375rem', '--react-international-phone-border-color': 'rgb(209 213 219)' } as React.CSSProperties}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor={`city-bottom-message-${cityName}`} className="text-sm font-medium text-gray-700 sr-only">Your Message</FormLabel>
                <FormControl>
                  <Textarea
                    id={`city-bottom-message-${cityName}`}
                    placeholder="Tell us a bit about your business or specific needs (Optional)"
                    rows={4}
                    {...field}
                    disabled={isLoading}
                    className="bg-white border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div>
            <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold text-lg py-3" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Sending...
                </>
              ) : (
                "SUBMIT"
              )}
            </Button>
          </div>
           <p className="text-xs text-gray-500 text-center pt-1">
            We respect your privacy. Your information is safe with us.
          </p>
        </form>
      </Form>
    </div>
  );
}
