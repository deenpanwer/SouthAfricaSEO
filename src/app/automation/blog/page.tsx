
import React from 'react';
import Card from '../components/ui/Card';

const BlogPage: React.FC = () => {
  const posts = [
    {
      title: "Blog Post 1",
      description: "Description for Blog Post 1.",
      imageUrl: "/automation/blog-post1.jpg",
      link: "/blog/blog-post-1",
    },
    {
      title: "Blog Post 2",
      description: "Description for Blog Post 2.",
      imageUrl: "/automation/blog-post2.jpg",
      link: "/blog/blog-post-2",
    },
    {
      title: "Blog Post 3",
      description: "Description for Blog Post 3.",
      imageUrl: "/automation/blog-post3.jpg",
      link: "/blog/blog-post-3",
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
