'use client';

import React, { useState, useEffect, useCallback } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket } from 'lucide-react';

const ExitIntentModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  const handleMouseLeave = useCallback((e: MouseEvent) => {
    if (!hasTriggered && e.clientY < 50 && e.relatedTarget === null) {
      setIsOpen(true);
      setHasTriggered(true);
      document.removeEventListener('mouseleave', handleMouseLeave);
    }
  }, [hasTriggered]);

  useEffect(() => {
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [handleMouseLeave]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Exit Intent Form Submitted!');
    alert("Thanks! We'll send your free SEO analysis shortly.");
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent
            onEscapeKeyDown={() => setIsOpen(false)}
            onPointerDownOutside={() => setIsOpen(false)}
            className="max-w-md w-full p-0 border-none rounded-lg shadow-2xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="relative bg-white rounded-lg"
            >
              <div className="p-8 text-center">
                <DialogHeader className="flex flex-col items-center">
                  <div className="p-3 bg-blue-100 rounded-full mb-4">
                    <Rocket className="text-blue-600" size={28} />
                  </div>
                  <DialogTitle className="text-2xl font-bold text-gray-900">
                    Wait! Before You Go...
                  </DialogTitle>
                  <DialogDescription className="text-base text-gray-600 mt-2">
                    Get a{" "}
                    <span className="font-semibold text-blue-600">
                      FREE AI-powered SEO Analysis
                    </span>
                    . No strings attached.
                  </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div className="relative">
                    <Label htmlFor="exit-email" className="sr-only">
                      Your Email
                    </Label>
                    <Input
                      type="email"
                      id="exit-email"
                      placeholder="your.email@example.com"
                      className="w-full p-3 text-base text-gray-800 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 placeholder:text-gray-400"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow-sm transform hover:scale-102 transition-transform duration-200"
                  >
                    Claim My Free Analysis!
                  </Button>
                </form>
              </div>
            </motion.div>
          </DialogContent>
        </Dialog>
      )}
    </AnimatePresence>
  );
};

export default ExitIntentModal;
