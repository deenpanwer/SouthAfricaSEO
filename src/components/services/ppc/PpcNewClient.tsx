"use client";

import Link from 'next/link';
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from '@/components/ui/button';
import { Highlight } from '@/components/ui/highlight';
import { StatCard } from '@/components/ui/stat-card';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DefinitionTooltip } from '@/components/ui/definition-tooltip';
import { RoiCalculator } from '@/components/ui/roi-calculator';
import { CaseStudyCard } from '@/components/ui/case-study-card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  DollarSign,
  Target,
  TrendingUp,
  Users,
  AlertTriangle,
  Search,
  PenSquare,
  TestTubes,
  FileText
} from 'lucide-react';

export default function PpcNewClient() {
  return (
    <main>
      {/* Component 2: Hero Section with Highlight (Component 3) */}
      <section className="relative h-[70vh] flex items-center justify-center text-center bg-gradient-to-r from-blue-600 to-purple-700 overflow-hidden">
        <Image
          src="/business-growth.png"
          alt="A chart showing business growth"
          fill={true}
          objectFit="cover"
          className="absolute z-0 opacity-30"
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20 p-4 text-white max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold">
            <Highlight text="PPC as an Investment, Not an Expense" words={["Investment", "Expense"]} />
          </h1>
          <p className="mt-4 text-lg sm:text-xl">
            <Highlight 
              text="We build and manage paid campaigns that are engineered to be profitable from day one. Clicks are a cost; customers are a return." 
              words={["profitable", "customers", "return"]} 
            />
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/contact?service=PPC">Get Free Proposal</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-black">
              <Link href="#results">See Our Results</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Component 4: Stat Grid */}
      <section className="bg-muted/40 py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <StatCard
              title="Average ROAS"
              value="350%"
              progress={75}
              icon={<TrendingUp className="h-4 w-4 text-muted-foreground" />}
            />
            <StatCard
              title="Reduced Cost Per Acquisition"
              value="-40%"
              progress={60}
              icon={<Target className="h-4 w-4 text-muted-foreground" />}
            />
            <StatCard
              title="Client Retention"
              value="97%"
              progress={97}
              icon={<Users className="h-4 w-4 text-muted-foreground" />}
            />
            <StatCard
              title="Ad Spend Managed"
              value="$5M+"
              progress={85}
              icon={<DollarSign className="h-4 w-4 text-muted-foreground" />}
            />
          </div>
        </div>
      </section>

      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Component 1: Breadcrumb */}
        <Breadcrumb className="mb-12">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/services">Services</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>PPC (Pay-per-click)</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Component 5: Alert Box */}
        <div className="my-16 max-w-4xl mx-auto">
          <Alert variant="destructive">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle className="font-bold">The Flaw in Conventional PPC Management</AlertTitle>
            <AlertDescription>
              Many agencies focus on vanity metrics like impressions and clicks. This approach mistakes activity for progress and treats your ad spend as a cost center to be minimized, not an investment engine to be maximized. A high CTR on an unprofitable keyword is just a fast way to burn money.
            </AlertDescription>
          </Alert>
        </div>

        {/* Component 6: Tabbed Services */}
        <section className="my-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our PPC Services</h2>
          <Tabs defaultValue="google-ads" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="google-ads">Google Ads</TabsTrigger>
              <TabsTrigger value="meta-ads">Meta Ads</TabsTrigger>
              <TabsTrigger value="linkedin-ads">LinkedIn Ads</TabsTrigger>
              <TabsTrigger value="shopping-ads">Shopping</TabsTrigger>
            </TabsList>
            <TabsContent value="google-ads">
              <Card>
                <CardHeader>
                  <CardTitle>Google Ads</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p>Capture high-intent customers at the exact moment they are searching for your products or services. We manage everything from keyword research to bid management and ad copy testing to ensure you dominate the search results for the terms that matter most.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="meta-ads">
              <Card>
                <CardHeader>
                  <CardTitle>Meta (Facebook & Instagram) Ads</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p>Leverage the world's largest social network to find and engage your ideal customers. We use sophisticated audience targeting, compelling creative, and strategic campaign structures to drive brand awareness, lead generation, and sales on Facebook and Instagram.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="linkedin-ads">
              <Card>
                <CardHeader>
                  <CardTitle>LinkedIn Ads</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p>Reach key decision-makers and professionals in a business context. Ideal for B2B companies, our LinkedIn Ads management focuses on generating high-quality leads, building thought leadership, and driving targeted traffic from the world's premier professional network.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="shopping-ads">
              <Card>
                <CardHeader>
                  <CardTitle>Google Shopping & Performance Max</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p>For e-commerce businesses, we optimize your product feeds and manage Google Shopping and Performance Max campaigns to get your products in front of ready-to-buy customers. We focus on maximizing your Return on Ad Spend (ROAS) and driving profitable sales.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        {/* Component 7: Process Timeline with Tooltip (Component 8) */}
        <section className="my-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Optimization Process</h2>
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute left-1/2 top-0 h-full w-0.5 bg-muted-foreground/20" />
            <div className="relative flex flex-col gap-y-12">
              {/* Step 1 */}
              <div className="flex items-center w-full">
                <div className="w-1/2 pr-8 text-right">
                  <h3 className="font-bold text-lg">Deep Audience Research</h3>
                  <p className="text-muted-foreground text-sm">We use audience signals from Google, Meta, and LinkedIn to build profiles of your ideal customers.</p>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 bg-background p-2 rounded-full border">
                  <Search className="h-6 w-6 text-primary" />
                </div>
              </div>
              {/* Step 2 */}
              <div className="flex items-center w-full">
                <div className="w-1/2" />
                <div className="w-1/2 pl-8">
                  <h3 className="font-bold text-lg">Compelling Ad Copywriting</h3>
                  <p className="text-muted-foreground text-sm">Our ads focus on benefits, not just features, and include strong, clear calls to action.</p>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 bg-background p-2 rounded-full border">
                  <PenSquare className="h-6 w-6 text-primary" />
                </div>
              </div>
              {/* Step 3 */}
              <div className="flex items-center w-full">
                <div className="w-1/2 pr-8 text-right">
                  <h3 className="font-bold text-lg">Continuous A/B Testing</h3>
                  <p className="text-muted-foreground text-sm">We constantly test ad variations, headlines, and landing pages to find the winning combinations.</p>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 bg-background p-2 rounded-full border">
                  <TestTubes className="h-6 w-6 text-primary" />
                </div>
              </div>
              {/* Step 4 */}
              <div className="flex items-center w-full">
                <div className="w-1/2" />
                <div className="w-1/2 pl-8">
                  <h3 className="font-bold text-lg">Transparent Reporting</h3>
                  <p className="text-muted-foreground text-sm">Our reports show you what matters: leads, sales, cost-per-lead, and <DefinitionTooltip definition="Return on Ad Spend (ROAS) is a marketing metric that measures the amount of revenue your business earns for each dollar it spends on advertising.">ROAS</DefinitionTooltip>. No vanity metrics.</p>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 bg-background p-2 rounded-full border">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Component 9 & 10: ROI Calculator & Interactive Slider */}
        <section className="my-16 py-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
          <div className="container mx-auto">
            <RoiCalculator />
          </div>
        </section>

        {/* Component 11: Case Study Carousel */}
        <section className="my-16 py-16 bg-muted/40">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Client Success Stories</h2>
            <Slider {...{
              dots: true,
              infinite: true,
              speed: 500,
              slidesToShow: 3,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 5000,
              responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                  }
                }
              ]
            }}>
              <div className="px-2">
                <CaseStudyCard
                  clientName="Acme Corp"
                  clientAvatar="/home/Client-Natiowide-Construction.webp"
                  industry="SaaS"
                  quote="Traconomics transformed our ad spend into a profit engine. Their strategic approach is unmatched!"
                  results={["+250% ROAS", "-30% CPA", "+150% Leads"]}
                />
              </div>
              <div className="px-2">
                <CaseStudyCard
                  clientName="Global Retail"
                  clientAvatar="/home/Client-Farah-Law-Firm.webp"
                  industry="E-commerce"
                  quote="Our online sales have never been higher. Traconomics truly understands performance marketing."
                  results={["+300% Revenue", "+50% Conversion Rate", "2x AOV"]}
                />
              </div>
              <div className="px-2">
                <CaseStudyCard
                  clientName="Local Services Pro"
                  clientAvatar="/home/marci-wiersma.webp"
                  industry="Local Services"
                  quote="We're consistently booked solid thanks to their targeted local PPC campaigns."
                  results={["+400% Call Volume", "Top 3 Local Pack", "90% Lead-to-Client Rate"]}
                />
              </div>
              <div className="px-2">
                <CaseStudyCard
                  clientName="Tech Innovators"
                  clientAvatar="/home/chad-montgomery.webp"
                  industry="Tech Startup"
                  quote="Their data-driven approach helped us scale rapidly and efficiently. Highly recommend!"
                  results={["+500% User Acquisition", "-20% CAC", "Achieved Series A Funding"]}
                />
              </div>
            </Slider>
          </div>
        </section>

        {/* Component 15: FAQ Accordion */}
        <section className="my-16">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
            <AccordionItem value="item-1">
              <AccordionTrigger>What is PPC and how does it work?</AccordionTrigger>
              <AccordionContent>
                PPC (Pay-Per-Click) is an online advertising model where advertisers pay a fee each time their ad is clicked. Essentially, it's a way of buying visits to your site, rather than attempting to earn those visits organically. Search engine advertising is one of the most popular forms of PPC.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How long does it take to see results from PPC?</AccordionTrigger>
              <AccordionContent>
                One of the main advantages of PPC is its speed. You can start seeing results (traffic, leads, sales) almost immediately after your campaigns are launched. However, optimizing for the best ROI is an ongoing process that typically refines over weeks and months.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>How much should I budget for PPC?</AccordionTrigger>
              <AccordionContent>
                PPC budgets vary widely depending on your industry, competition, target audience, and desired results. We work with you to determine a budget that aligns with your business goals and provides a positive return on investment.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>What makes your PPC management different?</AccordionTrigger>
              <AccordionContent>
                Unlike agencies that focus on vanity metrics, we prioritize profitability and ROI. Our approach is rooted in economic modeling, targeting high-intent keywords, and ensuring congruence from click to conversion. We treat your ad spend as an investment, not an expense.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </div>
    </main>
  );
}
