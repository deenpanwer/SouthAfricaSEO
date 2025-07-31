
import React from 'react';
import Card from '../components/ui/Card';

const PlatformsPage: React.FC = () => {
  const platforms = [
    {
      title: "Palantir Gotham",
      description: "An AI-ready operating system primarily used for defense and intelligence, aiding in decision-making for operators.",
      imageUrl: "/automation/gotham.jpg",
      link: "/platforms/gotham",
    },
    {
      title: "Palantir Foundry",
      description: "An ontology-powered operating system for enterprises, focusing on data integration, analysis, and operational workflows in commercial and civil government sectors.",
      imageUrl: "/automation/foundry.jpg",
      link: "/platforms/foundry",
    },
    {
      title: "Palantir Apollo",
      description: "A continuous delivery system that deploys, monitors, and secures software across diverse environments, including multi-cloud, on-premise, and edge devices.",
      imageUrl: "/automation/apollo.jpg",
      link: "/platforms/apollo",
    },
    {
      title: "Palantir Artificial Intelligence Platform (AIP)",
      description: "Enables the activation and control of large language models (LLMs) and other AI on private networks, integrating AI into operational decision-making.",
      imageUrl: "/automation/aip.jpg",
      link: "/platforms/aip",
    },
  ];

  return (
    <div className="container mx-auto px-6 py-24">
      <h1 className="text-5xl font-bold mb-12 text-center">Our Platforms</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {platforms.map((platform, index) => (
          <Card
            key={index}
            title={platform.title}
            description={platform.description}
            imageUrl={platform.imageUrl}
            link={platform.link}
          />
        ))}
      </div>
    </div>
  );
};

export default PlatformsPage;
