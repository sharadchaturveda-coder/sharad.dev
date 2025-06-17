import React from 'react';

interface BlogPostBodyProps {
  title: string;
  body: string;
  // metadata?: any; // Optional metadata, not used for now
}

const BlogPostBody: React.FC<BlogPostBodyProps> = ({ title, body }) => {
  return (
    <article className="prose lg:prose-xl max-w-none">
      <header>
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
      </header>
      <section className="mt-8">
        <p>{body}</p>
      </section>
    </article>
  );
};

export default BlogPostBody;
