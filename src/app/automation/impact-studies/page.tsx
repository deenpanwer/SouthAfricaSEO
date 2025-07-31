
'use client';

import React from 'react';
import Card from '../components/ui/Card';

const ImpactStudiesPage: React.FC = () => {
  const studies = [
    {
      title: "Impact Study 1: AI in Government Operations",
      description: "Description for Impact Study 1.",
      imageUrl: "https://tse1.mm.bing.net/th/id/OIP.eUUpZVsMF8yAHi6uW44f5gHaD-?pid=Api&P=0&h=220",
      link: "/automation/impact-studies/impact-study-1",
    },
    {
      title: "Impact Study 2: Enterprise Data Integration",
      description: "Description for Impact Study 2.",
      imageUrl: "https://tse1.mm.bing.net/th/id/OIP.eUUpZVsMF8yAHi6uW44f5gHaD-?pid=Api&P=0&h=220",
      link: "/automation/impact-studies/impact-study-2",
    },
    {
      title: "Impact Study 3: AI in Defense and Security",
      description: "Description for Impact Study 3.",
      imageUrl: "https://tse1.mm.bing.net/th/id/OIP.eUUpZVsMF8yAHi6uW44f5gHaD-?pid=Api&P=0&h=220",
      link: "/automation/impact-studies/impact-study-3",
    },
  ];

  return (
    <div className="container mx-auto px-6 py-24">
      <h1 className="text-5xl font-bold mb-12 text-center">Our Impact Studies</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {studies.map((study, index) => (
          <Card
            key={index}
            title={study.title}
            description={study.description}
            imageUrl={study.imageUrl}
            link={study.link}
          />
        ))}
      </div>
    </div>
  );
};

export default ImpactStudiesPage;
