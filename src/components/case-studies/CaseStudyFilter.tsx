'use client';

import { useState, useEffect } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface CaseStudyFilterProps {
  services: string[];
  industries: string[];
  onFilterChange: (filters: { service: string; industry: string; sort: string }) => void;
}

export function CaseStudyFilter({ services, industries, onFilterChange }: CaseStudyFilterProps) {
  const [service, setService] = useState('all');
  const [industry, setIndustry] = useState('all');
  const [sort, setSort] = useState('default');

  useEffect(() => {
    onFilterChange({ service, industry, sort });
  }, [service, industry, sort, onFilterChange]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <div>
        <label htmlFor="service-filter" className="block text-sm font-medium text-gray-700 mb-1">Service</label>
        <Select value={service} onValueChange={setService}>
          <SelectTrigger id="service-filter">
            <SelectValue placeholder="Filter by service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Services</SelectItem>
            {services.map((s) => (
              <SelectItem key={s} value={s}>{s}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <label htmlFor="industry-filter" className="block text-sm font-medium text-gray-700 mb-1">Industry</label>
        <Select value={industry} onValueChange={setIndustry}>
          <SelectTrigger id="industry-filter">
            <SelectValue placeholder="Filter by industry" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Industries</SelectItem>
            {industries.map((i) => (
              <SelectItem key={i} value={i}>{i}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <label htmlFor="sort-order" className="block text-sm font-medium text-gray-700 mb-1">Sort by</label>
        <Select value={sort} onValueChange={setSort}>
          <SelectTrigger id="sort-order">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="default">Default</SelectItem>
            <SelectItem value="clientName-asc">Client Name (A-Z)</SelectItem>
            <SelectItem value="clientName-desc">Client Name (Z-A)</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
