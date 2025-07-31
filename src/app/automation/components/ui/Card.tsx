import React from 'react';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  link,
}) => {
  return (
    <div className="relative bg-ph-dark-gray rounded-lg overflow-hidden group transition-all duration-300 border border-ph-border hover:border-ph-accent hover:shadow-lg hover:shadow-ph-accent/20">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-ph-white">{title}</h3>
        <p className="text-ph-light-gray text-base mb-4">{description}</p>
        <a href={link} className="text-ph-accent hover:underline">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Card;