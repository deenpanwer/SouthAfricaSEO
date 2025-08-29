'use client';

import React from 'react';
import Card from '../components/ui/Card';

const BlogPage: React.FC = () => {
  const posts = [
    {
      title: "Blog Post 1: The Future of AI in Pakistan",
      description: "Description for Blog Post 1.",
      imageUrl: "https://tse1.mm.bing.net/th/id/OIP.eUUpZVsMF8yAHi6uW44f5gHaD-?pid=Api&P=0&h=220",
      link: "/test4/blog/blog-post-1",
    },
    {
      title: "Blog Post 2: Ethical AI and Its Implications",
      description: "Description for Blog Post 2.",
      imageUrl: "https://tse1.mm.bing.net/th/id/OIP.eUUpZVsMF8yAHi6uW44f5gHaD-?pid=Api&P=0&h=220",
      link: "/test4/blog/blog-post-2",
    },
    {
      title: "Blog Post 3: AI in Action - Real-World Applications",
      description: "Description for Blog Post 3.",
      imageUrl: "https://tse1.mm.bing.net/th/id/OIP.eUUpZVsMF8yAHi6uW44f5gHaD-?pid=Api&P=0&h=220",
      link: "/test4/blog/blog-post-3",
    },
  ];

  return (
    <div className="container mx-auto px-6 py-24">
      <h1 className="text-5xl font-bold mb-12 text-center">Our Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <Card
            key={index}
            title={post.title}
            description={post.description}
            imageUrl={post.imageUrl}
            link={post.link}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;