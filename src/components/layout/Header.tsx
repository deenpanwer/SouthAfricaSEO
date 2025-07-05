
"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Zap, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { NAV_ITEMS, APP_NAME } from '@/lib/constants.tsx';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import React from 'react';

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
          <nav className="hidden md:flex space-x-1 items-center">
            {NAV_ITEMS.map((item) =>
              item.children ? (
                <DropdownMenu key={item.label}>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className={cn(
                        "text-sm font-medium transition-colors hover:text-primary hover:bg-transparent",
                        pathname.startsWith(item.href) ? "text-primary" : "text-foreground/70"
                      )}>
                      {item.label}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    {item.children.map((child) => (
                      <React.Fragment key={child.label}>
                        {child.isSeparator && <DropdownMenuSeparator />}
                        <DropdownMenuItem asChild>
                          <Link href={child.href} className={cn(
                              "w-full",
                              pathname === child.href ? "font-bold" : ""
                            )}>
                            {child.label}
                          </Link>
                        </DropdownMenuItem>
                      </React.Fragment>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button key={item.label} variant="ghost" asChild className={cn(
                    "text-sm font-medium transition-colors hover:text-primary hover:bg-transparent",
                    pathname === item.href ? "text-primary" : "text-foreground/70"
                  )}>
                  <Link href={item.href}>
                    {item.label}
                  </Link>
                </Button>
              )
            )}
          </nav>

          {/* CTA - Desktop */}
          <div className="hidden md:block">
            <Button asChild className="bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-colors py-2 px-4">
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
                  <nav className="flex flex-col space-y-2">
                    {NAV_ITEMS.map((item) => (
                       <React.Fragment key={item.label}>
                        {item.children ? (
                          <div className="flex flex-col space-y-2">
                             <span className="text-base font-medium text-foreground/80 py-2">{item.label}</span>
                             <div className="pl-4 flex flex-col space-y-2">
                              {item.children.map(child => (
                                <SheetClose asChild key={child.label}>
                                  <Link href={child.href} className={cn("text-base font-medium transition-colors hover:text-primary py-2", pathname === child.href ? "text-primary" : "text-foreground/80")}>
                                    {child.label}
                                  </Link>
                                </SheetClose>
                              ))}
                             </div>
                          </div>
                        ) : (
                           <SheetClose asChild>
                            <Link href={item.href} className={cn("text-base font-medium transition-colors hover:text-primary py-2", pathname === item.href ? "text-primary" : "text-foreground/80")}>
                              {item.label}
                            </Link>
                          </SheetClose>
                        )}
                       </React.Fragment>
                    ))}
                  </nav>
                  <SheetClose asChild>
                    <Button asChild className="w-full bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-colors py-2 px-4">
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
