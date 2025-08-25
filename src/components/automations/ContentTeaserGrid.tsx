"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ContentTeaserGridProps {
  initialContentItems: any[];
}

export const ContentTeaserGrid = ({ initialContentItems }: ContentTeaserGridProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <section className="py-20 px-6 md:px-12 bg-ph-dark-gray">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          Featured Insights & Analysis
        </h2>
        <Slider {...settings}>
          {initialContentItems.map((item, index) => (
            <div key={index} className="px-2">
              <motion.div
                className="bg-card rounded-lg shadow-lg border border-ph-border overflow-hidden flex flex-col h-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={item.link} className="flex flex-col h-full">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6 flex flex-col flex-grow">
                    <span className="text-sm font-semibold text-primary uppercase mb-2 block">
                      {item.type}
                    </span>
                    <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-ph-light-gray text-sm line-clamp-3 h-16 mb-4 flex-grow">
                      {item.description}
                    </p>
                    <span className="mt-auto inline-block text-primary hover:text-primary/80 transition-colors text-sm font-medium">
                      Read More &rarr;
                    </span>
                  </div>
                </Link>
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};