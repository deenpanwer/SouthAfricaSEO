
"use client";

import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Send } from 'lucide-react';
import { useState } from 'react';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import type { CityHeroFormValues } from '@/types';

// E.164 basic validation.
const e164Regex = /^\+[1-9]\d{1,14}$/;

const cityHeroFormSchema = z.object({
  website: z.string().url({ message: "Please enter a valid website URL if provided (e.g., https://example.com)" }).optional().or(z.literal('')),
  phoneNumber: z.string({ required_error: "Phone number is required." })
    .min(1, "Phone number is required.")
    .regex(e164Regex, { message: "Please enter a valid international phone number (e.g., +14155552671)." }),
  city: z.string(), // Hidden field, will be set programmatically
  formType: z.string(), // Hidden field
});

async function submitCityHeroForm(data: CityHeroFormValues): Promise<{ success: boolean; message: string }> {
  try {
    const submissionData = {
      "Name": '', // Simplified form
      "Email Address": '', // Simplified form
      "Company Name": '', // Simplified form
      "Phone Number": data.phoneNumber,
      "Website URL": data.website || '',
      "Service of Interest": '', // Simplified form
      "Your Message": '', // Simplified form
      "Form Type": `${data.formType} - ${data.city}`, // e.g., "City Hero Lead Form - Portland"
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
      return { success: true, message: "Thanks! Our experts will reach out to you ASAP." };
    } else {
      const errorText = await response.text();
      console.error("SheetDB submission failed for City Hero Form:", response.status, errorText);
      return { success: false, message: `Could not submit your information. Status: ${response.status}. Please try again.` };
    }
  } catch (error) {
    console.error("Error submitting City Hero Form to SheetDB:", error);
    return { success: false, message: "An unexpected error occurred. Please try again later." };
  }
}

interface CityHeroFormProps {
  cityName: string;
  formTitle: string;
}

export function CityHeroForm({ cityName, formTitle }: CityHeroFormProps) {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<CityHeroFormValues>({
    resolver: zodResolver(cityHeroFormSchema),
    defaultValues: {
      website: "",
      phoneNumber: "",
      city: cityName,
      formType: "City Hero Lead Form",
    },
  });

  // Update city if cityName prop changes
  useState(() => {
    form.setValue('city', cityName);
  });


  const onSubmit: SubmitHandler<CityHeroFormValues> = async (data) => {
    setIsLoading(true);
    try {
      // Ensure city and formType are correctly set from defaultValues or updated if needed
      const augmentedData = { ...data, city: cityName, formType: "City Hero Lead Form" };
      const response = await submitCityHeroForm(augmentedData);
      if (response.success) {
        toast({
          title: "Information Received!",
          description: response.message,
          variant: "default",
        });
        form.reset(); // Resets to defaultValues, which includes the current cityName
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
    <div className="bg-white p-6 sm:p-8 rounded-lg shadow-xl max-w-md mx-auto text-gray-800">
      <h3 className="text-2xl font-bold text-center mb-1 text-orange-600">{formTitle}</h3>
      <p className="text-sm text-center text-gray-600 mb-6">Takes less than 30 seconds.</p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="website"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor={`city-hero-website-${cityName}`} className="text-sm font-medium text-gray-700 sr-only">Your Website URL</FormLabel>
                <FormControl>
                  <Input id={`city-hero-website-${cityName}`} placeholder="Your Website (Optional)" {...field} disabled={isLoading} className="bg-gray-50 border-gray-300 focus:border-orange-500 focus:ring-orange-500"/>
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
                <FormLabel htmlFor={`city-hero-phoneNumber-${cityName}`} className="text-sm font-medium text-gray-700 sr-only">Phone Number*</FormLabel>
                <FormControl>
                  <PhoneInput
                    defaultCountry="us"
                    value={field.value}
                    onChange={(phone) => field.onChange(phone)}
                    disabled={isLoading}
                    placeholder="Your Phone Number*"
                    inputClassName="w-full bg-gray-50 !border-gray-300 placeholder:text-gray-500 focus:!border-orange-500 focus:!ring-orange-500"
                    countrySelectorStyleProps={{
                      buttonClassName: "!border-gray-300 !bg-gray-50 hover:!bg-gray-100",
                    }}
                    inputStyle={{ width: '100%' }}
                    style={{ '--react-international-phone-border-radius': '0.375rem', '--react-international-phone-border-color': 'rgb(209 213 219)' } as React.CSSProperties}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Hidden fields for city and formType are handled in defaultValues and submit */}
          <div>
            <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold text-lg py-3" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Submitting...
                </>
              ) : (
                "GET MY FREE PROPOSAL!"
              )}
            </Button>
          </div>
          <p className="text-xs text-gray-500 text-center pt-2">
            Our digital marketing experts will reach out to you ASAP.
          </p>
        </form>
      </Form>
       <div className="mt-6 text-center">
        <span className="text-sm text-gray-500">Or Call Us: </span>
        <a href="tel:8885551234" className="text-sm font-semibold text-orange-600 hover:underline">(888) 555-1234</a>
      </div>
    </div>
  );
}
