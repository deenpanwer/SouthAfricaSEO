
"use client";

import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import type { LandscapingStateBottomFormValues } from '@/types';

const e164Regex = /^\+[1-9]\d{1,14}$/;

const landscapingStateBottomFormSchema = z.object({
  website: z.string().url({ message: "Please enter a valid website URL (e.g., https://example.com)" }).optional().or(z.literal('')),
  phoneNumber: z.string({ required_error: "Phone number is required." })
    .min(1, "Phone number is required.")
    .regex(e164Regex, { message: "Please enter a valid international phone number (e.g., +14155552671)." }),
  message: z.string().max(1000, { message: "Message cannot exceed 1000 characters." }).optional().or(z.literal('')),
  state: z.string(),
  formType: z.string(),
});

async function submitLandscapingStateBottomForm(data: LandscapingStateBottomFormValues): Promise<{ success: boolean; message: string }> {
  try {
    const submissionData = {
      "Name": '', 
      "Email Address": '', 
      "Company Name": '', 
      "Phone Number": data.phoneNumber,
      "Website URL": data.website || '',
      "Service of Interest": 'Landscaping SEO', // Hardcoded for this form
      "Your Message": data.message || `Lead from ${data.state} Landscaping SEO Bottom Form.`,
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
      return { success: true, message: "Thank you! We'll be in touch with your landscaping SEO proposal shortly." };
    } else {
      const errorText = await response.text();
      console.error("SheetDB submission failed for Landscaping State Bottom Form:", response.status, errorText);
      return { success: false, message: `Could not submit your proposal request. Status: ${response.status}. Please try again.` };
    }
  } catch (error) {
    console.error("Error submitting Landscaping State Bottom Form to SheetDB:", error);
    return { success: false, message: "An unexpected error occurred. Please try again later." };
  }
}

interface LandscapingStateBottomFormProps {
  stateName: string;
  formTitle: string;
}

export function LandscapingStateBottomForm({ stateName, formTitle }: LandscapingStateBottomFormProps) {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<LandscapingStateBottomFormValues>({
    resolver: zodResolver(landscapingStateBottomFormSchema),
    defaultValues: {
      website: "",
      phoneNumber: "",
      message: "",
      state: stateName,
      formType: "Landscaping Bottom Contact Form",
    },
  });
  
  useEffect(() => {
    form.setValue('state', stateName);
  }, [stateName, form]);

  const onSubmit: SubmitHandler<LandscapingStateBottomFormValues> = async (data) => {
    setIsLoading(true);
    try {
      const augmentedData = { ...data, state: stateName, formType: "Landscaping Bottom Contact Form" };
      const response = await submitLandscapingStateBottomForm(augmentedData);
      if (response.success) {
        toast({
          title: "Proposal Request Sent!",
          description: response.message,
        });
        form.reset({
            website: "",
            phoneNumber: "",
            message: "",
            state: stateName, // Persist stateName on reset
            formType: "Landscaping Bottom Contact Form",
        });
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
      <h2 className="text-2xl font-bold text-center text-green-700 mb-6">{formTitle.replace('[StateName]', stateName)}</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="website"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor={`landscaping-bottom-website-${stateName.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm font-medium text-gray-700 sr-only">Your Website URL</FormLabel>
                <FormControl>
                  <Input id={`landscaping-bottom-website-${stateName.toLowerCase().replace(/\s+/g, '-')}`} placeholder="Your Landscaping Website (Optional)" {...field} disabled={isLoading} className="bg-white border-gray-300 focus:border-orange-500 focus:ring-orange-500" />
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
                <FormLabel htmlFor={`landscaping-bottom-phoneNumber-${stateName.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm font-medium text-gray-700 sr-only">Phone Number*</FormLabel>
                <FormControl>
                  <PhoneInput
                    defaultCountry="us"
                    value={field.value}
                    onChange={(phone) => field.onChange(phone)}
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
                <FormLabel htmlFor={`landscaping-bottom-message-${stateName.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm font-medium text-gray-700 sr-only">Your Message</FormLabel>
                <FormControl>
                  <Textarea
                    id={`landscaping-bottom-message-${stateName.toLowerCase().replace(/\s+/g, '-')}`}
                    placeholder="Tell us about your landscaping business or specific SEO needs in [StateName] (Optional)".replace('[StateName]', stateName)
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
                "GET SEO PROPOSAL"
              )}
            </Button>
          </div>
           <p className="text-xs text-gray-500 text-center pt-1">
            We help landscapers in {stateName} grow their business.
          </p>
        </form>
      </Form>
    </div>
  );
}
