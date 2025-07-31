'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import { CaseStudyCard } from '@/components/case-studies/CaseStudyCard';
import { CaseStudyFilter } from '@/components/case-studies/CaseStudyFilter';
import type { CaseStudy } from '@/types';
import { Award } from 'lucide-react';

interface CaseStudiesListProps {
  initialCaseStudies: CaseStudy[];
  services: string[];
  industries: string[];
}

export function CaseStudiesList({ initialCaseStudies, services, industries }: CaseStudiesListProps) {
  const [serviceFilter, setServiceFilter] = useState('all');
  const [industryFilter, setIndustryFilter] = useState('all');
  const [sortOrder, setSortOrder] = useState('default');

  const handleFilterChange = useCallback((filters: { service: string; industry: string; sort: string }) => {
    setServiceFilter(filters.service);
    setIndustryFilter(filters.industry);
    setSortOrder(filters.sort);
  }, []);

  const filteredCaseStudies = useMemo(() => {
    let updatedCaseStudies = [...initialCaseStudies];

    if (serviceFilter !== 'all') {
      updatedCaseStudies = updatedCaseStudies.filter(cs => cs.services.includes(serviceFilter));
    }

    if (industryFilter !== 'all') {
      updatedCaseStudies = updatedCaseStudies.filter(cs => cs.industry === industryFilter);
    }

    if (sortOrder === 'clientName-asc') {
      updatedCaseStudies.sort((a, b) => a.clientName.localeCompare(b.clientName));
    } else if (sortOrder === 'clientName-desc') {
      updatedCaseStudies.sort((a, b) => b.clientName.localeCompare(a.clientName));
    }

    return updatedCaseStudies;
  }, [initialCaseStudies, serviceFilter, industryFilter, sortOrder]);

  return (
    <div>
      <CaseStudyFilter services={services} industries={industries} onFilterChange={handleFilterChange} />
      {filteredCaseStudies.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {console.log("Filtered Case Studies:", filteredCaseStudies.map(cs => cs.slug))}
          {filteredCaseStudies.map((cs) => (
            <CaseStudyCard key={cs.slug} caseStudy={cs} />
          ))}
        </div>
      ) : (
        <section className="text-center py-16 text-muted-foreground">
          <Award className="h-12 w-12 mx-auto mb-4" />
          <p className="text-xl">No case studies match the selected filters.</p>
        </section>
      )}
    </div>
  );
}
