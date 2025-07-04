
"use client";

import { useForm, type SubmitHandler, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { SERVICE_PACKAGES } from '@/lib/constants';
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from 'lucide-react';
import { useState } from 'react';
import type { ContactFormValues } from '@/types';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { GENERAL_INQUIRY_VALUE, CUSTOM_SOLUTION_VALUE } from './ContactFormWrapper';

// E.164 basic validation.
const e164Regex = /^\+[1-9]\d{1,14}$/;

const contactFormSchema = z.object({
  name: z.string().optional().or(z.literal('')),
  email: z.string().optional().or(z.literal('')),
  company: z.string().optional().or(z.literal('')),
  phoneNumber: z.string({ required_error: "Phone number is required." })
    .min(1, "Phone number is required.")
    .regex(e164Regex, { message: "Please enter a valid international phone number (e.g., +14155552671)." }),
  website: z.string().optional().or(z.literal('')),
  service: z.string().optional().or(z.literal('')),
  message: z.string().optional().or(z.literal('')),
});


// Mock server action
// Updated to submit data to SheetDB
async function submitContactForm(data: ContactFormValues): Promise<{ success: boolean; message: string }> {
  try {
    const submissionData = {
      "Name": data.name || '', // Map to 'Name' column
      "Email Address": data.email || '', // Map to 'Email Address' column
      "Company Name": data.company || '', // Map to 'Company Name' column
      "Phone Number": data.phoneNumber || '', // Map to 'Phone Number' column
      "Website URL": data.website || '', // Map to 'Website URL' column
      "Service of Interest": data.service || '', // Map to 'Service of Interest' column
      "Your Message": data.message || '', // Map to 'Your Message' column
      "Form Type": "Contact Form", // Identifier
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
      return { success: true, message: "Thank you for your message! We'll be in touch soon." };
    } else {
      const errorText = await response.text();
      console.error("SheetDB submission failed:", response.status, errorText);
      return { success: false, message: `Could not send your message. Status: ${response.status}. Please try again.` };
    }
  } catch (error) {
    console.error("Error submitting form to SheetDB:", error);
    return { success: false, message: "An unexpected error occurred. Please try again later." };
  }
}

export function ContactForm({ preselectedService }: { preselectedService?: string }) {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phoneNumber: "",
      website: "",
      service: preselectedService || GENERAL_INQUIRY_VALUE,
      message: "",
    },
  });

  const onSubmit: SubmitHandler<ContactFormValues> = async (data) => {
    setIsLoading(true);
    try {
      const response = await submitContactForm(data);
      if (response.success) {
        toast({
          title: "Message Sent!",
          description: response.message,
        });
        form.reset({ // Reset with default values ensuring service field is handled correctly
          name: "",
          email: "",
          company: "",
          phoneNumber: "",
          website: "",
          service: preselectedService || GENERAL_INQUIRY_VALUE,
          message: "",
        });
      } else {
        toast({
          title: "Submission Failed",
          description: response.message || "Could not send your message. Please try again.",
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="name">Full Name</FormLabel>
                <FormControl>
                  <Input id="name" placeholder="e.g. Alex Smith" {...field} disabled={isLoading} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <FormControl>
                  <Input id="email" type="email" placeholder="you@example.com" {...field} disabled={isLoading} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="company">Company Name</FormLabel>
                <FormControl>
                  <Input id="company" placeholder="Your Company Inc." {...field} disabled={isLoading} />
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
                <FormLabel htmlFor="phoneNumber">Phone Number*</FormLabel>
                <FormControl>
                  <PhoneInput
                    defaultCountry="us"
                    value={field.value}
                    // Clean the input by removing non-digit characters except the leading '+'
                    onChange={(phone) => {
                      const cleanedPhone = phone.replace(/[^\d+]/g, '');
                      // Ensure that the '+' sign is only at the beginning if present
                      field.onChange(cleanedPhone.replace(/(?<!^)\+/g, ''));
                    }}
                    disabled={isLoading}
                    inputClassName="w-full !border-input !ring-ring !focus:ring-2" // Ensure input part of PhoneInput matches styling
                    countrySelectorStyleProps={{
                      buttonClassName: "!border-input !bg-background hover:!bg-muted",
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
        </div>
        <FormField
          control={form.control}
          name="website"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="website">Website URL</FormLabel>
              <FormControl>
                <Input id="website" placeholder="https://yourcompany.com" {...field} disabled={isLoading} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="service"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="service">Service of Interest</FormLabel>
              <Select onValueChange={field.onChange} value={field.value} disabled={isLoading}>
                <FormControl>
                  <SelectTrigger id="service">
                    <SelectValue placeholder="Select a service plan (Optional)" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value={GENERAL_INQUIRY_VALUE}>General Inquiry / Not Specified</SelectItem>
                  {SERVICE_PACKAGES.map(pkg => (
                    <SelectItem key={pkg.name} value={pkg.name}>
                      {pkg.name}
                    </SelectItem>
                  ))}
                  <SelectItem value={CUSTOM_SOLUTION_VALUE}>Custom Business Solution</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="message">Your Message</FormLabel>
              <FormControl>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project or ask any questions... (Optional)"
                  rows={5}
                  {...field}
                  disabled={isLoading}
                />
              </FormControl>
              <FormDescription>
                Briefly describe your business needs or questions. Max 1000 characters.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div>
          <Button type="submit" className="w-full md:w-auto" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}

