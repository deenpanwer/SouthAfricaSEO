
"use client";

import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useToast } from "@/hooks/use-toast";
import { useState } from 'react';
import { Loader2 } from 'lucide-react';

import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { Textarea } from './ui/Textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

const quoteFormSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().optional(),
  projectType: z.enum(["interior", "exterior", "commercial", "other"]),
  message: z.string().min(10, "Please provide a brief description of your project.").max(500, "Message is too long."),
  contactMethod: z.enum(["email", "phone"]).optional(),
});

type QuoteFormValues = z.infer<typeof quoteFormSchema>;

export function QuoteForm() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteFormSchema),
  });

  const onSubmit: SubmitHandler<QuoteFormValues> = async (data) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log("Form submitted:", data);
    
    toast({
      title: "Quote Request Sent!",
      description: "Thank you for your interest. We'll be in touch within 24 hours.",
    });

    form.reset();
    setIsLoading(false);
  };

  return (
    <div className="bg-white p-8 md:p-10 rounded-2xl shadow-soft">
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input id="fullName" {...form.register("fullName")} />
            {form.formState.errors.fullName && <p className="text-sm text-red-500">{form.formState.errors.fullName.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" {...form.register("email")} />
            {form.formState.errors.email && <p className="text-sm text-red-500">{form.formState.errors.email.message}</p>}
          </div>
        </div>
        
        <div className="space-y-2">
            <Label>Project Type</Label>
            <div className="flex flex-wrap gap-4">
                {["interior", "exterior", "commercial", "other"].map(type => (
                    <div key={type} className="flex items-center gap-2">
                        <input type="radio" id={type} value={type} {...form.register("projectType")} className="accent-enviro-pink focus:ring-enviro-pink" />
                        <Label htmlFor={type} className="capitalize font-normal">{type}</Label>
                    </div>
                ))}
            </div>
            {form.formState.errors.projectType && <p className="text-sm text-red-500">{form.formState.errors.projectType.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Project Details</Label>
          <Textarea id="message" placeholder="Tell us about the space you want to transform..." {...form.register("message")} />
          {form.formState.errors.message && <p className="text-sm text-red-500">{form.formState.errors.message.message}</p>}
        </div>

        <Button type="submit" disabled={isLoading} size="lg" className="w-full">
          {isLoading ? <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending...</> : "Submit Request"}
        </Button>
      </form>
    </div>
  );
}
