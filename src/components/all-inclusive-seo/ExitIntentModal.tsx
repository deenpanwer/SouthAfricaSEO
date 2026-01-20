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
import { Rocket, Loader2 } from 'lucide-react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { useToast } from '@/hooks/use-toast';

type FormValues = {
  email: string;
};

async function submitToSheet(data: FormValues): Promise<{ success: boolean; message: string }> {
  try {
    const response = await fetch('https://sheetdb.io/api/v1/rsdd3ypenh4uu', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "Email Address": data.email,
        "Form Type": "All Inclusive SEO Exit Intent",
        "Timestamp": new Date().toISOString()
      }),
    });

    if (response.ok) {
      return { success: true, message: "Thanks! We'll send your free SEO analysis shortly." };
    } else {
      const errorText = await response.text();
      console.error("SheetDB submission failed:", response.status, errorText);
      return { success: false, message: `Submission failed. Status: ${response.status}.` };
    }
  } catch (error) {
    console.error("Error submitting to SheetDB:", error);
    return { success: false, message: "An unexpected error occurred." };
  }
}

const ExitIntentModal = ({ onFormSuccess }: { onFormSuccess: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, reset } = useForm<FormValues>();

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

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    const response = await submitToSheet(data);
    setIsLoading(false);

    if (response.success) {
      toast({
        title: "Success!",
        description: response.message,
        variant: "default",
      });
      reset();
      setIsOpen(false);
      onFormSuccess(); // Trigger Calendly modal
    } else {
      toast({
        title: "Error",
        description: response.message,
        variant: "destructive",
      });
    }
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

                <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
                  <div className="relative">
                    <Label htmlFor="exit-email" className="sr-only">
                      Your Email
                    </Label>
                    <Input
                      id="exit-email"
                      placeholder="your.email@example.com"
                      {...register("email")}
                      className="w-full p-3 text-base text-gray-800 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 placeholder:text-gray-400"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow-sm transform hover:scale-102 transition-transform duration-200"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        "Claim My Free Analysis!"
                      )}
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