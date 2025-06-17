// Define a type for our blog posts
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  tags: string[];
  author: string;
  publishedAt: string; // ISO date string
}

const mockBlogPosts: BlogPost[] = [
  {
    slug: 'exploring-modern-javascript-frameworks',
    title: 'Exploring Modern JavaScript Frameworks in 2025',
    excerpt: 'A comparative look at React, Vue, Svelte, and SolidJS, highlighting their strengths and use cases.',
    body: 'In the ever-evolving landscape of web development, JavaScript frameworks continue to play a pivotal role. This post dives deep into four popular choices: React, known for its vast ecosystem and component-based architecture; Vue, praised for its progressive framework and ease of integration; Svelte, which compiles components to highly efficient imperative code; and SolidJS, offering fine-grained reactivity and performance. We will compare their learning curves, performance benchmarks, community support, and suitability for different project types, helping you make an informed decision for your next venture.',
    tags: ['JavaScript', 'React', 'Vue', 'Svelte', 'SolidJS', 'Web Development'],
    author: 'Alex Johnson',
    publishedAt: '2025-05-20T10:00:00Z',
  },
  {
    slug: 'mastering-tailwind-css-for-rapid-ui-development',
    title: 'Mastering Tailwind CSS for Rapid UI Development',
    excerpt: 'Learn how to leverage Tailwind CSS to build custom designs quickly without writing custom CSS.',
    body: 'Tailwind CSS has revolutionized the way developers approach styling. This utility-first CSS framework allows for rapid UI development by providing a comprehensive set of pre-designed utility classes. This article covers the core concepts of Tailwind, including its configuration, responsive design features, dark mode support, and how to extend it with custom utilities. We will walk through practical examples to demonstrate how you can build complex and beautiful user interfaces efficiently, directly in your HTML.',
    tags: ['TailwindCSS', 'CSS', 'Frontend', 'UI Design'],
    author: 'Sarah Miller',
    publishedAt: '2025-06-01T14:30:00Z',
  },
  {
    slug: 'the-rise-of-serverless-architectures',
    title: 'The Rise of Serverless Architectures: Benefits and Challenges',
    excerpt: 'An overview of serverless computing, its advantages like scalability and cost-efficiency, and potential drawbacks.',
    body: 'Serverless architecture is transforming how applications are built and deployed. By abstracting away the underlying infrastructure, developers can focus solely on writing code. This post explores the key benefits of serverless, such as automatic scaling, pay-per-use pricing, and reduced operational overhead. However, it also delves into the challenges, including vendor lock-in, cold starts, and debugging complexities. We will examine popular serverless platforms like AWS Lambda, Azure Functions, and Google Cloud Functions, providing insights into when and how to adopt a serverless approach effectively.',
    tags: ['Serverless', 'Cloud Computing', 'AWS', 'Azure', 'GCP', 'Architecture'],
    author: 'David Lee',
    publishedAt: '2025-06-10T09:15:00Z',
  },
];

export async function getBlogPosts(): Promise<BlogPost[]> {
  // In a real application, this would fetch data from a CMS or database.
  // For now, we return the hardcoded mock data.
  return Promise.resolve(mockBlogPosts);
}
