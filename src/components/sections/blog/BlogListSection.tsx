import React from 'react';
import BlogCard from '@/components/ui/BlogCard';
import { BlogPost } from '@/lib/getBlogPosts'; // Adjusted path

interface BlogListSectionProps {
  posts: BlogPost[];
}

const BlogListSection: React.FC<BlogListSectionProps> = ({ posts }) => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard
              key={post.slug} // Using slug as key, assuming it's unique
              title={post.title}
              excerpt={post.excerpt}
              tags={post.tags}
              // Assuming BlogCard can take a slug prop for navigation, if not, it can be added
              // slug={post.slug} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogListSection;
