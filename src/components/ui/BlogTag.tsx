import React from 'react';

interface BlogTagProps {
  tag: string;
}

const BlogTag: React.FC<BlogTagProps> = ({ tag }) => {
  return (
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
      #{tag}
    </span>
  );
};

export default BlogTag;
