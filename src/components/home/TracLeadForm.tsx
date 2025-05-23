
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
import type { TracLeadFormValues } from '@/types';

const internationalPhoneRegex = /^\+\d{1,3}[\s.-]?\(?\d{1,4}\)?[\s.-]?\d{3,4}[\s.-]?\d{3,9}$/;

const leadFormSchema = z.object({
  name: z.string().optional(),
  website: z.string().min(1, { message: "Website URL is required." }).url({ message: "Please enter a valid website URL (e.g., https://example.com)" }),
  phoneNumber: z.string({ required_error: "Phone number is required."}).min(1, "Phone number is required.")
    .regex(internationalPhoneRegex, { message: "Please enter a valid international phone number including country code (e.g., +1 415 555 0123)." }),
});

// Mock server action
async function submitLeadForm(data: TracLeadFormValues): Promise<{ success: boolean; message: string }> {
  console.log("Lead form data submitted:", data);
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1500));
  // Example: return { success: false, message: "Simulated error processing your request." };
  return { success: true, message: "Thanks! Our consultants will reach out to you ASAP." };
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
              <FormLabel htmlFor="lead-website" className="text-sm font-medium text-card-foreground">Your Website URL*</FormLabel>
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
                <Input id="lead-phoneNumber" type="tel" placeholder="e.g. +1 415 555 0123" {...field} disabled={isLoading} className="bg-background/70"/>
              </FormControl>
              <FormDescription className="text-xs">
                Please include your country code.
              </FormDescription>
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
          Our business consultants will reach out to you ASAP.
        </p>
      </form>
    </Form>
  );
}
