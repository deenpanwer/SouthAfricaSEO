
"use client";

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from '@/components/ui/sheet';
import Logo from './logo';
import { NAV_ITEMS, APP_NAME } from '@/lib/constants.tsx';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import React from 'react';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  
  const mobileLinkClass = "text-base font-medium transition-colors hover:text-primary py-2 block w-full text-left";
  const desktopLinkClass = "text-sm font-medium transition-colors hover:text-primary hover:bg-transparent";

  return (
    <header className="bg-background/80 backdrop-blur-md sticky top-0 z-50 border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors">
            {/* To revert to the Zap icon, replace the Image component below with: <Zap className="h-8 w-8" /> */}
            {/* <Image src="/traconomics-icon.svg" alt="Traconomics Logo" width={32} height={32} className="h-8 w-auto" /> */}
            <Logo />
            {/* <span className="font-extrabold text-xl font-poppins">{APP_NAME}</span> */}
          </Link>

          <nav className="hidden md:flex space-x-1 items-center">
            {NAV_ITEMS.map((item) => {
              if (item.children) {
                return (
                  <DropdownMenu key={item.label}>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className={cn(
                        desktopLinkClass,
                        pathname.startsWith(item.href) ? "text-primary" : "text-foreground/70"
                      )}>
                        {item.label}
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                      {item.children.map((child) => {
                        if (child.isSeparator) {
                          return <DropdownMenuSeparator key={Math.random()} />;
                        }
                        return (
                          <DropdownMenuItem key={child.label} asChild>
                            <Link href={child.href}>{child.label}</Link>
                          </DropdownMenuItem>
                        );
                      })}
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              }

              return (
                <Button key={item.label} variant="ghost" asChild className={cn(
                  desktopLinkClass,
                  pathname === item.href ? "text-primary" : "text-foreground/70"
                )}>
                  <Link href={item.href}>
                    {item.label}
                  </Link>
                </Button>
              );
            })}
          </nav>

          <div className="flex items-center">
            <div className="hidden md:block">
            <Button asChild className="bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-colors py-2 px-4">
                <Link href="/contact">Get a Free Quote</Link>
              </Button>
            </div>

            <div className="md:hidden">
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-full max-w-xs bg-background p-0">
                  <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                  <ScrollArea className="h-full w-full">
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-4">
                          <Link href="/" className="flex items-center space-x-2 text-primary" onClick={() => setIsMobileMenuOpen(false)}>
                              {/* To revert to the Zap icon, replace the Image component below with: <Zap className="h-7 w-7" /> */}
                              {/* <Image src="/traconomics-icon.svg" alt="Traconomics Icon" width={28} height={28} className="h-7 w-auto" /> */}
                              <Logo />
                              {/* <span className="font-bold text-lg">{APP_NAME}</span> */}
                            </Link>
                        </div>
                      <nav className="flex flex-col">
                        {NAV_ITEMS.map((item) => {
                          if (item.children) {
                            return (
                              <Accordion type="single" collapsible key={item.label} className="w-full">
                                <AccordionItem value={item.label} className="border-b-0">
                                  <AccordionTrigger className={cn(
                                    "py-2 text-base font-medium hover:no-underline",
                                    pathname.startsWith(item.href) ? "text-primary" : "text-foreground"
                                  )}>
                                    {item.label}
                                  </AccordionTrigger>
                                  <AccordionContent className="pl-4">
                                    <div className="flex flex-col space-y-1 mt-1">
                                      {item.children.map((child) => {
                                        if (child.isSeparator) {
                                          return <hr key={Math.random()} className="my-2 border-border" />;
                                        }
                                        return (
                                          <SheetClose asChild key={child.label}>
                                            <Link href={child.href} className={cn("py-2 text-muted-foreground hover:text-primary block text-base", pathname === child.href && "text-primary")}>
                                              {child.label}
                                            </Link>
                                          </SheetClose>
                                        );
                                      })}
                                    </div>
                                  </AccordionContent>
                                </AccordionItem>
                              </Accordion>
                            );
                          }
                          return (
                            <SheetClose asChild key={item.label}>
                              <Link href={item.href} className={cn(mobileLinkClass, pathname === item.href ? "text-primary" : "text-foreground")}>
                                {item.label}
                              </Link>
                            </SheetClose>
                          );
                        })}
                      </nav>
                      <SheetClose asChild>
                      <Button asChild className="w-full bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-colors py-2 px-4">
                          <Link href="/contact">Get a Free Quote</Link>
                        </Button>
                      </SheetClose>
                    </div>
                  </ScrollArea>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
