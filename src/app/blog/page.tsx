import React from 'react';
import BlogListSection from '@/components/sections/blog/BlogListSection';
import { getBlogPosts } from '@/lib/getBlogPosts';

const BlogPage = async () => {
  const posts = await getBlogPosts();
  return (
    <main>
      <BlogListSection posts={posts} />
    </main>
  );
};

export default BlogPage;
