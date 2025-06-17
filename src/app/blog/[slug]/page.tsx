import React from 'react';
import { notFound } from 'next/navigation';
import BlogMeta from '@/components/ui/BlogMeta';
import BlogPostBody from '@/components/sections/blog/BlogPostBody';
import { getBlogPosts, BlogPost } from '@/lib/getBlogPosts';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BlogPostPage = async (props: any) => {
  const { slug } = props.params;
  const posts = await getBlogPosts();
  const post = posts.find((p: BlogPost) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <BlogMeta author={post.author} date={post.publishedAt} tags={post.tags} />
      <main className="mt-8">
        <BlogPostBody title={post.title} body={post.body} />
      </main>
    </div>
  );
};

export default BlogPostPage;

// Optional: Generate static paths if you want to pre-render these pages at build time
// export async function generateStaticParams() {
//   const posts = await getBlogPosts();
//   return posts.map((post) => ({
//     slug: post.slug,
//   }));
// }
