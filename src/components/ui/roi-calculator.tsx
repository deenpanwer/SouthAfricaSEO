
"use client";

import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import Link from 'next/link';
import { Button } from './button';

export const RoiCalculator: React.FC = () => {
  const [isServiceBusiness, setIsServiceBusiness] = useState(true);
  const [adSpend, setAdSpend] = useState(2500);
  const [avgSaleValue, setAvgSaleValue] = useState(1500);
  const [conversionRate, setConversionRate] = useState(5);

  const calculatedData = useMemo(() => {
    // These are simplified assumptions for demonstration purposes.
    const assumedCpc = 10;
    const clicks = adSpend / assumedCpc;
    const conversions = clicks * (conversionRate / 100);
    const revenue = conversions * avgSaleValue;
    const profit = revenue - adSpend;
    const roi = adSpend > 0 ? (profit / adSpend) * 100 : 0;

    return {
      revenue: revenue.toLocaleString('en-US', { style: 'currency', currency: 'USD' }),
      roi: roi.toFixed(0),
    };
  }, [adSpend, avgSaleValue, conversionRate, isServiceBusiness]);

  return (
    <Card className="w-full max-w-3xl mx-auto shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Estimate Your Potential ROI</CardTitle>
        <CardDescription>
          Adjust the sliders to see how strategic PPC can impact your bottom line.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-center space-x-2 mb-8">
          <Label htmlFor="business-type">E-commerce</Label>
          <Switch
            id="business-type"
            checked={isServiceBusiness}
            onCheckedChange={setIsServiceBusiness}
            aria-label="Toggle between E-commerce and Service Business"
          />
          <Label htmlFor="business-type">Service Business</Label>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <Label className="text-lg">Monthly Ad Spend</Label>
              <div className="text-2xl font-bold text-primary">${adSpend.toLocaleString()}</div>
              <Slider
                value={[adSpend]}
                onValueChange={(value) => setAdSpend(value[0])}
                min={500}
                max={50000}
                step={500}
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="avg-sale-value" className="text-lg">{isServiceBusiness ? 'Avg. Customer Value' : 'Avg. Order Value'}</Label>
              <Input
                id="avg-sale-value"
                type="number"
                value={avgSaleValue}
                onChange={(e) => setAvgSaleValue(Number(e.target.value))}
                className="mt-2 text-lg"
                placeholder="e.g., 1500"
              />
            </div>
            <div>
              <Label htmlFor="conversion-rate" className="text-lg">Lead/Sale Conversion Rate</Label>
              <div className="text-2xl font-bold text-primary">{conversionRate}%</div>
              <Slider
                value={[conversionRate]}
                onValueChange={(value) => setConversionRate(value[0])}
                min={1}
                max={20}
                step={0.5}
                className="mt-2"
              />
            </div>
          </div>

          <div className="bg-muted/50 rounded-lg p-6 flex flex-col items-center justify-center">
            <h3 className="text-lg font-medium text-muted-foreground">Estimated Monthly ROI</h3>
            <p className={`text-6xl font-extrabold ${parseFloat(calculatedData.roi) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {calculatedData.roi}%
            </p>
            <p className="text-muted-foreground mt-2">Est. Revenue: {calculatedData.revenue}</p>
            <Button size="lg" className="mt-6" asChild>
              <Link href="/contact?service=PPC-Quote">Get a Precise Quote</Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
