"use client";

import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { motion, AnimatePresence } from 'framer-motion';

interface CalendlyModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export const CalendlyModal: React.FC<CalendlyModalProps> = ({ isOpen, onOpenChange }) => {
  const calendlyUrl = "https://calendly.com/kaayfkhan/discovery-call";

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
          <DialogContent
            onEscapeKeyDown={() => onOpenChange(false)}
            onPointerDownOutside={() => onOpenChange(false)}
            className="fixed inset-0 max-w-full h-full w-full p-0 border-none rounded-none shadow-none overflow-y-auto flex flex-col translate-x-0 translate-y-0 left-0 top-0 sm:rounded-none"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="relative bg-white rounded-none flex flex-col flex-grow h-full w-full"
            >
              <DialogHeader className="p-4 border-b flex-shrink-0">
                <DialogTitle className="text-lg font-medium text-gray-900">Schedule Your Free Consultation</DialogTitle>
                <DialogDescription className="text-sm text-gray-500">
                  Choose a time that works best for you.
                </DialogDescription>
              </DialogHeader>
              <div className="flex-grow w-full h-full">
                <iframe
                  src={calendlyUrl}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  title="Calendly scheduling"
                ></iframe>
              </div>
            </motion.div>
          </DialogContent>
        </Dialog>
      )}
    </AnimatePresence>
  );
};
