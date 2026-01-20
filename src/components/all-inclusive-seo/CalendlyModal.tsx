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
  const calendlyUrl = "https://calendly.com/your-username/30min"; // Placeholder URL

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
          <DialogContent
            onEscapeKeyDown={() => onOpenChange(false)}
            onPointerDownOutside={() => onOpenChange(false)}
            className="max-w-4xl w-full p-0 border-none rounded-lg shadow-2xl overflow-hidden"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="relative bg-white rounded-lg h-[70vh] md:h-[80vh]"
            >
              <DialogHeader className="p-4 border-b">
                <DialogTitle className="text-lg font-medium text-gray-900">Schedule Your Free Consultation</DialogTitle>
                <DialogDescription className="text-sm text-gray-500">
                  Choose a time that works best for you.
                </DialogDescription>
              </DialogHeader>
              <div className="w-full h-full">
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