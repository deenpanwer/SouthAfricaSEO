"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image"; // Assuming Next.js Image component for optimization

type CardItem = {
  title: string;
  src?: string; // Image source is now optional
  content?: React.ReactNode; // New: Text content is now optional
};

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: CardItem;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-lg relative bg-white border border-gray-200 shadow-sm overflow-hidden h-60 md:h-80 w-full transition-all duration-300 ease-out flex flex-col justify-between p-4", // Light theme adjustments
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
    >
      {card.src && (
        <Image
          src={card.src}
          alt={card.title}
          className="object-cover absolute inset-0 -z-10" // Make image background
          layout="fill"
        />
      )}
      
      <div
        className={cn(
          "absolute inset-0 transition-opacity duration-300",
          card.src ? "bg-black/50" : "bg-transparent", // Overlay for image, transparent for text cards
          hovered === index ? "opacity-100" : (card.src ? "opacity-0" : "opacity-100") // Overlay shows on hover for image, always for text
        )}
      >
        {card.src ? ( // If image card, title goes to bottom
            <div className="absolute inset-x-0 bottom-0 py-8 px-4">
                <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
                    {card.title}
                </div>
            </div>
        ) : ( // If text card, title is at top
            <div className="flex flex-col h-full justify-start py-4 px-2">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
                    {card.title}
                </h3>
                <div className="text-base text-gray-700">
                    {card.content}
                </div>
            </div>
        )}
      </div>
    </div>
  )
);

Card.displayName = "Card";

export function FocusCards({ cards }: { cards: CardItem[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto w-full"> {/* Updated grid layout */}
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
