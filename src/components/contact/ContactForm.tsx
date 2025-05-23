
"use client";

import { useForm, type SubmitHandler, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { SERVICE_PACKAGES } from '@/lib/constants.tsx';
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from 'lucide-react';
import { useState } from 'react';
import type { ContactFormValues } from '@/types';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

// E.164 basic validation.
const e164Regex = /^\+[1-9]\d{1,14}$/;

const contactFormSchema = z.object({
  name: z.string().optional(),
  email: z.string().email({ message: "Please enter a valid email address if provided." }).optional().or(z.literal('')),
  company: z.string().optional(),
  phoneNumber: z.string({ required_error: "Phone number is required." })
    .min(1, "Phone number is required.")
    .regex(e164Regex, { message: "Please enter a valid international phone number (e.g., +14155552671)." }),
  website: z.string().url({ message: "Please enter a valid website URL if provided (e.g., https://example.com)" }).optional().or(z.literal('')),
  service: z.string().optional(),
  message: z.string().max(1000, { message: "Message cannot exceed 1000 characters if provided." }).optional(),
});


// Mock server action
async function submitContactForm(data: ContactFormValues): Promise<{ success: boolean; message: string }> {
  console.log("Form data submitted:", data);
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1500));
  // return { success: false, message: "This is a simulated error." };
  return { success: true, message: "Thank you for your message! We'll be in touch soon." };
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
      service: preselectedService || "", // Empty string if general inquiry or not preselected
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
        form.reset();
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
                    id="phoneNumber"
                    defaultCountry="us"
                    value={field.value}
                    onChange={(phone) => field.onChange(phone)}
                    disabled={isLoading}
                    inputClassName="w-full !border-input !ring-ring !focus:ring-2" // Ensure input part of PhoneInput matches styling
                    countrySelectorStyleProps={{
                      buttonClassName: "!border-input !bg-background hover:!bg-muted",
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
                  <SelectItem value="">General Inquiry / Not Specified</SelectItem>
                  {SERVICE_PACKAGES.map(pkg => (
                    <SelectItem key={pkg.name} value={pkg.name}>
                      {pkg.name}
                    </SelectItem>
                  ))}
                  <SelectItem value="Custom Solution">Custom Business Solution</SelectItem>
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
