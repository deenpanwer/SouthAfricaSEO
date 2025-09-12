
'use client';

import React from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from 'lucide-react';
import { NumberTicker } from '../ui/NumberTicker';
import { CONTACT_DETAILS } from '@/lib/constants';
import type { AiSeoSgeFormValues } from '@/types/aiSeo';

const formSchema = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  company: z.string().optional(),
  website: z.string().optional(),
  email: z.string().optional(),
  phone: z.string().optional(),
  services: z.string().optional(),
  budget: z.string().optional(),
  howDidYouHear: z.string().optional(),
  businessInfo: z.string().optional(),
  city: z.string(),
  formType: z.string(),
});

async function submitSgeForm(data: AiSeoSgeFormValues): Promise<{ success: boolean; message: string }> {
  try {
    const submissionData = {
      "Name": `${data.firstName || ''} ${data.lastName || ''}`.trim(),
      "Email Address": data.email || '',
      "Company Name": data.company || '',
      "Phone Number": data.phone || '',
      "Website URL": data.website || '',
      "Service of Interest": data.services || 'AI SEO',
      "Your Message": data.businessInfo || `Lead from SGE/GEO Form - ${data.city}`,
      "Form Type": `${data.formType} - ${data.city}`,
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
      return { success: true, message: "Thank you for your proposal request! We'll be in touch soon." };
    } else {
      const errorText = await response.text();
      console.error("SheetDB submission failed for SGE/GEO Form:", response.status, errorText);
      return { success: false, message: `Could not submit your request. Status: ${response.status}. Please try again.` };
    }
  } catch (error) {
    console.error("Error submitting SGE/GEO Form to SheetDB:", error);
    return { success: false, message: "An unexpected error occurred. Please try again later." };
  }
}

const InfoCard = ({ icon, title, description, headerColor, bodyColor }: { icon: React.ReactNode; title: string; description: string; headerColor: string; bodyColor: string; }) => (
  <div className="rounded-lg shadow-md overflow-hidden h-full flex flex-col border border-gray-200">
    <div className="p-4 flex items-center gap-4 text-white" style={{ backgroundColor: headerColor }}>
      {icon}
      <h3 className="text-lg font-bold">{title}</h3>
    </div>
    <div className="p-6 flex-grow" style={{ backgroundColor: bodyColor }}>
        <p className="text-gray-700 leading-relaxed">{description}</p>
    </div>
  </div>
);

const SeoIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
    <path d="M10 17l5-5-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4.5 17.5h15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const SgeIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
    <path d="M15.5 14h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12.5 17h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15.5 17h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8.5 14h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12.5 14h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8.5 17h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10.125 4.5v-2.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.875 4.5v-2.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7.875 19.5v2.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16.125 19.5v2.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4.5 10.125h-2.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M19.5 13.875h2.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4.5 13.875h-2.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M19.5 10.125h2.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const GeoIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 2C14.5013 4.73636 15.922 8.29203 16 12C15.922 15.708 14.5013 19.2636 12 22C9.49872 19.2636 8.07797 15.708 8 12C8.07797 8.29203 9.49872 4.73636 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export function SgeGeoSection({ cityName }: { cityName: string }) {
    const { toast } = useToast();
    const [isLoading, setIsLoading] = React.useState(false);
    const form = useForm<AiSeoSgeFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            company: '',
            website: '',
            email: '',
            phone: '',
            services: undefined,
            budget: undefined,
            howDidYouHear: '',
            businessInfo: '',
            city: cityName,
            formType: 'AI SEO SGE/GEO Form',
        }
    });

     React.useEffect(() => {
        form.setValue('city', cityName);
    }, [cityName, form]);

    const onSubmit: SubmitHandler<AiSeoSgeFormValues> = async (data) => {
        setIsLoading(true);
        try {
            const response = await submitSgeForm(data);
             if (response.success) {
                toast({
                    title: "Proposal Request Sent!",
                    description: response.message,
                });
                form.reset();
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
        <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Top Section */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl font-bold text-foreground">SEO, SGE, GEO: What You Need To Know</h2>
                    <p className="mt-4 text-muted-foreground">
                        From keyword density to understanding search intent and context, search generative experience (SGE) is shifting the paradigm. But what is SGE and how could it affect your organic traffic and search engine optimization (SEO) strategies?
                    </p>
                    <p className="mt-4 text-muted-foreground">
                        Discover what these generative search developments could mean for your digital strategy:
                    </p>
                </div>

                {/* Cards Section */}
                <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
                    <InfoCard 
                        icon={<SeoIcon />} 
                        title="Search Engine Optimization (SEO)"
                        description="SEO is the process of optimizing your website and content to increase visibility, drive organic traffic and boost your rankings on search engines. The higher your search rankings, the more traffic for your website."
                        headerColor="#3B5998"
                        bodyColor="#F0F2F5"
                    />
                    <InfoCard 
                        icon={<SgeIcon />} 
                        title="Search Generative Experience (SGE)"
                        description="SGE is a search experience that uses generative artificial intelligence to provide users with quick, more relevant and contextual responses without having to click on individual web pages."
                        headerColor="#00A86B"
                        bodyColor="#E6F4EA"
                    />
                    <InfoCard 
                        icon={<GeoIcon />} 
                        title="Generative Engine Optimization (GEO)"
                        description="GEO combines SEO best practices with an understanding of generative AI to align strategies with the expectations of AI-driven search engines and ensure your content is discovered and favorably ranked."
                        headerColor="#008080"
                        bodyColor="#E0F2F1"
                    />
                </div>
                
                <div className="text-center max-w-3xl mx-auto mb-16">
                     <p className="text-muted-foreground">
                        Our AI SEO company is laser-focused on providing GEO services that boost your content visibility and ranking in the age of artificial intelligence search. We implement data-driven strategies to make your content Google AI-ready while keeping it engaging for human readers.
                    </p>
                     <p className="mt-4 text-muted-foreground">
                        Have more questions about what is SGE and GEO? Book a call with us today. We're happy to answer your questions and walk you through our process.
                    </p>
                </div>

                {/* Form Section */}
                 <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-6xl mx-auto border border-green-700 p-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-green-700/90 text-white p-8 rounded-lg flex flex-col justify-center">
                            <h3 className="text-3xl font-bold mb-4">Experience Real Results</h3>
                            <p className="mb-8">Partner with Thrive Internet Marketing Agency and scale your business.</p>
                            <div className="space-y-6 text-left">
                                <div className="flex items-center">
                                    <span className="text-5xl font-bold text-yellow-400 mr-4"><NumberTicker value="+133" />%</span>
                                    <span className="text-lg">Organic Conversions</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-5xl font-bold text-yellow-400 mr-4"><NumberTicker value="+279" />%</span>
                                    <span className="text-lg">Organic Traffic</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-5xl font-bold text-yellow-400 mr-4"><NumberTicker value="+268" />%</span>
                                    <span className="text-lg">Monthly Traffic</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-0 md:p-8">
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <FormField control={form.control} name="firstName" render={({ field }) => (
                                            <FormItem><FormLabel className="sr-only">First Name*</FormLabel><FormControl><Input placeholder="First Name*" {...field} /></FormControl><FormMessage /></FormItem>
                                        )}/>
                                        <FormField control={form.control} name="lastName" render={({ field }) => (
                                            <FormItem><FormLabel className="sr-only">Last Name*</FormLabel><FormControl><Input placeholder="Last Name*" {...field} /></FormControl><FormMessage /></FormItem>
                                        )}/>
                                    </div>
                                    <FormField control={form.control} name="company" render={({ field }) => (
                                        <FormItem><FormLabel className="sr-only">Company/Organization*</FormLabel><FormControl><Input placeholder="Company/Organization" {...field} /></FormControl><FormMessage /></FormItem>
                                    )}/>
                                    <FormField control={form.control} name="email" render={({ field }) => (
                                        <FormItem><FormLabel className="sr-only">Email Address*</FormLabel><FormControl><Input type="email" placeholder="Email Address*" {...field} /></FormControl><FormMessage /></FormItem>
                                    )}/>
                                    <FormField control={form.control} name="phone" render={({ field }) => (
                                        <FormItem><FormLabel className="sr-only">Phone*</FormLabel><FormControl><PhoneInput defaultCountry="us" placeholder="Phone*" {...field} /></FormControl><FormMessage /></FormItem>
                                    )}/>
                                    <FormField control={form.control} name="website" render={({ field }) => (
                                        <FormItem><FormLabel className="sr-only">Website</FormLabel><FormControl><Input placeholder="Website" {...field} /></FormControl><FormMessage /></FormItem>
                                    )}/>
                                    <FormField control={form.control} name="services" render={({ field }) => (
                                        <FormItem><FormLabel className="sr-only">Services*</FormLabel><Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl><SelectTrigger><SelectValue placeholder="Services*" /></SelectTrigger></FormControl>
                                            <SelectContent><SelectItem value="seo">SEO</SelectItem><SelectItem value="ppc">PPC</SelectItem><SelectItem value="social">Social Media</SelectItem></SelectContent>
                                        </Select><FormMessage /></FormItem>
                                    )}/>
                                    <FormField control={form.control} name="budget" render={({ field }) => (
                                        <FormItem><FormLabel className="sr-only">Monthly Marketing Budget*</FormLabel><Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl><SelectTrigger><SelectValue placeholder="Monthly Marketing Budget*" /></SelectTrigger></FormControl>
                                            <SelectContent><SelectItem value="<2.5k">&lt; $2,500</SelectItem><SelectItem value="2.5k-5k">$2,500 - $5,000</SelectItem><SelectItem value="5k+">$5,000+</SelectItem></SelectContent>
                                        </Select><FormMessage /></FormItem>
                                    )}/>
                                    <FormField control={form.control} name="howDidYouHear" render={({ field }) => (
                                        <FormItem><FormLabel className="sr-only">How Did You Hear About Thrive?</FormLabel><FormControl><Input placeholder="How Did You Hear About Thrive?" {...field} /></FormControl><FormMessage /></FormItem>
                                    )}/>
                                    <FormField control={form.control} name="businessInfo" render={({ field }) => (
                                        <FormItem><FormLabel className="sr-only">Tell us about your business</FormLabel><FormControl><Textarea placeholder="Tell us about your business" {...field} /></FormControl><FormMessage /></FormItem>
                                    )}/>
                                    <Button type="submit" disabled={isLoading} className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold text-lg py-3">
                                        {isLoading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin"/> Sending...</> : "SEND MY FREE PROPOSAL"}
                                    </Button>
                                    <p className="text-xs text-center text-muted-foreground">In a hurry? Give us a call now at <a href={`tel:${CONTACT_DETAILS.phone}`} className="text-orange-600 font-semibold">{CONTACT_DETAILS.phone}</a></p>
                                    <p className="text-xs text-center text-muted-foreground">By submitting your phone number, you agree to receiving texts from Thrive Ideas.</p>
                                </form>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}