
"use client";

import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import type { SalonStateHeroFormValues } from '@/types';
import { CONTACT_DETAILS } from '@/lib/constants';

const e164Regex = /^\+[1-9]\d{1,14}$/;

const salonStateHeroFormSchema = z.object({
  website: z.string().url({ message: "Please enter a valid website URL (e.g., https://example.com)" }).optional().or(z.literal('')),
  phoneNumber: z.string({ required_error: "Phone number is required." })
    .min(1, "Phone number is required.")
    .regex(e164Regex, { message: "Please enter a valid international phone number (e.g., +14155552671)." }),
  state: z.string(),
  formType: z.string(),
});

async function submitSalonStateHeroForm(data: SalonStateHeroFormValues): Promise<{ success: boolean; message: string }> {
  try {
    const submissionData = {
      "Name": '',
      "Email Address": '',
      "Company Name": data.website || `Salon/Spa in ${data.state}`,
      "Phone Number": data.phoneNumber,
      "Website URL": data.website || '',
      "Service of Interest": 'Salon/Spa SEO',
      "Your Message": `Lead from ${data.state} Salon/Spa SEO Hero Form.`,
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
      return { success: true, message: "Thanks! Our salon SEO experts will be in touch shortly." };
    } else {
      const errorText = await response.text();
      console.error("SheetDB submission failed for Salon State Hero Form:", response.status, errorText);
      return { success: false, message: `Could not submit your information. Status: ${response.status}. Please try again.` };
    }
  } catch (error) {
    console.error("Error submitting Salon State Hero Form to SheetDB:", error);
    return { success: false, message: "An unexpected error occurred. Please try again later." };
  }
}

interface SalonStateHeroFormProps {
  stateName: string;
  formTitle: string;
}

export function SalonStateHeroForm({ stateName, formTitle }: SalonStateHeroFormProps) {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<SalonStateHeroFormValues>({
    resolver: zodResolver(salonStateHeroFormSchema),
    defaultValues: {
      website: "",
      phoneNumber: "",
      state: stateName,
      formType: "Salon Hero Form",
    },
  });

  useEffect(() => {
    form.setValue('state', stateName);
  }, [stateName, form]);

  const onSubmit: SubmitHandler<SalonStateHeroFormValues> = async (data) => {
    setIsLoading(true);
    try {
      const augmentedData = { ...data, state: stateName, formType: "Salon Hero Form" };
      const response = await submitSalonStateHeroForm(augmentedData);
      if (response.success) {
        toast({
          title: "Information Received!",
          description: response.message,
          variant: "default",
        });
        form.reset({
            website: "",
            phoneNumber: "",
            state: stateName,
            formType: "Salon Hero Form",
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
    <div className="bg-card p-6 sm:p-8 rounded-lg shadow-xl max-w-md mx-auto text-card-foreground">
      <h3 className="text-2xl font-bold text-center mb-1 text-primary">{formTitle}</h3>
      <p className="text-sm text-center text-muted-foreground mb-6">Attract more clients in {stateName}.</p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="website"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor={`salon-hero-website-${stateName.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm font-medium sr-only">Your Salon/Spa Website (Optional)</FormLabel>
                <FormControl>
                  <Input id={`salon-hero-website-${stateName.toLowerCase().replace(/\s+/g, '-')}`} placeholder="Your Salon/Spa Website (Optional)" {...field} disabled={isLoading} className="bg-background/70"/>
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
                <FormLabel htmlFor={`salon-hero-phoneNumber-${stateName.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm font-medium sr-only">Phone Number*</FormLabel>
                <FormControl>
                  <PhoneInput
                    defaultCountry="us"
                    value={field.value}
                    onChange={(phone) => field.onChange(phone)}
                    disabled={isLoading}
                    placeholder="Your Phone Number*"
                    inputClassName="w-full bg-background/70 !border-input placeholder:text-muted-foreground focus:!border-primary focus:!ring-primary"
                    countrySelectorStyleProps={{
                      buttonClassName: "!border-input !bg-background/70 hover:!bg-muted",
                    }}
                    inputStyle={{ width: '100%' }}
                    style={{ '--react-international-phone-border-radius': '0.375rem', '--react-international-phone-border-color': 'hsl(var(--input))' } as React.CSSProperties}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div>
            <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg py-3" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Submitting...
                </>
              ) : (
                "GET FREE SEO CONSULTATION"
              )}
            </Button>
          </div>
          <p className="text-sm text-muted-foreground text-center pt-2">
            In a hurry? Call us at <a href={`tel:${CONTACT_DETAILS.phone}`} className="text-primary font-semibold hover:underline">{CONTACT_DETAILS.phone}</a>
          </p>
        </form>
      </Form>
    </div>
  );
}
