import React from 'react';

export const FloatingQuoteBar = () => {
  return (
    <section className="relative z-20 mb-16 px-4 md:px-12">
      <div className="glass-effect rounded-lg p-6 md:p-8 max-w-5xl mx-auto shadow-xl border border-ph-border flex items-center justify-center">
        <p className="text-lg md:text-xl italic text-ph-light-gray text-center">
          "The future of Pakistan is intertwined with its mastery of artificial intelligence."
        </p>
      </div>
    </section>
  );
};
