
"use client";

import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from 'lucide-react';
import { useState, useEffect } from 'react'; // Added useEffect
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import type { LandscapingStateHeroFormValues } from '@/types';
import { CONTACT_DETAILS } from '@/lib/constants';

const e164Regex = /^\+[1-9]\d{1,14}$/;

const landscapingStateHeroFormSchema = z.object({
  website: z.string().url({ message: "Please enter a valid website URL if provided (e.g., https://example.com)" }).optional().or(z.literal('')),
  phoneNumber: z.string({ required_error: "Phone number is required." })
    .min(1, "Phone number is required.")
    .regex(e164Regex, { message: "Please enter a valid international phone number (e.g., +14155552671)." }),
  state: z.string(), 
  formType: z.string(), 
});

async function submitLandscapingStateHeroForm(data: LandscapingStateHeroFormValues): Promise<{ success: boolean; message: string }> {
  try {
    const submissionData = {
      "Name": '', 
      "Email Address": '', 
      "Company Name": '', 
      "Phone Number": data.phoneNumber,
      "Website URL": data.website || '',
      "Service of Interest": 'Landscaping SEO', // Hardcoded for this form
      "Your Message": `Lead from ${data.state} Landscaping SEO Hero Form.`, 
      "Form Type": `${data.formType} - ${data.state}`, 
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
      return { success: true, message: "Thanks! Our landscaping SEO experts will reach out to you ASAP." };
    } else {
      const errorText = await response.text();
      console.error("SheetDB submission failed for Landscaping State Hero Form:", response.status, errorText);
      return { success: false, message: `Could not submit your information. Status: ${response.status}. Please try again.` };
    }
  } catch (error) {
    console.error("Error submitting Landscaping State Hero Form to SheetDB:", error);
    return { success: false, message: "An unexpected error occurred. Please try again later." };
  }
}

interface LandscapingStateHeroFormProps {
  stateName: string;
  formTitle: string;
}

export function LandscapingStateHeroForm({ stateName, formTitle }: LandscapingStateHeroFormProps) {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<LandscapingStateHeroFormValues>({
    resolver: zodResolver(landscapingStateHeroFormSchema),
    defaultValues: {
      website: "",
      phoneNumber: "",
      state: stateName,
      formType: "Landscaping Hero Lead Form",
    },
  });

  useEffect(() => {
    form.setValue('state', stateName);
  }, [stateName, form]);


  const onSubmit: SubmitHandler<LandscapingStateHeroFormValues> = async (data) => {
    setIsLoading(true);
    try {
      const augmentedData = { ...data, state: stateName, formType: "Landscaping Hero Lead Form" };
      const response = await submitLandscapingStateHeroForm(augmentedData);
      if (response.success) {
        toast({
          title: "Information Received!",
          description: response.message,
          variant: "default",
        });
        form.reset({
            website: "",
            phoneNumber: "",
            state: stateName, // Persist stateName on reset
            formType: "Landscaping Hero Lead Form",
        }); 
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
      <h3 className="text-2xl font-bold text-center mb-1 text-green-700">{formTitle}</h3>
      <p className="text-sm text-center text-gray-600 mb-6">Get found by more landscaping clients in {stateName}.</p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="website"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor={`landscaping-hero-website-${stateName.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm font-medium text-gray-700 sr-only">Your Website URL</FormLabel>
                <FormControl>
                  <Input id={`landscaping-hero-website-${stateName.toLowerCase().replace(/\s+/g, '-')}`} placeholder="Your Website (Optional)" {...field} disabled={isLoading} className="bg-gray-50 border-gray-300 focus:border-orange-500 focus:ring-orange-500" />
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
                <FormLabel htmlFor={`landscaping-hero-phoneNumber-${stateName.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm font-medium text-gray-700 sr-only">Phone Number*</FormLabel>
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
          <div>
            <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold text-lg py-3" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Submitting...
                </>
              ) : (
                "GET MY FREE SEO AUDIT"
              )}
            </Button>
          </div>
          <p className="text-sm text-gray-600 text-center pt-2">
            In a hurry? Give us a call now at <a href={`tel:${CONTACT_DETAILS.phone}`} className="text-orange-600 font-semibold hover:underline">{CONTACT_DETAILS.phone}</a>
          </p>
        </form>
      </Form>
    </div>
  );
}
