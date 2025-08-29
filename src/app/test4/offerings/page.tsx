
'use client';

import React from 'react';
import Card from '../components/ui/Card';

const OfferingsPage: React.FC = () => {
  const offerings = [
    {
      title: "Anti-Money Laundering Solutions",
      description: "Leverage AI to detect and prevent financial crime with advanced analytics.",
      imageUrl: "https://tse1.mm.bing.net/th/id/OIP.oa9ol7O9gxstuj4vjSIumQHaDt?pid=Api&P=0&h=220",
      link: "/test4/offerings/anti-money-laundering",
    },
    {
      title: "Applied Customer Intelligence",
      description: "Gain deep insights into customer behavior to drive personalized experiences and growth.",
      imageUrl: "https://tse2.mm.bing.net/th/id/OIP.hEjERiC_UYCh-zBd5vKq_gHaES?pid=Api&P=0&h=220",
      link: "/tes4/offerings/customer-intelligence",
    },
    {
      title: "Artificial Intelligence & Machine Learning",
      description: "Develop and deploy cutting-edge AI/ML models for various business needs.",
      imageUrl: "https://tse3.mm.bing.net/th/id/OIP.EF8YD7S1G8IiRiG-1hDhCwHaEJ?pid=Api&P=0&h=220",
      link: "/test4/offerings/ai-ml",
    },
    {
      title: "Data Protection & Privacy",
      description: "Secure your sensitive data and ensure compliance with robust data protection solutions.",
      imageUrl: "https://tse4.mm.bing.net/th/id/OIP.3QUIDhMcB_DnCesu5O-ICAHaE8?pid=Api&P=0&h=220",
      link: "/test4/offerings/data-protection",
    },
    {
      title: "Edge AI Solutions",
      description: "Bring AI capabilities to the edge for real-time processing and decision-making.",
      imageUrl: "https://tse2.mm.bing.net/th/id/OIP.zRT6U1MVkldJNL0D7WNAyQHaDe?pid=Api&P=0&h=220",
      link: "/test4/offerings/edge-ai",
    },
    {
      title: "Supply Chain Optimization",
      description: "Optimize your supply chain with AI-driven forecasting, logistics, and risk management.",
      imageUrl: "https://tse2.mm.bing.net/th/id/OIP.HfmPxFwaMFRZxFTsLUjaLQHaD4?pid=Api&P=0&h=220",
      link: "/test4/offerings/supply-chain",
    },
    {
      title: "Government Financial Management",
      description: "Modernize financial operations for government agencies with intelligent automation.",
      imageUrl: "https://tse2.mm.bing.net/th/id/OIP.gwuBg8_Z-RSjdKmh9FFCZAHaEo?pid=Api&P=0&h=220",
      link: "/test4/offerings/gov-finance",
    },
    {
      title: "Hospital Operations & Healthcare Analytics",
      description: "Improve hospital efficiency and patient outcomes with advanced analytics and operational insights.",
      imageUrl: "https://tse3.mm.bing.net/th/id/OIP.w-LXnBWpuzxJMPOfbMCw7AHaEK?pid=Api&P=0&h=220",
      link: "/test4/offerings/hospital-ops",
    },
  ];

  return (
    <div className="container mx-auto px-6 py-24">
      <h1 className="text-5xl font-bold mb-12 text-center">Our Offerings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {offerings.map((offering, index) => (
          <Card
            key={index}
            title={offering.title}
            description={offering.description}
            imageUrl={offering.imageUrl}
            link={offering.link}
          />
        ))}
      </div>
    </div>
  );
};

export default OfferingsPage;
