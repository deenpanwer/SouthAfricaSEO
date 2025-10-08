
"use client";

import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Search } from 'lucide-react';
import { useState, useEffect } from 'react';
import type { AiSeoHeroFormValues } from '@/types/aiSeo';

declare const fbq: any;

const formSchema = z.object({
  website: z.string().optional(),
  city: z.string(),
  formType: z.string(),
});

async function submitAiSeoHeroForm(data: AiSeoHeroFormValues): Promise<{ success: boolean; message: string }> {
  try {
    const submissionData = {
      "Name": '',
      "Email Address": '',
      "Company Name": '',
      "Phone Number": '',
      "Website URL": data.website || '',
      "Service of Interest": 'AI SEO',
      "Your Message": `Lead from ${data.city} AI SEO Hero Form.`,
      "Form Type": `AI SEO Hero Form - ${data.city}`,
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
      return { success: true, message: "Thanks! Our AI SEO experts will be in touch with your proposal." };
    } else {
      const errorText = await response.text();
      console.error("SheetDB submission failed for AI SEO Hero Form:", response.status, errorText);
      return { success: false, message: `Could not submit your request. Status: ${response.status}. Please try again.` };
    }
  } catch (error) {
    console.error("Error submitting AI SEO Hero Form to SheetDB:", error);
    return { success: false, message: "An unexpected error occurred. Please try again later." };
  }
}

interface AiSeoHeroFormProps {
  cityName: string;
}

export function AiSeoHeroForm({ cityName }: AiSeoHeroFormProps) {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<AiSeoHeroFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      website: "",
      city: cityName,
      formType: "AI SEO Hero Form",
    },
  });
  
  useEffect(() => {
    form.setValue('city', cityName);
  }, [cityName, form]);


  const onSubmit: SubmitHandler<AiSeoHeroFormValues> = async (data) => {
    setIsLoading(true);
    try {
      const response = await submitAiSeoHeroForm(data);
      if (response.success) {
        toast({
          title: "Request Sent!",
          description: response.message,
        });
        form.reset({
          website: "",
          city: cityName,
          formType: "AI SEO Hero Form",
        });
      } else {
        toast({
          title: "Submission Failed",
          description: response.message,
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
    <div className="max-w-2xl mx-auto bg-white/70 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-gray-200">
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-2 sm:items-center">
                <FormField
                control={form.control}
                name="website"
                render={({ field }) => (
                    <FormItem className="relative flex-grow">
                    <FormLabel className="sr-only">Website Address</FormLabel>
                    <FormControl>
                        <div className="relative flex items-center w-full">
                          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                          <Input
                              id={`ai-hero-website-${cityName}`}
                              type="text"
                              placeholder="Enter Website Address"
                              className="w-full pl-10 h-12 border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                              {...field}
                              disabled={isLoading}
                          />
                        </div>
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <Button type="submit" size="lg" className="bg-orange-500 hover:bg-orange-600 text-white h-12 flex-shrink-0" disabled={isLoading}>
                {isLoading ? (
                    <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                    </>
                ) : (
                    "Get Your FREE AI SEO Analysis"
                )}
                </Button>
            </form>
        </Form>
    </div>
  );
}
