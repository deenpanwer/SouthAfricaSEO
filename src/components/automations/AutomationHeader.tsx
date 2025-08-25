"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react"; // Using lucide-react for icons
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle, SheetDescription } from "@/components/ui/sheet";

const navLinks = [
  { href: "/automations", label: "Home" },
  { href: "/automations/blog", label: "Blog" },
  { href: "/automations/news", label: "News" },
  { href: "/automations/case-studies", label: "Case Studies" },
  { href: "/automations/briefings", label: "Briefings" },
  { href: "/automations/careers", label: "Careers" },
  { href: "/automations/contact", label: "Contact" },
];

const NavigationLinks = ({ className }: { className?: string }) => (
  <div className={className}>
    {navLinks.map((link) => (
      <Link key={link.href} href={link.href} className="text-white hover:text-primary transition-colors">
        {link.label}
      </Link>
    ))}
  </div>
);

const CTAButton = () => (
  <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 py-2 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
    <Link href="/automations/careers">Join the Mission</Link>
  </Button>
);

const MobileMenu = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="ghost" size="icon" className="text-white md:hidden">
        <Menu size={24} />
      </Button>
    </SheetTrigger>
    <SheetContent side="right" className="bg-ph-menu-overlay border-l border-ph-border flex flex-col">
      <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
      <SheetDescription className="sr-only">A menu for navigating the automations subsite.</SheetDescription>
      <nav className="flex flex-col space-y-6 text-xl items-center justify-center flex-grow">
        {navLinks.map((link) => (
          <SheetClose key={link.href} asChild>
            <Link href={link.href} className="text-white hover:text-primary transition-colors">
              {link.label}
            </Link>
          </SheetClose>
        ))}
        <SheetClose asChild>
          <CTAButton />
        </SheetClose>
      </nav>
    </SheetContent>
  </Sheet>
);

export const AutomationHeader = () => {
  return (
    <header className="sticky top-0 z-50 w-full glass-effect border-b border-ph-border py-4 px-4 md:px-8 flex items-center justify-center">
      <div className="flex items-center justify-between w-full max-w-7xl">
        <div className="flex items-center">
          <Link href="/automations" className="text-2xl font-bold text-white">
            <span className="text-primary">TR</span><span className="text-primary">AC</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <NavigationLinks className="flex items-center space-x-8" />
          <CTAButton />
        </nav>

        <MobileMenu />
      </div>
    </header>
  );
};
