import React from 'react';
import BlogTag from './BlogTag';

interface BlogCardProps {
  title: string;
  excerpt: string;
  tags: string[];
}

const BlogCard: React.FC<BlogCardProps> = ({ title, excerpt, tags }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-6 bg-white">
      <div className="font-bold text-xl mb-2 text-gray-900">{title}</div>
      <p className="text-gray-700 text-base mb-4">
        {excerpt}
      </p>
      <div className="flex flex-wrap">
        {tags.map((tag) => (
          <BlogTag key={tag} tag={tag} />
        ))}
      </div>
    </div>
  );
};

export default BlogCard;
