import { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

import { WebDevHero } from '@/components/services/web-design-and-development/WebDevHero';
import { ProblemSolutionGrid } from '@/components/services/web-design-and-development/ProblemSolutionGrid';
import { InteractiveProcessFlow } from '@/components/services/web-design-and-development/InteractiveProcessFlow';
import { FeatureGrid } from '@/components/services/web-design-and-development/FeatureGrid';
import { ProjectShowcaseCarousel } from '@/components/services/web-design-and-development/ProjectShowcaseCarousel';
import { TechStackLogos } from '@/components/services/web-design-and-development/TechStackLogos';
import { FinalCTASection } from '@/components/services/web-design-and-development/FinalCTASection';

import { Code, Rocket, Palette, XCircle, CheckCircle, Search, Lightbulb, BarChart2, ShoppingCart } from 'lucide-react';
import { APP_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Web Design & Development Services | ${APP_NAME}`,
  description: `We build websites that are more than just digital brochures—they are growth engines. Our websites are fast, functional, and engineered for conversion from the ground up.`,
};

export default function WebDevPage() {
  return (
    <div className="bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": `${process.env.WEBSITE_URL || 'https://www.traconomics.com'}/`
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Services",
              "item": `${process.env.WEBSITE_URL || 'https://www.traconomics.com'}/services`
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Web Design & Development Services",
              "item": `${process.env.WEBSITE_URL || 'https://www.traconomics.com'}/services/web-design-and-development`
            }
          ]
        }) }}
      />
      <WebDevHero
        headline="Websites That Don't Just Look Good, They Perform."
        subHeadline="Your online presence, engineered for growth and conversion."
        description="We build fast, functional, and beautiful websites that are designed to convert visitors into customers. From custom web development to responsive design, we create digital experiences that drive real business results."
        ctaText="Get a Free Website Audit"
        ctaLink="/contact?service=Web+Design+and+Development"
        videoBackgroundUrl="https://videos.pexels.com/video-files/4496268/4496268-hd_1920_1080_25fps.mp4"
        imageBackgroundUrl="/services/Webhero.png"
      />

      <ProblemSolutionGrid
        headline="Tired of Websites That Underperform?"
        description="Many businesses struggle with websites that are slow, outdated, or simply don't convert. We turn these challenges into opportunities for growth."
        items={[
          {
            problem: "Slow Loading Times",
            solution: "Optimized for lightning-fast performance, ensuring visitors stay engaged.",
            problemIcon: XCircle,
          },
          {
            problem: "Poor Mobile Experience",
            solution: "Fully responsive designs that look and function flawlessly on any device.",
            problemIcon: XCircle,
          },
          {
            problem: "Low Conversion Rates",
            solution: "Conversion-focused design and clear calls-to-action to turn visitors into leads.",
            problemIcon: XCircle,
          },
          {
            problem: "Outdated Design",
            solution: "Modern, intuitive, and visually stunning designs that reflect your brand's professionalism.",
            problemIcon: XCircle,
          },
          {
            problem: "SEO Challenges",
            solution: "Built with SEO best practices from the ground up for better search engine visibility.",
            problemIcon: XCircle,
          },
          {
            problem: "Difficult to Update",
            solution: "Easy-to-use content management systems (CMS) for effortless updates and scalability.",
            problemIcon: XCircle,
          },
        ]}
      />

      <InteractiveProcessFlow
        headline="Our Web Design & Development Process"
        description="We follow a proven, collaborative process to ensure your website is built to perfection, on time and within budget."
        steps={[
          {
            title: "Discovery & Strategy",
            description: "We deep dive into your business, goals, and target audience to craft a tailored web strategy.",
          },
          {
            title: "Design & Prototyping",
            description: "Creating wireframes, mockups, and interactive prototypes to visualize your website's look and feel.",
          },
          {
            title: "Development & Coding",
            description: "Bringing the design to life with clean, efficient, and scalable code using modern technologies.",
          },
          {
            title: "Testing & Quality Assurance",
            description: "Rigorous testing across devices and browsers to ensure flawless performance and user experience.",
          },
          {
            title: "Deployment & Launch",
            description: "Seamlessly launching your website and ensuring a smooth transition to the live environment.",
          },
          {
            title: "Post-Launch Optimization",
            description: "Continuous monitoring, updates, and optimization to ensure your website performs at its best.",
          },
        ]}
      />

      <FeatureGrid
        headline="Why Choose TRAC for Your Web Project?"
        description="We combine cutting-edge technology with strategic thinking to build websites that deliver tangible results."
        features={[
          {
            title: "Conversion-Focused Design",
            description: "Every element is designed to guide users towards your business goals, turning visitors into customers.",
            icon: Rocket,
          },
          {
            title: "SEO-Ready Foundation",
            description: "Websites built with clean code, optimal structure, and schema markup for top search engine performance.",
            icon: Search,
          },
          {
            title: "Blazing Fast Performance",
            description: "Optimized for speed and efficiency, ensuring a smooth user experience and higher search rankings.",
            icon: Lightbulb,
          },
          {
            title: "Scalable & Future-Proof",
            description: "Built on modern frameworks that can grow with your business and adapt to future technologies.",
            icon: BarChart2,
          },
          {
            title: "Custom & Unique Designs",
            description: "No templates here. We create bespoke designs that truly reflect your brand's identity and stand out.",
            icon: Palette,
          },
          {
            title: "Easy Content Management",
            description: "Empowering you with intuitive CMS solutions to easily update and manage your website content.",
            icon: ShoppingCart, // Using ShoppingCart as a placeholder for CMS icon
          },
        ]}
      />

      <ProjectShowcaseCarousel
        headline="Our Latest Web Design & Development Projects"
        description="Explore some of our recent work and see how we've helped businesses like yours achieve their online goals."
        projects={[
          {
            title: "E-commerce Platform Redesign",
            description: "A complete overhaul of an online retail platform, resulting in a 30% increase in conversion rates.",
            imageUrl: "/test4/offering1.jpg", // Placeholder image
            projectUrl: "#",
          },
          {
            title: "SaaS Marketing Website",
            description: "Designed and developed a lead-generating website for a B2B SaaS company, improving lead quality by 25%.",
            imageUrl: "/test4/offering2.jpg", // Placeholder image
            projectUrl: "#",
          },
          {
            title: "Service Business Portal",
            description: "Created a custom client portal for a service-based business, streamlining operations and enhancing user experience.",
            imageUrl: "/test4/offering3.jpg", // Placeholder image
            projectUrl: "#",
          },
        ]}
      />

      <TechStackLogos
        headline="Technologies We Master"
        description="We leverage the best-in-class tools and frameworks to build robust, high-performing, and scalable web solutions."
        logos={[
          { name: "Next.js", logoUrl: "https://tse3.mm.bing.net/th/id/OIP.JgRe9P1av-SzGjJ2lxmmmgHaHa?pid=Api&P=0&h=220" }, // Placeholder logo
          { name: "React", logoUrl: "https://tse2.mm.bing.net/th/id/OIP.SB2ZXE7YzXmsNd4GCi1GWQHaGl?pid=Api&P=0&h=220" }, // Placeholder logo
          { name: "Tailwind CSS", logoUrl: "https://tse1.mm.bing.net/th/id/OIP.zgfQWLfc_agz_lz96wvPkAHaHa?pid=Api&P=0&h=220" }, // Placeholder logo
          { name: "Node.js", logoUrl: "https://tse1.mm.bing.net/th/id/OIP.0U90AFKyG2cDu_KmdKzFeQHaHa?pid=Api&P=0&h=220" }, // Placeholder logo
          { name: "MongoDB", logoUrl: "https://tse3.mm.bing.net/th/id/OIP.2RkBBvsYNsb1R3l6qhd-aAHaHa?pid=Api&P=0&h=220" }, // Placeholder logo
          { name: "Framer Motion", logoUrl: "https://tse3.mm.bing.net/th/id/OIP.Q5azlUHD6PqSqPLL1EyBsgHaHa?pid=Api&P=0&h=220" }, // Placeholder logo
        ]}
      />

      {/* Testimonials / Social Proof - Adapt existing or create new */}
      {/* For now, we'll use a placeholder or adapt an existing testimonial component */}
      {/* <TestimonialsSection /> */}

      {/* FAQ Section - Adapt existing or create new */}
      {/* For now, we'll use a placeholder or adapt an existing FAQ component */}
      {/* <CityFAQSection /> */}

      <FinalCTASection
        headline="Ready to Build Your Next-Generation Website?"
        description="Let's create a powerful online presence that drives growth and sets you apart from the competition."
        ctaText="Start Your Project Today"
        ctaLink="/contact?service=Web+Design+and+Development"
      />
    </div>
  );
}