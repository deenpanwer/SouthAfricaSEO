
"use client";

import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import type { VeterinaryStateBottomFormValues } from '@/types';

const e164Regex = /^\+[1-9]\d{1,14}$/;

const veterinaryStateBottomFormSchema = z.object({
  website: z.string().url({ message: "Please enter a valid website URL (e.g., https://example.com)" }).optional().or(z.literal('')),
  phoneNumber: z.string({ required_error: "Phone number is required." })
    .min(1, "Phone number is required.")
    .regex(e164Regex, { message: "Please enter a valid international phone number (e.g., +14155552671)." }),
  message: z.string().max(1000, { message: "Message cannot exceed 1000 characters." }).optional().or(z.literal('')),
  state: z.string(),
  formType: z.string(),
});

async function submitVeterinaryStateBottomForm(data: VeterinaryStateBottomFormValues): Promise<{ success: boolean; message: string }> {
  try {
    const submissionData = {
      "Name": '', // Or a field for contact name if added
      "Email Address": '', // Or a field for email if added
      "Company Name": data.website || `Vet Clinic in ${data.state}`,
      "Phone Number": data.phoneNumber,
      "Website URL": data.website || '',
      "Service of Interest": 'Veterinary SEO',
      "Your Message": data.message || `Lead from ${data.state} Veterinary SEO Bottom Form.`,
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
      return { success: true, message: "Thank you! We'll be in touch with your veterinary SEO proposal shortly." };
    } else {
      const errorText = await response.text();
      console.error("SheetDB submission failed for Veterinary State Bottom Form:", response.status, errorText);
      return { success: false, message: `Could not submit your proposal request. Status: ${response.status}. Please try again.` };
    }
  } catch (error) {
    console.error("Error submitting Veterinary State Bottom Form to SheetDB:", error);
    return { success: false, message: "An unexpected error occurred. Please try again later." };
  }
}

interface VeterinaryStateBottomFormProps {
  stateName: string;
  formTitle: string;
}

export function VeterinaryStateBottomForm({ stateName, formTitle }: VeterinaryStateBottomFormProps) {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<VeterinaryStateBottomFormValues>({
    resolver: zodResolver(veterinaryStateBottomFormSchema),
    defaultValues: {
      website: "",
      phoneNumber: "",
      message: "",
      state: stateName,
      formType: "Veterinary Bottom Contact Form",
    },
  });

  useEffect(() => {
    form.setValue('state', stateName);
  }, [stateName, form]);

  const onSubmit: SubmitHandler<VeterinaryStateBottomFormValues> = async (data) => {
    setIsLoading(true);
    try {
      const augmentedData = { ...data, state: stateName, formType: "Veterinary Bottom Contact Form" };
      const response = await submitVeterinaryStateBottomForm(augmentedData);
      if (response.success) {
        toast({
          title: "Proposal Request Sent!",
          description: response.message,
        });
        form.reset({
            website: "",
            phoneNumber: "",
            message: "",
            state: stateName,
            formType: "Veterinary Bottom Contact Form",
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
    <div className="bg-muted/30 p-6 sm:p-8 rounded-lg shadow-lg max-w-lg mx-auto text-foreground" id="contact-form">
      <h2 className="text-2xl font-bold text-center text-primary mb-6">{formTitle.replace('[StateName]', stateName)}</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="website"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor={`vet-bottom-website-${stateName.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm font-medium sr-only">Your Clinic Website</FormLabel>
                <FormControl>
                  <Input id={`vet-bottom-website-${stateName.toLowerCase().replace(/\s+/g, '-')}`} placeholder="Your Clinic Website (Optional)" {...field} disabled={isLoading} className="bg-background border-border focus:border-primary focus:ring-primary" />
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
                <FormLabel htmlFor={`vet-bottom-phoneNumber-${stateName.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm font-medium sr-only">Phone Number*</FormLabel>
                <FormControl>
                  <PhoneInput
                    defaultCountry="us"
                    value={field.value}
                    onChange={(phone) => field.onChange(phone)}
                    disabled={isLoading}
                    placeholder="Your Phone Number*"
                    inputClassName="w-full bg-background !border-border placeholder:text-muted-foreground focus:!border-primary focus:!ring-primary"
                    countrySelectorStyleProps={{
                      buttonClassName: "!border-border !bg-background hover:!bg-muted/50",
                    }}
                    inputStyle={{ width: '100%' }}
                    style={{ '--react-international-phone-border-radius': '0.375rem', '--react-international-phone-border-color': 'hsl(var(--border))' } as React.CSSProperties}
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
                <FormLabel htmlFor={`vet-bottom-message-${stateName.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm font-medium sr-only">Your Message</FormLabel>
                <FormControl>
                  <Textarea
                    id={`vet-bottom-message-${stateName.toLowerCase().replace(/\s+/g, '-')}`}
                    placeholder={"Tell us about your " + stateName + " veterinary practice or specific SEO goals (Optional)"}
                    rows={4}
                    {...field}
                    disabled={isLoading}
                    className="bg-background border-border focus:border-primary focus:ring-primary"
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
                  Sending...
                </>
              ) : (
                "GET VET SEO PROPOSAL"
              )}
            </Button>
          </div>
           <p className="text-xs text-muted-foreground text-center pt-1">
            We help veterinary clinics in {stateName} connect with more pet owners.
          </p>
        </form>
      </Form>
    </div>
  );
}
