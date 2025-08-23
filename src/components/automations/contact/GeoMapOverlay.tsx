"use client";

import React from 'react';
import { motion } from 'framer-motion';

export const GeoMapOverlay = () => {
  return (
    <section className="relative h-96 bg-black overflow-hidden rounded-lg border border-ph-border shadow-lg">
      {/* Placeholder for a stylized map or geo-defense overlay */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: 'url(/images/automations/map-overlay.png)' }} // Placeholder image
        initial={{ opacity: 0, scale: 1.1 }}
        whileInView={{ opacity: 0.3, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.5 }}
      />
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <h2 className="text-4xl font-bold text-white text-center drop-shadow-lg">
          Pakistan: Our Strategic Hub
        </h2>
      </div>
    </section>
  );
};
