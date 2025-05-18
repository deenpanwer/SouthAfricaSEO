"use client";

import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { SERVICE_PACKAGES } from '@/lib/constants.tsx';
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  company: z.string().optional(),
  phone: z.string().optional(),
  service: z.string().min(1, { message: "Please select a service of interest." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }).max(1000, { message: "Message cannot exceed 1000 characters." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

// Mock server action
async function submitContactForm(data: ContactFormValues): Promise<{ success: boolean; message: string }> {
  console.log("Form data submitted:", data);
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1500));
  // return { success: false, message: "This is a simulated error." }; 
  return { success: true, message: "Thank you for your message! We'll be in touch soon." };
}


export function ContactForm() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();
  const preselectedPackage = searchParams.get('package') || SERVICE_PACKAGES[0]?.name || "General Inquiry";


  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      service: preselectedPackage,
      message: "",
    },
  });
  
  useEffect(() => {
    const serviceFromQuery = searchParams.get('package');
    if (serviceFromQuery) {
      const foundPackage = SERVICE_PACKAGES.find(pkg => pkg.name === serviceFromQuery);
      form.setValue('service', foundPackage ? foundPackage.name : "General Inquiry");
    }
  }, [searchParams, form]);


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
                  <Input id="name" placeholder="e.g. Thabo Mbeki" {...field} disabled={isLoading} />
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
                <FormLabel htmlFor="company">Company Name (Optional)</FormLabel>
                <FormControl>
                  <Input id="company" placeholder="Your Company (Pty) Ltd" {...field} disabled={isLoading} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="phone">Phone Number (Optional)</FormLabel>
                <FormControl>
                  <Input id="phone" type="tel" placeholder="+27 82 123 4567" {...field} disabled={isLoading} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="service"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="service">Service of Interest</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value} disabled={isLoading}>
                <FormControl>
                  <SelectTrigger id="service">
                    <SelectValue placeholder="Select a service package" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="General Inquiry">General Inquiry</SelectItem>
                  {SERVICE_PACKAGES.map(pkg => (
                    <SelectItem key={pkg.name} value={pkg.name}>
                      {pkg.name}
                    </SelectItem>
                  ))}
                  <SelectItem value="Custom Solution">Custom SEO Solution</SelectItem>
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
                  placeholder="Tell us about your project or ask any questions..."
                  rows={5}
                  {...field}
                  disabled={isLoading}
                />
              </FormControl>
              <FormDescription>
                Briefly describe your SEO needs or questions. Max 1000 characters.
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
