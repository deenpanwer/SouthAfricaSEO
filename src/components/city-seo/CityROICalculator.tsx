"use client";

import React, { useState, useMemo, Suspense } from 'react';
// import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';

// const DynamicCityROICalculatorScene = dynamic(() => import('./CityROICalculatorScene'), { ssr: false });
import CityROICalculatorPlain3D from './CityROICalculatorPlain3D';

export function CityROICalculator({ cityName }: { cityName: string }) {
  const [monthlyVisitors, setMonthlyVisitors] = useState(1000);
  const [conversionRate, setConversionRate] = useState(3);
  const [avgCustomerValue, setAvgCustomerValue] = useState(500);

  const SEO_IMPROVEMENT = 1.5; // 50% increase

  const { currentRevenue, projectedRevenue, monthlyROI } = useMemo(() => {
    const currentLeads = (monthlyVisitors * conversionRate) / 100;
    const currentRevenue = currentLeads * avgCustomerValue;

    const projectedVisitors = monthlyVisitors * SEO_IMPROVEMENT;
    const projectedLeads = (projectedVisitors * conversionRate) / 100;
    const projectedRevenue = projectedLeads * avgCustomerValue;

    const monthlyROI = projectedRevenue - currentRevenue;

    return { currentRevenue, projectedRevenue, monthlyROI };
  }, [monthlyVisitors, conversionRate, avgCustomerValue]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value);
  };

  return (
    <section className="relative py-12 md:py-20 bg-gray-800 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
            <CityROICalculatorPlain3D />
        </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Calculate Your <span className="text-green-500">{cityName}</span> SEO ROI
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            Use the sliders to see the potential financial impact of a powerful SEO strategy.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12">
          <div className="space-y-8 p-6 bg-gray-900/50 rounded-lg backdrop-blur-sm">
            <div>
              <label className="font-semibold">Monthly Website Visitors: <span className='text-green-400'>{monthlyVisitors.toLocaleString()}</span></label>
              <Slider defaultValue={[1000]} value={[monthlyVisitors]} onValueChange={([val]) => setMonthlyVisitors(val)} max={10000} step={100} className="mt-2" />
            </div>
            <div>
              <label className="font-semibold">Lead Conversion Rate: <span className='text-green-400'>{conversionRate}%</span></label>
              <Slider defaultValue={[3]} value={[conversionRate]} onValueChange={([val]) => setConversionRate(val)} max={20} step={0.5} className="mt-2" />
            </div>
            <div>
              <label className="font-semibold">Average Customer Value: <span className='text-green-400'>{formatCurrency(avgCustomerValue)}</span></label>
              <Slider defaultValue={[500]} value={[avgCustomerValue]} onValueChange={([val]) => setAvgCustomerValue(val)} max={5000} step={50} className="mt-2" />
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-green-600/80 p-8 rounded-lg text-center flex flex-col justify-center backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-2">Projected Monthly Revenue</h3>
            <motion.p 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl font-bold text-white mb-6">
                {formatCurrency(projectedRevenue)}
            </motion.p>
            <h4 className="text-xl font-semibold mb-1">Estimated Monthly ROI</h4>
            <motion.p 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl font-bold text-yellow-300">
                +{formatCurrency(monthlyROI)}
            </motion.p>
            <p className="text-sm text-green-100 mt-4">Based on a projected 50% increase in traffic from our SEO services.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
