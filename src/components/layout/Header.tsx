
"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react'; // Zap can be a generic "spark" or "boost" icon
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { NAV_ITEMS, APP_NAME } from '@/lib/constants.tsx';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-background/80 backdrop-blur-md sticky top-0 z-50 border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors">
            <Zap className="h-8 w-8" />
            <span className="font-extrabold text-xl font-poppins">{APP_NAME}</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.href ? "text-primary" : "text-foreground/70"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA - Desktop */}
          <div className="hidden md:block">
            <Button asChild>
              <Link href="/contact">Get a Free Quote</Link>
            </Button>
          </div>


          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-xs bg-background p-6">
                <div className="flex flex-col space-y-6">
                  <div className="flex justify-between items-center">
                     <Link href="/" className="flex items-center space-x-2 text-primary" onClick={() => setIsMobileMenuOpen(false)}>
                        <Zap className="h-7 w-7" />
                        <span className="font-bold text-lg">{APP_NAME}</span>
                      </Link>
                  </div>
                  <nav className="flex flex-col space-y-4">
                    {NAV_ITEMS.map((item) => (
                      <SheetClose asChild key={item.label}>
                        <Link
                          href={item.href}
                          className={cn(
                            "text-base font-medium transition-colors hover:text-primary py-2",
                            pathname === item.href ? "text-primary" : "text-foreground/80"
                          )}
                        >
                          {item.label}
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>
                  <SheetClose asChild>
                    <Button asChild className="w-full">
                      <Link href="/contact">Get a Free Quote</Link>
                    </Button>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
