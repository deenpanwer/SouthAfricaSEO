// src/components/all-inclusive-seo/ROICalculator.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { Slider } from '@/components/ui/slider'; // Assuming a Slider component exists in ui
import { AnimatedNumber } from '@/components/ui/AnimatedNumber';

const ROICalculator: React.FC = () => {
  const [currentRevenue, setCurrentRevenue] = useState(50000);
  const [trafficIncrease, setTrafficIncrease] = useState(10); // in percentage
  const [conversionRate, setConversionRate] = useState(2); // in percentage
  const [avgOrderValue, setAvgOrderValue] = useState(100);
  const [profitMargin, setProfitMargin] = useState(30); // in percentage
  const [monthlySEOInvestment, setMonthlySEOInvestment] = useState(1000); // New slider for SEO cost

  const [calculatedROI, setCalculatedROI] = useState(0);
  const [additionalMonthlyProfit, setAdditionalMonthlyProfit] = useState(0);

  useEffect(() => {
    // --- Assumptions for simplified ROI calculation ---
    // - trafficIncrease: Direct percentage increase in current traffic.
    // - conversionRate: Overall conversion rate of new traffic.
    // - avgOrderValue: Average revenue generated per customer/order.
    // - profitMargin: Percentage of avgOrderValue that is profit.

    // 1. Estimate current traffic (assuming current revenue is from current traffic * conversion rate * AOV)
    // This is a rough back-calculation and might not be precise, but serves for the calculator's purpose.
    const currentTraffic = currentRevenue / (avgOrderValue * (conversionRate / 100));

    // 2. Calculate new traffic after SEO
    const newTraffic = currentTraffic * (1 + (trafficIncrease / 100));

    // 3. Calculate additional customers from SEO efforts
    const additionalCustomers = (newTraffic - currentTraffic) * (conversionRate / 100);

    // 4. Calculate additional monthly revenue
    const additionalRevenue = additionalCustomers * avgOrderValue;

    // 5. Calculate additional monthly profit
    const calculatedAdditionalMonthlyProfit = additionalRevenue * (profitMargin / 100);
    setAdditionalMonthlyProfit(calculatedAdditionalMonthlyProfit);

    // 6. Calculate ROI
    let roi = 0;
    if (monthlySEOInvestment > 0) {
      roi = ((calculatedAdditionalMonthlyProfit - monthlySEOInvestment) / monthlySEOInvestment) * 100;
    } else if (calculatedAdditionalMonthlyProfit > 0) {
      roi = Infinity; // Infinite ROI if profit > 0 and investment is 0
    }
    setCalculatedROI(roi);

  }, [currentRevenue, conversionRate, trafficIncrease, avgOrderValue, profitMargin, monthlySEOInvestment]);

  return (
    <section className="py-16 bg-white text-gray-900"> {/* White theme background and text */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center mb-10 tracking-tight">
          ROI Calculator: The Animated Payoff
        </h2>
        <p className="text-center text-lg text-gray-600 mb-12">
          See how an all-inclusive SEO strategy can drive significant returns for your business.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-start">
          {/* Input Sliders */}
          <div className="space-y-8 lg:col-span-2 p-6 bg-gray-50 rounded-lg shadow-inner">
            <h3 className="text-2xl font-semibold mb-6">Your Business Metrics</h3>
            <div>
              <label className="block text-base font-medium mb-3 flex justify-between">
                <span>Current Monthly Revenue</span>
                <span className="font-bold text-blue-600">${currentRevenue.toLocaleString()}</span>
              </label>
              <Slider
                min={1000}
                max={200000}
                step={1000}
                value={[currentRevenue]}
                onValueChange={(val) => setCurrentRevenue(val[0])}
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-base font-medium mb-3 flex justify-between">
                <span>Current Conversion Rate</span>
                <span className="font-bold text-blue-600">{conversionRate}%</span>
              </label>
              <Slider
                min={0.1}
                max={10}
                step={0.1}
                value={[conversionRate]}
                onValueChange={(val) => setConversionRate(val[0])}
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-base font-medium mb-3 flex justify-between">
                <span>Projected Traffic Increase from SEO</span>
                <span className="font-bold text-blue-600">{trafficIncrease}%</span>
              </label>
              <Slider
                min={0}
                max={100}
                step={1}
                value={[trafficIncrease]}
                onValueChange={(val) => setTrafficIncrease(val[0])}
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-base font-medium mb-3 flex justify-between">
                <span>Average Order Value / Customer Value</span>
                <span className="font-bold text-blue-600">${avgOrderValue.toLocaleString()}</span>
              </label>
              <Slider
                min={10}
                max={1000}
                step={10}
                value={[avgOrderValue]}
                onValueChange={(val) => setAvgOrderValue(val[0])}
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-base font-medium mb-3 flex justify-between">
                <span>Profit Margin</span>
                <span className="font-bold text-blue-600">{profitMargin}%</span>
              </label>
              <Slider
                min={5}
                max={90}
                step={1}
                value={[profitMargin]}
                onValueChange={(val) => setProfitMargin(val[0])}
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-base font-medium mb-3 flex justify-between">
                <span>Monthly SEO Investment</span>
                <span className="font-bold text-blue-600">${monthlySEOInvestment.toLocaleString()}</span>
              </label>
              <Slider
                min={100}
                max={5000}
                step={100}
                value={[monthlySEOInvestment]}
                onValueChange={(val) => setMonthlySEOInvestment(val[0])}
                className="w-full"
              />
            </div>
          </div>

          {/* Output Display */}
          <div className="lg:col-span-1 flex flex-col items-center justify-center p-8 bg-blue-50 border border-blue-200 rounded-lg shadow-xl h-full min-h-[300px]">
            <h3 className="text-xl font-semibold mb-4 text-blue-800">Projected Additional Monthly Profit</h3>
            <div className="text-5xl md:text-6xl font-extrabold text-blue-600 mb-6">
              $<AnimatedNumber value={additionalMonthlyProfit} decimals={0} />
            </div>

            <h3 className="text-xl font-semibold mb-4 text-blue-800">Projected ROI</h3>
            <div className="text-5xl md:text-6xl font-extrabold text-green-600">
              <AnimatedNumber value={calculatedROI} decimals={0} suffix="%" />
            </div>
            <p className="mt-8 text-center text-gray-700">
              This calculation provides an estimate. For a tailored ROI projection, let's discuss your specific business goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
