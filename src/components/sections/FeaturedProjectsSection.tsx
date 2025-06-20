import React from 'react';
import ProjectCard from '@/components/ui/ProjectCard';

interface Project {
  id: string;
  imageUrl: string; // Placeholder for now
  title: string;
  tags: string[];
  caseStudyUrl: string;
  coverEmoji: string;
}

const projectsData: Project[] = [
  {
    id: 'nexus-flow-ai',
    imageUrl: '/placeholder-nexus.jpg', // Replace with actual image path or placeholder
    title: 'Nexus Flow AI – Complex Application Prototyping',
    tags: ['Full-Stack', 'Next.js', 'Node.js API', 'Architecture', 'SaaS'],
    caseStudyUrl: '/projects/nexus-flow',
    coverEmoji: '🧪',
  },
  {
    id: 'akasa-restaurant',
    imageUrl: '/placeholder-akasa.jpg', // Replace with actual image path or placeholder
    title: 'Akasa – Performance-Optimized Commercial Website',
    tags: ['Front-End', 'Performance', 'Next.js', 'Sanity CMS', 'Mobile-First'],
    caseStudyUrl: '/projects/akasa',
    coverEmoji: '🔥',
  },
];

const FeaturedProjects: React.FC = () => {
  return (
    <section className="py-12 md:py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-16 text-gray-800 dark:text-white">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
                tags={project.tags}
                caseStudyUrl={project.caseStudyUrl}
                coverEmoji={project.coverEmoji}
              />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
