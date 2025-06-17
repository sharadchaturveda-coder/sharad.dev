import React from 'react';
import BlogTag from './BlogTag'; // Assuming BlogTag is in the same directory

interface BlogMetaProps {
  author: string;
  date: string;
  tags: string[];
}

const BlogMeta: React.FC<BlogMetaProps> = ({ author, date, tags }) => {
  return (
    <div className="text-sm text-gray-600">
      <p>By {author} on {new Date(date).toLocaleDateString()}</p>
      <div className="mt-2">
        {tags.map((tag) => (
          <BlogTag key={tag} tag={tag} />
        ))}
      </div>
    </div>
  );
};

export default BlogMeta;
