
"use client";

import Link from 'next/link';
import { ShoppingCart, Menu, X, Wind } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { saphireCategories } from '../lib/data';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export function SaphireHeader() {
  const { getItemCount } = useCart();
  const itemCount = getItemCount();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/saphirefans', label: 'Home' },
    ...saphireCategories.map(cat => ({ href: `/saphirefans/category/${cat.slug}`, label: cat.name })),
    // Add other links like About, Contact for SaphireFans if needed later
  ];

  return (
    <header className="bg-sky-700 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/saphirefans" className="flex items-center space-x-2 text-2xl font-bold hover:opacity-80 transition-opacity">
            <Wind className="h-8 w-8" />
            <span>SaphireFans <span className="text-sm font-normal text-sky-200">Pakistan</span></span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-4 xl:space-x-6 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium hover:text-sky-200 transition-colors",
                  pathname === link.href ? "text-yellow-300 underline underline-offset-4" : "text-white"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Link href="/saphirefans/cart" className="relative hover:text-sky-200 transition-colors p-2">
              <ShoppingCart className="h-6 w-6" />
              {itemCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
              <span className="sr-only">View Cart</span>
            </Link>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-white hover:bg-sky-600">
                    <Menu className="h-7 w-7" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-full max-w-xs bg-sky-700 text-white p-6">
                  <div className="flex flex-col space-y-6">
                    <div className="flex justify-between items-center mb-4">
                       <Link href="/saphirefans" className="flex items-center space-x-2 text-xl font-bold" onClick={() => setIsMobileMenuOpen(false)}>
                          <Wind className="h-7 w-7" />
                          <span>SaphireFans</span>
                        </Link>
                        <SheetClose asChild>
                           <Button variant="ghost" size="icon" className="text-white hover:bg-sky-600">
                              <X className="h-6 w-6" />
                           </Button>
                        </SheetClose>
                    </div>
                    <nav className="flex flex-col space-y-3">
                      {navLinks.map((link) => (
                        <SheetClose asChild key={link.href}>
                          <Link
                            href={link.href}
                             className={cn(
                              "text-base font-medium transition-colors hover:text-sky-200 py-2 border-b border-sky-600",
                              pathname === link.href ? "text-yellow-300" : "text-white"
                            )}
                            // Removed onClick handler: onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {link.label}
                          </Link>
                        </SheetClose>
                      ))}
                    </nav>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

    