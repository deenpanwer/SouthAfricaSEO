"use client";

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  sector: z.enum(["Government", "Military", "Enterprise", "Other"], { message: "Please select a sector." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }).max(500, { message: "Message must not exceed 500 characters." }),
});

type InquiryFormValues = z.infer<typeof formSchema>;

export const InquiryForm = () => {
  const form = useForm<InquiryFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      sector: "Other",
      message: "",
    },
  });

  const onSubmit = (values: InquiryFormValues) => {
    console.log(values);
    // Here you would typically send the form data to an API endpoint
    alert("Message sent! We will get back to you soon.");
    form.reset();
  };

  return (
    <div className="bg-card p-8 rounded-lg border border-ph-border shadow-lg max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">Send Us a Message</h2>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <Label htmlFor="name" className="text-ph-light-gray">Name</Label>
          <Input id="name" {...form.register("name")} className="mt-1 bg-input border-ph-border text-white" />
          {form.formState.errors.name && (
            <p className="text-destructive text-sm mt-1">{form.formState.errors.name.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="email" className="text-ph-light-gray">Email</Label>
          <Input id="email" type="email" {...form.register("email")} className="mt-1 bg-input border-ph-border text-white" />
          {form.formState.errors.email && (
            <p className="text-destructive text-sm mt-1">{form.formState.errors.email.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="sector" className="text-ph-light-gray">Sector</Label>
          <Select onValueChange={(value) => form.setValue("sector", value as InquiryFormValues["sector"])} defaultValue={form.getValues("sector")}>
            <SelectTrigger className="w-full mt-1 bg-input border-ph-border text-white">
              <SelectValue placeholder="Select your sector" />
            </SelectTrigger>
            <SelectContent className="bg-card border-ph-border text-white">
              <SelectItem value="Government">Government</SelectItem>
              <SelectItem value="Military">Military</SelectItem>
              <SelectItem value="Enterprise">Enterprise</SelectItem>
              <SelectItem value="Other">Other</SelectItem>
            </SelectContent>
          </Select>
          {form.formState.errors.sector && (
            <p className="text-destructive text-sm mt-1">{form.formState.errors.sector.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="message" className="text-ph-light-gray">Message</Label>
          <Textarea id="message" {...form.register("message")} rows={5} className="mt-1 bg-input border-ph-border text-white" />
          {form.formState.errors.message && (
            <p className="text-destructive text-sm mt-1">{form.formState.errors.message.message}</p>
          )}
        </div>

        <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-md text-lg font-semibold shadow-lg transition-colors">
          Submit Inquiry
        </Button>
      </form>
    </div>
  );
};
