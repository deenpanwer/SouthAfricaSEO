import HeroSection from "./components/HeroSection";
import HomepagePlatformsSection from "./components/HomepagePlatformsSection";
import VideoSection from "./components/VideoSection";
import TestimonialsCarousel from "./components/TestimonialsCarousel";
import HomepageOfferingsSection from "./components/HomepageOfferingsSection";
import HomepageImpactStudiesSection from "./components/HomepageImpactStudiesSection";
import HomepageBlogSection from "./components/HomepageBlogSection";

import type { Metadata } from "next";
import VideoBackground from "./components/VideoBackground";

export const metadata: Metadata = {
  title: "Automation",
  description: "Automation services",
};

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between">
      <div className="absolute inset-0 z-0">
        <VideoBackground />
      </div>
      <div className="relative z-10 w-full">
        <div className="bg-ph-black text-ph-white">
            <HeroSection />
        </div>
        <HomepagePlatformsSection />
        <div className="bg-ph-black text-ph-white">
          <HomepageOfferingsSection />
          <HomepageImpactStudiesSection />
          <HomepageBlogSection />
          <VideoSection />
          <TestimonialsCarousel />
        </div>
      </div>
    </main>
  );
}