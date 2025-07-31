import React from 'react';
import Card from '../components/ui/Card';

const OfferingsPage: React.FC = () => {
  const offerings = [
    {
      title: "Anti-Money Laundering Solutions",
      description: "Leverage AI to detect and prevent financial crime with advanced analytics.",
      imageUrl: "/automation/aml.jpg",
      link: "/offerings/anti-money-laundering",
    },
    {
      title: "Applied Customer Intelligence",
      description: "Gain deep insights into customer behavior to drive personalized experiences and growth.",
      imageUrl: "/automation/customer-intelligence.jpg",
      link: "/offerings/customer-intelligence",
    },
    {
      title: "Artificial Intelligence & Machine Learning",
      description: "Develop and deploy cutting-edge AI/ML models for various business needs.",
      imageUrl: "/automation/ai-ml.jpg",
      link: "/offerings/ai-ml",
    },
    {
      title: "Data Protection & Privacy",
      description: "Secure your sensitive data and ensure compliance with robust data protection solutions.",
      imageUrl: "/automation/data-protection.jpg",
      link: "/offerings/data-protection",
    },
    {
      title: "Edge AI Solutions",
      description: "Bring AI capabilities to the edge for real-time processing and decision-making.",
      imageUrl: "/automation/edge-ai.jpg",
      link: "/offerings/edge-ai",
    },
    {
      title: "Supply Chain Optimization",
      description: "Optimize your supply chain with AI-driven forecasting, logistics, and risk management.",
      imageUrl: "/automation/supply-chain.jpg",
      link: "/offerings/supply-chain",
    },
    {
      title: "Government Financial Management",
      description: "Modernize financial operations for government agencies with intelligent automation.",
      imageUrl: "/automation/gov-finance.jpg",
      link: "/offerings/gov-finance",
    },
    {
      title: "Hospital Operations & Healthcare Analytics",
      description: "Improve hospital efficiency and patient outcomes with advanced analytics and operational insights.",
      imageUrl: "/automation/hospital-ops.jpg",
      link: "/offerings/hospital-ops",
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