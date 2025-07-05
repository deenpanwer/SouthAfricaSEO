
"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Zap, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from '@/components/ui/sheet';
import { NAV_ITEMS, APP_NAME } from '@/lib/constants.tsx';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import React from 'react';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const renderNavLinks = (isMobile = false) => {
    const mobileLinkClass = "text-base font-medium transition-colors hover:text-primary py-2 block";
    const desktopLinkClass = "text-sm font-medium transition-colors hover:text-primary hover:bg-transparent";

    return NAV_ITEMS.map((item) => {
      if (item.children) {
        if (isMobile) {
          return (
            <div key={item.label}>
              <h3 className="text-sm font-semibold text-muted-foreground pt-4 pb-2 px-2">{item.label}</h3>
              <div className="flex flex-col space-y-1">
                {item.children.map((child) => {
                  if (child.isSeparator) {
                    return <hr key={Math.random()} className="my-2 border-border" />;
                  }
                  return (
                    <SheetClose asChild key={child.label}>
                      <Link href={child.href} className={cn(mobileLinkClass, pathname === child.href ? "text-primary" : "text-foreground/80")}>
                        {child.label}
                      </Link>
                    </SheetClose>
                  );
                })}
              </div>
            </div>
          );
        }
        return (
          <DropdownMenu key={item.label}>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className={cn(
                desktopLinkClass,
                pathname.startsWith('/services') || pathname === '/pricing' ? "text-primary" : "text-foreground/70"
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

      const linkContent = (
        <Link href={item.href}>
          {item.label}
        </Link>
      );

      if (isMobile) {
        return (
          <SheetClose asChild key={item.label}>
             <Link href={item.href} className={cn(mobileLinkClass, pathname === item.href ? "text-primary" : "text-foreground/80")}>
              {item.label}
            </Link>
          </SheetClose>
        );
      }

      return (
        <Button key={item.label} variant="ghost" asChild className={cn(
          desktopLinkClass,
          pathname === item.href ? "text-primary" : "text-foreground/70"
        )}>
          {linkContent}
        </Button>
      );
    });
  };

  return (
    <header className="bg-background/80 backdrop-blur-md sticky top-0 z-50 border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors">
            <Zap className="h-8 w-8" />
            <span className="font-extrabold text-xl font-poppins">{APP_NAME}</span>
          </Link>

          <nav className="hidden md:flex space-x-1 items-center">
            {renderNavLinks(false)}
          </nav>

          <div className="hidden md:block">
            <Button asChild>
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
              <SheetContent side="right" className="w-full max-w-xs bg-background p-6">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex flex-col space-y-2">
                  <div className="flex justify-between items-center mb-4">
                     <Link href="/" className="flex items-center space-x-2 text-primary" onClick={() => setIsMobileMenuOpen(false)}>
                        <Zap className="h-7 w-7" />
                        <span className="font-bold text-lg">{APP_NAME}</span>
                      </Link>
                  </div>
                  <nav className="flex flex-col">
                    {renderNavLinks(true)}
                  </nav>
                  <SheetClose asChild>
                    <Button asChild className="w-full mt-6">
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
