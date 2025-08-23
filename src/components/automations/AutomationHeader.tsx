"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Using lucide-react for icons
import { Button } from "@/components/ui/button"; // Assuming shadcn/ui button

const NavigationLinks = () => (
  <>
    <Link href="/automations" className="text-white hover:text-primary transition-colors">
      Home
    </Link>
    <Link href="/automations/blog" className="text-white hover:text-primary transition-colors">
      Blog
    </Link>
    <Link href="/automations/news" className="text-white hover:text-primary transition-colors">
      News
    </Link>
    <Link href="/automations/case-studies" className="text-white hover:text-primary transition-colors">
      Case Studies
    </Link>
    <Link href="/automations/briefings" className="text-white hover:text-primary transition-colors">
      Briefings
    </Link>
    <Link href="/automations/careers" className="text-white hover:text-primary transition-colors">
      Careers
    </Link>
    <Link href="/automations/contact" className="text-white hover:text-primary transition-colors">
      Contact
    </Link>
  </>
);

const CTAButton = () => (
  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 py-2 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
    <Link href="/automations/careers">Join the Mission</Link>
  </Button>
);

export const AutomationHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full glass-effect border-b border-ph-border py-4 px-4 md:px-8 flex items-center justify-center">
      <div className="flex items-center justify-between w-full max-w-7xl">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/automations" className="text-2xl font-bold text-white">
            <span className="text-primary">TR</span><span className="text-secondary">AC</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavigationLinks />
          <CTAButton />
        </nav>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-white"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Navigation Sheet */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-ph-menu-overlay flex flex-col items-center justify-center z-40 animate-in slide-in-from-right-full duration-300 ease-out">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-4 right-4 text-white"
          >
            <X size={24} />
          </Button>
          <nav className="flex flex-col space-y-6 text-xl">
            <NavigationLinks />
            <CTAButton />
          </nav>
        </div>
      )}
    </header>
  );
};
