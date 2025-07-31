import HeroSection from "./components/HeroSection";
import HomepagePlatformsSection from "./components/HomepagePlatformsSection";
import VideoSection from "./components/VideoSection";
import TestimonialsCarousel from "./components/TestimonialsCarousel";
import HomepageOfferingsSection from "./components/HomepageOfferingsSection";
import HomepageImpactStudiesSection from "./components/HomepageImpactStudiesSection";
import HomepageBlogSection from "./components/HomepageBlogSection";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automation",
  description: "Automation services",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <HomepagePlatformsSection />
      <HomepageOfferingsSection />
      <HomepageImpactStudiesSection />
      <HomepageBlogSection />
      <VideoSection />
      <TestimonialsCarousel />
    </main>
  );
}