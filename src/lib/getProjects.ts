import type { Project } from './types';

// TODO: Implement actual data fetching logic, e.g., from Sanity
export const getFeaturedProjects = async (): Promise<Project[]> => {
  console.log('Fetching featured projects... (using temporary hardcoded data)');
  return [
    {
      title: "Nexus Flow AI",
      subtitle: "Modular chatbot prototyping platform", // Derived from description
      slug: { current: "nexus-flow-ai", _type: "slug" },
      overview: [{
        _key: 'nexusOverview1', // Added _key
        _type: 'block',
        style: 'normal',
        children: [{
          _type: 'span',
          text: "Modular chatbot prototyping platform with real-time role-based controls and scalable architecture."
        }],
        markDefs: []
      }],
      role: "Lead Architect & Developer", // Placeholder
      techStack: ["Next.js", "Node.js", "Architecture", "SaaS", "TypeScript"], // Mapped from tags
      features: [], // Placeholder - empty array
      galleryImages: [{
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: "/images/nexus.jpg" // Using path as placeholder _ref
        },
        alt: "Nexus Flow AI project image",
        _key: 'nexusImage1'
      }],
      challenges: [], // Placeholder - empty array
      coverEmoji: "🧠",
      coverTitle: "Neural Workflow",
    },
    {
      title: "Akasa Restaurant Website",
      subtitle: "Performance-optimized commercial website", // Derived from description
      slug: { current: "akasa-restaurant", _type: "slug" },
      overview: [{
        _key: 'akasaOverview1', // Added _key
        _type: 'block',
        style: 'normal',
        children: [{
          _type: 'span',
          text: "Performance-optimized commercial website for a fine-dining brand with CMS integration and mobile-first design."
        }],
        markDefs: []
      }],
      role: "Frontend Developer & Performance Lead", // Placeholder
      techStack: ["Performance", "Next.js", "Sanity CMS", "Mobile-First", "Tailwind"], // Mapped from tags
      features: [], // Placeholder - empty array
      galleryImages: [{
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: "/images/akasa.jpg" // Using path as placeholder _ref
        },
        alt: "Akasa Restaurant project image",
        _key: 'akasaImage1'
      }],
      challenges: [], // Placeholder - empty array
      coverEmoji: "🔥",
      coverTitle: "Luxury Cuisine",
    },
  ];
};

// Example of fetching all projects (you might need a separate function for this)
export const getAllProjects = async (): Promise<Project[]> => {
  console.log('Fetching all projects... (using temporary hardcoded data)');
  // For now, getAllProjects returns the same as getFeaturedProjects
  // This will be replaced with actual data fetching logic later
  return getFeaturedProjects();
};

export const getProjectBySlug = async (slug: string): Promise<Project | null> => {
  console.log(`Fetching project by slug: ${slug} (using temporary hardcoded data)`);
  const projects = await getFeaturedProjects();
  const project = projects.find(p => p.slug.current === slug);
  return project || null;
};
