
"use client";

import { useForm, type SubmitHandler, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Send } from 'lucide-react';
import { useState } from 'react';
import type { TracLeadFormValues } from '@/types';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

// E.164 basic validation.
const e164Regex = /^\+[1-9]\d{1,14}$/;

const leadFormSchema = z.object({
  name: z.string().optional(),
  website: z.string().url({ message: "Please enter a valid website URL if provided (e.g., https://example.com)" }).optional().or(z.literal('')),
  phoneNumber: z.string({ required_error: "Phone number is required."})
    .min(1, "Phone number is required.")
    .regex(e164Regex, { message: "Please enter a valid international phone number (e.g., +14155552671)." }),
});

// Updated to submit data to SheetDB
async function submitLeadForm(data: TracLeadFormValues): Promise<{ success: boolean; message: string }> {
  try {
    const submissionData = {
      "Name": data.name || '', // Map to 'Name' column
      "Email Address": '', // Lead form doesn't have email
      "Company Name": '', // Lead form doesn't have company
      "Phone Number": data.phoneNumber || '', // Map to 'Phone Number' column
      "Website URL": data.website || '', // Map to 'Website URL' column
      "Service of Interest": '', // Lead form doesn't have service
      "Your Message": '', // Lead form doesn't have message
      "Form Type": "Lead Form", // Identifier
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
      // SheetDB typically returns a 201 Created on success, but response.ok checks for 2xx status
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

export function TracLeadForm() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<TracLeadFormValues>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      name: "",
      website: "",
      phoneNumber: "",
    },
  });

  const onSubmit: SubmitHandler<TracLeadFormValues> = async (data) => {
    setIsLoading(true);
    try {
      const response = await submitLeadForm(data);
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
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 p-6 bg-card rounded-lg shadow-xl max-w-lg mx-auto">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="lead-name" className="text-sm font-medium text-card-foreground">Your Name (Optional)</FormLabel>
              <FormControl>
                <Input id="lead-name" placeholder="e.g. Alex Smith" {...field} disabled={isLoading} className="bg-background/70"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="website"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="lead-website" className="text-sm font-medium text-card-foreground">Your Website URL</FormLabel>
              <FormControl>
                <Input id="lead-website" placeholder="https://yourcompany.com" {...field} disabled={isLoading} className="bg-background/70"/>
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
              <FormLabel htmlFor="lead-phoneNumber" className="text-sm font-medium text-card-foreground">Phone Number*</FormLabel>
              <FormControl>
                <PhoneInput
                  defaultCountry="us" // You can set a default or let it auto-detect
                  value={field.value}
                  onChange={(phone) => field.onChange(phone)}
                  disabled={isLoading}
                  inputClassName="w-full bg-background/70 !border-input !ring-ring !focus:ring-2" // Ensure input part of PhoneInput matches styling
                  countrySelectorStyleProps={{
                    buttonClassName: "!border-input !bg-background/70 hover:!bg-muted",
                  }}
                  inputStyle={{width: '100%'}}
                  style={{'--react-international-phone-border-radius': '0.375rem', '--react-international-phone-border-color': 'hsl(var(--input))'} as React.CSSProperties}

                />
              </FormControl>
              <FormDescription>Please include your country code (e.g., +1 for USA).</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div>
          <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" size="lg" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                Get In Touch <Send className="ml-2 h-5 w-5" />
              </>
            )}
          </Button>
        </div>
        <p className="text-xs text-muted-foreground text-center pt-2">
          Our SEO specialist will reach out to you ASAP.
        </p>
      </form>
    </Form>
  );
}
